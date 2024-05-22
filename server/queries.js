// Connect to Postgres using node-postgres package

const POOL = require("pg").Pool;

const pool = new POOL({
  user: "shumel",
  host: "localhost",
  database: "moviestable",
  password: process.env.DB_PASSWORD,
});
