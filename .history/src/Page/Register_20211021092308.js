import React, { useState } from "react";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { displayName, email, password, passwordConfirm } = state;
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <>
      <form
        actions=""
        className="sign-up-form form-main"
        onSubmit={handleSubmit}
      >
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            type="text"
            placeholder="Full Name"
            name="displayName"
            id="displayName"
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
        <input type="submit" className="btn" name="signup" />
      </form>
    </>
  );
};

export default Register;
