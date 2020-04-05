const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'todo_db',
    user: 'root',
    password: 'root',
  },
});

module.exports = knex;
