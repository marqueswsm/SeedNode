/* eslint-disable class-methods-use-this */

class UserService {
  constructor(context) {
    this.userModel = context.userModel;
  }

  async all() {
    const users = await this.userModel.get();
    return users;
  }
}

module.exports = UserService;
