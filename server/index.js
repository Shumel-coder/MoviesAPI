const express = require("express");

const app = express();

const PORT = processs.env.PORT;

// Routes
app.get("/", (req, res) => {
  // TODO
  res.send("Hello from server!");
});

// Starting Express on our PORT
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`);
});
