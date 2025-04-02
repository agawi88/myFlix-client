import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PasswordInput } from "../PasswordInput";
import "./LoginView.scss"


export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
    
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

      fetch("https://gb-movies-api-cab43a70da98.herokuapp.com/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
              console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
              } else {
                  alert("No such user");
              }
          })
          .catch((e) => {
              alert("Something went wrong");
          });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
      <Form.Label>
        Username: </Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minlength="5"
          maxlength="12"
        />
        {/*<Form.Label>
        Password: </Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minlength="8"
          maxlength="15"
          autocomplete="current-password"
          /> */}
      </Form.Group>
      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
