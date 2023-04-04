const CustomErrorHandler = require("../middlewares/CustomErrorHandler");
const Wishlist = require("../models/wishlist");

const wishlistController = {
  async addRemoveWishlist(req, res, next) {
    try {
      const product = req.params.id;

      let wishlist = await Wishlist.findOne({ userId: req.user._id });

      if (!wishlist) {
        wishlist = new Wishlist({ userId: req.user._id, items: [] });
      }

      const itemIndex = wishlist.items.findIndex(
        (item) => item.product.toString() === product.toString()
      );

      if (itemIndex >= 0) {
        wishlist.items.splice(itemIndex, 1);
        await wishlist.save();
        return res
          .status(200)
          .json({ message: "Product removed from wishlist" });
      } else {
        wishlist.items.push({ product });
        await wishlist.save();
        res.status(200).json({ message: "Product added to wishlist" });
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getWishlist(req, res, next) {
    const user = req.user._id;
    try {
      let wishlist = await Wishlist.findOne({ userId: user }).populate(
        "items.product"
      );
      if (!wishlist) {
        return next(CustomErrorHandler.NotFound("Wishlist not found"));
      }
      res.status(200).json({ wishlist });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = wishlistController;
