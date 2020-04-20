const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/* Routes */
const Routes = require('./routes');

/* Express initialization */
const app = express();

/* Express utilites */
app.use(cors());
app.use(bodyParser.json());

/* Instatiate routes */
app.use('/v1', Routes.v1);

/* Status endpoint */
app.get(['/info', '/status'], async (req, res, next) => {
  try {
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
