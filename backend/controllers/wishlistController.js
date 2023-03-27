const CustomErrorHandler = require("../middlewares/CustomErrorHandler");
const Wishlist = require("../models/wishlist");

const wishlistController = {
  async addToWishlist(req, res, next) {
    const { productId } = req.body;
    const user = req.user._id;

    try {
      let wishlist = await Wishlist.findOne({ userId: user });

      if (!wishlist) {
        wishlist = new Wishlist({ userId: user, items: [] });
      }

      if (wishlist.items.length === 0) {
        wishlist.items.push({ productId });

        await wishlist.save();

        res.status(200).json({ wishlist });
      } else {
        const isProductExists = wishlist.items.find(
          (item) => item.productId.toString() === productId.toString()
        );

        if (isProductExists) {
          return next(
            CustomErrorHandler.AlreadyExists(
              "This product already in your wishlist"
            )
          );
        }

        wishlist.items.push({ productId });

        await wishlist.save();
        res.status(200).json({ wishlist });
      }
    } catch (err) {
      console.log(err);
    }
  },
  async removeFromWishList(req, res, next) {
    const { productId } = req.body;
    const user = req.user._id;
    try {
      let wishlist = await Wishlist.findOne({ userId: user });
      if (!wishlist) {
        return next(CustomErrorHandler.NotFound("Wishlist not found"));
      }
      const productIndex = wishlist.items.findIndex(
        (item) => item.productId.toString() === productId.toString()
      );
      if (productIndex === -1) {
        return next(CustomErrorHandler.NotFound("Product not found"));
      }
      wishlist.items.splice(productIndex, 1);
      await wishlist.save();
      res.status(200).json({ wishlist });
    } catch (err) {
      console.log(err);
    }
  },
  async getWishlist(req, res, next) {
    const user = req.user._id;

    try {
      let wishlist = await Wishlist.findOne({ userId: user });
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
