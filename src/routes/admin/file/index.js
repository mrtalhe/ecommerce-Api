const express = require("express");
const router = express.Router();
const controller = require("./controller");
const {fsLimit,fpExist,fxLimit} = require('./../../../middlewares/upload')
const fileUpload = require("express-fileupload");

// create file
router.post(
  "/upload",

  fpExist,
  fxLimit(['jpg', 'jpeg', 'png', 'mp3', 'mpeg']),
  fsLimit(1 * 1024 * 1024),
  controller.addFile
);
// update file
router.patch(
  "/update/:fileId",

  controller.updateFile
);
// delete file
router.delete("/delete/:fileId", controller.deleteFile)
// view file
router.get("/view/:fileId", controller.viewFile)
// list file
router.get("/list", controller.list)


module.exports = router;
