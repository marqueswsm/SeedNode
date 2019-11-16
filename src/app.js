const { Logger: logger } = require('./logger');
const HttpServer = require('./http');

module.exports = class Application {
  constructor(config) {
    this.config = config;
  }

  async start() {
    const {
      httpPort,
      httpBodyLimit,
    } = this.config;

    this.httpServer = new HttpServer({
      port: httpPort,
      bodyLimit: httpBodyLimit,
    });

    this.httpServer.start();
    logger.info(`Http server started in port ${this.httpServer.port}`);
  }
};
