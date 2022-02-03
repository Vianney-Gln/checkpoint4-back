const connection = require("../db-config");
const db = connection.promise();
const Joi = require("joi");

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
    .query(
      "SELECT * FROM facts INNER JOIN category ON facts.id_category = category.id  WHERE facts.id = ?",
      [id]
    )
    .then((result) => result[0][0]);
};

//function posting fact's

const postFacts = ({ joke, id_category }) => {
  return db
    .query("INSERT INTO facts (joke,id_category) VALUES (?,?)", [
      joke,
      id_category,
    ])
    .then((result) => result);
};

//function verifying goods input before post using JOI
const validateInput = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    joke: Joi.string().max(255).presence(presence),
    id_category: Joi.number().presence(presence),
  }).validate(data, { abortEarly: false, allowUnknown: true }).error;
};

module.exports = { getFacts, getOneFact, postFacts, validateInput };
