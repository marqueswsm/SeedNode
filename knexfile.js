const env = require('./src/env');

/**
 * @type {import('knex').Config}
 */
module.exports = {
  client: 'mysql2',
  debug: env.dbDebug || false,
  connection: {
    host: env.dbHost,
    port: env.dbPort,
    user: env.dbUsername,
    password: env.dbPassword,
    database: env.dbDatabase,
    supportBigNumbers: true,
    bigNumberStrings: true,
    multipleStatements: true,
    dateStrings: true,
  },
  pool: {
    min: env.dbPoolMin,
    max: env.dbPoolMax,
    // @ts-ignore
    afterCreate: function _(connection, done) {
      // eslint-disable-next-line prefer-arrow-callback
      connection.query('SET time_zone = "UTC";', function er(err) {
        done(err, connection);
      });
    },
  },
  migrations: {
    tableName: 'migrations',
  },
};
