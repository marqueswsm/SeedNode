class Task {
  constructor(context) {
    this.taskModel = context.taskModel;
  }

  create(data) {
    return this.taskModel.create(data);
  }
}

module.exports = Task;
