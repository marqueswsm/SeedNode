const TaskModel = require('./models/tasks');
const TaskService = require('./services/tasks');
const database = require('../helpers/database');

const models = {
  taskModel: new TaskModel({
    database,
  }),
};

const services = {
  taskService: new TaskService(models),
};

const container = services;

module.exports = container;
