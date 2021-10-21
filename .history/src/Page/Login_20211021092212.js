import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/authentication.css";
import LoginGoogleFb from "./LoginGoogleFb";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <>
      <form
        actions=""
        className="sign-in-form form-main"
        onSubmit={handleSubmit}
      >
        <h2 className="title">Sign in</h2>
        <LoginGoogleFb />
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={email}
            required
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            required
          />
        </div>

        <input
          type="submit"
          defaultValue="Login"
          name="signin"
          className="btn solid"
        />
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Link to="/forget">
            <a href="" style={{ color: "#4590ef" }}>
              Forgot Password?
            </a>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
