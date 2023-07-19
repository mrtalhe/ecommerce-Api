const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const productSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true},
  description: { type: String, required: true},
  mindescription: { type: String, required: true},
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
  slug: {type: String, required: true, default: ''},
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}

});
productSchema.plugin(timestamp);

const Product = mongoose.model("Product", productSchema );
module.exports = Product;