require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios")
var moment = require('moment');
var fs = require("fs");
moment().format();

//concert-this
if (process.argv[2] === "concert-this") {

    //store artist
    var artist = process.argv[3];

    //call on bandsintown api
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(response) {
            // console.log(response.data)
            console.log("Name of the Venue: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country);
            var date = moment(response.data[0].venue.datetime).format("MM/DD/YYYY")
            console.log("Date of Event: " + date)
        }
    );
};

//spotify-this-song
if (process.argv[2] === "spotify-this-song") {

    //store song
    var song = process.argv[3];

    if (process.argv[3] === undefined) {
        song = "Ace of Base"
    }
    //search song
    spotify.search({ type: 'track', query: song})
    .then(function(response) {
    // console.log(JSON.stringify(response.tracks.items[0], null ,2))
    console.log("Artist: " + JSON.stringify(response.tracks.items[0].artists[0].name))
    console.log("Song Name: " + JSON.stringify(response.tracks.items[0].name))
    console.log("Link: " + JSON.stringify(response.tracks.items[0].artists[0].external_urls.spotify))
    console.log("Album: " + JSON.stringify(response.tracks.items[0].album.name))
    });
};

//movie-this
if (process.argv[2] === "movie-this") {

    //store artist
    var movie = process.argv[3];

    if (process.argv[3] === undefined) {
        movie = "Mr. Nobody"
    }

    //call on omdbi api
    axios.get("http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=trilogy").then(
        function(response) {
        // console.log(response.data)
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("The movie's rating is: " + response.data.imdbRating);
        console.log("Rottom Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        });
};

//do-what-it-says
if (process.argv[2] === "do-what-it-says") {
    fs.readFile("./random.txt", "utf8", function (error, data) {

    //store song
    var songSplit = data.split(",")
    var song = songSplit[1]

    //search song
    spotify.search({ type: 'track', query: song})
    .then(function(response) {
    // console.log(JSON.stringify(response.tracks.items[0], null ,2))
    console.log("Artist: " + JSON.stringify(response.tracks.items[0].artists[0].name))
    console.log("Song Name: " + JSON.stringify(response.tracks.items[0].name))
    console.log("Link: " + JSON.stringify(response.tracks.items[0].artists[0].external_urls.spotify))
    console.log("Album: " + JSON.stringify(response.tracks.items[0].album.name))
    });
})};