import React from "react";
import { useState, useEffect } from "react";
import { DeleteAccountButton } from "./DeleteAccountButton";
import { UpdateDataButton } from "./UpdateDataButton";
import PropTypes from "prop-types";
import { data } from "react-router";

export const ProfileView = ({ user, movies, onMovieClick, onClick}) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token"); 
  
  const [profileUser, setProfileUser] = useState(null);
    
    useEffect(() => {
     if (!user || !user.Username) return;
      fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    })
        .then((response) => {
          if (!response.ok) {
          throw new Error("Failed to fetch user data");
          }
          return response.json();
      })
        .then((data) => {

        const userFromApi = {
            id: data._id,
            username: data.Username,
            password: data.Password,
            email: data.Email,
            dateOfBirth: data.DateOfBirth,
            favoriteMovies: data.FavoriteMovies || []
        };
          setProfileUser(userFromApi);
          console.log("Fetched profile user:", userFromApi);
           })
            .catch((error) => {
             console.error("Error fetching user data:", error);
      });
    }, [user]);
  
    if (!user) return <div>User not found. Please log in again.</div>;
    if (!profileUser) return <div>Loading profile...</div>;
  
  return (
    <div>
      <h3>Your Profile</h3>
      <div>
        <span>Username: </span>
        <span>{profileUser.username}</span>
      </div>
      <div>
        <span>Password: </span>
        <span>{profileUser.password}</span>
      </div>
      <div>
        <span>Email: </span>
        <span>{profileUser.email}</span>
      </div>
      <div>
        <span>Date of Birth: </span>
        <span>{profileUser.dateOfBirth}</span>
      </div>
      <h4 className="mt-3">Favorite Movies</h4>
      {profileUser.favoriteMovies && profileUser.favoriteMovies.length > 0 ? (
        profileUser.favoriteMovies.map((movieId) => {
          const movie = movies.find((m) => m._id === movieId);
          return movie ? (
            <div
              key={movie.id}
              style={{ cursor: "pointer", mb: "5px" }}
              onClick={() => onMovieClick(movie)}
            >
              {movie.title}
            </div>
          ) : null;
        })
      ) : (
        <div>No favorites selected.</div>
      )}
      <DeleteAccountButton user={profileUser} token={token} />
      <UpdateDataButton user={user} token={token} />

    </div>
  ); 
};

ProfileView.propTypes = {
  user: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,  // Ensure movies prop is an array
  onMovieClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

