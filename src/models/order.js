const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;
const { PaymentState } =  require("../types/types.js");

const orderSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User"},
  list: [
    { 
        productId: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity:{
            type: Number,
            default: 1
        },
        price: {
            type: Number,
            required: true,
            default: 0
        }
    }
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
        type: Number
    }
},
amount: {type: Number, required: true},



});
orderSchema.plugin(timestamp);

const Order = mongoose.model("Order", orderSchema );
module.exports = Order;