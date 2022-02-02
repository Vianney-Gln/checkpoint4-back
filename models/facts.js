const connection = require("../db-config");
const db = connection.promise();

//function gettting facts from db

const getFacts = () => {
  return db.query("SELECT * FROM facts").then((result) => result[0]);
};

//function gettting one fact from db by his Id

const getOneFact = (id) => {
  return db
    .query("SELECT * FROM facts WHERE id = ?", [id])
    .then((result) => result[0][0]);
};

module.exports = { getFacts, getOneFact };
