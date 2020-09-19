const ReferenceModel = require('./models/reference');
const ReferenceService = require('./services/reference');
const database = require('../helpers/database');

const models = {
  referenceModel: new ReferenceModel({
    database,
  }),
};

const services = {
  referenceService: new ReferenceService(models),
};

const container = services;

module.exports = container;
