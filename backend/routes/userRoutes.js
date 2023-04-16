const {
  register,
  login,
  logOut,
  me,
  updateUserName,
  loginUsingContact,
  verifyLoginOTP,
} = require("../controllers/userController");
const { auth } = require("../middlewares/auth");

const userRoute = require("express").Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/logout", [auth], logOut);
userRoute.get("/me", [auth], me);
userRoute.post("/update/name", [auth], updateUserName);
userRoute.post("/login/contact", loginUsingContact);
userRoute.post("/verify/login/otp", verifyLoginOTP);

module.exports = userRoute;
