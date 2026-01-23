/**
 * @file SimilarMoviesBySections.jsx
 * @description
 * Displays a list of movies similar to the currently selected movie.
 *
 * Similarity is determined either by shared genre or shared director,
 * depending on the provided section title.
 */

import PropTypes from "prop-types";
import { CardGroup, Row, Col } from "react-bootstrap";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { MovieCard } from "../MovieCard/MovieCard";

/**
 * SimilarMoviesBySections component.
 *
 * Filters the provided movies list to display movies related
 * to the currently selected movie. The filtering logic depends
 * on the section title:
 * - "By Genre": movies with the same genre
 * - "By Director": movies by the same director
 *
 * The selected movie itself is excluded from the results.
 *
 * @param {Object} props Component props
 * @param {Object} props.movie Base movie reference (not used for filtering)
 * @param {Array<Object>} props.movies Full list of movies
 * @param {string} props.title Section title determining filter logic
 * @param {Function} props.onMovieClick Callback invoked when a movie is selected
 * @param {Object} props.selectedMovie Currently selected movie
 * @param {string} [props.size="mini"] Size variant for movie cards
 *
 * @returns {JSX.Element|null} Similar movies section or null if no movie is selected
 */

export const SimilarMoviesBySections = ({ movie, movies, title, onMovieClick, selectedMovie, size = "mini" }) => {
    if (!selectedMovie) return null;

  /**
   * Determines similar movies based on section title
   * ("By Genre" or "By Director") while excluding
   * the currently selected movie.
   */
    
  const similarMovies =
    title === "By Genre"
      ? movies.filter(
        (movie) =>
          movie.genre.name === selectedMovie.genre.name &&
          movie.id !== selectedMovie.id
      )
      : title === "By Director"
        
        ? movies.filter(
          (movie) =>
            movie.director.name === selectedMovie.director.name &&
            movie.id !== selectedMovie.id
        )
        : [];
  
    return (
        <>
            <h3>{title}</h3>
            <CardGroup>
          <Row className="g-2">
            {similarMovies.map((movie) =>
          movie ?  (
                        <Col /* xs={2} sm={4} md={5} lg={6} */ key={movie.id} className="d-flex">
                  <MovieCard
                        size="mini"
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
  selectedMovie: PropTypes.object.isRequired,
  size: PropTypes.oneOf(["default", "small", "mini"]),
};