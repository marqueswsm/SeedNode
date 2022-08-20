const { v4: uuidV4 } = require('uuid');

class Task {
  constructor(context) {
    this.database = context.database;
  }

  async create(data) {
    const id = uuidV4();

    await this.database('task')
      .insert({ ...data, id });

    return { id };
  }
}

module.exports = Task;
