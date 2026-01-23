/**
 * @file NavbarView.jsx
 * @description
 * Navigation bar component for the myFlix client application.
 *
 * Displays navigation links based on authentication state
 * and provides a search form for filtering movies.
 */

import PropTypes from "prop-types";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * NavbarView component.
 *
 * Renders the main navigation bar of the application.
 * Shows different navigation options depending on whether
 * a user is authenticated and allows searching movies
 * via a controlled input.
 *
 * @param {Object} props Component props
 * @param {Object|null} props.user Authenticated user object or null
 * @param {Function} props.onLogout Logs the user out
 * @param {Function} props.onSearch Executes a movie search
 * @param {string} props.searchTerm Current search input value
 * @param {Function} props.setSearchTerm Updates the search input value
 * @param {Function} props.onLoginClick Handles login navigation
 * @param {Function} props.onHomeClick Navigates to the home view
 *
 * @returns {JSX.Element} Navigation bar UI
 */

export const NavbarView = ({ user, onLogout, onSearch, searchTerm, setSearchTerm, onLoginClick, onHomeClick }) => {

  return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" onClick={onHomeClick}>British Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
            {!user && (
              <>
                <Nav.Link className="RegularButton" as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="RegularButton" as={Link} to="/signup" onClick={onLoginClick}>
                  Signup
                </Nav.Link>
              </>
            )}
            {user &&  (
              <>
                <Nav.Link className="RegularButton" as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link className="RegularButton" as={Link} to="/" onClick={onHomeClick}>
                  Home
                </Nav.Link>
                <Nav.Link className="RegularButton" onClick={onLogout}>
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
                id="search"
                            type="search"
                            placeholder="Search movies.."
                            className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button type="submit" variant="outline-success" className="RegularButton">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

NavbarView.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  onHomeClick: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired
};
