import { useState } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { PasswordInput } from "../PasswordInput";
import PropTypes from "prop-types";
import "./LoginView.scss"


export const LoginView = ({ onLoggedIn, setShowSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
    
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

      fetch("https://gb-movies-api-cab43a70da98.herokuapp.com/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
              console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
              } else {
              alert("No such user. If you want to check out great British movies, please sign in.");
              setShowSignup(true);
              }
          })
          .catch((error) => {
              setError("Something went wrong");
          });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex justfy-content-center"
      autocomplete="off">
    <Card className="shadow-lg rounded-4 my-4">
      <Card.Header className="text-center bg-primary opacity: 2 text-white rounded-4 " column="lg">
          <h3><b>LOG IN</b></h3>
      </Card.Header>
      <Card.Body>
        <Card.Title><h4>Please log in here to view the selecction of British movies:
        </h4></Card.Title>
      <Row>
        <Form.Group controlId="loginUsername">
          <Col lg="auto">
      <Form.Label htmlFor="username" column="lg">
            Username:
      </Form.Label>
        <Form.Control
          autocomplete="off"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="5"
          maxLength="12"
          className="mb-2 bg-light text-dark"
          placeholder="Enter your name"        
            />
          </Col>
        </Form.Group>
      </Row>
      <Row className="align-items-center">
      <Form.Group controlId="loginPassword">
        <Col >
        <Form.Label htmlFor="password">
          Password (8 characters minimum):
          </Form.Label>
          </Col>
        <Col >
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 bg-light text-dark"
            />
          </Col>
          <Col>
                    <Form.Check
            type="checkbox"
            id="rememberMeLogin"
            className="mb-2"
            label="Remember me"
        />
        </Col>
        </Form.Group>
        </Row>
      </Card.Body>
              <Card.Footer>
              <Row>
          <Button type="submit" className="mb-2" lg="auto">Log in</Button>
          </Row>
          </Card.Footer>
    </Card>
  </Form>
  );
};

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
  setShowSignup: PropTypes.func.isRequired
};
