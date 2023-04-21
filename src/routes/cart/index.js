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
  "/:id",
  validator.updateValidator(),
  controller.validate,
  controller.updateCart
);
// delete product
router.delete("/:id", controller.deleteCart);
  // view cart 
  router.get(
    "/:id",

    controller.viewCart
  );
module.exports = router;
