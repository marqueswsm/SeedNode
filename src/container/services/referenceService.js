class ReferenceService {
  constructor(context) {
    this.referenceModel = context.referenceModel;
  }

  create(data) {
    return this.referenceModel.create(data);
  }

  get(year) {
    return this.referenceModel.get(year);
  }

  getById(id) {
    return this.referenceModel.getById(id);
  }

  async update(id, data) {
    await this.referenceModel.update(id, data);
  }

  async delete(id) {
    await this.referenceModel.delete(id);
  }
}

module.exports = ReferenceService;
