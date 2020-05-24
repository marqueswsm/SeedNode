/* eslint-disable max-classes-per-file */
class CustomError extends Error {
  constructor(code, message) {
    super();
    this.code = code;
    this.message = message;
  }

  toJSON() {
    return {
      error: {
        code: this.code,
        message: this.message,
      },
    };
  }
}

class BadRequest extends CustomError {
  constructor(message) {
    super('BAD_REQUEST', message);
  }
}

module.exports = {
  CustomError,
  BadRequest,
};
