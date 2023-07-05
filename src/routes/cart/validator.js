const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  createValidator() {
    return [


      check("productId").not().isEmpty().withMessage("product Id cant be empty"),


    ];
  
  }
  updateValidator() {
    return [


      check("list").not().isEmpty().withMessage("product Id cant be empty"),


    ];
  
  }

})();
