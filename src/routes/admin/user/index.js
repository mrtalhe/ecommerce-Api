const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");
// get all users
router.get(
  "/",

  controller.users
);
// create user
router.post(
  "/create",
  validator.createValidator(),
  controller.validate,
  controller.createUser
);
// update user
router.put(
  "/:id",
  validator.updateValidator(),
  controller.validate,
  controller.updateUser
);
// delete user
router.delete("/:id", controller.deleteUser);
// admin access
router.put("/accessadmin/:id", controller.adminAccess)

module.exports = router;
