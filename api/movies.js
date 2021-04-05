const fixtures = require("../fixtures/movies");
const delayResponse = require("../helpers/delay").delay;

module.exports = (req, res) => {
  if (req.method === "GET") {
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
    const {
      query: { delay = "5000" },
    } = req;
    delayResponse(() => res.json(fixtures.movies), delay);
  } else {
    res.status(404).end();
  }
};
