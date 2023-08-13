const controller = require("../../controller");
const _ = require("lodash");


module.exports = new (class extends controller {
  // get All carts
  async getAllCarts(req, res) {

    const carts = await this.Cart.find()
    this.response({
      res,
      code: 200,
      message: "the all carts",
      data: carts,
    });
  }


})();
