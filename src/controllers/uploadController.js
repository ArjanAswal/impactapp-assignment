const csv = require('fast-csv');
const multer = require('multer');
const Student = require('../models/student');
const AppError = require('../utils/appError');
require('express-async-errors');

exports.upload = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    //   data: {
    //     students,
    //   },
  });
};
