const controller = require("../../controller");
const _ = require("lodash");
const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // create category
  async create(req, res) {
    // check
    const available = await this.Category.findOne({ name: req.body.name });
    if (available) {
      return this.response({
        res,
        code: 400,
        message: "this category already available",
      });
    }
    // create
    let { name, parent } = req.body;

    const addCategory = new this.Category({
      name,
      slug: this.slug(name),

      parent: !parent ? null : parent,
    });
    // save and send response
    await addCategory.save();

    this.response({
      res,
      code: 200,
      message: "the category successfuly saved",
      data: addCategory,
    });
  }

  // update category
  async updateCat(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }

    let { name, parent } = req.body;
    const category = await this.Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name,
          parent: !parent ? null : parent,
          slug: this.slug(name),
        },
      },
      { new: true }
    );

    this.response({
      res,
      code: 200,
      message: "the category successfuly updated",
      data: category,
    });
  }

  // delete category
  async deleteCat(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }

    let category = await this.Category.findById(req.params.id)
      .populate("childs")
      .exec();

    // delete
    category.childs.forEach((category) => category.remove());

    category.remove();
    this.response({
      res,
      code: 200,
      message: "the category successfuly deleted",
    });
  }

  // get All Categories
  async getAllCategories(req,res){
    const categories = await this.Category.find()

    this.response({
      res,
      code: 200,
      message: "the All Categories",
      data: categories
    });
  }
  // methods
  slug(title) {
    return title.replace(/([^۰-۹آ-یa-zA-Z0-9]|-)+/g, "-");
  }
})();
