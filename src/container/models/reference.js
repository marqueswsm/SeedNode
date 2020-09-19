const { v4: uuidV4 } = require('uuid');

class Reference {
  constructor(context) {
    this.database = context.database;
  }

  async create(data) {
    const id = uuidV4();

    await this.database('reference')
      .insert({ ...data, id });

    return { id };
  }
}

module.exports = Reference;
