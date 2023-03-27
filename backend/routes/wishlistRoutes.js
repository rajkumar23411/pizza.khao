const {
  addToWishlist,
  removeFromWishList,
  getWishlist,
} = require("../controllers/wishlistController");
const { auth } = require("../middlewares/auth");

const wishlistRoutes = require("express").Router();

wishlistRoutes.post("/wishlist/add", [auth], addToWishlist);
wishlistRoutes.post("/wishlist/remove", [auth], removeFromWishList);
wishlistRoutes.get("/my-wishlist", [auth], getWishlist);

module.exports = wishlistRoutes;
