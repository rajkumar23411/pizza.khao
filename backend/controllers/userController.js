const User = require("../models/user");
const sendToken = require("../utils/jwt");
const CustomErrorHandler = require("../middlewares/CustomErrorHandler");
const generateOTP = require("../utils/generateOTP");
const sendMsg = require("../utils/sendMsg");

const userController = {
  async register(req, res, next) {
    try {
      const { firstname, lastname, password, contact, email } = req.body;

      if (!firstname || !lastname || !password || !contact || !email) {
        return next(CustomErrorHandler.required("All fields are required"));
      }
      // check wheather email is taken or not
      const isContactTaken = await User.findOne({ contact });

      if (isContactTaken) {
        return next(
          CustomErrorHandler.AlreadyExists("This number is already taken")
        );
      }

      const user = await User.create({
        firstname,
        lastname,
        password,
        email,
        contact,
      });

      sendToken(user, 201, res);
    } catch (error) {
      console.log(error);
    }
  },

  async login(req, res, next) {
    try {
      const { contact, password } = req.body;

      if (!contact || !password) {
        return next(CustomErrorHandler.required("All fields are required"));
      }

      const user = await User.findOne({ contact }).select("+password");

      if (!user) {
        return next(CustomErrorHandler.notFound("User not found"));
      }

      const isPasswordMatched = await user.comparePassword(password);

      if (!isPasswordMatched) {
        return next(CustomErrorHandler.notFound("User not found"));
      }

      sendToken(user, 200, res);
    } catch (error) {
      console.log(error);
    }
  },
  async loginUsingContact(req, res, next) {
    try {
      const { contact } = req.body;
      console.log(contact);
      if (!contact) {
        return next(
          CustomErrorHandler.required(
            "Please enter your registered contact number"
          )
        );
      }
      const user = await User.findOne({ contact });
      if (!user) {
        return next(CustomErrorHandler.notFound("User not found"));
      }

      const otp = generateOTP();

      try {
        await sendMsg(otp, contact);
        user.otp = Number(otp);
        user.otpExp = new Date(Date.now() + 5 * 60 * 1000);
        await user.save();
        res.status(200).json({
          success: true,
          message: "OTP sent successfully",
        });
      } catch (err) {
        user.otp = null;
        user.otpExp = null;
        await user.save();
        return next(CustomErrorHandler.serverError());
      }
    } catch (error) {
      console.log(error);
    }
  },
  async verifyLoginOTP(req, res, next) {
    try {
      const { contact, otp } = req.body;

      if (!contact || !otp) {
        return next(CustomErrorHandler.required("All fields are required"));
      }

      const user = await User.findOne({ contact });

      if (!user) {
        return next(CustomErrorHandler.notFound("User not found"));
      }
      console.log(user.otp === otp, user.otpExp > Date.now());
      const isOTPMatched = user && user.otp === otp && user.otpExp > Date.now();

      if (!isOTPMatched) {
        return next(
          CustomErrorHandler.notFound("Invaid OTP or OTP has expired")
        );
      } else {
        user.otp = undefined;
        user.otpExp = undefined;
        await user.save();
        sendToken(user, 200, res);
      }
    } catch (error) {
      console.log(error);
      return next(CustomErrorHandler.serverError());
    }
  },
  async logOut(req, res, next) {
    try {
      res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });

      res.status(200).json({
        message: "logged out successfully",
      });
    } catch (error) {
      console.log(error);
    }
  },
  async me(req, res, next) {
    try {
      const user = await User.findById(req.user.id);

      if (!user) {
        return next(CustomErrorHandler.notFound("User not found"));
      }
      res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  },

  async updateUserName(req, res, next) {
    try {
      const user = await User.findById(req.user.id);

      if (!user) {
        return next(CustomErrorHandler.notFound("User not found"));
      }

      const { firstname, lastname } = req.body;

      user.firstname = firstname;
      user.lastname = lastname;

      await user.save();

      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = userController;
