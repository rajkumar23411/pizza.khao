const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    select: false,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, default: 1 },
      size: { type: String, required: true, default: "regular" },
    },
  ],
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Cart", cartSchema);
