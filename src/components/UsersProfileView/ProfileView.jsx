import React from "react";
import { useState, useEffect } from "react";
import { FavoritesView } from "./FavoritesView";
import PropTypes from "prop-types";
import { Button, Row, Col } from "react-bootstrap";
// import { data } from "react-router";

export const ProfileView = ({ user, movies, onMovieClick, onClick, onEditClick, onDeleteClick}) => {
    // const storedUser = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token"); 
  
  const [profileUser, setProfileUser] = useState(null);
  
    
    useEffect(() => {
     if (!user?.Username || !token ) return;
      fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch user data");
          return response.json();
      })
        .then((data) => {
        const userFromApi = {
            id: data._id,
            username: data.Username,
            password: data.Password,
            email: data.Email,
            dateOfBirth: data.DateOfBirth,
            favoriteMovies: Array.isArray(data.FavoriteMovies) ? data.Favorites : []
        };
          setProfileUser(userFromApi);
          console.log("Fetched profile user:", userFromApi);
           })
            .catch((error) => {
             console.error("Error fetching user data:", error);
      });
    }, [user, token]);
  
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
      <hr />
      <div>
        <Row>
          <Col>
            <Button variant="danger" onClick={onDeleteClick} user={profileUser} token={token} >
              Delete Account
            </Button>
          </Col>
          <Col>
        <Button variant="secondary" onClick={onEditClick} >
          Edit Data
            </Button>
          </Col>
          </Row>
        <hr />
        <h4 className="mt-3">Favorite Movies</h4>
        {Array.isArray(movies) && Array.isArray(profileUser.favoriteMovies) && profileUser.favoriteMovies.length > 0 ? (
        <Row>
          <Col>
            <FavoritesView
              favoriteMoviesIds={profileUser.favoriteMovies || []}
              movies={movies}
              onMovieClick={onMovieClick}
            />
          </Col>
        </Row>
        ) : (
            <div> You have no favorite movies yet. </div>
        )}
      </div>
    </div>
  ); 
};

ProfileView.propTypes = {
  user: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

