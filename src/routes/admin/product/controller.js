const controller = require("../../controller");
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

    let productMessage;
    if(req.query.search){
      productMessage = "the product"
    } else if(req.query.category){
      productMessage = "the product"

    } else {
      productMessage = "the All products!"

    }


    const products = await this.Product.find({...query})
    .populate({
      path: "images.main images.gallery categories",
      select: "filepath name slug",
    })
    

    this.response({
      res,
      code: 200,
      data: products,
      message: productMessage,
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
          path: "images.main images.gallery categories",
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
    const {title} = req.body
   const newproduct = new this.Product({
    title,
    ...req.body,
    slug: this.slug(title),
    owner: req.user._id
   });
    // save and send response
    await newproduct.save();

    this.response({
      res,
      code: 200,
      message: "the product successfuly saved",
      data: newproduct,
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
    const {title} = req.body

    const product = await this.Product.findByIdAndUpdate(req.params.id, { $set: { ...req.body,    slug: this.slug(title)  } }, {new: true});

    // save and send response
   await product.save()

    this.response({
      res,
      code: 200,
      message: "the product successfuly updated",
      data: product,
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
