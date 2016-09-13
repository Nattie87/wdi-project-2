module.exports = {
  index: feministsIndex,
};

const Feminist = require("../models/feminist");

function feministsIndex(req, res) {
  Feminist.find((err, feminists) => {
    if (err) return res.status(500).json({ message: "Something went wrong."});
    return res.status(200).json({ feminists });
  });
}
