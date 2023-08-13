const expressValidator = require("express-validator");
const check = expressValidator.check;
const controller = require("../../controller");
const {LocationType} = require("./../../../types/types")

module.exports = new (class extends controller {
  addLocationValidator() {
    const validators = [
      check("name").not().isEmpty().withMessage("name cant be empty"),
      check("url").not().isEmpty().withMessage("url cant be empty"),
      check("type").not().isEmpty().withMessage("type cant be empty"),
    ];
  
  
    return validators;

  }
  updateLocationValidator() {
    const validators = [
      check("name").not().isEmpty().withMessage("name cant be empty"),
      check("url").not().isEmpty().withMessage("url cant be empty"),
      check("type").not().isEmpty().withMessage("type cant be empty"),
    ];
  
  
    return validators;

  }


})();

