const ReferenceService = require('./services/referenceService');
const database = require('../helpers/database');

module.exports = {
  referenceService: new ReferenceService({ database }),
};
