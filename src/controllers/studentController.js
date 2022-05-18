const { Student } = require('../models');
const AppError = require('../utils/appError');
require('express-async-errors');
const { Op } = require('sequelize');

exports.getStudents = async (req, res, next) => {
  if (
    !req.query.resultStatus ||
    !(
      req.query.resultStatus === 'passed' || req.query.resultStatus === 'failed'
    )
  ) {
    throw new AppError('Please provide a valid result status', 400);
  }
  const condition =
    req.query.resultStatus === 'passed' ? { [Op.gte]: 50 } : { [Op.lt]: 50 };
  const students = await Student.findAll({
    where: { average: condition },
  });

  res.status(200).json({
    status: 'success',
    data: {
      students,
    },
  });
};
