In this project I will be building the client side of my movie application using REACT and Parcel and Bootstrap. My app will be using the previously created movie_API.

For the moment I created a new repository called "myFlix-client", installed Parcel and build itsthe repository's file structure. Finally I tested my project using Parcel: <b> parcel src\index.html </b>

To start the project run the following command in the Terminal: <b> npm run dev </b>

It can be accessed via http://localhost:1234/

Future projects:

<ol>
<li>
For future embellishing, once actors will be added, also Similar Movies by Actors:
   <hr />
   <h3>By Actors</h3>
   {similarMoviesByActors.map((movie) => (
   <MovieCard
   key={movie.id}
   movie={movie}
   onMovieClick={() => {
   setSelectedMovie(movie);
   }
   ))}
   />
   </li>
   <li>
   The CardGroup for similar movies in each cathegory might be changed to a carousel in the future.
   </li>
   <li>
   Adjust the Login and Signup view to the current standards.
   </li>
   <ol>
T.B.C
