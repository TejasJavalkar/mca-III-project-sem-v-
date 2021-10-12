const Mongoose = require("mongoose");
const { Schema } = Mongoose;
// Cart Schema
const CartSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    product_name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      ref: "User",
    },
    purchasePrice: {
      type: Number,
      default: 0,
      required: true,
    },
    totalPrice: {
      type: Number,
      default: 0,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Cart = Mongoose.model("Cart", CartSchema);
module.exports = Cart;
