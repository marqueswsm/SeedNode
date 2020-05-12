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

  async getById(id) {
    const response = await this.database('reference')
      .select('*')
      .where({ id })
      .first();
    return response;
  }

  async update(id, data) {
    await this.database('reference')
      .update({ ...data })
      .where({ id });
  }

  async delete(id) {
    await this.database('reference')
      .delete()
      .where({ id });
  }
}

module.exports = ReferenceModel;
