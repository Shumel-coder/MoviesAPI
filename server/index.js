require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

const db = require("./queries");

const PORT = 9001;

// Allow static assets in public folder
app.use(express.static("public"));

const root = require("path").join(__dirname, "../client", "dist");
app.use(express.static(root));

// middleware for parsing json data on the server
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.sendFile("index.html", { root });
});

app.get("/test", (req, res) => {
  res.send("Server is operational");
});

// Create
app.options("/movies", cors());
app.post("/movies", cors(), db.addMovie);
// Read
app.get("/movies", cors(), db.getMovies);

// Update

// Delete

// Starting Express on our PORT
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`);
});
