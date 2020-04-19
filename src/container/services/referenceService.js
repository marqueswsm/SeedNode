class ReferenceService {
  constructor(context) {
    this.referenceModel = context.ReferenceModel;
  }

  async create(data) {
    const response = await this.referenceModel.create(data);
    return response;
  }
}

module.exports = ReferenceService;
