const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");




// delete product
router.delete("/:id", controller.deleteOrder);
// get all orders
router.get("/", controller.getAllOrders)

module.exports = router;
