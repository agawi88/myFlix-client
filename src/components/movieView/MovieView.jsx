import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { SimilarMoviesByGenre } from "../SimilarMovies/SimilarMoviesByGenre";
import { SimilarMoviesByDirector } from "../SimilarMovies/SimilarMoviesByDirector";

import "./MovieView.scss";

export const MovieView = ({ movie, setMovie, show, isFavorite, toggleFavorite, onHide, movies, similarMoviesByDirector, similarMoviesByGenre, onMovieClick }) => {
  
  if (!movie) return null;
  console.log({ toggleFavorite });
  return (

<Modal
          show={!!movie}
          onHide={() => setMovie(null)}
          size="xl"
          centered
          scrollable
          dialogClassName="modal-90w">
          <Modal.Header>
                <Modal.Title>{movie.title}
                  <Button
                    variant="link"
                    onClick={() => toggleFavorite(movie.id)}
                    className="ms-3 p-0"
                    style={{ color: isFavorite ? "red" : "gray", fontSize: "1.5rem"}}
                  >
                    {isFavorite ? <FaHeart /> : <FaRegHeart />} 
                  </Button>
              </Modal.Title>
              <Button
                onClick={onHide}
                className="backButton ms-auto" 
                style={{cursor: "pointer"}}
              >Back</Button>
          </Modal.Header>
      <Modal.Body>
            <div>
      <div>
        <img src={movie.image} alt={movie.title}  />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Release Year: </span>
        <span>{movie.releaseYear}</span>
      </div>
      <div>
        <span>Setting: </span>
        <span>{movie.setting}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director.name}</span>
        <span>{movie.director.bio}</span>
        <span>{movie.director.dateOfBirth}</span>
        <span>{movie.director.deathYear}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre.name}</span>
        <span>{movie.genre.description}</span>
      </div>
      <div>
        <span>Featured: </span>
        <span>{movie.featured ? "Yes" : "No"}</span>
      </div>
    </div>
{/* SIMILAR MOVIES BY: GENRE, DIRECTOR; later on also by ACTORS AND MY FAVOURITES           */}
            <hr />
            <h2> Similar Movies </h2>
            <SimilarMoviesByGenre
              movies={similarMoviesByGenre}
              onMovieClick={onMovieClick}
            />
            <hr />
            <SimilarMoviesByDirector
              movies={similarMoviesByDirector}
              onMovieClick={onMovieClick}
            />
          </Modal.Body>
            </Modal>
  ); 
};

MovieView.propTypes = {
  show: PropTypes.bool.isRequired,
  movie: PropTypes.object,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,  // Ensure movies prop is an array
  onMovieClick: PropTypes.func.isRequired,
  similarMoviesByGenre: PropTypes.array.isRequired,
  similarMoviesByDirector: PropTypes.array.isRequired
};
