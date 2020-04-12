const { init } = require('@somosphi/logger');

const {
  AxiosLogger,
  ExpressLogger,
  Logger,
} = init({
  PROJECT_NAME: 'seed-node',
  OMIT_ROUTES: ['/status', '/info'],
});

module.exports = {
  axiosLogger: AxiosLogger,
  expressLogger: ExpressLogger,
  logger: Logger,
};
