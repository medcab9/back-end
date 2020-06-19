const knex = require('knex');

const env = process.env.NODE_ENV || 'development';

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig[env]);

module.exports = db;