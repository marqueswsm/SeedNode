/* eslint-disable class-methods-use-this */
const Uuid = require('uuid/v4');

class ReferenceModel {
  constructor(database) {
    this.database = database;
  }

  create(data) {
    const id = Uuid();
    return this.database('reference')
      .returning('id').insert({ ...data, id });
  }
}

module.exports = ReferenceModel;
