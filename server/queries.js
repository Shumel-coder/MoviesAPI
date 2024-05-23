require("dotenv").config();
// Connect to Postgres using node-postgres package

const POOL = require("pg").Pool;

const pool = new POOL({
  user: "shumel",
  host: "localhost",
  database: "movies",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

// Get all movies from database

const getMovies = (req, res) => {
  pool.query("SELECT * FROM moviestable ORDER BY id ASC", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};

module.exports = {
  getMovies,
};
