
export function filterMovies( movies, term ) {
    if (!term.trim()) return movies;

    return movies.filter((movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
    );
};