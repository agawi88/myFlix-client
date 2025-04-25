import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

export const DeleteAccountButton = ({user, token}) => {
    const [showModal, setShowModal] = useState(false);
    const handleDeleteClick = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const confirmDelete = () => {
        fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to delete account");
                }
                return response.text();
            })
            .then((message) => {
                alert(message);
                setShowModal(false);

            })
            .catch((err) => {
                console.error("Error deleting account:", err);

                setShowModal(false);
            });
    };
    return (
        <>
            <Button variant="danger" onClick={handleDeleteClick}>
                Delete Account
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure you want to delete your account/username? <br></br><b>This cannot be undone!</b></h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={confirmDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
DeleteAccountButton.propTypes = {
    user: PropTypes.shape({
        Username: PropTypes.string.isRequired,
    }).isRequired,
    token: PropTypes.string.isRequired
};