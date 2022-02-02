//config express

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const connection = require("./db-config");
const cors = require("cors");
const { setupRoute } = require("./routes");

// //cors options
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, // access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

//check connection db
connection.connect((err) => {
  if (err) {
    console.error(`error connecting${err.stack}`);
  } else {
    console.log(`connected as id ${connection.threadId}`);
  }
});

// utilisation de cors pour permettre la communication du back avec le front
app.use(cors());

// Passage des données en json
app.use(express.json());

// routing
setupRoute(app);

//connection server node
app.listen(port, () => console.log(`server listening on port ${port}`));
