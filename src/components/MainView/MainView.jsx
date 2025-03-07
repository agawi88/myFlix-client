import { useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";
import PropTypes from "prop-types";


const MainView = () => {
  const [movies, setMovies] = useState([  ]);

const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            releaseYear: doc.releaseYear,
            setting: doc.setting,
            description: doc.description,
            genre: { doc.genre_name?.[0], doc.genre_description?.[0] },
            director: doc.director_name?.[0], doc.director_bio?.[0], doc.director_dateOfBirth?.[0], doc.director_deathYear?.[0],
            //actors: [],
            featured: doc.featured,
           // image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            image: "https://imageURL.british-movies-23cb3bbeb9f8.herokuapp.com/movies/b/id/${doc.ImageURL}-L.jpg",
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
    );
    
    if (selectedMovie) {
        let similarMovies = movies.filter();
        return (
            <>
                <MovieView movie={selectedMovie} onBackClicked={() => { selectedMovie(null); }} />
                <hr />
                <h2>Similar Movies</h2>
                {similarMovies.map()}
            </>
        );
    }
};

export default MainView;

/* const genreName = ["drama", "thriller", "biography", "adventure", "comedy", "fantasy"];

document.getElementById("demo").innerHTML = genre.filter(checkGenreName);

function checkGenreName(genreName) {
  return movies.genreName;
} */

MainView.PropTypes = {
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
