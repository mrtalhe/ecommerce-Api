const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const Schema = mongoose.Schema;
const orderSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});
orderSchema.plugin(timestamp);

const order = mongoose.model("Cart", orderSchema);
module.exports = order;
