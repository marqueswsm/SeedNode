class ReferenceController {
  constructor(container) {
    this.referenceService = container.referenceService;
  }

  async create(req, res) {
    const response = await this.referenceService.create(req.body);
    res.status(201).send(response);
  }

  async get(req, res) {
    const response = await this.referenceService.get(req.body);
    res.status(200).send(response);
  }
}

module.exports = ReferenceController;
