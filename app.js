require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const connection = require("./db-config");

//check connection db
connection.connect((err) => {
  if (err) {
    console.error(`error connecting${err.stack}`);
  } else {
    console.log(`connected as id ${connection.threadId}`);
  }
});

//test route
app.get("/api/chuck/facts", (req, res) => {
  res.send("Chuck Norris approuve!");
});
//connection server node
app.listen(port, () => console.log(`server listening on port ${port}`));
