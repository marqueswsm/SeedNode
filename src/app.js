const express = require('express');

const { logger } = require('./logger');
const HttpServer = require('./http');

class Application {
  constructor(configs) {
    this.configs = configs;
  }

  async start() {
    const {
      httpPort,
      httpBodyLimit,
    } = this.configs;

    const app = express();

    const httpServer = new HttpServer({
      app,
      port: httpPort,
      bodyLimit: httpBodyLimit,
    });

    httpServer.start();
    logger.info('Http server started');
  }
}

module.exports = Application;
