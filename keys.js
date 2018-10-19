// linking .env file
require("dotenv").config();

console.log('this is loading');

// creates and exports objects out of the file
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandsInTown = {
  id: process.env.BANDSINTOWN_ID
};

exports.omdb = {
  id: process.env.OMDb_ID
};

// traing to build a constructor
// function AK(id, secret) {
//   this.id = id;
//   this.secret = secret;
// }

// var spotify = new AK("process.env.SPOTIFY_ID", "process.env.SPOTIFY_SECRET");
// var bandsInTown = new AK("process.env.BANDSINTOWN_ID", "");
// var omdb = new AK("process.env.OMDb_ID","");

// exports.spotify;
// exports.bandsInTown;
// exports.omdb;