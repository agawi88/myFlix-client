import { useState, useEffect } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView";
import { LoginView } from "../LoginView/LoginView";
import { SignupView } from "../SignupView/SignupView";
import { ProfileView } from "../UsersProfileView/ProfileView";
import { NavbarView } from "../NavbarView/NavbarView";
import { UpdateFormView } from "../UsersProfileView/UpdateFormView";
import { DeleteAccountView } from "../UsersProfileView/DeleteAccountView";
import { filterMovies } from "../../UtilityFiles/filterMovies";

import { Row, Col} from "react-bootstrap";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import PropTypes from "prop-types";


export const MainView = ({ onBackClick, onClick, onShowProfile, onLoggedIn, onLogout, onHide, onMovieClick, onLoginClick, size="default" }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [showDeleteView, setShowDeleteView] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false); 
  const [showProfile, setShowProfile] = useState(() => {
    return JSON.parse(localStorage.getItem("showProfile")) || false; 
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const filteredMovies = filterMovies(movies, searchTerm);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!user || !token) return;

    fetch(`${API_URL}/movies`, {
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
        setMovies(moviesFromApi);
      })
      .catch((error) => {
        console.error("Error loading movies:", error);

      });
  }, [user, token]);

  return (
    <BrowserRouter>
      <NavbarView
          user={user}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={(searchTerm) => {
          const results = filterMovies(movies, searchTerm);
          setSearchResults(results);
        }}
        onHomeClick={() => {
          setSearchTerm(null);
          setSearchResults(null);
          localStorage.clear();
        }}  
        onLogout={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        />    
        {showUpdateForm && (
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
        )}
        {showDeleteView && (
          <DeleteAccountView
            user={user}
            token={token}
            setUser={setUser}
            setToken={setToken}
            onBackClick={() => {
              setShowDeleteView(false);
              setShowProfile(true);
              localStorage.setItem("showProfile", true);
            }}
            setShowProfile={setShowProfile}
            setShowDeleteView={setShowDeleteView}
            setShowSignup={setShowSignup}
          />
        )}
        <Row className="justify-content.md-center" style={{margin: "30px 0px 0px 0px"}} >
        <Routes>
          <Route path="/login"
            element={
            user ? (
                <Navigate to="/" replace />
              ) : showSignup ? (
                <Navigate to="/signup" onLoginClick={onLoginClick} replace />
              ) : (
                  <Col md={{ span: 6, offset: 3 }}> 
                    <LoginView 
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                        localStorage.setItem("user", JSON.stringify(user));
                        localStorage.setItem("token", token);
                      }}
                      setShowSignup={setShowSignup}
                    />
                  </Col>
                )
            }
          />

          <Route path="/signup"
            element={
              user ? (
                <Navigate to="/login" replace />
              ) : (
                  <Col md={{ span: 6, offset: 3 }}>
                    <SignupView setShowSignup={setShowSignup} />
                  </Col>
                )}
          />

          <Route
            path="/profile"
            element={
                !user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col>
                    <ProfileView
                      user={user}
                      token={token}
                      movies={movies}
                      onMovieClick={(movie) => setSelectedMovie(movie)}
                      onEditClick={() => setShowUpdateForm(true)}
                      onDeleteClick={() => setShowDeleteView(true)}
                    />
                  </Col>
                )}
          />

          <Route
            path="/"
            element={
              // EMPTY MOVIES LIST
              !user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
/* MOVIE CARDS IN MAIN VIEW bzw LIST OF MOVIES
 */                    <Row className="g-2" /* xs={1} sm={2} md={3} lg={4} */>
                      {(searchResults.length > 0 ? searchResults : searchTerm ? [] : movies).map((movie) => (
                        <Col key={movie.id} xs={7} md={6} lg={4} >
                          <MovieCard
                            size="default"
                            movie={movie}
                            user={user}
                            token={token}
                            onMovieClick={() => setSelectedMovie(movie)}
                            
                          />
                        </Col>
                      ))}
                    </Row>
                )}
          />
          <Route
            path="/movies/:movieId"
            element={
              <MovieView
              movies={movies}
              // isFavorite={isFavorite}
              onHide={() => setSelectedMovie(null)}
                onBackClick={() => setSelectedMovie(null)}
              onMovieClick={(movie) => setSelectedMovie(movie)}
                />
            }
          
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};

  MainView.propTypes = {

      onBackClick: PropTypes.func.isRequired,
      onClick: PropTypes.func.isRequired,
      onHide: PropTypes.func.isRequired,
      onShowProfile: PropTypes.func.isRequired,
      onLoggedIn: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onLoginClick: PropTypes.func.isRequired,
        size: PropTypes.oneOf(["default", "small", "mini"]),
  };
