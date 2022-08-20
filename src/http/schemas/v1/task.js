const joi = require('@hapi/joi');

const createTask = joi.object({
  body: joi.object({
    description: joi.string(),
    citation: joi.string().required(),
    year: joi.string(),
    bibtex: joi.string().required(),
  }).required(),
});

const getTask = joi.object({
  query: joi.object({
    year: joi.string(),
  }),
});

module.exports = {
  createTask,
  getTask,
};
