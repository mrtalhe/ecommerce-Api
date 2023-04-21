const controller = require("../../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

module.exports = new (class extends controller {
  // get All users
  async users(req, res) {
    const qNew = req.query.new

    let users;

    if(qNew){
      users = await this.User.find().sort({createdAt: -1}).limit(5)
    } else{
      users = await this.User.find();
    }

    this.response({
      res,
      code: 200,
      data: users,
      message: "the All users",
    });
  }

  // create User
  async createUser(req, res) {
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

  // update user
  async updateUser(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }
    // update process
    const user = await this.User.findByIdAndUpdate(req.params.id, {$set: { ...req.body }}, {new: true});

    // hash user password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    // save and send response
    await user.save();

    this.response({
      res,
      code: 200,
      message: "the user successfuly updated",
      data: _.pick(user, ["_id", "username", "email"]),
    });
  }

  // delete User
  async deleteUser(req, res) {
    // check Object Id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return this.response({
        res,
        code: 400,
        message: "invalid object id",
      });
    }
    // delete process
    const user = await this.User.findByIdAndDelete(req.params.id);
    // send response
    this.response({
      res,
      code: 200,
      message: "the user successfuly deleted",
      data: _.pick(user, ["_id", "username", "email"]),
    });
  }

  // admin access
  async adminAccess(req, res) {
    const user = await this.User.findOne({_id: req.params.id});
    user.set({ isadmin: ! user.isadmin });
    await user.save();

    this.response({
      res,
      code: 200,
      message: "The user has successfully become an administrator",
      data: _.pick(user, ["_id", "username", "email", "isadmin"]),
    })

  }
})();
