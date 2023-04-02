const {
  addToCart,
  deleteFromCart,
  getCartItems,
} = require("../controllers/cartController");
const { auth } = require("../middlewares/auth");

const cartRoutes = require("express").Router();

cartRoutes.post("/add_to_cart", [auth], addToCart);
cartRoutes.delete("/cart/delete", [auth], deleteFromCart);
cartRoutes.get("/my/cart", [auth], getCartItems);

module.exports = cartRoutes;
