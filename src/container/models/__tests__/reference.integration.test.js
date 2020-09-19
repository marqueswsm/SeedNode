const Chance = require('chance');

const Reference = require('../reference');
const database = require('../../../helpers/database');

describe('should insert a reference', () => {
  describe('#create', () => {
    const chance = new Chance();

    afterAll(() => {
      database.destroy();
    });

    it('should insert a reference in the database', async () => {
      const referenceModel = new Reference({
        database,
      });

      const reference = {
        description: chance.string({ length: 10 }),
        citation: chance.string({ length: 100 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true, length: 100 }),
      };

      const id = await referenceModel.create(reference);

      const [register] = await database('reference').where(id);

      expect(register).toEqual(
        expect.objectContaining(reference),
      );

      await database('reference').where(id).del();
    });

    it('should insert a reference and return an id', async () => {
      const referenceModel = new Reference({
        database,
      });

      const reference = {
        description: chance.string({ length: 10 }),
        citation: chance.string({ length: 100 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true, length: 100 }),
      };

      const id = await referenceModel.create(reference);

      expect(id).toEqual({
        id: expect.any(String),
      });

      await database('reference').where(id).del();
    });
  });
});
