const connection = require("../db-config");
const db = connection.promise();

//function gettting facts from db

const getFacts = () => {
  return db
    .query(
      "SELECT facts.id AS id_joke,facts.joke,category.id AS id_cat,category.name FROM facts INNER JOIN category ON facts.id_category = category.id ORDER BY id_joke ASC"
    )
    .then((result) => result[0]);
};

//function gettting one fact from db by his Id

const getOneFact = (id) => {
  return db
    .query("SELECT * FROM facts WHERE id = ?", [id])
    .then((result) => result[0][0]);
};

module.exports = { getFacts, getOneFact };
