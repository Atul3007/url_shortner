const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://atuldwivedi859:CTPO3U4XCpeLusS8@cluster0.y3bgp11.mongodb.net/BookManagement?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
