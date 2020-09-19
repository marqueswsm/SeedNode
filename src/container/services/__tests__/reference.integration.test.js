const Chance = require('chance');

const database = require('../../../helpers/database');
const ReferenceService = require('../reference');
const ReferenceModel = require('../../models/reference');

describe('Reference model integration tests', () => {
  describe('#create', () => {
    const chance = new Chance();

    afterAll(() => {
      database.destroy();
    });

    it('should insert a new reference and return an id', async () => {
      const context = {
        referenceModel: new ReferenceModel({
          database,
        }),
      };

      const referenceService = new ReferenceService(context);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      const id = await referenceService.create(reference);

      expect(id).toEqual(
        expect.objectContaining({
          id: expect.any(String),
        }),
      );

      await database('reference').where(id).del();
    });

    it('should insert a reference', async () => {
      const context = {
        referenceModel: new ReferenceModel({
          database,
        }),
      };

      const referenceService = new ReferenceService(context);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      const id = await referenceService.create(reference);
      const [register] = await database('reference').where(id);

      expect(register).toEqual(
        expect.objectContaining(reference),
      );

      await database('reference').where(id).del();
    });
  });
});
