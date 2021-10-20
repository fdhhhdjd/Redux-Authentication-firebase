import React, { useEffect, useState } from "react";
import logo from "../images/register.svg";
import Forget from "./Forget";
import Register from "./Register";
import { Link } from "react-router-dom";
import Contents from "./Contents";
const Login = ({ handleFlag, flag }) => {
  return (
    <>
      <div className="signin-signup">
        <form className="sign-in-form">
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
        <Register />
      </div>
      <Contents handleFlag={handleFlag} flag={flag} />
    </>
  );
};

export default Login;
