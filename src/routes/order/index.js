const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");



// get user orders
router.get(
  "/list",
  controller.getUserOrders
);

// view an order
router.get(
  "/view/:id",
  controller.vieworder
);

module.exports = router;
