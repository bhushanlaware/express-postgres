const { check } = require('express-validator');
const validationHelper = require('../../libs/validate');
const errorMessages = require('../../utils/errorMessages');
const createSubcription = {
  checkBody: [
    check('username')
      .exists()
      .not()
      .isEmpty()
      .isString()
      .withMessage(errorMessages.ValidationError),
    check('PlanId')
      .exists()
      .not()
      .isEmpty()
      .isString()
      .withMessage(errorMessages.ValidationError),
    check('startDate')
      .exists()
      .not()
      .isEmpty()
      .isInt()
      .withMessage(errorMessages.ValidationError),
    (req, res, next) => {
      validationHelper.validate(req, res, next);
    },
  ],
};

module.exports = { createSubcription };