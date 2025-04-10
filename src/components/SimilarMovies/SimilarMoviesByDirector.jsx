import React from "react";
import PropTypes from "prop-types";
import { CardGroup, Row, Col } from "react-bootstrap";
import { MovieCard } from "../MovieCard/MovieCard";

export const SimilarMoviesByDirector = ({ movies, onMovieClick }) => {
    return (
        <>
            <h3>By Director</h3>
            <CardGroup>
                <Row className="g-3">
                    {movies.map((movie) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
                    <MovieCard
                        movie={movie}    // Pass the movie as a prop to MovieCard
                        onMovieClick={() => onMovieClick(movie)}  // Pass the onMovieClick function
                    />
                        </Col>
                ))}
                </Row>
            </CardGroup>
        </>
    );
};

SimilarMoviesByDirector.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};