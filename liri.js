
// requiring jquery afteer install
const request = require("request");

// Pulling information from file keys.js to this file
const apiKey = require("./keys.js");

// Console logging keys for test
// console.log(apiKey.spotify.id);
// console.log(apiKey.spotify.secret);
// console.log(apiKey.bandsInTown.id);
// console.log(apiKey.omdb.id);

artistName = process.argv[2];

function concert(artistName) {
    request({
        url: "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=apiKey.bandsInTown.id&date=upcoming",
        method: "GET"
    }, function (err, res, body) {
        //    console.log(err);
        //    console.log(res);

        var bodyJson = JSON.parse(body);
        // console.log(bodyJson);
        // console.log(bodyJson.length);

        for (var i = 0; i < bodyJson.length; i++) {
            console.log("**************************");
            console.log("Venue Name: " + bodyJson[i].venue.name);
            console.log("Location: " + bodyJson[i].venue.country);
            console.log("Date of Event: " + bodyJson[i].datetime);
            console.log("");
        }

    });

}
concert(artistName);