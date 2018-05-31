const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'wangshuai',
    database: 'cAuth',
    char: 'utf8mb4'
  },
  debug: true,
  pool: {
    min: 0,
    max: 7
  },
  acquireConnectionTimeout: 10000,
  migrations: {
    tableName: 'migrations'
  }
})

module.exports = knex
