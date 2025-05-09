import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "../SignupView/SignupView.scss";


export const DeleteAccountView = ({ user, token, onBackClick, setShowProfile, setShowDeleteView, setShowSignup }) => {
    // const [username, setUsername] = useState(user.Username || "");
    // const [user, setUser] = useState(null);
    //   const [token, setToken] = useState(null);
    
        const confirmDelete = () => {
            fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}`, {
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
                    if (!response.ok) {
                        throw new Error("Failed to delete account");
                    }
                    return response.text();
   
                })
                .then((message) => {
                    console.log("Account deleted: ", message);
                    localStorage.clear();
                    setUser(null);
                    setToken(null);
                    setShowProfile(false);
                    setShowDeleteView();
                    setShowSignup(true);                
                })
                // .then((storedUser) => {
                //     onClick(storedUser);
                //     alert("User deleted successfully.")
                // })
                // .then(() => {
                //     alert("Your account has been successfully deleted.");
                //     onAccountDeleted();
                // })
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
    onClick: PropTypes.func.isRequired,
    onBackClick: PropTypes.func.isRequired,
    setShowProfile: PropTypes.bool.isRequired,
    setShowDeleteView: PropTypes.bool.isRequired,
    setShowSignup: PropTypes.bool.isRequired,
};