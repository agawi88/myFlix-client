import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

export const DeleteAccountButton = ({ user, token }) => {
    const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    const handleShow = () => {
  console.log("Button clicked!");
  setShow(true);
};
    const handleClose = () => setShow(false);

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
                setShow(false);

            })
            .catch((err) => {
                console.error("Error deleting account:", err);

                setShow(false);
            });
    };
    console.log('Modal is:', Modal);
    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete Account
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                // show={() => setShow(true)}
                // onHide={() => setShow(null)}
                size="sm"
                centered
                scrollable
                dialogClassName="modal-90w"
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Are you sure you want to delete your account/username? <br></br><b>This cannot be undone!</b></h5>
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