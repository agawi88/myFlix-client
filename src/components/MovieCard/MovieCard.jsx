import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Card, Col} from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import  { Link } from "react-router-dom";
import "./MovieCard.scss";

export const MovieCard = ({ movie, user, token, onFavoritedMovie, size = "default" }) => {
  

  const [isFavorited, setIsFavorited] = useState(movie.favorite || false);
  const API_URL = import.meta.env.VITE_API_URL;


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
