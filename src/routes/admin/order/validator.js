const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  createValidator() {
    return [

      check("products").not().isEmpty().withMessage("products cant be empty"),

    ];
  
  }
  updateValidator() {
    return [

      check("products").not().isEmpty().withMessage("products cant be empty"),

    ];
  
  }

})();
