const { validateInput, getOneFact } = require("../models/facts");

const checkInputFacts = (req, res, next) => {
  const { joke, id_category } = req.body;
  const error = validateInput({ joke, id_category });
  if (error) {
    res.status(401).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = { checkInputFacts };
