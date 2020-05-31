const joi = require('@hapi/joi');

const createReference = joi.object({
  body: joi.object({
    description: joi.string(),
    citation: joi.string().required(),
    year: joi.string(),
    bibtex: joi.string().required(),
  }).required(),
});

const getReferences = joi.object({
  query: joi.object({
    year: joi.string(),
  }),
});

const getReferenceById = joi.object({
  params: joi.object({
    referenceId: joi.string().required(),
  }),
});

const updateReference = joi.object({
  params: joi.object({
    referenceId: joi.string().required(),
  }),
  body: joi.object({
    description: joi.string(),
    citation: joi.string(),
    year: joi.string(),
    bibtex: joi.string(),
  }).required(),
});

const deleteReference = joi.object({
  params: joi.object({
    referenceId: joi.string().required(),
  }),
});

module.exports = {
  createReference,
  getReferences,
  getReferenceById,
  updateReference,
  deleteReference,
};
