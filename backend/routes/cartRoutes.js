const {
  addToCart,
  deleteFromCart,
  getCartItems,
} = require("../controllers/cartController");
const { auth } = require("../middlewares/auth");

const cartRoutes = require("express").Router();

cartRoutes.post("/add_to_cart", [auth], addToCart);
cartRoutes.get("/my/cart", [auth], getCartItems);
cartRoutes.delete("/cart/delete/:id", [auth], deleteFromCart);

module.exports = cartRoutes;
