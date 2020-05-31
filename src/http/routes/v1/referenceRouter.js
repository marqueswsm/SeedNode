const express = require('express');

const container = require('../../../container');
const ReferenceController = require('../../controllers/referenceController');
const validateMiddleware = require('../../middlewares/validator');
const {
  createReference,
  getReferences,
  getReferenceById,
  updateReference,
  deleteReference,
} = require('../../schemas/v1/reference');

const router = express.Router();

const controller = new ReferenceController(container);

router.route('/')
  .post(
    validateMiddleware(createReference),
    controller.create.bind(controller),
  )
  .get(
    validateMiddleware(getReferences),
    controller.get.bind(controller),
  );

router.route('/:id')
  .get(
    validateMiddleware(getReferenceById),
    controller.getById.bind(controller),
  )
  .patch(
    validateMiddleware(updateReference),
    controller.update.bind(controller),
  )
  .delete(
    validateMiddleware(deleteReference),
    controller.delete.bind(controller),
  );

module.exports = router;
