import { useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";

const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Atonement",
      releaseYear: "2007",
      setting: "United Kingdom, France",
      description:
        "A dramatic tale of love and war, set in the UK and France during World War II, based on Ian McEwan's novel.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e4/Atonement_UK_poster.jpg",
      director: "Joe Wright",
      genre: "Drama",
      featured: true,
    },
    {
      id: 2,
      title: "Belfast",
      releaseYear: "2021",
      setting: "Northern Ireland, Belfast",
      description:
        "A young boy and his working-class Belfast family experience the tumultuous late 1960s.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/4/4a/Belfast_poster.jpg",
      director: "Kenneth Branagh",
      genre: "Drama",
      featured: true,
    },
    {
      id: 3,
      title: "Black Doves",
      releaseYear: "2024",
      setting: "England, London",
      description:
        "Helen embarks on a passionate affair with a man who has no idea what her secret identity is. Caught in the crosshairs when her lover falls victim to the dangerous London underworld, Helen's employers call in Sam to protect her.",

      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/Black_Doves.jpg",
      director: "Lisa Gunning",
      genre: "Thriller",
      featured: false,
    },
    {
      id: 4,
      title: "Bridget Jones/' Diary",
      releaseYear: "2001",
      setting: "England, London",
      description:
        "Bridget Jones is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/17/BridgetJonesDiaryMoviePoster.jpg",
      director: "Sharon Maguire",
      genre: "Comedy",
      featured: true,
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

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
