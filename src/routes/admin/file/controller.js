const controller = require("../../controller");
const _ = require("lodash");
const { default: mongoose } = require("mongoose");
const { genFilePath } = require("./../../../../utils/file");
const { isValidReq } = require("./../../../../utils/validate");
const fs = require("fs");

module.exports = new (class extends controller {
  // create file
  async addFile(req, res, next) {
    try {
      const files = req.files;
      const items = [];

      Object.keys(files).forEach((item) => {
        const { name, size, encoding, mimetype, md5, mv } = files[item];
        const filepath = genFilePath(name, mimetype);
        mv(filepath, (err) => {
          if (err) {
            return next({
              code: 500,
              message: `Error while wrting file to disk! ${name}`,
            });
          }
        });

        items.push({
          name,
          md5,
          size,
          mimetype,
          encoding,
          filepath,
          userId: req.user._id,
        });
      });
      const newFiles = await this.FileModel.insertMany(items);

      this.response({
        res,
        code: 200,
        message: "the file created",
        data: newFiles,
      });
    } catch (error) {
      next(error);
    }
  }

  // update file
  async updateFile(req, res, next) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.fileId)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }
    const _id = req.params.fileId;
    const element = Object.keys(req.body);

    const isValidRB = isValidReq(req.body, ["name", "userId"]);
    if (!isValidRB) return next({ code: 400, message: "Bad request!" });
    try {
      let file = await this.FileModel.findOne({
        _id: _id,
        userId: req.user._id,
      });
      if (!file) return next({ code: 404, message: "No file was found!" });
      element.forEach((item) => (file[item] = req.body[item]));
      console.log(element);

      await file.save();
      this.response({
        res,
        code: 200,
        message: "file Updated! ",
        data: file,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // delete file
  async deleteFile(req, res, next) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.fileId)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }
    const _id = req.params.fileId;
    try {
      let isFile = await this.FileModel.findById(_id);

      if (isFile.filepath) {
        fs.unlinkSync(isFile.filepath);
      }

      let file = await this.FileModel.findOneAndDelete({
        _id,
        userId: req.user._id,
      });
      if (!file) return next({ code: 400, message: "No file was found" });
      this.response({
        res,
        code: 200,
        message: "file Deleted! ",
        data: file,
      });
    } catch (e) {
      next(e);
    }
  }

  // view file
  async viewFile(req, res, next) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.fileId)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }

    const _id = req.params.fileId;
    try {
      const file = await this.FileModel.findById(_id);
      if (!file) return next({ code: 404, message: "File not found!" });
      this.response({
        res,
        code: 200,
        message: "the file! ",
        data: file,
      });
    } catch (error) {
      next(error);
    }
  }

  // list file
  async list(req, res, next) {
    try {
      let files = await this.FileModel.find({ userId: req.user._id });
      if (!files.length)
        return next({ code: 404, message: "No file was found!" });

      this.response({
        res,
        code: 200,
        message: "Files retrieved. ",
        data: files,
      });
    } catch (e) {
      next(e);
    }
  }
})();
