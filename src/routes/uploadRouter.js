const express = require('express');
const uploadController = require('../controllers/uploadController');
const router = express.Router();

router.route('/').put(uploadController.upload);

module.exports = router;
