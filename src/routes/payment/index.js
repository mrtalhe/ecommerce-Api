const express = require("express");
const router = express.Router();
const controller = require("./controller");



// create product
router.post(
  "/",

  controller.paymentRequest
);
router.post(
  "/checkout",

  controller.checkoutPayment
);



module.exports = router;
