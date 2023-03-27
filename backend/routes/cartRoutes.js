const {
  addToCart,
  updateQty,
  deleteFromCart,
  getCartItems,
} = require("../controllers/cartController");
const { auth } = require("../middlewares/auth");

const cartRoutes = require("express").Router();

cartRoutes.post("/add_to_cart", [auth], addToCart);
cartRoutes.post("/update/cart_qty", [auth], updateQty);
cartRoutes.post("/cart/delete", [auth], deleteFromCart);
cartRoutes.get("/my/cart", [auth], getCartItems);

module.exports = cartRoutes;
