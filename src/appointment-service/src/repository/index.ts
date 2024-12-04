const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ss-appointment",
  password: "passowrd",
  port: 5433,
});

module.exports = pool;
