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
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
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
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={handleChange}
          />
        </div>
        <input type="submit" className="btn" name="signup" />
      </form>
    </>
  );
};

export default Register;
