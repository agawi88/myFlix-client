import React from "react";
import { useState } from "react";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";
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
    <Form onSubmit={handleSubmit}>
      <Row>
      <Form.Group controlId="formUsername">
      <Form.Label column="lg" lg={2}>
            Username:
      </Form.Label>
        <Col xs="auto">
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minlength="5"
          maxlength="12"
              className="mb-2"
              placeholder="John Doe"         
            />
          </Col>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group>
        <Form.Label column="lg" lg={2}>
        <Col xs="auto">
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2"
          />
          </Col>
          </Form.Label>
        <Form.Label>
         <Col xs="auto">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2"
            label="Remember me"
          />
          </Col>
          </Form.Label>
        </Form.Group>
        </Row>
        <Row>
          <Form.Group>
        <Form.Label>
        <Col xs="auto">
          <Button type="submit" className="mb-2">Submit</Button>
        </Col>
        </Form.Label>
        </Form.Group>
      </Row>
    </Form>
  );
};
