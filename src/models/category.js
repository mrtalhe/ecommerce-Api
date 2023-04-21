const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timestamp = require('mongoose-timestamp');

const categorySchema = mongoose.Schema({
    name : { type : String , required : true},
    slug : { type : String, required : true},
    parent : { type : Schema.Types.ObjectId, ref : 'Category'}
    
} , {
    toJSON : { virtuals : true}
})


categorySchema.plugin(timestamp);


categorySchema.virtual('childs', {
    ref : 'Category',
    localField : '_id',
    foreignField : 'parent'
})


const Category = mongoose.model("Category", categorySchema)




module.exports = Category