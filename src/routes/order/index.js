const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");


// create product
router.post(
  "/create",
  validator.createValidator(),
  controller.validate,
  controller.createOrder
);
// update product
router.put(
  "/:id",
  validator.createValidator(),
  controller.validate,
  controller.updateOrder
);
// get user orders
router.get(
  "/:id",
  controller.getUserOrders
);

module.exports = router;
