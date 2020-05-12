const express = require('express');
const container = require('../../../container');
const ReferenceController = require('../../controllers/referenceController');

const router = express.Router();

const controller = new ReferenceController(container);

router.route('/')
  .post(
    controller.create.bind(controller),
  )
  .get(
    controller.get.bind(controller),
  );

router.route('/:id')
  .get(
    controller.getById.bind(controller),
  )
  .patch(
    controller.update.bind(controller),
  )
  .delete(
    controller.delete.bind(controller),
  );

module.exports = router;
