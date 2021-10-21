import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/authentication.css";
const Login = () => {
  return (
    <>
      <div className="form-main">
        <form actions="" className="sign-in-form" id="form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user" />
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock" />
            <input
              type="password"
              placeholder="Password"
              name="password"
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
      </div>
    </>
  );
};

export default Login;
