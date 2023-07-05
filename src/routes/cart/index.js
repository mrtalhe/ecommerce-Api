const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");


// create product
router.post(
  "/create",
  validator.createValidator(),
  controller.validate,
  controller.createCart
);
// update product
router.put(
  "/update",
  validator.updateValidator(),
  controller.validate,
  controller.updateCart
);
// delete product
router.delete("/delete", controller.deleteCart);
  // view cart 
  router.get(
    "/view",

    controller.viewCart
  );
module.exports = router;
