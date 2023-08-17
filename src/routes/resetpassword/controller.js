const controller = require("./../controller");
const UserModel = require("./../../models/user")
const { resetPassTemp } = require("../../templates/emails/forget");
const { sendEmail } = require("../../utils/nodemailer");

module.exports = new (class extends controller {

  async forgetPassword(req, res) {
    if (!req.body.email)
      return this.response({
        res,
        code: 400,
        message: "Provide username or email address",
      });
    const { email } = req.body;
    const user = await this.User.findOne({ email });

    if (!user)
      return this.response({ res, code: 404, message: "No user found!" });
    // create token
    const token = await user.genResetToken();
    const template = await resetPassTemp(token);
    const options = { to: email, subject: "Reset Password", html: template };
    const message = await sendEmail(options);
    this.response({res,code: 200, message: message})
  }

  // reset password
  async resetPassword(req, res) {
    const token = req.params.resetToken;
    const { password } = req.body;
    if (!token || !password)
      return this.response({res,code: 400, message: "Bad request!"})

    const user = await UserModel.resetPassword(token, password);
    if (!user) return this.response({res,code: 401, message: "Invalid request!"})
    this.response({res,code: 200, message: "Your password changed!"})
  }
})();
