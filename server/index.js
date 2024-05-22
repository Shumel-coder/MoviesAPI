const express = require("express");

const app = express();

const PORT = 9001;

// Routes
app.get("/", (req, res) => {
  // TODO
  res.send("Hello from server!");
});

// Starting Express on our PORT
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`);
});
