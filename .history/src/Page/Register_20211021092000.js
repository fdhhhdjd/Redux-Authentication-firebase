import React, { useState } from "react";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { displayName, email, password, passwordConfirm } = state;
  return (
    <>
      <form actions="" className="sign-up-form form-main" id="form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            type="text"
            placeholder="Full Name"
            name="signup_full_name"
            value={displayName}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input
            type="email"
            placeholder="Email Address"
            name="signup_email"
            value={email}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            placeholder="Password"
            name="signup_password"
            value={password}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            placeholder="Confirm Password"
            name="signup_cpassword"
            value={passwordConfirm}
          />
        </div>
        <button className="btn" name="signup" defaultValue="Sign up" />
      </form>
    </>
  );
};

export default Register;
