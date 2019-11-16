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
      res.send(await this.userService.all());
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
