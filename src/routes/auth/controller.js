const controller = require("./../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { validationResult } = require("express-validator");
module.exports = new (class extends controller {
  async register(req, res) {

    // // check user
    let user = await this.User.findOne({ email: req.body.email });
    if (user) {
      return this.response({
        res,
        code: 400,
        message: "this user already registered",
      });
    }
    // create user
    user = new this.User(_.pick(req.body, ["username", "email", "password"]));
    // hash user password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    // save and send response
    await user.save();

    this.response({
      res,
      code: 200,
      message: "the user successfuly registered",
      data: _.pick(user, ["_id", "username", "email"]),
    });
    
  }



  
  async login(req, res) {
    // check user
    const user = await this.User.findOne({ email: req.body.email });
    if (!user) {
      return this.response({
        res,
        code: 400,
        message: "invalid or password",
      });
    }
    // check password
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
      return this.response({
        res,
        code: 400,
        message: "invalid email or password",
      });
    }
    // create token and send response
    const token = jwt.sign({ _id: user.id }, config.get("jwt_key"));
    this.response({
      res,
      code: 200,
      message: "successfuly logged in",
      data: { token },
    });
  }
})();
