const database = require('../../../helpers/database');
const ReferenceModel = require('../referenceModel');

describe('referenceModels integration tests', () => {
  describe('#create', () => {
    it('should create a new reference', async () => {
      const referenceModel = new ReferenceModel(database);

      await referenceModel.create();
    });
  });
});
