const mongoose = require("mongoose");

const timestamp = require("mongoose-timestamp");

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    default: null,
  },
  rating: {
    type: Number,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  check: {
    type: Boolean,
    default: false,
  },
},{strictPopulate: false, toJSON: {virtuals: true}});
commentSchema.plugin(timestamp);

commentSchema.virtual('comments', {
    ref : 'Comment',
    localField : '_id',
    foreignField : 'parent'
})

commentSchema.index({ name: "text", email: "text", title: "text" });
const CommentModel = mongoose.model("Comment", commentSchema);
module.exports = CommentModel;
