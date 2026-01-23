/**
 * @file ProfileView.jsx
 * @description
 * User profile view for the myFlix client application.
 *
 * Displays user account information and a list of the user's
 * favorite movies. Allows editing user data and deleting
 * the account.
 */

import { useState, useEffect } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import PropTypes from "prop-types";
import { Button, Row, Col } from "react-bootstrap";
import { data } from "react-router";

/**
 * ProfileView component.
 *
 * Fetches and displays detailed user information from the backend
 * and renders the user's favorite movies. Provides actions to
 * edit profile data and delete the user account.
 *
 * @param {Object} props Component props
 * @param {Object} props.user Authenticated user object
 * @param {Array<Object>} props.movies Full list of movies
 * @param {Function} props.onMovieClick Handles movie selection
 * @param {Function} props.onEditClick Opens the profile edit form
 * @param {Function} props.onDeleteClick Opens the delete account view
 * @param {string} [props.size="small"] Size variant for movie cards
 *
 * @returns {JSX.Element} User profile view
 */

export const ProfileView = ({ user, movies, onMovieClick, onEditClick, onDeleteClick, size="small"}) => {
  const token = localStorage.getItem("token"); 
  const [profileUser, setProfileUser] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  /**
   * Fetches the latest user data from the backend API
   * and normalizes it for use in the profile view.
   */
    
    useEffect(() => {
      if (!user?.Username || !token) return;
      
      fetch(`${API_URL}/users/${user.Username}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch user data");
          return response.json();
        })

        .then((data) => {
        const userFromApi = {
            id: data.id,
            username: data.Username,
            password: data.hashedPassword,
            email: data.Email,
            dateOfBirth: data.DateOfBirth,
          favoriteMovies: Array.isArray(data.FavoriteMovies) ? data.FavoriteMovies : [],
        };
          setProfileUser(userFromApi);
        })
            .catch((error) => {
             console.error("Error fetching user data:", error);
      });
    }, [user, token]);
  
  if (!user) return <div>User not found. Please log in again.</div>;
  if (!profileUser) return <div>Loading profile...</div>;
  if (!movies || movies.length === 0) return <div>Loading movies ...</div>
  
  const uniqueFavoriteIds = [...new Set(profileUser.favoriteMovies)];
  const favoriteMovies = movies.filter((m) => m.id && uniqueFavoriteIds.includes(m.id)
  );

  return (
    <div>
      <h3>Your Profile</h3>
      <div>
        <span><b>Username: </b></span>
        <span>{profileUser.username}</span>
      </div>
      <div>
        <span><b>Password: </b> ********</span>
        <span>{profileUser.password}</span>
      </div>
      <div>
        <span><b>Email: </b></span>
        <span>{profileUser.email}</span>
      </div>
      <div>
        <span><b>Date of Birth: </b></span>
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
        {favoriteMovies.length > 0 ? (
          <Row className="g-2">
            {favoriteMovies.map((movie) => (
              <Col key={movie.id} /* xs={2} sm={4} md={6} lg={6} */ className="d-flex" >
                <MovieCard
                  size="small"
                  movie={movie}
                  user={user}
                  token={token}
                  onMovieClick={onMovieClick}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <h5>You have no favorite movies yet: start adding some!</h5>
        )}
      </div>
    </div>
  ); 
};

ProfileView.propTypes = {
  user: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["default", "small", "mini"]),
};

