const Pool = require('pg').Pool

const postgres = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres',
    password: process.env.DB_CONFIG,
    port: 5432
})

module.exports = postgres