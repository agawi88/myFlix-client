import { useState, useEffect } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";
import { LoginView } from "../LoginView/LoginView";
import { SignupView } from "../SignupView/SignupView";
import { SimilarMoviesByGenre } from "../SimilarMovies/SimilarMoviesByGenre";
import { SimilarMoviesByDirector } from "../SimilarMovies/SimilarMoviesByDirector";
import { FavoritesView } from "../FavoriteMovies/FavoritesView";


import PropTypes from "prop-types";

import { Container, Row, Col, Button, ButtonGroup, Form, Navbar, Modal } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";



export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentView, setCurrentView] = useState("main");
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);

  // const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    console.log(user, token);
    if (!user || !token) return;

    fetch("https://gb-movies-api-cab43a70da98.herokuapp.com/movies", {
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
      });
  }, [user, token]);

  let similarMoviesByGenre = [];
  let similarMoviesByDirector = [];

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

  return (
    <Container>
      {user && (selectedMovie || movies.length > 0) && (
//  NVBAR
    <Navbar sticky="top" className="Navbar justify-content-between">
      <Form className="d-flex">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2 SearchBar"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="RegularButton">Submit</Button>
          </Col>
        </Row>
          </Form>
        <Form className="d-flex justify-content-md-end">
            <Row>
            <ButtonGroup>
              <Col xs="auto">
                <Button onClick={() =>
                setCurrentView("favorites")}>
                Favorites
                </Button>
                </Col>
                <Col xs="auto">
                  {currentView === "favorites" && (
                    <Button onClick={() =>
                      setCurrentView("main")} className="mb-3">
                      Back to Home
                    </Button>
                  )}
                </Col>
              <Col xs="auto">
                <Button className="btn RegularButton me-md-2" type="button"
                onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.setItem("user", JSON.stringify(user)); 
                localStorage.setItem("token", token);
              // setShowSignup(false); // Reset to login screen
              }}
                >
                Logout
              </Button>
                </Col>
              </ButtonGroup>
          </Row> 
    </Form>
  </Navbar>
      )}
{/* // MAIN and OTHER VIEWs */}
      {!user ? (
        <Col md={5} mb-1 p-2>
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
// FAVORITES VIEW
      ) : currentView === "favorites" ? (
          <>
            <FavoritesView
              favoriteMovies={favoriteMovies}
              onMovieClick={(movie) => {
                setSelectedMovie(movie);
                setCurrentView("main");
              }}
            />
          </>   
        ) : selectedMovie ? (
// MovieView MODAL bzw. SELECTED MOVIE
        <Modal
          show={!!selectedMovie}
          onHide={() => setSelectedMovie(null)}
          size="xl"
          centered
          scrollable
          dialogClassName="modal-90w">
          <Modal.Header>
                <Modal.Title>{selectedMovie.title}
                  <Button
                    variant="link"
                    onClick={() => toggleFavorite(selectedMovie.id)}
                    className="ms-3 p-0"
                    style={{ color: isFavorite ? "red" : "gray", fontSize: "1.5rem"}}
                  >
                    {isFavorite ? <FaHeart /> : <FaRegHeart />} 
                  </Button>
              </Modal.Title>
              <Button //onClick={onBackClick}
                onClick={() => setSelectedMovie(null)}
                className="backButton ms-auto" 
                style={{cursor: "pointer"}}
              >Back</Button>
          </Modal.Header>
          <Modal.Body>
            <MovieView
              movie={selectedMovie}
              movies={movies} // for a full list of movies
              onBackClick={() => setSelectedMovie(null)}
              onMovieClick={() => setSelectedMovie(selectedMovie)}
                />
{/* // SIMILAR MOVIES BY: GENRE, DIRECTOR; later on also by ACTORS AND MY FAVOURITES           */}
            <hr />
            <h2> Similar Movies </h2>
            <SimilarMoviesByGenre
              movies={similarMoviesByGenre}
              onMovieClick={(movie) => setSelectedMovie(movie)}
            />
            <hr />
            <SimilarMoviesByDirector
              movies={similarMoviesByDirector}
              onMovieClick={(movie) => setSelectedMovie(movie)}
            />
          </Modal.Body>
            </Modal>
// EMPTY MOVIES LIST
      ) : movies.length === 0 ? (
        <div>The list is empty!</div>
      ) : (
// MOVIE CARDS IN MAIN VIEW bzw LIST OF MOVIES
        <Row className="g-4" xs={1} sm={2} md={3} lg={4} mb={3}>
          {movies.map((movie) => (
            <Col key={movie._id} xs={12} sm={6} md={4} lg={3} >
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

//   console.log("User:", user);
//   console.log("FavoriteMovies:", user?.FavoriteMovies);
//   console.log("Selected Movie:", selectedMovie?.id);
// const isFavorite = selectedMovie?.id && favoriteMovieIds(selectedMovie.id);

//   let toggleFavorite = (movieId) => {
    
//   const isFav = user?.FavoriteMovies?.includes(movieId);
//   const method = isFav ? "DELETE" : "POST";
// }
//   useEffect(() => {

//     if (!user || !token) return;

//     const fetchFavorites = async () => {
//       try {
//         const response = await fetch(
//           `https://gb-movies-api-cab43a70da98.herokuapp.com/users/:Username/${user.Username}/movies`,
//           { headers: { Authorization: `Bearer ${token}` },
//             }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch favorites");
//         }

//         const favoriteMoviesData = await response.json();
//         setFavoriteMovies(favoriteMoviesData);
//         setFavoriteMovieIds(favoriteMoviesData.map((m) => m._id));
//       } catch (err) {
//         console.error("Failed to fetch favorite movies", err);
//       }
//     };

//     fetchFavorites();
//   }, [user, token]);


  MainView.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      releaseYear: PropTypes.string.isRequired,
      setting: PropTypes.string,
      description: PropTypes.string.isRequired,
      genre: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
      director: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        dateOfBirth: PropTypes.string.isRequired,
        deathYear: PropTypes.string,
      }),
      image: PropTypes.string.isRequired,
      featured: PropTypes.bool.isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };
