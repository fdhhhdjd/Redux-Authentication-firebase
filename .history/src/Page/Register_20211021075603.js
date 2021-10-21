import React from "react";

const Register = () => {
  return (
    <>
      <form actions="" className="sign-in-form" id="form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Full Name" name="signup_full_name" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input type="email" placeholder="Email Address" name="signup_email" />
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
    </>
  );
};

export default Register;
