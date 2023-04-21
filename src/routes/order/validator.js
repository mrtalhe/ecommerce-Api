const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  createValidator() {
    return [

      check("userId").not().isEmpty().withMessage("userID cant be empty"),
      check("products").not().isEmpty().withMessage("products cant be empty"),
      check("amount").not().isEmpty().withMessage("amount cant be empty"),
      check("address").not().isEmpty().withMessage("address cant be empty"),
    ];
  
  }

})();
