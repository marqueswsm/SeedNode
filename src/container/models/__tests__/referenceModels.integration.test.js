const database = require('../../../helpers/database');
const ReferenceModel = require('../referenceModel');
const { makeReference } = require('../../../helpers/testHelper');

describe('referenceModels integration tests', () => {
  describe('#create', () => {
    it('should create a new reference and return an id', async () => {
      const referenceModel = new ReferenceModel(database);
      const reference = makeReference();

      const id = await referenceModel.create(reference);
      expect(id).toBeDefined();
    });
  });
});
