const fixtures = require("../../fixtures/movies");
const delayResponse = require("../../helpers/delay").delay;

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  } else if (req.method === "GET") {
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
