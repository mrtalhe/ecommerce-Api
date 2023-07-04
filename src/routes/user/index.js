const express = require('express');
const router = express.Router();
const controller = require('./controller');



router.get(
  '/',
  controller.dashboard
);

router.get(
  '/profile',

  controller.profile
);

module.exports = router;