const express = require('express');
const router = express.Router();
const controller = require('./controller');




router.get('/',  controller.getAllComments)
router.delete('/:id',  controller.destroy)
router.put('/:id/approve',  controller.update)






















module.exports = router;