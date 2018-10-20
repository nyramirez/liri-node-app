// requesting node-spotify-API
var Spotify = require('node-spotify-api');

// requesting Moment.js
const moment = require("moment");

// requiring jquery afteer install
const request = require("request");

// Pulling information from file keys.js to this file
const apiKey = require("./keys.js");

// Console logging keys for test
// console.log(apiKey.spotify.id);
// console.log(apiKey.spotify.secret);
// console.log(apiKey.bandsInTown.id);
// console.log(apiKey.omdb.id);

userInput = process.argv[2];

// ********************************** Bands in town code **************************************************************
function concert(userInput) {
    request({
        url: "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=apiKey.bandsInTown.id&date=upcoming",
        method: "GET"
    }, function (err, res, body) {
        //    console.log(err);
        //    console.log(res);

        // Converting response to JSON format
        var bodyJson = JSON.parse(body);
        // console.log(bodyJson);
        // console.log(bodyJson[0].datetime);

        // Creating a moment object
        let eventDate = moment(bodyJson[0].datetime).format("MM-DD-YYYY");
        // console.log(eventDate);

        for (var i = 0; i < bodyJson.length; i++) {
            console.log("**************************");
            console.log("Venue Name: " + bodyJson[i].venue.name);
            console.log("Location: " + bodyJson[i].venue.country);
            console.log("Date of Event: " + eventDate);
            console.log("");
        }

    });

}

// ******************************************** Spotify code **************************************************************
function spotifyFunction(userInput) {
    let spotify = new Spotify({
        id: apiKey.spotify.id,
        secret: apiKey.spotify.secret
    });

    spotify
    .search({ type: "track", query: userInput, limit: "10" })
    .then(function (response) {

        for (var i = 0; i < 10; i++) {
            console.log("**************************");
            console.log("Artist name: " + response.tracks.items[i].artists[0].name);
            console.log("Song name: " + response.tracks.items[i].name);
            console.log("Song preview: " + response.tracks.items[i].preview_url);
            console.log("Album name: " + response.tracks.items[i].album.name);
            console.log("");
        }
    })
    .catch(function (err) {
        console.log(err);
    });
}

// ******************************************** OMDb code **************************************************************
function movie(userInput) {
    request({
        url: "http://www.omdbapi.com/?apikey=" + apiKey.omdb.id + "&t=" + userInput,
        method: "GET"
    }, function (err, res, body) {
        // console.log(err);
        // console.log(res.body);
        // console.log(body);

        // Converting response to JSON format
        var bodyMovieJson = JSON.parse(res.body);
        // console.log(bodyJson);
        // console.log(bodyJson[0].datetime);
        console.log("**************************");
        console.log("Movie title: " + bodyMovieJson.Title);
        console.log("Release year: " + bodyMovieJson.Year);
        console.log("IMBd rating: " + bodyMovieJson.imdbRating);
        console.log("Rotten Tomatoes: " + bodyMovieJson.Ratings[1].Value);
        console.log("Production Country: " + bodyMovieJson.Country);
        console.log("Language: " + bodyMovieJson.Language);
        console.log("Movie plot: " + bodyMovieJson.Plot);
        console.log("Actors: " + bodyMovieJson.Actors);
        console.log("");
    });

}
// concert(userInput);
// spotifyFunction(userInput);
// movie(userInput);



