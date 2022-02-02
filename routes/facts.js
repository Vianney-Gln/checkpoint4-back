const factsRouter = require("express").Router();
const { getFacts, getOneFact } = require("../models/facts");

//Route getting facts
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

//Route getting one fact by his Id
factsRouter.get("/:id", (req, res) => {
  getOneFact(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
});
module.exports = factsRouter;
