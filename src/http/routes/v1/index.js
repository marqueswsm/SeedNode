const express = require('express');
const Task = require('./tasks');

const router = express.Router();

router.use('/task', Task);

module.exports = router;
