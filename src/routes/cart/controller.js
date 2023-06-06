const controller = require("../controller");
const _ = require("lodash");

const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // create cart
  async createCart(req, res) {
    // create
    const cart = new this.Cart(req.body);
    // save and send response
    await cart.save();

    this.response({
      res,
      code: 200,
      message: "the cart successfuly saved",
      data: cart,
    });
  }

  // update cart
  async updateCart(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }
    // update process
    const cart = await this.Cart.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );

    // save and send response
    await cart.save();

    this.response({
      res,
      code: 200,
      message: "the cart successfuly updated",
      data: cart,
    });
  }

  // delete cart
  async deleteCart(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }
    // delete process
    const cart = await this.Cart.findByIdAndDelete(req.params.id);
    // send response
    this.response({
      res,
      code: 200,
      message: "the cart successfuly deleted",
      data: cart,
    });
  }
  // view cart 
  async viewCart(req,res){

    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }

    const cart = await this.Cart.findOne({ userId: req.params.id }).populate("products.productId").exec()
    if(!cart){
      this.response({
        res,
        code: 404,
        message: "Cart Not found",
      });
    } else{
      this.response({
        res,
        code: 200,
        message: "Cart found",
        data: cart,
      });
    }

  }
})();
