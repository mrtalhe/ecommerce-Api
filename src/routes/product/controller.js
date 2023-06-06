const controller = require("../controller");
const _ = require("lodash");

const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // get All products
  async getAllProducts(req, res) {
    const query = {};
    if (req.query.search) query.title = new RegExp(req.query.search, "gi");
    if (req.query.category && req.query.category != "all") {
      let category = await this.Category.findOne({ slug: req.query.category });
      if (category) {
        query.categories = { $in: [category.id] };
      }
    }

    const products = await this.Product.find({ ...query })
      .populate({
        path: "images.main images.gallery categories",
        select: "filepath name slug",
      })
      .exec();
    const categories = await this.Category.find({ parent: null })
      .populate("childs")
      .exec();
    this.response({
      res,
      code: 200,
      productsData: products,
      message: "the All products",
      categoriesData: categories,
      CategoryMessage: "the All categories",
    });
  }

  // get single product
  async getSingleProduct(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }
    const product = await this.Product.findById(req.params.id)
      .populate({
        path: "images.main images.gallery categories",
      })
      .exec();

    this.response({
      res,
      code: 200,
      message: "the product",
      data: product,
    });
  }
})();
