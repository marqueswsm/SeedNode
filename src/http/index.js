const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/* Routes */
const referenceRoute = require('./routes/referenceRoute');

/* Express initialization */
const app = express();

/* Express utilites */
app.use(cors());
app.use(bodyParser.json());

/* Instatiate routes */
app.use('/reference', referenceRoute);

/* Status endpoint */
app.get(['/info', '/status'], async (req, res, next) => {
  try {
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
