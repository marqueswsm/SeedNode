class Task {
  constructor(container) {
    this.taskService = container.taskService;
  }

  async create(req, res, next) {
    try {
      const response = await this.taskService.create(req.body);
      res.status(201).send(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Task;
