import React from "react";
import { PasswordInput } from "../PasswordInput";
import { useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export const UpdateDataButton = ({user, token}) => {
      const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        confirmEdit();
    };

        const updateData = () => {
            fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/JSON"
                },
                body: JSON.stringify({
                    Username: username,
                    Password: password,
                    Email: email,
                })
            })
                .then((response) => {

                    if (!user || !user.Username) {
                    console.warn("User data not available");
                    return null;
                    }

                    if (!response.ok) {
                        throw new Error("Failed to update user data");
                    }
                    return response.JSON();
                })
                .then((message) => {
                    alert(message);
                    setShowModal(false);

                })
                .then((updatedUser) => {
                    setUser(updatedUser);
                    localStorage.setItem("user", JSON.stringify(updatedUser));
                    alert("User info updated successfully!");
                    setShowModal(false);

                })
                .catch((err) => {
                    console.error("Error updating data:", err);
                    setShowModal(false);
                });
    
    };
    return (
        <>
        <Button variant="danger" onClick={handleShow}>
            Edit Data
        </Button>

        <Modal.Dialog show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>Edit User Data:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleSubmit} className="align-items-center">
                <Row>
            <Form.Group controlId="updateUsername">
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
                    {/* <Col>
                <Form.Check
            type="checkbox"
            id="rememberMeSignup"
            className="mb-2"
            label="Remember me"
                    />
                    </Col> */}
            </Form.Group>
                </Row>            
                <Row>
            <Form.Group controlId="signupEmail">
                    <Col lg="auto">
                <Form.Label> 
                    Email: 
                </Form.Label>
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
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <div>
                <h4>Are you sure you want to change your user data?</h4>
                </div>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={updateData}>Confirm</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </>
    );
};
UpdateDataButton.propTypes = {
    user: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
    }).isRequired,
    token: PropTypes.string.isRequired
};