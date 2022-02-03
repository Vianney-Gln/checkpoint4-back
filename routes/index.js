const factsRouter = require("./facts");

const setupRoute = (app) => {
  app.use("/api/chuckNorris/facts", factsRouter);
};

module.exports = { setupRoute };
