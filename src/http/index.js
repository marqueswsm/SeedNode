const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

const UserController = require('../http/controllers/v1/user');

const { ExpressLogger } = require('../logger');

const { NotFound } = require('../errors');

class HttpServer {
  constructor(container, config) {
    this.container = container;
    this.config = config;
  }

  loadControllers() {
    return [
      new UserController(this.container),
    ];
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

    this.loadControllers().forEach((controller) => {
      const router = express.Router({ mergeParams: true });
      controller.register(router);
      app.use(router);
    });

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
