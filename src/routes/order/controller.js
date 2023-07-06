const controller = require("../controller");
const _ = require("lodash");

const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // get users orders
  async getUserOrders(req, res, next) {
    const orders = await this.Order.find({ userId: req.user._id });
    if (!orders.length) return next({ code: 404, message: "No order found!" });

    this.response({
      res,
      code: 200,
      message: "the orders",
      data: orders,
    });
  }

  // vieworder
  async vieworder(req, res, next) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }

    const _id = req.params.id;

    const order = await this.Order.findOne({
      _id,
      userId: req.user._id,
    }).populate({ path: "userId", select: "username email" });

    if (!order) {
      this.response({
        res,
        code: 404,
        message: "Order not found!",

      });
    } else {
      this.response({
        res,
        code: 200,
        message: "Order found.",
        data: order,
      });
    }
  }
})();
