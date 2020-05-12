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

  async getById(req, res) {
    const { id } = req.params;
    const response = await this.referenceService.getById(id);

    if (!response) {
      return res.sendStatus(204);
    }

    return res.status(200).send(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;

    await this.referenceService.update(id, data);
    res.sendStatus(204);
  }

  async delete(req, res) {
    const { id } = req.params;
    await this.referenceService.delete(id);
    res.sendStatus(204);
  }
}

module.exports = ReferenceController;
