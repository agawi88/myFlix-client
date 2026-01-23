/**
 * @file DeleteAccountView.jsx
 * @description
 * Account deletion confirmation view for the myFlix client application.
 *
 * Allows an authenticated user to permanently delete their account
 * by sending a DELETE request to the backend API.
 */


import React from "react";
import PropTypes from "prop-types";
import { Button, Row, Col, Card } from "react-bootstrap";
import "../SignupView/SignupView.scss";

/**
 * DeleteAccountView component.
 *
 * Displays a confirmation dialog that allows the user to
 * permanently delete their account. On successful deletion,
 * local authentication data is cleared and the user is
 * redirected to the signup flow.
 *
 * @param {Object} props Component props
 * @param {Object} props.user Authenticated user object
 * @param {Function} props.setUser Clears the current user state
 * @param {string} props.token Authentication token
 * @param {Function} props.setToken Clears the authentication token
 * @param {Function} props.onBackClick Cancels account deletion
 * @param {Function} props.setShowSignup Shows the signup view
 * @param {Function} props.setShowProfile Toggles profile visibility
 * @param {Function} props.setShowDeleteView Toggles delete view visibility
 *
 * @returns {JSX.Element} Account deletion confirmation UI
 */

export const DeleteAccountView = ({ user, setUser, token, setToken, onBackClick, setShowSignup, setShowProfile, setShowDeleteView }) => {
    const API_URL = import.meta.env.VITE_API_URL;

    /**
     * Sends a DELETE request to the backend API to remove
     * the user's account permanently.
     *
     * On success, clears localStorage, resets authentication
     * state, and redirects the user to the signup flow.
     *
     * @returns {void}
     */

        const confirmDelete = () => {
            fetch(`${API_URL}/users/${user.Username}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    if (response.ok)
                    {
                        localStorage.clear();
                        setShowProfile(false);
                        setShowDeleteView(false);
                        setShowSignup(true);
                    } 
                    else {
                        throw new Error("Failed to delete account");
                    }
                    return response.text();
   
                })
                .then((message) => {
                    localStorage.clear();
                    setUser(null);
                    setToken(null);
                    setShowProfile(false);
                    setShowDeleteView(false);
                    setShowSignup(true);

                })
                .catch((err) => {
                    console.error("Error deleting account:", err);
                    alert("Something went wrong while deleting your account.")
                });
    };
    

    return (
    <>
      <Card className="align-items-center shadow-lg rounded-4 my-4">
      <Card.Header className="text-center bg-primary opacity-8 text-white rounded-4 my-0" column="lg">
            <h3><b>Delete Account {user.Username} </b></h3>
      </Card.Header>
      <Card.Body>
        <Card.Title><h5>Are you sure you want to delete your account/username? <br></br><strong>Warning:</strong> This action is permanent and cannot be undone.</h5>
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <Row>
            <Col>
                <Button variant="secondary"
                  onClick={onBackClick} 
                > Cancel </Button>
            </Col>
            <Col>     
                <Button onClick={confirmDelete}
                variant="danger"
                className="mb-2"
                    lg="auto"
                    > DELETE </Button>
            </Col>
        </Row>
       </Card.Footer>
      </Card>
    </>        
    );
};
DeleteAccountView.propTypes = {
    user: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    onBackClick: PropTypes.func.isRequired,
    setShowProfile: PropTypes.func.isRequired,
    setShowDeleteView: PropTypes.func.isRequired,
    setShowSignup: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired,
    setToken: PropTypes.func.isRequired,
};