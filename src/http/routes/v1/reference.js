const express = require('express');

const container = require('../../../container');
const ReferenceController = require('../../controllers/reference');
const validateMiddleware = require('../../middlewares/validator');
const {
  createReference,
} = require('../../schemas/v1/reference');

const router = express.Router();

const controller = new ReferenceController(container);

router.route('/')
  .post(
    validateMiddleware(createReference),
    controller.create.bind(controller),
  );

module.exports = router;
