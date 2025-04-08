import React from "react";
import { useState } from "react";
import { Button, Form, Row, Col, InputGroup, Card } from "react-bootstrap";
import { PasswordInput } from "../PasswordInput";
import "./LoginView.scss"


export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
    
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
                  alert("No such user");
              }
          })
          .catch((e) => {
              alert("Something went wrong");
          });
  };

  return (
    <Card>
      <Card.Header className="text-center bg-primary text-white">
          <h4><b>Log In</b></h4>
      </Card.Header>
      <Card.Body>
      <Card.Title><h2>Please log in here to view the selecction of British movies:</h2></Card.Title>
   <Form onSubmit={handleSubmit} /*style={{ border: "2px solid CadetBlue" }}*/>
      <Row>
      <Form.Group controlId="formUsername">
      <Form.Label column="lg">
            Username:
      </Form.Label>
        <Col lg="auto">
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minlength="5"
          maxlength="12"
          className="mb-2 bg-light text-dark"
          placeholder="Enter your name"        
            />
          </Col>
        </Form.Group>
      </Row>
      <Row className="align-items-center">
      <Form.Group controlId="formPassword">
        <Col lg="auto">
        <Form.Label>
          Password (8 characters minimum):
          </Form.Label>
          </Col>
        <Col lg="auto">
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 bg-light text-dark"
            />
          </Col>
          <Col>
                    <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2"
            label="Remember me"
        />
        </Col>
        </Form.Group>
        </Row>
        </Form>
      </Card.Body>
              <Card.Footer>
              <Row>
          <Button type="submit" className="mb-2" lg="auto">Submit</Button>
          </Row>
          </Card.Footer>
      </Card>
  );
};
