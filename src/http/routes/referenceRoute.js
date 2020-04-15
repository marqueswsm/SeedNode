const express = require('express');
const referenceController = require('../controllers/referenceController');

const router = express.Router();

router.get(
  '/',
  referenceController.create,
);

module.exports = router;
