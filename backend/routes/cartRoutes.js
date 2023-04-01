const {
  addToCart,
  deleteFromCart,
  getCartItems,
  updateCart,
} = require("../controllers/cartController");
const { auth } = require("../middlewares/auth");

const cartRoutes = require("express").Router();

cartRoutes.post("/add_to_cart", [auth], addToCart);
cartRoutes.put("/update/cart", [auth], updateCart);
cartRoutes.post("/cart/delete", [auth], deleteFromCart);
cartRoutes.get("/my/cart", [auth], getCartItems);

module.exports = cartRoutes;
