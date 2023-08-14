const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");



// get address list
router.get(
  "/list",
  controller.list
);

// add address
router.post(
  "/add",
  validator.createValidator(),
  controller.validate,
  controller.addAddress
);

// update address
router.put(
  "/update/:addressId",
  validator.updateValidator(),
  controller.validate,
  controller.updateAddress
);
// delete address
router.delete(
  "/delete/:addressId",
  controller.deleteAddress
);
// view an address
router.get(
  "/view/:addressId",
  controller.viewAddress
);



module.exports = router;
