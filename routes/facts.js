const factsRouter = require("express").Router();
const { getFacts } = require("../models/facts");

factsRouter.get("/", (req, res) => {
  getFacts()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
});

module.exports = factsRouter;
