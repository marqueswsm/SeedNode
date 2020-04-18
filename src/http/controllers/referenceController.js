/* eslint-disable class-methods-use-this */
const { referenceService } = require('../../container');

class ReferenceController {
  async create(req, res) {
    const response = await referenceService.create(req.body);
    res.send(response);
  }
}

module.exports = new ReferenceController();
