const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  createValidator() {
    return [


      check("productId").not().isEmpty().withMessage("product Id cant be empty"),
      check("title").not().isEmpty().withMessage("title cant be empty"),
      check("description").not().isEmpty().withMessage("description cant be empty"),
      check("rating", "Rating must be a number between 0 and 5").isFloat({ min: 1, max: 5 }).not().isEmpty().withMessage("rating cant be empty")
    ];
  
  }

})();
