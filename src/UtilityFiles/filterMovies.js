
export function filterMovies(movies, searchTerm) {
    if (!searchTerm.trim()) return movies;

    const lowerTerm = searchTerm.toLowerCase();

    return movies.filter((movie) =>
           movie.title.toLowerCase().includes(lowerTerm) ||
           movie.genre?.name.toLowerCase().includes(lowerTerm) ||
           movie.director?.name.toLowerCase().includes(lowerTerm)
    );
};