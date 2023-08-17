const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const crypto = require("crypto")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  username: { type: String ,required: true},
  password: { type: String, required: true},
  isadmin: { type: Boolean, default: false},
  resetToken: { type: String, select: false },
  resetExpire: { type: Date, select: false }
});

userSchema.plugin(timestamp);

// generate reset token
userSchema.methods.genResetToken = async function() {
  const data =  crypto.randomBytes(40).toString('hex');
  const resetToken = crypto.createHash('sha256').update(data).digest('hex');
  this.resetToken = resetToken;
  this.resetExpire = Date.now() + 5 * 60 * 1000;
  await this.save();
  return data;
}

userSchema.statics.resetPassword = async function(token,password) {
  const resetToken = crypto.createHash('sha256').update(token).digest('hex');
  const user = await User.findOne({ resetToken, resetExpire: { $gte: Date.now() } }).select('resetToken resetExpire');
  if (!user)
      return false;
  user.password = password;
  user.resetToken = '';
  user.resetExpire = '';

  // hash password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  return true;
}

const User = mongoose.model("User", userSchema );



module.exports = User;