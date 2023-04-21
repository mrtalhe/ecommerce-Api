const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  createValidator() {
    return [
      check("email").isEmail().withMessage("email is invalid"),
      check("username").not().isEmpty().withMessage("username cant be empty"),
      check("password").not().isEmpty().withMessage("password cant be empty"),
    ];
  
  }
  updateValidator() {
    return [
      check("email").isEmail().withMessage("email is invalid"),
      check("username").not().isEmpty().withMessage("username cant be empty"),
      check("password").not().isEmpty().withMessage("password cant be empty"),
    ];
  
  }
})();
