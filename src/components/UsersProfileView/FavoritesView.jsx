import PropTypes from "prop-types";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { MovieCard } from "../MovieCard/MovieCard";

export const FavoritesView = ({user, movies, onMovieClick }) => {
  const favoriteMoviesIds = user?.FavoriteMovies || [];
  const favoriteMovies = movies.filter((movie) =>
    movie._id && favoriteMoviesIds.includes(movie._id.toString())
  );
 
  if (!favoriteMoviesIds || !Array.isArray(favoriteMoviesIds)) {
    favoriteMoviesIds = []; 
    
  }
  if (favoriteMovies.length === 0) {
    return (
      <div><h3>This list is empty! Start adding some movies to Favorites to fill this list.</h3></div>
    );
  }
  
  return (
    <Row>
      {favoriteMovies.map((movie) => (
        <Col key={movie._id} xs={10} sm={8} md={6} lg={4}>
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
  user: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
