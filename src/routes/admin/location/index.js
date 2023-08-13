const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");



// create location
router.post(
  "/add",
  validator.addLocationValidator(),
  controller.validate,
  controller.addLocation
);
// update location
router.put(
  "/update/:locationId",
  validator.updateLocationValidator(),
  controller.validate,
  controller.updateLocation
);
// delete location
router.delete(
  "/delete/:locationId",
  controller.deleteLocation
);

// list countries
router.get(
  "/list",
  controller.listCountries
);
// view location
router.get(
  "/view/:locationId",
  controller.viewLocation
);


module.exports = router;
