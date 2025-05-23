<h2>myFlix movie app </h2>

In this project I will be building the client side of my movie application using REACT and Parcel and Bootstrap. My app will be using the previously created movie_API.

For the moment I created a new repository called "myFlix-client", installed Parcel and build itsthe repository's file structure. Finally I tested my project using Parcel: <b> parcel index.html </b> BUT after a series of errors connected to parcel on my Windows I switched from Parcel to VITE <b> vite index.html </b>

To start the project run the following command in the Terminal: <b> npm run dev </b>

My vite project can be accessed via http://localhost:5173/

My Parcel project used to be accessible via http://localhost:1234/

The Project has been deployed via Netlify under the name GBmoviesFlix and can be accessed via the following URL: https://gbmoviesflix.netlify.app/login

<hr />

<h4>Future projects:</h4>

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
   <li>
   Adding a svg graphic to an empty list of favorites and maybe to an empty list of movies to make it more visual.
   </li>
   <li>Maybe even apply REDUX for state management of at least one feature</li>
   <li>Genre view which returns data about a genre, with a name and description and perhaps also displays displays example movies.</li>
   <li>Director view which returns data about a director (name, bio, birth year, death year) and displays example movies from the director</li>
   <li>Single Movie View: add the movie rating and allow users to access different movie information, such as genre description and director bio, without leaving the view (e.g., tooltips) (already there???). Finally, allow users to share a movie</li>
   <ol>
T.B.C
