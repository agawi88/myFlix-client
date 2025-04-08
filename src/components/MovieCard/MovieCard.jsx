import PropTypes from "prop-types";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./MovieCard.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Container fluid>
    <Row xs md lg="auto">
        <Col>
    <Card className="MovieCard" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Img variant="top" src={movie.image} alt="Cover photo of the selected movie" />
      <Card.Title> {movie.title} </Card.Title>
        <Button onClick={() => onMovieClick(movie)} variant="link"> Open </Button>
    </Card.Body>
    </Card>
      </Col>
      </Row>
      </Container>
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
