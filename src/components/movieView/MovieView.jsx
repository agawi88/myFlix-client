import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.image} />
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
        <span>{movie.director}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>Featured: </span>
      <span>{movie.featured ? "Yes" : "No"}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

MovieView.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
    setting: PropTypes.string,
    description: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.date.isRequired,
      deathYear: PropTypes.date,
    }),
    image: PropTypes.string.isRequired,
    featured: PropTypes.boolean.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
