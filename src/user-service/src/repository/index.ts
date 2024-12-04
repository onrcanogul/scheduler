const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ss-user",
  password: "passowrd",
  port: 5432,
});

module.exports = pool;
