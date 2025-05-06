import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { PasswordInput } from "../PasswordInput";
import "../SignupView/SignupView.scss";


export const UpdateFormView = ({ user, token, onBackClick, onClick }) => {
    const [username, setUsername] = useState(user.Username || "");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

      const data = {};
      if (username.trim()) data.Username = username; 
      if (password.trim()) data.Password = password;
      if (email.trim()) data.Email = email;

      if (Object.keys(data).length === 0) {
        alert("Please fill in at least one filed to update.");
        return;
      }
      console.log("Sending update:", data);

        fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}`, {
          method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
           },
          body: JSON.stringify(data),
      })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to update user data");
                }
                return response.json();
            })
            .then((updatedUser) => {
              onClick(updatedUser);
              setPassword("");
              setEmail("");
                alert("User info updated successfully!");
            })
                    .catch((err) => {
                      console.error("Error updating data:", err);
                      alert("Failed to update user data. Please try again.")
                });
  };

    return (
    <>
  <Form onSubmit={handleSubmit} className="align-items-center">
      <Card className="shadow-lg rounded-4 my-4">
      <Card.Header className="text-center bg-primary opacity-8 text-white rounded-4 my-0" column="lg">
          <h3><b>Update User Data</b></h3>
      </Card.Header>
      <Card.Body>
        <Card.Title><h4>User Data:
        </h4></Card.Title>
        <Row>
          <Form.Group controlId="updatepUsername">
            <Col lg="auto">
            <Form.Label>
                  Username:
            </Form.Label>
            <Form.Control
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
      <Form.Group controlId="updatePassword">
        <Col lg="auto">
        <Form.Label>
          Password (8 characters minimum):
          </Form.Label>
          </Col>
        <Col lg="auto">
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2"
            />
          </Col>
        </Form.Group>
        </Row>            
        <Row>
          <Form.Group controlId="signupEmail">
            <Col lg="auto">
        <Form.Label> 
                Email: </Form.Label>
              <Form.Control
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
      </Card.Body>
      <Card.Footer>
        <Row>
            <Col>
                <Button variant="secondary"
                  onClick={onBackClick} 
                > Cancel </Button>
            </Col>
            <Col>     
                <Button type="submit"
                variant="danger"
                className="mb-2"
                    lg="auto"
                    > Update </Button>
            </Col>
        </Row>
       </Card.Footer>
      </Card>
     </Form>
    </>        
    );
};
UpdateFormView.propTypes = {
    // user: PropTypes.shape({
    //     Username: PropTypes.string.isRequired,
    //     Password: PropTypes.string.isRequired,
    //     Email: PropTypes.string.isRequired,
    // }).isRequired,
    user: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onBackClick: PropTypes.func.isRequired
};