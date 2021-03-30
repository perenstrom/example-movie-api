const fixtures = require("../fixtures/movies");
const delayResponse = require("../helpers/delay").delay;

module.exports = (req, res) => {
  if (req.method === "GET") {
    const {
      query: { delay = "5000" },
    } = req;

    delayResponse(() => res.json(fixtures.movies), delay);
  } else {
    res.status(404).end();
  }
};
