// import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
// import { Row, Col } from "react-bootstrap";
// import { MovieCard } from "../MovieCard/MovieCard";

// export const Favorites = ({ user, movies, onFavoritedMovie }) => {
//   const token = localStorage.getItem("token");
//   const [profileUser, setProfileUser] = useState(null);

//   const favoriteMovies = movies.filter((movie) => (movies.favorite));

//   const favoriteMovieCard = favoriteMovies.map((movie) => (
//     <MovieCard
//       key={movie.id}
//       movie={movie}
//       onFavoritedMovie={onFavoritedMovie}
//     />
//   ))

//   return (
//     <div>
//       <div>
//         <h2>Favorite Movies</h2>
//       </div>
//       <div>
//         <ul className="favorites-container">{favoriteMovieCard}</ul>
//       </div>
//     </div>
//   );
// }
// //   useEffect(() => {

// //     const method = isFav ? "POST" : "PUT";
  
// //     fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}/movies/${MovieId}`, {
// //       method: method,
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         "Content-Type": "application/json",
// //       }
// //     })

// // };

// MovieCard.propTypes = {
//   user: PropTypes.object.isRequired,
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onMovieClick: PropTypes.func.isRequired,
//   onFavoritedMovie: PropTypes.func.isRequired,
// };
