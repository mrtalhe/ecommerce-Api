const controller = require("../controller");
const _ = require("lodash");

const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // create cart
  async createCart(req, res,next) {
    let data;
    let message = '';

    const oldCart = await this.Cart.findOne({ userId: req.user._id });

    if (!oldCart) {
      const product = await this.Product.findById(req.body.productId);
      
      if (!product)
      return this.response({
        res,
        code: 404,
        message: "No product was found!"
      })

      const newCart = new this.Cart({
        list: [
          {
            productId: product._id,
            price: product.price,
            quantity: req.body.quantity,
          },
        ],
        userId: req.user._id,
      });

      data = await newCart.save();
      message = "A new cart created.";
    } else {
      let isSameProdId = false;
      const product = await this.Product.findById(req.body.productId);

      if (!product)
        return this.response({
          res,
          code: 404,
          message: "No product was found!"
        })

      oldCart.list = oldCart.list.filter((item) => {
        if (product._id.equals(item.productId)) {
          item.quantity++;
          isSameProdId = true;
        }
        return item;
      });

      if (!isSameProdId)
        oldCart.list.push({
          productId: product._id,
          price: product.price,
          quantity: 1,
        });

      data = await oldCart.save();
      message = "The product added to cart.";
    }

    this.response({
      res,
      code: 200,
      message: message,
      data: data,
    });
  }

  // update cart
  async updateCart(req, res) {

    // update process
    const oldCart = await this.Cart.findOne({ userId: req.user._id });
    if (!oldCart)
        return next({ code: 404, message: 'No cart found!' });
    oldCart.list.forEach(item => {
        req.body.list.forEach((update) => {
            if (item.productId.equals(update.productId))
                item.quantity = update.quantity;
        });
    });
    oldCart.list = oldCart.list.filter(item => item.quantity !== 0);
    const updated = await oldCart.save({ validateBeforeSave: true });

    this.response({
      res,
      code: 200,
      message: "the cart successfuly updated",
      data: updated,
    });
  }

  // delete cart
  async deleteCart(req, res) {

    // delete process
    const cart = await this.Cart.findOneAndDelete({userId: req.user._id});

    if (!cart)
    return next({ code: 200, message: 'No cart found!' });

    // send response
    this.response({
      res,
      code: 200,
      message: "the cart successfuly deleted",
    });
  }
  // view cart
  async viewCart(req, res) {

    const cart = await this.Cart.findOne({ userId: req.user._id })
    if (!cart) {
      this.response({
        res,
        code: 404,
        message: "Cart Not found",
      });
    } else {
      this.response({
        res,
        code: 200,
        message: "Cart found",
        data: cart,
      });
    }
  }
})();
