const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {

  updateValidator() {
    return [

      check("userId").not().isEmpty().withMessage("userID cant be empty"),
      check("name").not().isEmpty().withMessage("name cant be empty"),

    ];
  
  }

})();
