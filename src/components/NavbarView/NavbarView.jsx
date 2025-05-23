import PropTypes from "prop-types";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

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
            {user && /* (selectedMovie || movies.length > 0) && */  (
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
      user: PropTypes.object.isRequired,
      onLogout: PropTypes.func.isRequired,
      onShowProfile: PropTypes.func.isRequired,
      onBackClick: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
  showSignup: PropTypes.bool.isRequired,
  setSearchTerm: PropTypes.arrayOf(propTypes.object).isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchResults: PropTypes.arrayOf(propTypes.object).isRequired,
  onHomeClick: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired
  };