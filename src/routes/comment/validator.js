const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  createValidator() {
    return [

      check("name").not().isEmpty().withMessage("name cant be empty"),
      check("email").not().isEmpty().withMessage("emali cant be empty"),
      check("prodId").not().isEmpty().withMessage("product Id cant be empty"),
      check("title").not().isEmpty().withMessage("title cant be empty"),
      check("description").not().isEmpty().withMessage("description cant be empty"),
    ];
  
  }

})();
