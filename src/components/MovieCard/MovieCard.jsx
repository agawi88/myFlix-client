import PropTypes from "prop-types";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./MovieCard.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div className="MovieCard">
       <Card className="h-100">
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Img variant="top" src={movie.image} style={{ height: "70%", objectFit: "cover" }}/>
          <Card.Title className="text-center"><h4> {movie.title} </h4></Card.Title>
          <Button onClick={() => onMovieClick(movie)} class="btn btn-primary" type="button"> Open </Button>
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
  onMovieClick: PropTypes.func.isRequired
};
