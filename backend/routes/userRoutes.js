const {
  register,
  login,
  logOut,
  me,
} = require("../controllers/userController");
const { auth } = require("../middlewares/auth");

const userRoute = require("express").Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/logout", [auth], logOut);
userRoute.get("/me", [auth], me);

module.exports = userRoute;
