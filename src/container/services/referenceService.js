class ReferenceService {
  constructor(context) {
    this.referenceModel = context.referenceModel;
  }

  async create(data) {
    const response = await this.referenceModel.create(data);
    return response;
  }

  async get() {
    const response = await this.referenceModel.get();
    return response;
  }

  async getById(id) {
    const response = await this.referenceModel.getById(id);
    return response;
  }
}

module.exports = ReferenceService;
