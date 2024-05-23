require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

const db = require("./queries");

const PORT = process.env.PORT;

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
app.post("/movies", (req, res) => {
  let { name, genre, releaseyear } = req.body;

  if (name && genre && releaseyear) {
    // do something
    console.log(
      `Adding new movie! ${name} is a movie in the ${genre} category and was released in ${releaseyear}`
    );
    res.json({ id: 1, name, genre, releaseyear });
  } else {
    console.log("Error adding movie!");
    res
      .status(400)
      .send("Error adding movie! Movie needs a name, genre, and release year.");
  }

  res.send("Received post request");
});
// Read
app.get("/movies", cors(), db.getMovies);

// Update

// Delete

// Starting Express on our PORT
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`);
});
