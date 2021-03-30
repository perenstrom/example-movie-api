const fixtures = require("../../fixtures/movies");

module.exports = (req, res) => {
  if (req.method === "GET") {
    const {
      query: { imdbId },
    } = req;
    console.log(`imdbid: ${imdbId}`);
    console.log(JSON.stringify(fixtures.movies, null, 2));
    const movie = fixtures.movies.find((m) => m.imdbId == imdbId);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).end("Movie not in database");
    }
  } else {
    res.status(404).end();
  }
};
