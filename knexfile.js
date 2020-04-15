const env = require('./src/env');

module.exports = {
  client: 'mysql2',
  connection: {
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
  },
  migrations: {
    tableName: 'migrations',
  },
};
