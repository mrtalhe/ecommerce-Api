const controller = require("../../controller");
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
      products = await this.Product.find().populate({
        path: 'image categories',
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
          path: 'image categories'
        })

        this.response({
          res,
          code: 200,
          message: "the product",
          data: product,
        });
  }


  // create product
  async createProduct(req, res) {
    // // check product
    let product = await this.Product.findOne({ title: req.body.title });
    if (product) {
      return this.response({
        res,
        code: 400,
        message: "this product already available",
      });
    }
    // create 
    product = new this.Product(req.body);
    // save and send response
    await product.save();

    this.response({
      res,
      code: 200,
      message: "the product successfuly saved",
      data: _.pick(product, ["_id", "title", "price"]),
    });
  }

  // update product
  async updateProduct(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }
    // update process
  const product = await this.Product.findByIdAndUpdate(req.params.id, { $set: { ...req.body } }, {new: true});

    // save and send response
   await product.save()

    this.response({
      res,
      code: 200,
      message: "the product successfuly updated",
      data: _.pick(product, ["_id", "title"]),
    });
  }

  // delete product
  async deleteProduct(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }
    // delete process
    const product = await this.Product.findByIdAndDelete(req.params.id);
    // send response
    this.response({
      res,
      code: 200,
      message: "the product successfuly deleted",
      data: _.pick(product, ["_id", "title"]),
    });
  }
})();
