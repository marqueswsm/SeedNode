const { BadRequest } = require('../../helpers/error');

class ReferenceController {
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

  async get(req, res, next) {
    try {
      const { year } = req.query;
      const response = await this.referenceService.get(year);

      if (!response) {
        return res.sendStatus(204);
      }

      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const response = await this.referenceService.getById(id);

      if (!response) {
        return res.sendStatus(204);
      }

      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const reference = await this.referenceService.getById(id);
      if (!reference) {
        throw new BadRequest('Reference not found');
      }

      const data = req.body;

      await this.referenceService.update(id, data);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await this.referenceService.delete(id);
      res.sendStatus(204);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ReferenceController;
