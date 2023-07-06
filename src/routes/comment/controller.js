const controller = require("../controller");

module.exports = new (class extends controller {
  // create comment
  async createComment(req, res) {

   const newComment = new this.CommentModel({
    authorId: req.user.id,
    email: req.user.email,
    name: req.user.username,
    ...req.body
  })

  newComment.check = false
  if(req.user.isadmin){
  newComment.check = true

  }
   await newComment.save()

    this.response({
      res,
      code: 200,
      message: "New comment added.",
      data: newComment,
    });
  }

})();
