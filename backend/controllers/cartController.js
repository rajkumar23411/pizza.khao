const Cart = require("../models/cart");
const Product = require("../models/product");
const CustomErrorHandler = require("../middlewares/CustomErrorHandler");

const cartController = {
  async addToCart(req, res, next) {
    const { productId, quantity, size } = req.body;
    try {
      let cart = await Cart.findOne({ userId: req.user._id });

      if (!cart) {
        cart = new Cart({
          userId: req.user._id,
          items: [],
          totalPrice: 0,
        });
      }

      // check the item already exists or not
      const isItemExists = cart.items.find(
        (item) => item.product.toString() === productId.toString()
      );

      if (isItemExists) {
        cart.items.forEach((item) => {
          if (item.product.toString() === productId.toString()) {
            item.quantity = quantity;
            item.size = size;
          }
        });
      } else {
        cart.items.push({ product: productId, quantity, size });
      }

      await cart.save();

      res.status(200).json({ cart, success: true });
    } catch (error) {
      console.log(error);
    }
  },

  async deleteFromCart(req, res, next) {
    try {
      const { product } = req.body;

      const cart = await Cart.findOne({ userId: req.user._id });

      const cartItemIndex = cart.items.findIndex(
        (item) => item.product.toString() === product.toString()
      );

      if (cartItemIndex === -1) {
        return next(
          CustomErrorHandler.notFound("Product not found in the cart")
        );
      }

      cart.items.splice(cartItemIndex, 1);

      await cart.save();

      res.status(200).json({ message: "Product removed from cart" });
    } catch (error) {
      console.log(error);
    }
  },
  async getCartItems(req, res, next) {
    const userId = req.user._id;
    if (!userId) {
      return next(CustomErrorHandler.unAuthorized("Please login to access"));
    }
    const cart = await Cart.findOne({ userId: req.user.id });
    res.status(200).json({ cart });
  },
};

module.exports = cartController;
