import PropTypes from "prop-types";
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MovieCard } from "../MovieCard/MovieCard";

export const FavoritesView = ({ favoriteMovies, onMovieClick }) => {
  if (!favoriteMovies.length) {
    return <div><h3>This list is empty! Start adding some movies to Favorites to fill this list.</h3></div>;
  }
  return (
    <Row key={movie.id} xs={10} sm={8} md={6} lg={4}>
      {favoriteMovies.map((movie) => (
        <Col>
          <MovieCard
            movie={movie}
            onMovieClick={onMovieClick}
          />
        </Col>
      ))}
      </Row>
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
