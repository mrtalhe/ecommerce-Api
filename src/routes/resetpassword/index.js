const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.post(
  '/forget',
  controller.forgetPassword
);
router.patch(
  '/:resetToken',
  controller.resetPassword
);

module.exports = router;