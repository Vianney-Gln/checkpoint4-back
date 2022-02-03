const factsRouter = require("express").Router();
const {
  getFacts,
  getOneFact,
  postFacts,
  deleteOneFactById,
} = require("../models/facts");
const { checkInputFacts } = require("../middlewares/facts");

//Route getting facts
factsRouter.get("/", (req, res) => {
  getFacts()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send("error server");
      console.log(err);
    });
});

//Route getting one fact by his Id
factsRouter.get("/:id", (req, res) => {
  getOneFact(req.params.id)
    .then((result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(200).send("error retrieving fact");
      }
    })
    .catch((err) => {
      res.status(500).send("error server");
      console.log(err);
    });
});

//Route posting fact's
factsRouter.post("/", checkInputFacts, (req, res) => {
  const { joke, id_category } = req.body;

  postFacts({ joke, id_category })
    .then((result) => {
      res.status(201).send(`facts id ${result[0].insertId} created`);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("error server");
    });
});

//Route delete fact
factsRouter.delete("/:id", (req, res) => {
  getOneFact(req.params.id)
    .then((result) => {
      if (result) {
        deleteOneFactById(req.params.id)
          .then(() => {
            res.status(204).send();
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send("error server");
          });
      } else {
        res.status(200).send("error retrieving fact");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("error server");
    });
});
module.exports = factsRouter;
