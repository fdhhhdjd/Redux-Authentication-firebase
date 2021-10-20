import React, { useEffect, useState } from "react";
import logo from "../images/register.svg";
import Register from "./Register";
const Login = () => {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  useEffect(() => {
    document.body.setAttribute("sign-up-mode", flag);
  }, [flag]);
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
            <a href="" style={{ color: "#4590ef" }}>
              Forgot Password?
            </a>
          </p>
        </form>
      </div>
      <Register />
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
          <img src="../image/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="../images/register.svg" className="image" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
