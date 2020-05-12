const { v4: uuidv4 } = require('uuid');

class ReferenceModel {
  constructor(database) {
    this.database = database;
  }

  create(data) {
    const id = uuidv4();
    return this.database('reference')
      .insert({ ...data, id })
      .then(() => ({ id }));
  }

  async get() {
    const response = await this.database('reference')
      .select('*');
    return response;
  }
}

module.exports = ReferenceModel;
