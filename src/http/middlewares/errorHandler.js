const { BadRequest } = require('../../helpers/error');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, _next) => {
  let status = 500;

  if (err instanceof BadRequest) {
    status = 400;
  }

  return res
    .status(status)
    .send(JSON.stringify(err));
};

module.exports = errorHandler;
