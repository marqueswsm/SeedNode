const Chance = require('chance');
const { Request } = require('jest-express/lib/request');
const { Response } = require('jest-express/lib/response');

const ReferenceModel = require('../../../container/models/reference');
const ReferenceService = require('../../../container/services/reference');
const ReferenceController = require('../reference');
const database = require('../../../helpers/database');

describe('Reference controller unit tests', () => {
  describe('#create', () => {
    const chance = new Chance();

    afterAll(() => {
      database.destroy();
    });

    it('should insert a reference and return status 201', async () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const container = {
        referenceService: new ReferenceService({
          referenceModel: new ReferenceModel({
            database,
          }),
        }),
      };

      const referenceController = new ReferenceController(container);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      request.setBody(reference);
      await referenceController.create(request, response, next);

      const [register] = await database('reference').where(reference);
      expect(register).toEqual(
        expect.objectContaining(reference),
      );
      expect(response.status).toHaveBeenCalledWith(201);

      await database('reference').where(reference).del();
    });

    it('should insert a reference and return and id', async () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const container = {
        referenceService: new ReferenceService({
          referenceModel: new ReferenceModel({
            database,
          }),
        }),
      };

      const referenceController = new ReferenceController(container);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      request.setBody(reference);
      await referenceController.create(request, response, next);

      const [register] = await database('reference').where(reference);
      expect(register).toEqual(
        expect.objectContaining(reference),
      );
      expect(response.send).toHaveBeenCalledWith(
        expect.objectContaining({
          id: expect.any(String),
        }),
      );

      await database('reference').where(reference).del();
    });

    it('should call next if another layer throws', async () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const container = {
        referenceService: new ReferenceService({
          referenceModel: jest.fn(() => {
            throw new Error();
          }),
        }),
      };

      const referenceController = new ReferenceController(container);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      request.setBody(reference);
      await referenceController.create(request, response, next);

      expect(next).toHaveBeenCalled();

      await database('reference').where(reference).del();
    });
  });
});
