import React, { useState } from "react";
import { loginUser } from "../axios-services";

const Login = ({
  user,
  setUser,
  username,
  setUsername,
  password,
  setPassword,
  isLoggedIn,
  setIsLoggedIn,
  token,
  setToken,
}) => {
  // the message to be displayed is the message received from the server
  const [message, setMessage] = useState("");
  const [clickedSubmit, setClickedSubmit] = useState(false);

  return (
    <div className="registrationPage">
      <h1>Welcome Back to the Chameleonaires' Reptile Shop!</h1>
      <div className="formContainer">
        <form>
          onSubmit=
          {async (e) => {
            e.preventDefault();
            try {
              const response = await loginUser(username, password);
              if (response.message === "you're logged in!") {
                setIsLoggedIn(true);
                setToken(response.token);
                localStorage.setItem("token", response.token);
                setUser(response.user);
              }
              setMessage(response.message);
              setClickedSubmit(true);
              setUsername("");
              setPassword("");
            } catch (error) {
              console.error("There was a problem with your login.", error);
            }
          }}
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
