/**
 * @file index.jsx
 * @description
 * Application entry point for the myFlix client.
 *
 * Initializes the React root and renders the main application
 * view into the DOM.
 */


import { createRoot } from "react-dom/client";
import { MainView } from "./components/MainView/MainView";

import "react-bootstrap";
import "bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

/**
 * Root application component.
 *
 * Wraps the main application view with global layout
 * components such as the Bootstrap container.
 *
 * @returns {JSX.Element} Root application layout
 */

const MyFlixApplication = () => {
    return (
        <Container>
            <MainView />
        </Container>
    );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);