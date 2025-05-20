import { createRoot } from "react-dom/client";
import { MainView } from "./components/MainView/MainView";

import "react-bootstrap";
import "bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const MyFlixApplication = () => {
    return (
        <Container style={{ border: "1px solid red", width: "100%"}}>
            <MainView />
        </Container>
    );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);