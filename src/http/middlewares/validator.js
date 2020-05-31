const R = require('ramda');

const { BadRequest } = require('../../helpers/error');

const validatorMiddleware = R.curryN(4, (schema, req, res, next) => {
  const validation = schema.validate(req, {
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
  });

  if (validation.error) {
    return next(new BadRequest(validation.error.details));
  }

  return next();
});

module.exports = validatorMiddleware;
