import { useState, useEffect, useRef } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";
import { LoginView } from "../LoginView/LoginView";
import { SignupView } from "../SignupView/SignupView";
import PropTypes from "prop-types";

import { Container, Row, Col, Button, Form, Navbar } from "react-bootstrap";


export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

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

  return (
    <Container>
      {user && (selectedMovie || movies.length > 0) && (

<Navbar className="Navbar justify-content-between">
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
          <Form className="d-flex">
        <Col className="d-grid gap-2 d-md-flex justify-content-md-end">
                 <Button className="btn RegularButton me-md-2" type="button"
          onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.setItem("user", JSON.stringify(user)); 
          localStorage.setItem("token", token);
          //setShowSignup(false); // Reset to login screen
          }}
        >
          Logout
        </Button>
      </Col>
      </Form>
    </Navbar>
      )}
       
      <Row className="justify-content-md-center">
    {!user ? (
          <Col md={5} mb-1 p-2>
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
      ) : selectedMovie ? (
          (() => {
        // Move logic outside JSX
        let similarMoviesByGenre = movies.filter(
          (movie) => movie.genre.name === selectedMovie.genre.name && movie.id !== selectedMovie.id
        );
        let similarMoviesByDirector = movies.filter(
          (movie) => movie.director.name === selectedMovie.director.name && movie.id !== selectedMovie.id
        );

        return (
          <Col md={8} style={{ border: "1px solid green"}} >
      <MovieView
        movie={selectedMovie}
        movies={movies} // for a full list of movies
        onBackClick={() => setSelectedMovie(null)}
        onMovieClick={() => setSelectedMovie(selectedMovie)}
        />
        <hr />
        <h2> Similar Movies </h2>
        <h3>By Genre</h3>
        {similarMoviesByGenre.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}    // Pass the movie as a prop to MovieCard
            onMovieClick={() => {
            setSelectedMovie(movie);
          }}  // Pass the onMovieClick function
          />
        ))}
        <hr />
        <h3>By Director</h3>
        {similarMoviesByDirector.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={() => {
            setSelectedMovie(movie);
          }}
          />
        ))}
       
        {/* For future embellishing, once actors will be added, also Similar Movies by Actors:
         <hr />
        <h3>By Actors</h3>
        {similarMoviesByActors.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={() => {
            setSelectedMovie(movie);
          }}
          />
        ))}}  */}      
          </Col>
       );
      })()
  ) : movies.length === 0 ? (
        <div>The list is empty!</div>
          ) : (
      <Row className="g-4" mb={3}>
          {movies.map((movie) => (
            <Col key={movie._id} xs={12} sm={6} md={4} lg={3} >
              <MovieCard
           // key={movie.id}
              movie={movie}
              onMovieClick={() => setSelectedMovie(movie)}
              />
            </Col>
          ))}
      </Row>
      )}
    </Row>
  </Container >
  );
};

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
