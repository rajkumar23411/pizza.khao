const Cart = require("../models/cart");
const Product = require("../models/product");
const CustomErrorHandler = require("../middlewares/CustomErrorHandler");

const cartController = {
  async addToCart(req, res, next) {
    try {
      const { productId, quantity, size } = req.body;
      const userId = req.user._id;
      let cart = await Cart.findOne({ userId });
      const product = await Product.findById(productId);
      let price = product.prices[size];

      if (!cart) {
        cart = new Cart({ userId, items: [] });
      }

      if (cart.items.length === 0) {
        cart.items.push({ productId, quantity, size });

        cart.totalPrice = price * quantity;
        console.log(cart.totalPrice);
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

        cart.totalPrice += price * quantity;
        await cart.save();
        res.status(200).json({ cart });
      }
    } catch (err) {
      console.log(err);
    }
  },
  async updateCart(req, res, next) {
    try {
      const { productId, quantity, size } = req.body;
      const userId = req.user._id;
      const product = await Product.findById(productId);

      const cart = await Cart.findOne({ userId });

      cart.items.forEach((item) => {
        if (item.productId.toString() === productId.toString()) {
          item.size = size;
          item.quantity = quantity;
        }
      });

      if (cart.items.length === 1) {
        cart.items[0].size = size;
        cart.totalPrice = product.prices[size] * quantity;
        await cart.save();
        res.status(200).json({ isUpdated: true });
      } else {
        let totalPrice = 0;
        for (let i = 0; i < cart.items.length; i++) {
          const product = await Product.findById(cart.items[i].productId);
          totalPrice += product.prices[size] * cart.items[i].quantity;
        }
        cart.totalPrice = totalPrice;

        await cart.save();
        res.status(200).json({ isUpdated: true });
      }
    } catch (err) {
      console.log(err);
    }
  },
  async deleteFromCart(req, res, next) {
    const cart = await Cart.findOne({ userId: req.user.id });
    const { productId, size } = req.body;
    if (!productId) {
      return next(CustomErrorHandler.required("Product id is required"));
    }
    if (!size) {
      return next(CustomErrorHandler.required("Size is required"));
    }
    const product = await Product.findById(productId);
    if (!product) {
      return next(CustomErrorHandler.notFound("Product not found"));
    }
    const productIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId.toString()
    );
    cart.totalPrice -= product.prices[size] * cart.items[productIndex].quantity;
    cart.items.splice(productIndex, 1);

    await cart.save();
    res.status(200).json({ success: true });
  },

  async getCartItems(req, res, next) {
    const userId = req.user._id;
    if (!userId) {
      return next(CustomErrorHandler.unAuthorized("Please login to access"));
    }
    const cart = await Cart.findOne({ userId: req.user.id }).populate(
      "items.productId"
    );
    res.status(200).json({ cart });
  },
};

module.exports = cartController;
