import React from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import PropTypes from "prop-types";

export const MovieView = ({ movie, movies, onBackClick, onMovieClick }) => {

 const similarMovies = movies.filter((m) => m.genre === movie.genre && m._id !== movie._id);

  return (
    <div>
      <div>
        <img src={movie.image} alt={movie.title}  />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Release Year: </span>
        <span>{movie.releaseYear}</span>
      </div>
      <div>
        <span>Setting: </span>
        <span>{movie.setting}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>Featured: </span>
        <span>{movie.featured ? "Yes" : "No"}</span>
      </div>
      <button onClick={onBackClick}>Back</button>

      <hr /> {/* Add a horizontal line for spacing */}

      {/* Similar Movies Section */}
      <h2>Similar Movies</h2>
      <div className="similar-movies">
        {similarMovies.map((similarMovie) => (
          <MovieCard
            key={similarMovie.id} // Use the unique ID for the key
            movie={similarMovie}    // Pass the movie as a prop to MovieCard
            onMovieClick={onMovieClick}  // Pass the onMovieClick function
          />
        ))}
      </div>
    </div>
  ); 
};

MovieView.propTypes = {
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
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,  // Ensure movies prop is an array
  onBackClick: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired
};
