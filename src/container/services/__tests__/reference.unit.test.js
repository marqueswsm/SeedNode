const Chance = require('chance');
const Uuid = require('uuid-converter');

const Reference = require('../reference');

describe('Reference model unit tests', () => {
  describe('#create', () => {
    const chance = new Chance();

    it('should call referenceModel.create with a reference', async () => {
      const fakeModel = {
        referenceModel: {
          create: jest.fn(),
        },
      };

      const referenceService = new Reference(fakeModel);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      await referenceService.create(reference);

      expect(fakeModel.referenceModel.create).toHaveBeenCalled();
      expect(fakeModel.referenceModel.create).toHaveBeenCalledWith(reference);
    });

    it('should call referenceModel.create and return an id', async () => {
      const id = Uuid.generate();
      const fakeModel = {
        referenceModel: {
          create: jest.fn().mockResolvedValue(id),
        },
      };

      const referenceService = new Reference(fakeModel);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      const response = await referenceService.create(reference);
      expect(response).toEqual(id);
    });
  });
});
