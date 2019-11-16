const UserModel = require('./models/user');
const UserService = require('./services/user');

class Container {
  constructor() {
    const serviceContext = {
      userModel: new UserModel(),
    };

    this.userService = new UserService(serviceContext);
  }
}

module.exports = Container;
