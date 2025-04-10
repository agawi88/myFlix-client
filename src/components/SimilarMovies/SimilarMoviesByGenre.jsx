import React from "react";
import PropTypes from "prop-types";
import { CardGroup, Row, Col } from "react-bootstrap";
import { MovieCard } from "../MovieCard/MovieCard";

export const SimilarMoviesByGenre = ({ movies, onMovieClick }) => {
    return (
        <>
            <h3>By Genre</h3>
            <CardGroup>
                <Row className="g-3">
                    {movies.map((movie) => (
                    <Col Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
                    <MovieCard
                        movie={movie} 
                                onMovieClick={() => onMovieClick(movie)}
                                className="smallCard"
                            />
                            </Col>
                ))}
                    </Row>
            </CardGroup>
        </>
    );
};

SimilarMoviesByGenre.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};