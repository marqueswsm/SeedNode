const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  res.send({ response: "Hello" });
});

module.exports = routes;