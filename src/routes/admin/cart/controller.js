const controller = require("../../controller");
const _ = require("lodash");


module.exports = new (class extends controller {
  // get All carts
  async getAllCarts(req, res) {
    const carts = await this.Cart.find()

    if(carts.length == 0){
      this.response({
        res,
        code: 404,
        message: "There is no shopping cart",
      });
    } else{
      this.response({
        res,
        code: 200,
        message: "the all carts",
        data: carts,
      });
    }

  }


})();
