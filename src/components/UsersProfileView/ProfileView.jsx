import React from "react";
import PropTypes from "prop-types";
// import { Button,  } from "react-bootstrap";

export const ProfileView = ({ user, movies, onMovieClick }) => {
  const favoriteMovies = movies.filter((movie) =>
    user.FavoriteMovies.includes(movie._id));
  
  console.log(user);
  return (
    <div>
      <h3>Your Profile</h3>
      <div>
        <span>Username: </span>
        <span>{user.username}</span>
      </div>
      <div>
        <span>Password: </span>
        <span>{user.password}</span>
      </div>
      <div>
        <span>Email: </span>
        <span>{user.mail}</span>
      </div>
      <div>
        <span>Date of Birth: </span>
        <span>{user.dateOfBirth}</span>
      </div>
      <h4 className="mt-3">Favorite Movies</h4>
      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((movie) => (
          <div
            key={movie.id}
            style={{ cursor: "pointer", mb: "5px" }}
            onClick={() => onMovieClick(movie)}
          >
           {movie.title}
          </div>
        ))
      ) : (
        <div>No favorites selected.</div>
      )}
    </div>
    //   {/* <div>
    //     <span>Favorite Movies: </span>
    //     <span>{user.username.favoriteMovies.movieId}</span>
    //   </div>
    // </div> */}
  ); 
};

ProfileView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        email: PropTypes.string,
        dateOfBirth: PropTypes.string.isRequired,
        favoriteMovies: PropTypes.arrayOf(PropTypes.string).isRequired, // array of movie ID strings
    }).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,  // Ensure movies prop is an array
  onMovieClick: PropTypes.func.isRequired
};

