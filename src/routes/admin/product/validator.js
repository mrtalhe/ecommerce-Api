const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  createValidator() {
    return [
      check("title").not().isEmpty().withMessage("title cant be empty"),
      check("desc").not().isEmpty().withMessage("desc cant be empty"),
      check("image").not().isEmpty().withMessage("img cant be empty"),
      check("categories").not().isEmpty().withMessage("categories cant be empty"),
      check("color").not().isEmpty().withMessage("color cant be empty"),
      check("size").not().isEmpty().withMessage("size cant be empty"),
      check("price").not().isEmpty().withMessage("price cant be empty"),

    ];
  
  }
  updateValidator() {
    return [
      check("title").not().isEmpty().withMessage("title cant be empty"),
      check("desc").not().isEmpty().withMessage("desc cant be empty"),
      check("image").not().isEmpty().withMessage("img cant be empty"),
      check("categories").not().isEmpty().withMessage("categories cant be empty"),
      check("color").not().isEmpty().withMessage("color cant be empty"),
      check("size").not().isEmpty().withMessage("size cant be empty"),
      check("price").not().isEmpty().withMessage("price cant be empty"),
    ];
  
  }
})();
