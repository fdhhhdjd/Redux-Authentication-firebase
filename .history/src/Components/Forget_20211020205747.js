import React from "react";

const Forget = () => {
  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action method="post" className="sign-in-form">
              <h2 className="title">Reset Password</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  required
                />
              </div>
              <input
                type="submit"
                defaultValue="Send Verification Link"
                name="resetPassword"
                className="btn solid"
              />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Forgot Password ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
