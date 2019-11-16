/* eslint-disable class-methods-use-this */
class UserController {
  constructor(container) {
    this.userService = container.userService;
  }

  register(router) {
    router.get(
      '/v1/users',
      this.list.bind(this),
    );
  }

  async list(req, res, next) {
    try {
      res.send({ response: 'List users' });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
