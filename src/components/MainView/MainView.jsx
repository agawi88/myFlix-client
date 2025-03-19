import { useState, useEffect } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";
import { LoginView } from "../LoginView/LoginView";
import { SignupView } from "../SignupView/SignupView";
import PropTypes from "prop-types";


export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser || null);
  const [token, setToken] = useState(storedToken || null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  //const [user, setUser] = useState(null);
  /*const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null); */

  useEffect(() => {
    if (!user || !token) return;

    fetch("https://british-movies-23cb3bbeb9f8.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);

        const moviesFromApi = movies.map((doc) => {
          return {
            id: doc._id,
            title: doc.Title,
            releaseYear: doc.ReleaseYear,
            setting: doc.Setting,
            description: doc.Description,
            genre: { 
              name: doc.Genre.Name,
              description: doc.Genre.Description,
            },
            director: {
              name: doc.Director.Name,
              bio: doc.Director.Bio,
              dateOfBirth: doc.Director.DateOfBirth,
              deathYear: doc.Director.DeathYear
            },
            //actors: [],
            featured: doc.Featured,
            image: doc.ImageURL,
          };
        });
        console.log(moviesFromApi);
        setMovies(moviesFromApi);
      });
  }, [user, token]);
  
  if (!user) {
    
    return (
      <div>    
    {showSignup ? (
      <SignupView />
    ) : (
      <LoginView
      onLoggedIn={(user, token) => {
      setUser(user);
      setToken(token);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      }}
      />
    )
  }
  <button onClick={() => setShowSignup(!showSignup)}>
    {showSignup ? "Back to Login" : "Sign Up"}
  </button>
 </div>
)}

  if (selectedMovie) {
    let similarMovies = movies.filter((m) => m.genre === movie.genre && m._id !== movie._id);

    return (
       <>
        <button
          onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setShowSignup(false); // Reset to login screen
          }}
        >
          Logout
        </button>
      <MovieView
        movie={selectedMovie}
        movies={movies} // for a full list of movies
        onBackClick={() => setSelectedMovie(null)}
        onMovieClick={() => setSelectedMovie(selectedMovie)}
        />
         <>
        <MovieView movie={selectedMovie} onBackClicked={() => { setSelectedMovie(null); }} />
        <hr />
        <h2> Similar Movies </h2>
        {similarMovies.map( <MovieCard
            key={similarMovie.id} // Use the unique ID for the key
            movie={similarMovie}    // Pass the movie as a prop to MovieCard
            onMovieClick={() => {
            setSelectedMovie(movie);
          }}  // Pass the onMovieClick function
          />)}
      </>
      </>
    );
  }

  if (movies.length === 0) {
    return (
      <>
        <button
          onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setShowSignup(false); // Reset to login screen
          }}
        >
          Logout
        </button>
        <div>The list is empty!</div>
      </>
    );
  }

  return (
    <div>
       <button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setShowSignup(false); // Reset to login screen
        }}
      >
        Logout
      </button>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={() => {
            setSelectedMovie(movie);
          }}
        />
        
      ))}
    </div>
    );
};

MainView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
    setting: PropTypes.string,
    description: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      deathYear: PropTypes.string,
    }),
    image: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
