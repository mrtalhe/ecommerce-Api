const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  createValidator() {
    return [
      check("title").not().isEmpty().withMessage("title cant be empty"),
      check("description").not().isEmpty().withMessage("description cant be empty"),
      check("mindescription").not().isEmpty().withMessage("min description cant be empty"),
      check("images").not().isEmpty().withMessage("image cant be empty"),
      check("categories").not().isEmpty().withMessage("categories cant be empty"),
      check("color").not().isEmpty().withMessage("color cant be empty"),
      check("size").not().isEmpty().withMessage("size cant be empty"),
      check("price").not().isEmpty().withMessage("price cant be empty"),

    ];
  
  }
  updateValidator() {
    return [
      check("title").not().isEmpty().withMessage("title cant be empty"),
      check("description").not().isEmpty().withMessage("description cant be empty"),
      check("mindescription").not().isEmpty().withMessage("min description cant be empty"),
      check("images").not().isEmpty().withMessage("image cant be empty"),
      check("categories").not().isEmpty().withMessage("categories cant be empty"),
      check("color").not().isEmpty().withMessage("color cant be empty"),
      check("size").not().isEmpty().withMessage("size cant be empty"),
      check("price").not().isEmpty().withMessage("price cant be empty"),
    ];
  
  }
})();
