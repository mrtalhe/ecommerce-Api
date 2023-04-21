const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User"},
  products: [
    { 
        productId: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity:{
            type: Number,
            default: 1
        }
    }
],
amount: {type: Number, required: true},
address: {type: Object, required: true},
status: {type: String, default: "pending"},


});
orderSchema.plugin(timestamp);

const Order = mongoose.model("Order", orderSchema );
module.exports = Order;