const Cart = require("../models/cart");
const Product = require("../models/product");
const CustomErrorHandler = require("../middlewares/CustomErrorHandler");
const cartController = {
  async addToCart(req, res, next) {
    try {
      const { productId, quantity } = req.body;
      const userId = req.user._id;
      let cart = await Cart.findOne({ userId });
      const product = await Product.findById(productId);

      if (!cart) {
        cart = new Cart({ userId, items: [] });
      }

      if (cart.items.length === 0) {
        cart.items.push({ productId, quantity });

        cart.totalPrice = product.prices.regular * quantity;

        await cart.save();

        res.status(200).json({ cart });
      } else {
        const isProductExists = cart.items.find(
          (item) => item.productId.toString() === productId.toString()
        );

        if (isProductExists) {
          return next(
            CustomErrorHandler.AlreadyExists(
              "This product already in your cart"
            )
          );
        }

        cart.items.push({ productId, quantity });

        cart.totalPrice += product.price * quantity;
        await cart.save();
        res.status(200).json({ cart });
      }
    } catch (err) {
      console.log(err);
    }
  },
  async updateQty(req, res, next) {
    try {
      const { productId, quantity } = req.body;
      const userId = req.user._id;
      const product = await Product.findById(productId);

      const cart = await Cart.findOne({ userId });

      cart.items.forEach((item) => {
        if (item.productId.toString() === productId.toString()) {
          item.quantity = quantity;
        }
      });

      if (cart.items.length === 1) {
        cart.totalPrice = product.price * quantity;
        await cart.save();
        res.status(200).json({ cart });
      } else {
        let totalPrice = 0;
        for (let i = 0; i < cart.items.length; i++) {
          const product = await Product.findById(cart.items[i].productId);
          totalPrice += product.price * cart.items[i].quantity;
        }
        cart.totalPrice = totalPrice;

        await cart.save();
        res.status(200).json({ cart });
      }
    } catch (err) {
      console.log(err);
    }
  },
  async deleteFromCart(req, res, next) {
    const cart = await Cart.findOne({ userId: req.user.id });
    const { productId } = req.body;
    const product = await Product.findById(productId);
    if (!productId) {
      return next(CustomErrorHandler.required("Product id is required"));
    }

    const productIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId.toString()
    );
    cart.totalPrice -= product.price * cart.items[productIndex].quantity;
    cart.items.splice(productIndex, 1);

    await cart.save();
    res.status(200).json({ cart });
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
