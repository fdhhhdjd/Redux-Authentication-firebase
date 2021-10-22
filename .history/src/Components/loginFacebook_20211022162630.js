import React from "react";
import "../Styles/LoginGoogleFb.css";
import Lottie from "react-lottie";
import * as google from "../Json/google.json";
import { useDispatch } from "react-redux";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: google.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LoginFacebook = () => {
  const handleLoginFB = () => {};
  return (
    <>
      <div className="login  ">
        <div className="google-btn " onClick={handleLoginFB}>
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

export default LoginFacebook;
