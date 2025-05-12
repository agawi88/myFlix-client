import React from "react";
import PropTypes from "prop-types";
import { Navbar, Form, Row, Col, Button, ButtonGroup } from "react-bootstrap";

export const NavbarView = ({ onLogout, onShowProfile, onBackClick, onSearch }) => {
    return (
        <Navbar sticky="top" className="Navbar justify-content-between">
            <Form className="d-flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(searchTerm);
            }}>
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
                        {/* <Col xs="auto">
                            <Button
                                className="RegularButton mb-3"
                                onClick={onShowFavorites}>
                                Favorites
                            </Button>
                        </Col> */}
                        <Col xs="auto">
                            <Button onClick={onBackClick} className="mb-3">
                                Back to Home
                            </Button>
                        </Col>
                        <Col xs="auto">
                            <Button className="btn RegularButton me-md-2"
                                onClick={onLogout}>
                                Logout
                            </Button>
                        </Col>
                    </ButtonGroup>
                </Row>
            </Form>
        </Navbar>
    );
};

  NavbarView.propTypes = {
      onLogout: PropTypes.func.isRequired,
      onShowProfile: PropTypes.func.isRequired,
    //   onShowFavorites: PropTypes.arrayOf(PropTypes.object).isRequired,
      onBackClick: PropTypes.func.isRequired,
      onSearch: PropTypes.func.isRequired
  };