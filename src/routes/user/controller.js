const controller = require("./../controller");
const _ = require("lodash");

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

  
})();
