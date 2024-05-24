const { response } = require("express");

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

const addMovie = (req, res) => {
  const name = req.body.name;
  const genre = req.body.genre;
  const releaseyear = req.body.releaseyear;

  pool.query(
    "INSERT INTO moviestable (name, genre, releaseyear) VALUES ($1, $2, $3)",
    [name, genre, releaseyear],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json(`Movie added with ID: ${results.insertId}`);
    }
  );
};

module.exports = {
  getMovies,
  addMovie,
};
