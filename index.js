const express = require("express");

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("HElloworld");
});

app.listen(port, () => console.log("listening on port ", port));
