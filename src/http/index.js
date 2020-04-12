const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors);
app.use(bodyParser.json());

/* Routes */
const referenceRoute = require('./routes/reference');

/* Instantiate */
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
