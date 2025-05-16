import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { SimilarMoviesBySections } from "../SimilarMovies/SimilarMoviesBySections";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "./MovieView.scss";

export const MovieView = ({ isFavorite, onHide, movies, moviesByDirector, moviesByGenre, onMovieClick }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) return null;

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
                    // onClick={() => toggleFavorite(movie.id)}
                    className="ms-3 p-0"
          style={{
            color: isFavorite ? "red" : "gray",
            fontSize: "1.5rem"
          }}
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />} 
          </Button>
      </Modal.Title>
      <Link to={`/`}>
              <button
                onClick={onHide}
                className="backButton" 
                // style={{cursor: "pointer"}}
        >Back</button>
        </Link>
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
        <SimilarMoviesBySections
              title="By Genre"
        movies={movies}
        selectedMovie={movie}
              onMovieClick={onMovieClick}
            />
            <hr />
        <SimilarMoviesBySections
          title="By Director"
          movies={movies}
          selectedMovie={movie}
          onMovieClick={onMovieClick}
              
            />
          </Modal.Body>
            </Modal>
  ); 
};

MovieView.propTypes = {
  show: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,  // Ensure movies prop is an array
  onMovieClick: PropTypes.func.isRequired,
  // moviesByGenre: PropTypes.array.isRequired,
  // moviesByDirector: PropTypes.array.isRequired,
  // movie: PropTypes.shape({
  //   id: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   releaseYear: PropTypes.string.isRequired,
  //   setting: PropTypes.string,
  //   description: PropTypes.string.isRequired,
  //   image: PropTypes.string.isRequired,
  //   featured: PropTypes.bool.isRequired,
  //   director: PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     bio: PropTypes.string.isRequired,
  //     dateOfBirth: PropTypes.string.isRequired,
  //     deathYear: PropTypes.string,
  //   }).isRequired,
  //   genre: PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     description: PropTypes.string.isRequired,
  //   }).isRequired,
  // }).isRequired,
};
