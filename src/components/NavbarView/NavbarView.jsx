import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

export const NavbarView = ({ user, onLogout, onShowProfile, onBackClick, onSearch, showSignup }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">British Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
            {!user && (
              <>
                <Nav.Link type="button" className="RegularButton mb-3" as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link type="button" className="RegularButton mb-3" showSignup={true} as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link type="button" className="RegularButton mb-3" onClick={onShowProfile} as={Link} to="/">
                  Profile
                </Nav.Link>
                <Nav.Link type="button" className="RegularButton mb-3" onClick={onBackClick} as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link type="button" className="RegularButton mb-3" onClick={onLogout}>
                  Logout
                </Nav.Link>
              </>
            )}
                    </Nav>
                    <Form className="d-flex" onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(searchTerm);
            }}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button type="submit" variant="outline-success" className="RegularButton">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

NavbarView.propTypes = {
      user: PropTypes.object.isRequired,
      onLogout: PropTypes.func.isRequired,
      onShowProfile: PropTypes.func.isRequired,
    //   onShowFavorites: PropTypes.arrayOf(PropTypes.object).isRequired,
      onBackClick: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
      showSignup: PropTypes.bool.isRequired
  };