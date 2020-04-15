const knex = require('knex');
const knexfile = require('../../knexfile');

const referenceService = require('./services/referenceService');

const database = knex(knexfile);

module.exports = {
  referenceService: referenceService({ database }),
};
