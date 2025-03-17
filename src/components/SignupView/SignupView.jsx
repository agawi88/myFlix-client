import React from "react";
export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            access: username,
            secret: password,
        };
        fetch("https://british-movies-23cb3bbeb9f8.herokuapp.com/users", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
              console.log("Signup response: ", data);
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" />
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minlength="5"
                maxlength="12"
            </label>
            <label>
                Password:
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
          minlength="8"
          maxlength="15"
        />
            </label>
            <label>
                Date of Birth:
              <input
          type="passworddateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
            </label>
            <button type="submit">Submit</button>
        </form>
    );

};