const controller = require("./../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {
  async dashboard(req, res) {
    res.send("user dashboard");
  }

  async profile(req, res) {
    this.response({
      res,
      message: "User Profile",
      data: _.pick(req.user, ["username", "email"]),
    });
  }

  async updateProfile(req, res) {
    let { username, password } = req.body;

    // hash user password
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    const user = await this.User.findByIdAndUpdate(
      req.user._id,
      { $set: { username, password } },
      { new: true }
    );

    await user.save();

    this.response({
      res,
      message: "User updated!",
      data: _.pick(req.user, ["username", "password"]),
    });
  }
})();
