const { v4: uuidv4 } = require('uuid');

class ReferenceModel {
  constructor(database) {
    this.database = database;
  }

  create(data) {
    const id = uuidv4();
    return this.database
      .insert({ ...data, id });
  }
}

module.exports = ReferenceModel;
