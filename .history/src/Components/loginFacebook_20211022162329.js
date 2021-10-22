import React from "react";
import "../Styles/LoginGoogleFb.css";
const loginFacebook = () => {
  return (
    <>
      <div className="login  ">
        <div className="google-btn " onClick={handleLoginGoogle}>
          <div className="google-icon-wrapper ">
            <Lottie options={defaultOptions} />
          </div>
          <p className="btn-text">
            <b>Sign in with google +</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default loginFacebook;
