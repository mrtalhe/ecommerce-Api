const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");


// create category
router.post(
  "/create",
  validator.create(),
  controller.validate,
  controller.create
);
// update category
router.put(
  "/:id",
  validator.create(),
  controller.validate,
  controller.updateCat
);
// delete category
router.delete(
  "/:id",
  controller.deleteCat
);
  // get All Categories
  router.get("/", controller.getAllCategories)

module.exports = router;
