const express = require("express");
const router = express.Router();
const controller = require("./controller");
const {fsLimit,fpExist,fxLimit} = require('./../../../middlewares/upload')
const fileUpload = require("express-fileupload")
const validator = require("./validator");

// create file
router.post(
  "/upload",

  fileUpload({ createParentPath: true }),

  fpExist,
  fxLimit(['jpg', 'jpeg', 'png', 'mp3', 'mpeg']),
  fsLimit(2 * 1024 * 1024),

  controller.addFile,


);
// update file
router.patch(
  "/update/:fileId",
  validator.updateValidator(),
  controller.validate,
  controller.updateFile
);
// delete file
router.delete("/delete/:fileId", controller.deleteFile)
// view file
router.get("/view/:fileId", controller.viewFile)
// list file
router.get("/list", controller.list)


module.exports = router;
