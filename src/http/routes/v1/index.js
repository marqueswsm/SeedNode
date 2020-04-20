const express = require('express');
const ReferenceRouter = require('./referenceRouter');

const router = express.Router();

router.use('/reference', ReferenceRouter);
