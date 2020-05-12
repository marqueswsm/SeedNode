const ReferenceModel = require('./models/referenceModel');
const ReferenceService = require('./services/referenceService');
const database = require('../helpers/database');

const models = {
  referenceModel: new ReferenceModel(database),
};

const services = {
  referenceService: new ReferenceService({
    ...models,
  }),
};

const container = {
  ...services,
};

module.exports = container;
