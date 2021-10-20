import React, { useEffect, useState } from "react";
import logo from "../images/register.svg";
import Forget from "./Forget";
import Register from "./Register";
import { Link } from "react-router-dom";
const Login = ({ handleFlag }) => {
  return (
    <>
      <div className="signin-signup">
        <form action method="post" className="sign-in-form">
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
            <a href="/forget">
              <Forget />
            </a>
          </p>
        </form>
        <form action className="sign-up-form" method="post">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user" />
            <input
              type="text"
              placeholder="Full Name"
              name="signup_full_name"
            />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope" />
            <input
              type="email"
              placeholder="Email Address"
              name="signup_email"
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock" />
            <input
              type="password"
              placeholder="Password"
              name="signup_password"
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock" />
            <input
              type="password"
              placeholder="Confirm Password"
              name="signup_cpassword"
            />
          </div>
          <input
            type="submit"
            className="btn"
            name="signup"
            defaultValue="Sign up"
          />
        </form>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleFlag}
            >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleFlag}
            >
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
