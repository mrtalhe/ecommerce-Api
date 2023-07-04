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


router.put(
  '/update',

  controller.updateProfile
);

module.exports = router;