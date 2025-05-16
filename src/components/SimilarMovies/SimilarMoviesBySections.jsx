import PropTypes from "prop-types";
import { CardGroup, Row, Col, Carousel } from "react-bootstrap";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { MovieCard } from "../MovieCard/MovieCard";

export const SimilarMoviesBySections = ({ movie, movies, title, onMovieClick, selectedMovie }) => {
    if (!selectedMovie) return null;
    
  const similarMovies =
    title === "By Genre"
      ? movies.filter(
        (movie) =>
          movie.genre.name === selectedMovie.genre.name &&
          movie.id !== selectedMovie.id
      )
      : title === "By Director"
    
        // const moviesByDirector =
    
        ? movies.filter(
          (movie) =>
            movie.director.name === selectedMovie.director.name &&
            movie.id !== selectedMovie.id
        )
        : [];

/*     const filteredMovies = title.toLowerCase().includes("genre", "director")
        ? moviesByGenre
        : moviesByDirector; */
  console.log("Similar movies for", title, similarMovies);
  
    return (
        <>
            <h3>{title}</h3>
            <CardGroup>
          <Row className="g-3">
            {similarMovies.map((movie) =>
          movie ?  (
                        <Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
                    <MovieCard
                        movie={movie}   
                        onMovieClick={() => onMovieClick(movie)}  
                    />
            </Col>
          ) : null
                )}
                </Row>
            </CardGroup>
        </>
    );
};

SimilarMoviesBySections.propTypes = {
    movie: PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          releaseYear: PropTypes.string.isRequired,
          setting: PropTypes.string,
          description: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          featured: PropTypes.bool.isRequired,
          director: PropTypes.shape({
            name: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
            dateOfBirth: PropTypes.string.isRequired,
            deathYear: PropTypes.string,
          }).isRequired,
          genre: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
    movies: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onMovieClick: PropTypes.func.isRequired,
  selectedMovie: PropTypes.object.isRequired
};