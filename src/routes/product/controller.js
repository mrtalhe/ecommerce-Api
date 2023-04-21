const controller = require("../controller");
const _ = require("lodash");

const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // get All products
  async getAllProducts(req, res) {
    const qNew = req.query.new
    const qCategory = req.query.category
    let products;

    if(qNew){
      products = await this.Product.find().sort({createdAt: -1}).limit(1)
    } else if(qCategory){
      products = await this.Product.find({categories: {
        $in:[qCategory]
      }})
    } else{
      products = await this.Product.find();
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

        const product = await this.Product.findById(req.params.id)

        this.response({
          res,
          code: 200,
          message: "the product",
          data: product,
        });
  }


})();
