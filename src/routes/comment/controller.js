const controller = require("../controller");
const _ = require("lodash");
const { isValidReq } = require("./../../../utils/validate");

const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // create comment
  async createComment(req, res) {
    // create
   const newComment = new this.CommentModel({
    authorId: req.user.id,
    ...req.body
  })

   await newComment.save()

    this.response({
      res,
      code: 200,
      message: "New comment added.",
      data: newComment,
    });
  }

})();
