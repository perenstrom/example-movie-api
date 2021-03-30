const fixtures = require("../fixtures/movies");

module.exports = (req, res) => {
  if (req.method === "GET") {
    res.json(fixtures.movies);
  } else {
    res.status(404).end();
  }
};
