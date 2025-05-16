import PropTypes from "prop-types";
// import { Favorites } from "../UsersProfileView/Favorites";
import { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import  { Link } from "react-router-dom";
import "./MovieCard.scss";

export const MovieCard = ({ movie, user, token, onFavoritedMovie }) => {
  
  const { id, title, releaseYear, setting, description, genre, director, image, featured, favorite } = movie;

  const [isFavorited, setIsFavorited] = useState(movie.favorite || false);

  const handleFavoritedChange = () => {
    // setIsFavorited(isFavorited => !isFavorited)co
    const url = `https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}/movies/${movie.id}`;
      
    const options = {
      method: isFavorited ? "POST" : "PUT",
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
    <div className="MovieCard">
       <Card className="h-100">
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
          <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
            <Button variant="link" className="btn btn-primary" type="button" >
              Open
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
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
  onFavoritedMovie: PropTypes.func,
};
