const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");
// get all products
router.get(
  "/",

  controller.getAllProducts
);
router.get(
  "/:id",

  controller.getSingleProduct
);
// create product
router.post(
  "/create",
  validator.createValidator(),
  controller.validate,
  controller.createProduct
);
// update product
router.put(
  "/:id",
  validator.updateValidator(),
  controller.validate,
  controller.updateProduct
);
// delete product
router.delete("/:id", controller.deleteProduct);

module.exports = router;
