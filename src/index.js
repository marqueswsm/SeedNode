const R = require('ramda');

const env = require('./env');
const Application = require('./app');

const appConfig = R.pick(
  [
    'httpPort',
    'httpBodyLimit',
    'dbConnector',
  ],
  env,
);

const application = new Application(appConfig);

setImmediate(async () => {
  await application.start();
});
