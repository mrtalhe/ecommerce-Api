const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  createValidator() {
    return [

      check("country").not().isEmpty().withMessage("country cant be empty"),
      check("provState").not().isEmpty().withMessage("provState cant be empty"),
      check("city").not().isEmpty().withMessage("city cant be empty"),
      check("address").not().isEmpty().withMessage("address cant be empty"),
      check("postalcode").not().isEmpty().withMessage("postalcode cant be empty"),
    ];
  
  }
  updateValidator() {
    return [

      check("country").not().isEmpty().withMessage("country cant be empty"),
      check("provState").not().isEmpty().withMessage("provState cant be empty"),
      check("city").not().isEmpty().withMessage("city cant be empty"),
      check("address").not().isEmpty().withMessage("address cant be empty"),
      check("postalcode").not().isEmpty().withMessage("postalcode cant be empty"),
    ];
  
  }

})();
