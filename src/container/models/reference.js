const { v4: uuidV4 } = require('uuid');

class Reference {
  constructor(context) {
    this.database = context.database;
  }

  async create(data) {
    const id = uuidV4();

    return this.database('reference')
      .insert({ ...data, id })
      .then(() => ({ id }));
  }
}

module.exports = Reference;
