const express = require('express');
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
  }
}

module.exports = Application;
