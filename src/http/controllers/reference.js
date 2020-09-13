class Reference {
  constructor(container) {
    this.referenceService = container.referenceService;
  }

  async create(req, res, next) {
    try {
      const response = await this.referenceService.create(req.body);
      res.status(201).send(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Reference;
