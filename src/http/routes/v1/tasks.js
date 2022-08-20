const express = require('express');

const container = require('../../../container');
const TaskController = require('../../controllers/tasks');
const validateMiddleware = require('../../middlewares/validator');
const {
  createReference,
} = require('../../schemas/v1/task');

const router = express.Router();

const controller = new TaskController(container);

router.route('/')
  .post(
    validateMiddleware(createReference),
    controller.create.bind(controller),
  );

module.exports = router;
