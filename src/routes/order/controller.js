const controller = require("../controller");
const _ = require("lodash");

const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // create order
  async createOrder(req, res) {
    // create
    const order = new this.Order(req.body);
    // save and send response
    await order.save();

    this.response({
      res,
      code: 200,
      message: "the order successfuly saved",
      data: order,
    });
  }

    // update order
    async updateOrder(req, res) {
      // check Object Id
      if (!mongoose.isValidObjectId(req.params.id)) {
        return this.response({
          res,
          code: 400,
          message: "invalid object id",
        });
      }
      // update process
      const order = await this.Order.findByIdAndUpdate(
        req.params.id,
        { $set: { ...req.body } },
        { new: true }
      );
  
      // save and send response
      await order.save();
  
      this.response({
        res,
        code: 200,
        message: "the order successfuly updated",
        data: order,
      });
    }

  // get users orders
  async getUserOrders(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }

    const orders = await this.Order.find({ userId: req.params.id });

    this.response({
      res,
      code: 200,
      message: "the orders",
      data: orders,
    });
  }
})();
