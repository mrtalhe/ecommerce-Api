const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const productSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true},
  desc: { type: String, required: true},
  images: {
    main: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    },
    gallery: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'File'
        }]
},
  categories: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
  size: {type: Array},
  color: {type: Array},
  price: {type: Number, required: true},

});
productSchema.plugin(timestamp);

const Product = mongoose.model("Product", productSchema );
module.exports = Product;