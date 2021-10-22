import React from "react";
import "../Styles/LoginGoogleFb.css";
import Lottie from "react-lottie";
import * as google from "../Json/google.json";
import { useDispatch } from "react-redux";
import { loginFacebookInitial } from "../Redux/Actions";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: google.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LoginFacebook = () => {
  const dispatch = useDispatch();
  const handleLoginFB = () => {
    dispatch(loginFacebookInitial());
  };
  return (
    <>
      <div className="login  ">
        <div className="google-btn " onClick={handleLoginFB}>
          <div className="google-icon-wrapper ">
            <Lottie options={defaultOptions} />
          </div>
          <p className="btn-text">
            <b>Sign in with FaceB +</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginFacebook;
