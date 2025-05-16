import { useState } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { PasswordInput } from "../PasswordInput";
// import PropTypes from "prop-types";
import "./SignupView.scss";


export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            DateOfBirth: dateOfBirth,
        };
        fetch("https://gb-movies-api-cab43a70da98.herokuapp.com/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      })
          .then((response) => response.json())
            .then((data) => {
                console.log("Signup response: ", data);
                if (data.message === "User already exists") {
                    alert("Username already exists! Choose a different username OR log in.");
                } else {
                    alert("Signup successful! Please log in.");
                }
            })
          .catch((e) => {
              alert("Something went wrong");
          });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex justfy-content-center"
      autoComplete="off">
      <Card className="shadow-lg rounded-4 my-4">
      <Card.Header className="text-center bg-primary opacity-8 text-white rounded-4" column="lg">
          <h3><b>REGISTER</b></h3>
      </Card.Header>
      <Card.Body>
        <Card.Title><h4>Please log in here to view the selecction of British movies:
        </h4></Card.Title>
        <Row>
          <Form.Group /* controlId="signupUsername" */>
            <Col>
            <Form.Label htmlFor="username">
                  Username:
            </Form.Label>
                <Form.Control
                autoComplete="off"
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
      <Form.Group /* controlId="signupPassword" */>
        <Col>
        <Form.Label htmlFor="password">
          Password (8 characters minimum):
          </Form.Label>
          </Col>
        <Col>
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2"
            />
          </Col>
          <Col>
                    <Form.Check
            type="checkbox"
            id="rememberMeSignup"
            className="mb-2"
            label="Remember me"
        />
        </Col>
        </Form.Group>
        </Row>            
        <Row>
          <Form.Group>
            <Col>
        <Form.Label htmlFor="email"> 
                Email: </Form.Label>
                <Form.Control
                autoComplete="off"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" size="30"
                placeholder="sophie@example.com"
                className="mb-2 bg-light text-dark"
              />
              </Col>
            </Form.Group>
          </Row>
        <Row>
          <Form.Group>
            <Col>
            <Form.Label htmlFor="dateOfBirth">
                Date of Birth: </Form.Label>
                <Form.Control
                id="dateOfBirth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                placeholder="01-01-2000"
                className="mb-2 bg-light text-dark"
              />
              </Col>
            </Form.Group>
          </Row>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Button type="submit" className="mb-2" lg="auto">Sign Up</Button>
        </Row>
       </Card.Footer>
      </Card>
  </Form>
    );
};