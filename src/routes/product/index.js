const express = require("express");
const router = express.Router();
const controller = require("./controller");

// get all products
router.get(
  "/",

  controller.getAllProducts
);
router.get(
  "/:id",

  controller.getSingleProduct
);



module.exports = router;
