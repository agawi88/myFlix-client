
/**
 * @file filterMovies.js
 * @description
 * Utility function for filtering movies based on a search term.
 */

/**
 * Filters a list of movies by title, genre name, or director name.
 *
 * The search is case-insensitive. If the search term is empty
 * or contains only whitespace, the original movie list is returned.
 *
 * @param {Array<Object>} movies List of movie objects to filter
 * @param {string} searchTerm Search input provided by the user
 *
 * @returns {Array<Object>} Filtered list of movies
 */

export function filterMovies(movies, searchTerm) {
    if (!searchTerm.trim()) return movies;

    const lowerTerm = searchTerm.toLowerCase();

    return movies.filter((movie) =>
           movie.title.toLowerCase().includes(lowerTerm) ||
           movie.genre?.name.toLowerCase().includes(lowerTerm) ||
           movie.director?.name.toLowerCase().includes(lowerTerm)
    );
};