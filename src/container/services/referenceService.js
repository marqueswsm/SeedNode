/* eslint-disable class-methods-use-this */
const ReferenceModel = require('../models/referenceModel');

class ReferenceService {
  async create(data) {
    const response = await ReferenceModel.create(data);
    return response;
  }
}

module.exports = new ReferenceService();
