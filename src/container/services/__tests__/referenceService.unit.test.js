const Chance = require('chance');
const Uuid = require('uuid-converter');

const ReferenceService = require('../referenceService');

describe('Reference model unit tests', () => {
  describe('#create', () => {
    const chance = new Chance();

    it('should call referenceModel.create with a reference', async () => {
      const fakeModel = {
        referenceModel: {
          create: jest.fn(),
        },
      };

      const referenceService = new ReferenceService(fakeModel);

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

      const referenceService = new ReferenceService(fakeModel);

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

  describe('#get', () => {
    const chance = new Chance();

    it('should call referenceModel.get without an year', async () => {
      const fakeModel = {
        referenceModel: {
          get: jest.fn(),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      await referenceService.get();

      expect(fakeModel.referenceModel.get).toHaveBeenCalled();
      expect(fakeModel.referenceModel.get).toHaveBeenCalledWith(undefined);
    });

    it('should call referenceModel.get with an year', async () => {
      const year = '2015';

      const fakeModel = {
        referenceModel: {
          get: jest.fn(),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      await referenceService.get(year);

      expect(fakeModel.referenceModel.get).toHaveBeenCalled();
      expect(fakeModel.referenceModel.get).toHaveBeenCalledWith(year);
    });

    it('should call referenceModel.get and return an array of references', async () => {
      const year = '2015';

      const references = [
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

      const fakeModel = {
        referenceModel: {
          get: jest.fn().mockResolvedValue(references),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      const response = await referenceService.get(year);

      expect(response).toEqual(references);
    });
  });

  describe('#getById', () => {
    const chance = new Chance();

    it('should call referenceModel.getById with an id', async () => {
      const id = Uuid.generate();
      const fakeModel = {
        referenceModel: {
          getById: jest.fn(),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      await referenceService.getById(id);

      expect(fakeModel.referenceModel.getById).toHaveBeenCalled();
      expect(fakeModel.referenceModel.getById).toHaveBeenCalledWith(id);
    });

    it('should call referenceModel.getById and return a reference', async () => {
      const id = Uuid.generate();
      const reference = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      const fakeModel = {
        referenceModel: {
          getById: jest.fn().mockResolvedValue(reference),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      const response = await referenceService.getById(id);

      expect(response).toEqual(reference);
    });

    it('should call referenceModel.getById and return empty if the reference is not found', async () => {
      const id = Uuid.generate();

      const fakeModel = {
        referenceModel: {
          getById: jest.fn().mockResolvedValue(undefined),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      const response = await referenceService.getById(id);

      expect(response).toEqual(undefined);
    });
  });

  describe('#update', () => {
    const chance = new Chance();

    it('should call referenceModel.update with an id', async () => {
      const id = Uuid.generate();
      const data = {
        description: chance.string({ length: 30 }),
      };

      const fakeModel = {
        referenceModel: {
          update: jest.fn(),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      await referenceService.update(id, data);

      expect(fakeModel.referenceModel.update).toHaveBeenCalled();
      expect(fakeModel.referenceModel.update).toHaveBeenCalledWith(id, data);
    });

    it('should call referenceModel.update with an id and a valid data', async () => {
      const id = Uuid.generate();
      const data = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      const fakeModel = {
        referenceModel: {
          update: jest.fn(),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      await referenceService.update(id, data);

      expect(fakeModel.referenceModel.update).toHaveBeenCalled();
      expect(fakeModel.referenceModel.update).toHaveBeenCalledWith(id, data);
    });

    it('should call referenceModel.update and return empty', async () => {
      const id = Uuid.generate();
      const data = {
        description: chance.string({ length: 30 }),
        citation: chance.string({ length: 200 }),
        year: chance.year(),
        bibtex: chance.string({ alpha: true }),
      };

      const fakeModel = {
        referenceModel: {
          update: jest.fn().mockResolvedValue(undefined),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      const response = await referenceService.update(id, data);

      expect(response).toEqual(undefined);
    });
  });

  describe('#delete', () => {
    it('should call referenceModel.delete with an id', async () => {
      const id = Uuid.generate();

      const fakeModel = {
        referenceModel: {
          delete: jest.fn(),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      await referenceService.delete(id);

      expect(fakeModel.referenceModel.delete).toHaveBeenCalled();
      expect(fakeModel.referenceModel.delete).toHaveBeenCalledWith(id);
    });

    it('should call referenceModel.delete and return undefined', async () => {
      const id = Uuid.generate();

      const fakeModel = {
        referenceModel: {
          delete: jest.fn().mockResolvedValue(undefined),
        },
      };

      const referenceService = new ReferenceService(fakeModel);
      const response = await referenceService.delete(id);

      expect(response).toEqual(undefined);
    });
  });
});
