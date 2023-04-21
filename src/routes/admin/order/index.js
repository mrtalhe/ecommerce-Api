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
  validator.updateValidator(),
  controller.validate,
  controller.updateOrder
);
// delete product
router.delete("/:id", controller.deleteOrder);
// get all orders
router.get("/", controller.getAllOrders)

module.exports = router;
