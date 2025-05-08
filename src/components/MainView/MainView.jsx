import { useState, useEffect } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";
import { LoginView } from "../LoginView/LoginView";
import { SignupView } from "../SignupView/SignupView";
import { ProfileView } from "../UsersProfileView/ProfileView";
import { NavbarView } from "../NavbarView/NavbarView";
import { UpdateFormView } from "../UsersProfileView/UpdateFormView";
import { DeleteAccountView } from "../UsersProfileView/DeleteAccountView";


import { Container, Row, Col} from "react-bootstrap";
//import { BrowserRouter,Route, Routes, Navigate } from "react-router-dom";

import PropTypes from "prop-types";


export const MainView = ({ onBackClick, onClick, onShowProfile, onLoggedIn, onLogout, onHide, onMovieClick }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const [View, setView] = useState("profile");
  // const [favoriteMovies, setFavoriteMovies] = useState([]);
  // const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);
  const [showSignup, setShowSignup] = useState(false);
  const [showDeleteView, setShowDeleteView] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false); 
  const [showProfile, setShowProfile] = useState(() => {
    return JSON.parse(localStorage.getItem("showProfile")) || false; 
  });
  useEffect(() => {
        console.log(user, token);
    if (!user || !token) return;

    fetch("https://gb-movies-api-cab43a70da98.herokuapp.com/movies", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);

        const moviesFromApi = movies.map((doc) => {
          return {
            id: doc._id,
            title: doc.Title,
            releaseYear: doc.ReleaseYear,
            setting: doc.Setting,
            description: doc.Description,
            genre: {
              name: doc.Genre.Name,
              description: doc.Genre.Description,
            },
            director: {
              name: doc.Director.Name,
              bio: doc.Director.Bio,
              dateOfBirth: doc.Director.DateOfBirth,
              deathYear: doc.Director.DeathYear
            },
            //actors: [],
            featured: doc.Featured,
            image: doc.ImageURL,
          };
        });
        console.log(moviesFromApi);
        setMovies(moviesFromApi);
      })
      .catch((error) => {
        console.error("Error loading movies:", error);
      });
  }, [user, token]);

  if (selectedMovie) {
    
    similarMoviesByGenre = movies.filter(
      (movie) =>
        movie.genre.name === selectedMovie.genre.name &&
        movie.id !== selectedMovie.id
    );
    
    similarMoviesByDirector = movies.filter(
      (movie) =>
        movie.director.name === selectedMovie.director.name &&
        movie.id !== selectedMovie.id
    );
  }
  const isFavorite = selectedMovie && user?.FavoriteMovies?.includes(selectedMovie.id);

    const toggleFavorite = (MovieId) => {
    if (!user || !token) return;
    
    const isFav = user.FavoriteMovies.includes(MovieId);

    const method = isFav ? "POST" : "PUT";

    fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}/movies/${MovieId}`, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update favorites");
        return res.json();
      })
      .then((updatedUser) => {
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      })
      .catch((error) => console.error("Toggle favorite error:", error));
  };

  return (
    <Container>
      {user && (selectedMovie || movies.length > 0) && (
  //  NVBAR
        <NavbarView
          onSearch={() => {
            
          }}
          onLogout={() => {
            setUser(null);
            setToken(null);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
          }}
          onShowProfile={() => {
            setShowProfile(true);
            setShowUpdateForm(false);
            localStorage.setItem("showProfile", true);
          }}
          // onShowFavorites={() => {
          //   setShowFavorites(true);
          //   localStorage.setItem("showFavorites", true);
          // }}
          onBackClick={() => {
            setShowProfile(false);
            setShowUpdateForm(false);
            setSelectedMovie(null);
            localStorage.setItem("showProfile", false);
          }}
        />    
      )}
{/* // MAIN and OTHER VIEWs */}
      {!user ? (
        <div>
        <Col md={5} className="mb-1 p-2" >
  {/* LOGIN and SIGNUP view, for the moment put together */}
          <Row>
            <LoginView
              onLoggedIn={(user, token) => {
                setUser(user);
                setToken(token);
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", token);
              }}
            />
          </Row>
          <Row>
            <SignupView />
          </Row>
          </Col>
        </div>
        ) : showUpdateForm ? (
          <Row>
            <Col>
                <UpdateFormView
                  user={user}
                  token={token}
                onBackClick={() => {
                  setShowUpdateForm(false);
                  setShowProfile(true);
                localStorage.setItem("showProfile", true);
                }}
                onClick={(updatedUser) => {
                  setUser(updatedUser);
                  localStorage.setItem("user", JSON.stringify(updatedUser));
                  setShowUpdateForm(false);
                  setShowProfile(true);
                }}
              />
              </Col>
          </Row>
                 ) : showDeleteView ? (
          <Row>
            <Col>
                <DeleteAccountView
                  user={storedUser}
                  token={token}
                onBackClick={() => {
                  setShowDeleteView(false);
                  setShowProfile(true);
                localStorage.setItem("showProfile", true);
                }}
                //   onClick={(storedUser) => {
                //   setUser(null);
                //     setToken(null);
                //     localStorage.clear();
                //     setShowProfile(false);
                //   setShowDeleteView(false);
                //   setShowSignup(true);
                // }}
              />
              </Col>
          </Row>
          ) : showProfile ? (
          <Row>
            <Col>
            <ProfileView
              user={user}
              movies={movies}
                onMovieClick={(movie) => setSelectedMovie(movie)}
                  onEditClick={() => setShowUpdateForm(true)}
                  onDeleteClick={() => setShowDeleteView(true)}
              />
              </Col>
          </Row> 
        ) : selectedMovie ? (
// MovieView MODAL bzw. SELECTED MOVIE
          <Row>
              <MovieView
              show={!!selectedMovie}
              movie={selectedMovie}
              movies={movies}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
              onHide={() => setSelectedMovie(null)}
              onBackClick={() => setSelectedMovie(null)}
              onMovieClick={(movie) => setSelectedMovie(movie)}
              similarMoviesByDirector={similarMoviesByDirector}
              similarMoviesByGenre={similarMoviesByGenre}
                />
          </Row>  
// EMPTY MOVIES LIST
      ) : movies.length === 0 ? (
        <div>The list is empty!</div>
      ) : (
// MOVIE CARDS IN MAIN VIEW bzw LIST OF MOVIES
        <Row className="g-4" xs={1} sm={2} md={3} lg={4} mb={3}>
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} >
              <MovieCard
                movie={movie}
                onMovieClick={() => setSelectedMovie(movie)}
              />
            </Col>
          ))}
        </Row>
      )}       
      </Container >
  );
};

  MainView.propTypes = {
    // movie: PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   releaseYear: PropTypes.string.isRequired,
    //   setting: PropTypes.string,
    //   description: PropTypes.string.isRequired,
    //   genre: PropTypes.shape({
    //     name: PropTypes.string.isRequired,
    //     description: PropTypes.string.isRequired,
    //   }),
    //   director: PropTypes.shape({
    //     name: PropTypes.string.isRequired,
    //     bio: PropTypes.string.isRequired,
    //     dateOfBirth: PropTypes.string.isRequired,
    //     deathYear: PropTypes.string,
    //   }),
    //   image: PropTypes.string.isRequired,
    //   featured: PropTypes.bool.isRequired,
    // }).isRequired,
      onBackClick: PropTypes.func.isRequired,
      onClick: PropTypes.func.isRequired,
      onHide: PropTypes.func.isRequired,
      onShowProfile: PropTypes.func.isRequired,
      onLoggedIn: PropTypes.func.isRequired,
      onLoggedOut: PropTypes.func.isRequired
  };
