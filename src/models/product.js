const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const productSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true},
  desc: { type: String, required: true},
  image: {type: mongoose.Schema.Types.ObjectId,ref: "File",  required: true},
  categories: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
  size: {type: Array},
  color: {type: Array},
  price: {type: Number, required: true},

});
productSchema.plugin(timestamp);

const Product = mongoose.model("Product", productSchema );
module.exports = Product;