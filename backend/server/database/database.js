const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: '123',
    host: 'localhost',
    port: 5432,
    database: 'aulareact'
});

module.exports = db;