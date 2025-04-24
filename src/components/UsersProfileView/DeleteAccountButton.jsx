import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const DeleteAccountButton = ({user, token}) => {
    const [showModal, setShowModal] = useState(false);
    const handleDeleteClick = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const confirmDelete = () => {
        fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}`, {
            method: 'DELETE',
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
                <Modal.Body>Are you sure you want to delete your account/username? This cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={confirmDelete}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};