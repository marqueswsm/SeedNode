const express = require('express');
const Reference = require('./reference');

const router = express.Router();

router.use('/reference', Reference);

module.exports = router;
