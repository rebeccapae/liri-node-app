# liri-node-app

### Overview
The liri app takes in certain commands and performs search functions. There are 4 commands the user can choose to perform.
1. concert-this
2. spotifiy-this-song
3. movie-this
4. do-what-it-says

### What Each Command Does
1. concert-this <"artist/band name here">
This command will provide the name of the venue, venue location, and date of the event. The Bands in Town API is used.

2. spotify-this-song <"song name here">
This command will provide the artist, song name, preview link, and album. Spotify is used here.


If no song name is given, the following will appear.



3. movie-this <"movie name here">
This command will output the following:
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
OMDB API is used here.


If no movie name is given, the following will appear.



4. do-what-it-says
This command will use the 'fs' Node package.
