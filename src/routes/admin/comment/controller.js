
const controller = require("./../../controller");

module.exports = new (class extends controller {
  // get All Comments
  async getAllComments(req, res, next){

    const comments = await this.CommentModel.find().populate(
      {
        path: 'authorId',
        select : 'name'
      }
    ).exec()

    this.response({
      res,
      code: 200,
      message: "the All Comments",
      data: comments,
    });
}
  // delete Comment
  async destroy(req,res){
    const comment = await this.CommentModel.findById(req.params.id).populate({path: 'comments'}).exec()
    if(!comment){
      this.response({
        res,
        code: 404,
        message: "There is no such view! ",
      });
    }


  comment.comments.forEach(item => item.remove())
   await comment.remove()

   this.response({
    res,
    code: 200,
    message: "The comment was deleted! ",
    data: comment,
  });
  }

 // submit comment
  async update(req,res){
    const comment = await this.CommentModel.findById(req.params.id).populate({path: 'comments'}).exec()
    if(!comment){
      this.response({
        res,
        code: 404,
        message: "There is no such view! ",
      });
    }

    comment.check = true

    await comment.save()
    this.response({
      res,
      code: 200,
      message: "The comment Submited! ",
      data: comment,
    });

  }
 
})();
