const {
  BadRequest,
  InternalServerError,
  NotFound,
  NotImplemented,
  Unauthorized,
  UnprocessableEntity,
  CustomError,
} = require('@4alltecnologia/http-errors');

class Conflict extends CustomError {
  constructor(message, details = null) {
    super('CONFLICT', message, details);
  }
}

exports.default = {
  BadRequest,
  InternalServerError,
  NotFound,
  NotImplemented,
  Unauthorized,
  UnprocessableEntity,
  CustomError,
  Conflict,
};
