import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PasswordInput } from "../PasswordInput";
import "./SignupView.scss";


export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            DateOfBirth: dateOfBirth,
        };
        fetch("https://gb-movies-api-cab43a70da98.herokuapp.com/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      })
          .then((response) => response.json())
            .then((data) => {
                console.log("Signup response: ", data);
                if (data.message === "User already exists") {
                    alert("Username already exists! Choose a different username OR log in.");
                } else {
                    alert("Signup successful! Please log in.");
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
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
            <Form.Label> 
                Email: </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" size="30"
                placeholder="sophie@example.com"
              />
            <Form.Label>
                Date of Birth: </Form.Label>
              <Form.Control
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                placeholder="01-01-2000"
              />
            </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
    );

};