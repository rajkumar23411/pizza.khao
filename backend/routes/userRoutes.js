const {
  forgotPassword,
  verifyForgotPasswordOTP,
  resetPassword,
} = require("../controllers/userController");
const {
  register,
  login,
  logOut,
  me,
  updateUserName,
  loginUsingContact,
} = require("../controllers/userController");
const { auth } = require("../middlewares/auth");

const userRoute = require("express").Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/logout", [auth], logOut);
userRoute.get("/me", [auth], me);
userRoute.post("/update/name", [auth], updateUserName);
userRoute.post("/login/contact", loginUsingContact);
userRoute.post("/forgot/password", forgotPassword);
userRoute.post("/verify/login/otp", verifyForgotPasswordOTP);
userRoute.post("/reset/password", resetPassword);
module.exports = userRoute;
