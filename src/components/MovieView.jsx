import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { SimilarMoviesBySections } from "./SimilarMovies/SimilarMoviesBySections";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ isFavorite, onHide, movies, onMovieClick }) => {
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
        <span><b>Title: </b></span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span><b>Release Year: </b></span>
        <span>{movie.releaseYear}</span>
      </div>
      <div>
        <span><b>Setting: </b></span>
        <span>{movie.setting}</span>
      </div>
      <div>
        <span><b>Description: </b></span>
        <span>{movie.description}</span>
      </div>
        <div>
          <ul>
            <li><span><b>Director: </b></span>
              <span><b>{movie.director.name}</b></span>
        </li>
        <li><span>{movie.director.bio}</span></li>
        <li><span><b>Born: {movie.director.dateOfBirth}</b></span></li>
        <li><span><b>Died: {movie.director.deathYear}</b></span></li>
      </ul>
      </div>
        <div>
          <ul>
        <span><b>Genre: {movie.genre.name}</b></span>
        <li><span>{movie.genre.description}</span></li>
        </ul>
      </div>
      <div>
        <span><b>Featured: {movie.featured ? "Yes" : "No"}</b></span>
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
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
