const controller = require("../controller");
const _ = require("lodash");

const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // get All products
  async getAllProducts(req, res) {
    const qNew = req.query.new
    let products;

    if(qNew){
      products = await this.Product.find().sort({createdAt: -1}).limit(1)
    } else{
      products = await this.Product.find().populate({
        path: 'images.main main.gallery categories',
        select: 'filepath name slug'
    })
    }

    this.response({
      res,
      code: 200,
      data: products,
      message: "the All products",
    });
  }

  // get single product
  async getSingleProduct(req,res){
        // check Object Id
        if (!mongoose.isValidObjectId(req.params.id)) {
          return this.response({
            res,
            code: 400,
            message: "invalid object id",
          });
        }

        const product = await this.Product.findById(req.params.id).populate({
          path: 'images.main main.gallery categories'
        })

        this.response({
          res,
          code: 200,
          message: "the product",
          data: product,
        });
  }


})();
