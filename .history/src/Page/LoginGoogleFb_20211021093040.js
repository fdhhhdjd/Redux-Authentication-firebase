import React from "react";
import "../Styles/LoginGoogleFb.css";
import Lottie from "react-lottie";
import * as google from "../Json/google.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: google.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
const LoginGoogleFb = () => {
  const handleLoginGoogle = () => {};
  return (
    <>
      <div className="login  ">
        <div className="google-btn " onClick={handleLoginGoogle}>
          <div className="google-icon-wrapper ">
            <div className="">
              <Lottie options={defaultOptions} width="200" height="200" />
            </div>
            {/* <img
            
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            /> */}
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginGoogleFb;
