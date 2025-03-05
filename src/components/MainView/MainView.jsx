import { useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";

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
            director: doc.director_name?.[0],
            genre: doc.genre_name?.[0],
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
};

export default MainView;
