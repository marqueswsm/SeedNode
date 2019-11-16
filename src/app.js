const { Logger: logger } = require('./logger');
const HttpServer = require('./http');
const Container = require('./container');

module.exports = class Application {
  constructor(config) {
    this.config = config;
  }

  async start() {
    const {
      httpPort,
      httpBodyLimit,
    } = this.config;

    const container = new Container();

    this.httpServer = new HttpServer(container, {
      port: httpPort,
      bodyLimit: httpBodyLimit,
    });

    this.httpServer.start();
    logger.info(`Http server started in port ${this.httpServer.port}`);
  }
};
