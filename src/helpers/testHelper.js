// eslint-disable-next-line import/no-extraneous-dependencies
const Chance = require('chance');

const chance = new Chance();

const makeReference = () => ({
  description: chance.string({ length: 40 }),
  citation: chance.string({ length: 50 }),
  year: chance.year(),
  bibtex: chance.string({ length: 30, alpha: true }),
});

module.exports = {
  makeReference,
};
