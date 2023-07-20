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
router.get(
  "/comments/:id",

  controller.getProductComments
);



module.exports = router;
