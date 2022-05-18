const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.route('/').get(studentController.getStudents);
router.route('/:id/result').get(studentController.getStudentResults);

module.exports = router;
