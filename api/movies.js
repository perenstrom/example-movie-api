const movies = require("../fixtures/movies");

module.exports = (req, res) => {
  if (req.method === "GET") {
    res.json(movies);
  } else {
    res.status(404).end();
  }
};
