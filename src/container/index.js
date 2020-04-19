const knex = require('knex');
const knexfile = require('../../knexfile');

const ReferenceService = require('./services/referenceService');

const database = knex(knexfile);

module.exports = {
  referenceService: new ReferenceService({ database }),
};
