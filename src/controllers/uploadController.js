const csvtojson = require('csvtojson');
const multer = require('multer');
const { Student } = require('../models');
const AppError = require('../utils/appError');
require('express-async-errors');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('text/csv')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an csv! Please upload only csv files.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.upload = upload.single('file');

exports.parse = async (req, res, next) => {
  const textChunk = req.file.buffer.toString('utf8');
  const json = await csvtojson().fromString(textChunk);

  await Student.bulkCreate(json);
  const students = await Student.findAll();

  res.status(200).json({
    status: 'success',
    data: {
      students,
    },
  });
};
