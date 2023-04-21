const express = require("express");
const router = express.Router();
const controller = require("./controller");

// get all carts

router.get(
  "/",

  controller.getAllCarts
);


module.exports = router;
