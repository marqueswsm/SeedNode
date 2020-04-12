require('dotenv').config();

module.exports = {
  DB_HOST: process.DB_HOST,
  DB_NAME: process.DB_NAME,
  DB_PORT: process.DB_PORT,

  PORT: parseInt(process.PORT, 10),
};
