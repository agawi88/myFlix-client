import React from "react";
import PropTypes from "prop-types";

export const ProfileView = ({ user, movies, onMovieClick, onLoggedIn }) => {
  const favoriteMovies = movies.filter((movie) =>
    user.FavoriteMovies.includes(movie.id));

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");    
      
    const handleProfile = (event) => {
      event.preventDefault();
  
      const data = {
        Username: username,
        Password: password
      };
  
        fetch('https://gb-movies-api-cab43a70da98.herokuapp.com/users/${Username}', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Login response: ", data);
              if (data.user) {
                  const userFromApi = {
      id: data.user._id,
      username: data.user.Username,
      password: data.user.Password,
      email: data.user.Email,
      dateOfBirth: data.user.DateOfBirth,
      favoriteMovies: data.user.FavoriteMovies
    };

                  localStorage.setItem("user", JSON.stringify(userFromApi));
                  localStorage.setItem("token", data.token);
                  onLoggedIn(userFromApi, data.token);
                } else {
                    alert("No such user");
                }
            })
            .catch((error) => {
                setError("Something went wrong");
            });
    };
  
  console.log(user);
  return (
    <div>
      <h3>Your Profile</h3>
      <div>
        <span>Username: </span>
        <span>{user.username}</span>
      </div>
      <div>
        <span>Password: </span>
        <span>{user.password}</span>
      </div>
      <div>
        <span>Email: </span>
        <span>{user.mail}</span>
      </div>
      <div>
        <span>Date of Birth: </span>
        <span>{user.dateOfBirth}</span>
      </div>
      <h4 className="mt-3">Favorite Movies</h4>
      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((movie) => (
          <div
            key={movie.id}
            style={{ cursor: "pointer", mb: "5px" }}
            onClick={() => onMovieClick(movie)}
          >
           {movie.title}
          </div>
        ))
      ) : (
        <div>No favorites selected.</div>
      )}
    </div>
    //   {/* <div>
    //     <span>Favorite Movies: </span>
    //     <span>{user.username.favoriteMovies.movieId}</span>
    //   </div>
    // </div> */}
  ); 
};

ProfileView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        email: PropTypes.string,
        dateOfBirth: PropTypes.string.isRequired,
        favoriteMovies: PropTypes.arrayOf(PropTypes.string).isRequired, // array of movie ID strings
    }).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,  // Ensure movies prop is an array
  onMovieClick: PropTypes.func.isRequired
};

