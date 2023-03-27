const CustomErrorHandler = require("../middlewares/CustomErrorHandler");
const Order = require("../models/order");

const orderController = {
  async newOrder(req, res, next) {
    try {
      const {
        addressId,
        items,
        itemsPrice,
        tax,
        deliveryCharge,
        totalAmount,
        paymentMode,
      } = req.body;
      const userId = req.user._id;

      const order = await Order.create({
        userId,
        addressId,
        items,
        itemsPrice,
        tax,
        deliveryCharge,
        totalAmount,
        paymentMode,
      });

      res.status(201).json({ order });
    } catch (error) {
      console.log(error);
    }
  },

  async getSingleOrder(req, res, next) {
    try {
      const order = await Order.findById(req.params.id)
        .populate("addressId")
        .populate("userId", "firstname lastname email");

      res.status(200).json({ order });
    } catch (Error) {
      console.log(Error);
    }
  },

  async getMyOrders(req, res, next) {
    const userId = req.user._id;
    const order = await Order.find({ userId });

    if (!order) {
      return next(CustomErrorHandler.notFound("No order found"));
    }

    res.status(200).json({ order });
  },

  async updateOrderStatus(req, res, next) {
    try {
      const order = await Order.findById(req.params.id).populate(
        "userId",
        "firstname lastname email"
      );

      if (!order) {
        return next(CustomErrorHandler.notFound("No order found"));
      }

      if (order.orderStatus === "Delivered") {
        return next(
          CustomErrorHandler.badRequest("You have already delivered this order")
        );
      }

      if (req.body.status === "Shipped") {
        order.shippedAt = Date.now();
      }

      order.orderStatus = req.body.status;

      if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
      }

      await order.save();

      res.status(200).json({ order });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = orderController;
