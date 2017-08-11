require('dotenv').config();

const config = process.env.DB_LOCAL;

const pgp = require('pg-promise')();

module.exports = pgp(config);
