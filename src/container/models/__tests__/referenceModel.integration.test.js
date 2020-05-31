const Chance = require('chance');

const database = require('../../../helpers/database');
const ReferenceModel = require('../referenceModel');

describe('referenceModels integration tests', () => {
  describe('#create', () => {
    const chance = new Chance();

    it('should return an id', async () => {
      const referenceModel = new ReferenceModel(database);
      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      const id = await referenceModel.create(reference);
      expect(id).toBeDefined();
    });
  });
});
