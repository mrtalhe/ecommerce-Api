const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");


// create product
router.post(
  "/create",
  validator.createValidator(),
  controller.validate,
  controller.createComment
);


module.exports = router;
