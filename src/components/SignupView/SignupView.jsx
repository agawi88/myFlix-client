import React from "react";
import { useState } from "react";

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
        fetch("https://british-movies-api-626d415aa570.herokuapp.com/users", {
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
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minlength="5"
                maxlength="12"
                />
            </label>
            <label>
                Password (8 characters minimum):
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minlength="8"
                maxlength="15"
        />
            </label>
            <label> 
                Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" size="30"
                placeholder="sophie@example.com"
        />
            </label>
            <label>
                Date of Birth:
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                placeholder="01-01-2000"
        />
            </label>
            <button type="submit">Submit</button>
        </form>
    );

};