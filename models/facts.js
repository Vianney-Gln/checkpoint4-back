const connection = require("../db-config");
const db = connection.promise();

//function who get facts from db

const getFacts = () => {
  return db.query("SELECT * FROM facts").then((result) => result[0]);
};

module.exports = { getFacts };
