const fixtures = require("../../fixtures/movies");
const delayResponse = require("../../helpers/delay").delay;

module.exports = (req, res) => {
  if (req.method === "GET") {
    const {
      query: { imdbId, delay = "5000" },
    } = req;
    const movie = fixtures.movies.find((m) => m.imdbId == imdbId);
    if (movie) {
      delayResponse(() => res.json(movie), delay);
    } else {
      res.status(404).end("Movie not in database");
    }
  } else {
    res.status(404).end();
  }
};
