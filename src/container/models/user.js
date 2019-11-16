/* eslint-disable class-methods-use-this */
class UserModel {
  getTableName() {
    return 'users';
  }

  async get() {
    return { response: 'It is working well yet' };
  }
}

module.exports = UserModel;
