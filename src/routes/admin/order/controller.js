const controller = require("../../controller");
const _ = require("lodash");

const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {


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

  // delete order
  async deleteOrder(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }
    // delete process
    const order = await this.Order.findByIdAndDelete(req.params.id);
    // send response
    this.response({
      res,
      code: 200,
      message: "the order successfuly deleted",
      data: order,
    });
  }

  // get All orders
  async getAllOrders(req, res) {
    const orders = await this.Order.find()

    this.response({
      res,
      code: 200,
      message: "the all orders",
      data: orders,
    });
  }
})();
