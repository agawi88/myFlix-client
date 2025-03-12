import { useState, useEffect } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";
import { LoginView } from "../LoginView/LoginView";
import PropTypes from "prop-types";


export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(storedToken? storedToken : null);

  useEffect(() => {
    if (!token) return;

    fetch("https://british-movies-23cb3bbeb9f8.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);

        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            releaseYear: doc.releaseYear,
            setting: doc.setting,
            description: doc.description,
            genre: {
              name: doc.genre_name?.[0],
              description: doc.genre_description?.[0]
            },
            director: {
              name: doc.director_name?.[0],
              bio: doc.director_bio?.[0],
              dateOfBirth: doc.director_dateOfBirth?.[0],
              deathYear: doc.director_deathYear?.[0]
            },
            //actors: [],
            featured: doc.featured,
            image: `https://imageURL.british-movies-23cb3bbeb9f8.herokuapp.com/movies/b/id/${doc.ImageURL}-L.jpg`,
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);
  
  if (!user) {
    return (
      <LoginView onLoggedIn={(user, token) => {
      setUser(user);
      setToken(token);
      }}
      />
    );
  }

  if (selectedMovie) {
    return (
       <>
        <button
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        >
          Logout
        </button>
      <MovieView
        movie={selectedMovie}
        movies={movies} // for a full list of movies
        onBackClick={() => setSelectedMovie(null)}
        onMovieClick={(movie) => setSelectedMovie(movie)}
        />
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
            localStorage.clear();
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
          localStorage.clear();
        }}
      >
        Logout
      </button>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
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
