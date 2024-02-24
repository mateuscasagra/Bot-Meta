const { Pool } = require("pg");

const pool = new Pool({
  user: "mateus",
  host: "localhost",
  database: "marcao",
  password: "3356",
  port: 5432,
});

module.exports = pool;
