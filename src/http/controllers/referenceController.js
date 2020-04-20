class ReferenceController {
  constructor(container) {
    this.referenceService = container.referenceService;
  }

  async create(req, res) {
    const response = await this.referenceService.create(req.body);
    res.send(response);
  }
}

module.exports = ReferenceController;
