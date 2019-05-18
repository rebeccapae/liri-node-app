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

<img width="403" alt="Screen Shot 2019-05-17 at 10 15 48 PM" src="https://user-images.githubusercontent.com/45925284/57964979-95abe500-78f2-11e9-8dc6-4f2354d596d3.png">


2. spotify-this-song <"song name here">
This command will provide the artist, song name, preview link, and album. Spotify is used here.

<img width="459" alt="Screen Shot 2019-05-17 at 10 14 04 PM" src="https://user-images.githubusercontent.com/45925284/57964974-8331ab80-78f2-11e9-936c-ae5e625ac5ac.png">

If no song name is given, the following will appear.

<img width="452" alt="Screen Shot 2019-05-17 at 10 19 58 PM" src="https://user-images.githubusercontent.com/45925284/57965003-d1df4580-78f2-11e9-9a1a-fd604eb0565c.png">

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

<img width="719" alt="Screen Shot 2019-05-17 at 10 17 57 PM" src="https://user-images.githubusercontent.com/45925284/57964990-ad836900-78f2-11e9-8270-5ec8fe265c45.png">


If no movie name is given, the following will appear.

<img width="719" alt="Screen Shot 2019-05-17 at 10 20 53 PM" src="https://user-images.githubusercontent.com/45925284/57965007-e1f72500-78f2-11e9-8530-b4cebede1a7b.png">

4. do-what-it-says
This command will use the 'fs' Node package and pull from the random.txt file.

<img width="458" alt="Screen Shot 2019-05-17 at 10 19 00 PM" src="https://user-images.githubusercontent.com/45925284/57964995-ba07c180-78f2-11e9-9270-9f0af04a251c.png">
