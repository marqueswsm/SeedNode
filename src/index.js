const Application = require('./app');
const { logger } = require('./logger');
const env = require('./env');

/* start service */
setImmediate(async () => {
  const application = new Application({
    httpPort: env.PORT,
    httpBodyLimit: env.BODY_LIMIT,
  });

  await application.start();
  logger.info('Application started');
});
