/* eslint-disable class-methods-use-this */
class ReferenceModel {
  constructor(database) {
    this.database = database;
  }

  create(data) {
    this.database.table('reference').insert(data);
  }
}

module.exports = new ReferenceModel();
