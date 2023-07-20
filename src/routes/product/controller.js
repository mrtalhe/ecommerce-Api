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

    const {limit,skip} = req.query


    const products = await this.Product.find({...query}).limit(limit).skip(skip)
    .populate({
      path: "images.main images.gallery categories",
      select: "filepath name slug",
    })
      .exec();

    let productMessage;
    if (req.query.search) {
      productMessage = "the product";
    } else if (req.query.category) {
      productMessage = "the product";
    } else {
      productMessage = "the All products!";
    }

    if (products.length == 0) {
      this.response({
        res,
        code: 404,
        message: "There is no product!",
      });
    } else {
      this.response({
        res,
        code: 200,
        data: products,
        message: productMessage,
      });
    }
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

    if (!product) {
      this.response({
        res,
        code: 404,
        message: "No product was found!",
      });
    } else {
      this.response({
        res,
        code: 200,
        message: "the product",
        data: product,
      });
    }
  }

  // get product comments
  async getProductComments(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }

    const comments = await this.CommentModel.find({ productId: req.params.id }).populate({path: "parent"})

    if (comments.length == 0) {
      this.response({
        res,
        code: 404,
        message: "There are no comments for this product",
      });
    } else {
      this.response({
        res,
        code: 200,
        message: "comments of this product",
        data: comments,
      });
    }
  }
})();
