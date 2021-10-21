import React from "react";
import "../Styles/LoginGoogleFb.css";
import Lottie from "react-lottie";
import * as google from "../Json/google.json";
import { useDispatch } from "react-redux";
import { loginGoogleInitial } from "../Redux/Actions";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: google.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LoginGoogleFb = () => {
  const dispatch = useDispatch();
  const handleLoginGoogle = (user) => {
    dispatch(loginGoogleInitial(user));
  };
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

export default LoginGoogleFb;
