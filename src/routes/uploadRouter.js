const express = require('express');
const uploadController = require('../controllers/uploadController');
const router = express.Router();

router.route('/').put(uploadController.upload, uploadController.parse);

module.exports = router;
