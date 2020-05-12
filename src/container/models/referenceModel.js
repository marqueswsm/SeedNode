const { v4: uuidv4 } = require('uuid');

class ReferenceModel {
  constructor(database) {
    this.database = database;
  }

  async create(data) {
    const id = uuidv4();
    await this.database('reference')
      .insert({ ...data, id });
    return { id };
  }

  async get() {
    const response = await this.database('reference')
      .select('*');
    return response;
  }
}

module.exports = ReferenceModel;
