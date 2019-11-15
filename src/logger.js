const { init } = require('@somosphi/logger');

const loger = init({
  PROJECT_NAME: 'Seed NodeJS',
  OMIT_ROUTES: ['/status', '/info'],
});

module.exports = loger;
