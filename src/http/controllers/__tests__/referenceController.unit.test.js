const Chance = require('chance');
const Uuid = require('uuid-converter');
const { Request } = require('jest-express/lib/request');
const { Response } = require('jest-express/lib/response');

const ReferenceController = require('../referenceController');

describe('Reference controller unit tests', () => {
  describe('#create', () => {
    const chance = new Chance();

    it('should call service.create with a validBody', () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const fakeContainer = {
        referenceService: {
          create: jest.fn(),
        },
      };

      const referenceController = new ReferenceController(fakeContainer);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      request.setBody(reference);
      referenceController.create(request, response, next);

      expect(fakeContainer.referenceService.create).toHaveBeenCalledWith(reference);
    });

    it('should return with status 201', async () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const fakeContainer = {
        referenceService: {
          create: jest.fn().mockResolvedValue({ id: Uuid.generate() }),
        },
      };

      const referenceController = new ReferenceController(fakeContainer);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      request.setBody(reference);
      await referenceController.create(request, response, next);

      expect(response.status).toHaveBeenCalledWith(201);
    });

    it('should return an ID', async () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const id = Uuid.generate();

      const fakeContainer = {
        referenceService: {
          create: jest.fn().mockResolvedValue({ id }),
        },
      };

      const referenceController = new ReferenceController(fakeContainer);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      request.setBody(reference);
      await referenceController.create(request, response, next);

      expect(response.send).toHaveBeenCalledWith({ id });
    });

    it('should call next', async () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();
      const fakeContainer = {
        referenceService: {
          create: jest.fn(() => {
            throw new Error('Problem');
          }),
        },
      };

      const referenceController = new ReferenceController(fakeContainer);

      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      request.setBody(reference);
      await referenceController.create(request, response, next);

      expect(next).toHaveBeenCalled();
    });
  });

  describe('#get', () => {
    const chance = new Chance();
    it('should call service.get with an year', () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const fakeContainer = {
        referenceService: {
          get: jest.fn(),
        },
      };

      const referenceController = new ReferenceController(fakeContainer);
      const filter = {
        year: 2015,
      };

      request.setQuery(filter);
      referenceController.get(request, response, next);

      expect(fakeContainer.referenceService.get).toHaveBeenCalledWith(filter.year);
    });

    it('should call service.get without year', () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const fakeContainer = {
        referenceService: {
          get: jest.fn().mockResolvedValue(),
        },
      };

      const referenceController = new ReferenceController(fakeContainer);

      referenceController.get(request, response, next);

      expect(fakeContainer.referenceService.get).toHaveBeenCalled();
    });

    it('should return status 204 when reference service return empty', async () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const fakeContainer = {
        referenceService: {
          get: jest.fn(),
        },
      };

      const referenceController = new ReferenceController(fakeContainer);

      await referenceController.get(request, response, next);

      expect(response.status).toHaveBeenCalledWith(204);
    });

    it('should return status 204 when reference service return empty', async () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const fakeContainer = {
        referenceService: {
          get: jest.fn(),
        },
      };

      const referenceController = new ReferenceController(fakeContainer);

      await referenceController.get(request, response, next);

      expect(response.status).toHaveBeenCalledWith(204);
    });

    it('should return status 200 with an array of references', async () => {
      const request = new Request();
      const response = new Response();

      const next = jest.fn();

      const getResponse = [
        {
          description: chance.string({ length: 30 }),
          citation: chance.string({ length: 200 }),
          year: chance.year(),
          bibtex: chance.string({ alpha: true }),
        },
        {
          description: chance.string({ length: 30 }),
          citation: chance.string({ length: 200 }),
          year: chance.year(),
          bibtex: chance.string({ alpha: true }),
        },
      ];
      const fakeContainer = {
        referenceService: {
          get: jest.fn().mockResolvedValue(getResponse),
        },
      };

      const referenceController = new ReferenceController(fakeContainer);

      await referenceController.get(request, response, next);

      expect(response.send).toHaveBeenCalledWith(getResponse);
      expect(response.status).toHaveBeenCalledWith(200);
    });
  });
});
