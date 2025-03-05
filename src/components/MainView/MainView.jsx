import { useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";

const MainView = () => {
  const [movies, setMovies] = useState([  ]);

const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
    fetch("https://british-movies-23cb3bbeb9f8.herokuapp.com/movies")
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
            image: ,
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
