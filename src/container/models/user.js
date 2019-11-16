/* eslint-disable class-methods-use-this */
const database = require('../../helpers/database');

class UserModel {
  getTableName() {
    return 'users';
  }

  async get() {
    const users = await database('user').select(['id', 'name']);
    return users;
  }
}

module.exports = UserModel;
