const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const { ExpressLogger } = require('../logger');

const { NotFound } = require('../errors');

class HttpServer {
  constructor(config) {
    this.config = config;
  }

  start() {
    if (this.app) {
      return;
    }

    /* Express initialization */
    const app = express();

    /* Express utilites */
    app.use(helmet());
    app.use(cors());
    app.use(compression());
    app.use(bodyParser.json({
      limit: this.config.bodyLimit,
    }));

    /** Add Logger to Express */
    app.use(ExpressLogger.onSuccess.bind(ExpressLogger));
    app.use(ExpressLogger.onError.bind(ExpressLogger));

    app.get('/test', async (req, res) => {
      res.status(200).send({ response: 'Success' });
    });

    app.use('*', (req, res, next) => {
      next(new NotFound('Page not found'));
    });

    app.listen(this.config.port);

    this.app = app;
  }
}

module.exports = HttpServer;
