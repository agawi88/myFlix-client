import React from "react";
import { Navbar, Form, Row, Col, Button, ButtonGroup } from "react-bootstrap";

export const NavbarView = ({ onLogout, onShowProfile, onBackClick }) => {
    return (
        <Navbar sticky="top" className="Navbar justify-content-between">
            <Form className="d-flex">
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 SearchBar"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="RegularButton">Submit</Button>
                    </Col>
                </Row>
            </Form>
            <Form className="d-flex justify-content-md-end">
                <Row>
                    <ButtonGroup>
                        <Col xs="auto">
                            <Button
                                className="RegularButton mb-3"
                                onClick={onShowProfile}>
                                Profile
                            </Button>
                        </Col>
                        <Col xs="auto">
                            <Button onClick={onBackClick} className="mb-3">
                                Back to Home
                            </Button>
                        </Col>
                        <Col xs="auto">
                            <Button className="btn RegularButton me-md-2"
                                onClick={() => {
                                    onLogout
                                    // setUser(null);
                                    //   setToken(null);
                                    //   localStorage.removeItem("user");
                                    //   localStorage.removeItem("token");
                                }}
                            >
                                Logout
                            </Button>
                        </Col>
                    </ButtonGroup>
                </Row>
            </Form>
        </Navbar>
    );
};