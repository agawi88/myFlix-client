import PropTypes from "prop-types";
// import { useState } from "react";

export const ToggleFavorites = ({ user, token, isFavorited }) => {
  
    if (!user || !user.Username || !movie || !movie._id)
        return;

    
    const url = `https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}/movies/${movie.id}`;
      
    const options = {
      method: isFavorited ? "PUT" : "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    };

    fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to update favorites");
            }
            return response.json();
        });
  };

ToggleFavorites.propTypes = {
    movie: PropTypes.shape({
            id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          releaseYear: PropTypes.string,
          setting: PropTypes.string,
          description: PropTypes.string,
          genre: PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
          }),
          director: PropTypes.shape({
            name: PropTypes.string,
            bio: PropTypes.string,
            dateOfBirth: PropTypes.string,
            deathYear: PropTypes.string,
          }),
          image: PropTypes.string.isRequired,
          featured: PropTypes.bool,
        }).isRequired,
    user: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    isFavorited: PropTypes.func.isRequired,
};
