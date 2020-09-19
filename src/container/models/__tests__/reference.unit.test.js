const Chance = require('chance');

const Reference = require('../reference');

describe('Reference model unit tests', () => {
  describe('#create', () => {
    const chance = new Chance();

    it('should call database with table name reference', async () => {
      const fakeDatabase = jest.fn(() => ({
        insert: jest.fn().mockReturnThis(),
      }));

      const referenceModel = new Reference({
        database: fakeDatabase,
      });

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      await referenceModel.create(reference);

      expect(fakeDatabase).toHaveBeenCalled();
    });

    it('should call insert with the reference data', async () => {
      const fakeQuery = {
        insert: jest.fn().mockReturnThis(),
      };

      const fakeDatabase = jest.fn(() => fakeQuery);

      const referenceModel = new Reference({
        database: fakeDatabase,
      });

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      await referenceModel.create(reference);

      expect(fakeQuery.insert).toHaveBeenCalled();
      expect(fakeQuery.insert).toHaveBeenCalledWith(
        expect.objectContaining(reference),
      );
    });

    it('should return a valid response', async () => {
      const fakeQuery = {
        insert: jest.fn().mockReturnThis(),
      };

      const fakeDatabase = jest.fn(() => fakeQuery);

      const referenceModel = new Reference({
        database: fakeDatabase,
      });

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      const response = await referenceModel.create(reference);

      expect(response).toEqual(expect.objectContaining({
        id: expect.any(String),
      }));
    });

    it('should call insert with an id', async () => {
      const fakeQuery = {
        insert: jest.fn().mockReturnThis(),
      };

      const fakeDatabase = jest.fn(() => fakeQuery);

      const referenceModel = new Reference({
        database: fakeDatabase,
      });

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      await referenceModel.create(reference);

      expect(fakeQuery.insert).toHaveBeenCalledWith(expect.objectContaining({
        id: expect.any(String),
      }));
    });
  });
});
