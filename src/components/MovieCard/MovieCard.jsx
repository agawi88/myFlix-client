/**
 * @file MovieCard.jsx
 * @description
 * Displays a single movie as a card with poster, title,
 * and a favorite toggle button.
 *
 * Allows authenticated users to add or remove a movie
 * from their list of favorites via the backend API.
 */

import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Card, Col} from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import  { Link } from "react-router-dom";
import "./MovieCard.scss";

/**
 * MovieCard component.
 *
 * Renders a movie preview card with an image, title,
 * and controls for opening the movie details view
 * and toggling favorite status.
 *
 * @param {Object} props Component props
 * @param {Object} props.movie Movie data object
 * @param {Object} props.user Authenticated user object
 * @param {string} props.token Authentication token
 * @param {Function} props.onFavoritedMovie Callback after favorite status changes
 * @param {string} [props.size="default"] Size variant of the card
 *
 * @returns {JSX.Element} Movie card UI
 */

export const MovieCard = ({ movie, user, token, onFavoritedMovie, size = "default" }) => {
  

  const [isFavorited, setIsFavorited] = useState(movie.favorite || false);
  const API_URL = import.meta.env.VITE_API_URL;

  /**
   * Toggles the favorite status of the movie for the current user.
   *
   * Sends a request to the backend API to add or remove the movie
   * from the user's list of favorites and updates local state
   * accordingly.
   *
   * @returns {void}
   */
  
  const handleFavoritedChange = () => {
    const url = `${API_URL}/users/${user.Username}/movies/${movie.id}`;
      
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
      })
      .then((data) => {
        setIsFavorited(!isFavorited);
        if (onFavoritedMovie) onFavoritedMovie(data);
      })
      .catch((error) => {
        console.error("Favorite update error:", error);
      });
  };

  return (
    < /* className="MovieCard" */>
       <Card className={`MovieCard ${size} h-100`}>
        <Card.Body
          className="d-flex flex-column justify-content-between">
          <div className="FavoriteButton" onClick={handleFavoritedChange}>
            {isFavorited ? (
          <FaHeart style={{ color: "red", fontSize: "1.5rem"}} />
            ) : (
          <FaRegHeart style={{ color: "grey", fontSize: "1.5rem" }} />
            )}
          </div>
          <Card.Img
            variant="top"
            src={movie.image}
            style={{ height: "70%", objectFit: "cover" }} />
          <Card.Title
            className="text-center">
            <h4> {movie.title} </h4>
          </Card.Title>
          <Link to={`/movies/${encodeURIComponent(movie.id)}`} className="RegularButton" type="button" size="large" variant="link" >
              <b>Open</b>
          </Link>
{/*           <Card.Text>Genre: {movie.genre?.name}</Card.Text>
<Card.Text>Director: {movie.director?.name}</Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
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
  onFavoritedMovie: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["default", "small", "mini"]),
};
