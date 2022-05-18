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

  const data = json.map((student) => {
    return {
      name: student.name,
      age: Number(student.age),
      mark1: Number(student.mark1),
      mark2: Number(student.mark2),
      mark3: Number(student.mark3),
      average:
        (Number(student.mark1) +
          Number(student.mark2) +
          Number(student.mark3)) /
        3,
    };
  });

  await Student.bulkCreate(data);
  const students = await Student.findAll();

  res.status(200).json({
    status: 'success',
    data: {
      students,
    },
  });
};
