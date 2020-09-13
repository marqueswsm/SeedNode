class Reference {
  constructor(context) {
    this.referenceModel = context.referenceModel;
  }

  create(data) {
    return this.referenceModel.create(data);
  }
}

module.exports = Reference;
