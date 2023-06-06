const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const Schema = mongoose.Schema;
const { PaymentState } =  require("../types/types.js");

const cartSchema = new mongoose.Schema({
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
  payment: {
    authority: {
        type: String
    },
    code: {
        type: Number
    },
    state: {
        type: String,
        required: true,
        default: PaymentState.Ready
    },
    date: {
        type: Number,
        required: true,
        default: Date.now()
    }
},
amount: {
  type: Number,
  required: true,
  default: 0
}
});
cartSchema.plugin(timestamp);

const order = mongoose.model("Cart", cartSchema);
module.exports = order;
