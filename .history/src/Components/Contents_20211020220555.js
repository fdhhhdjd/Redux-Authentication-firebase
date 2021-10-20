import React, { useEffect, useRef } from "react";
import Button from "./Button";
import Lottie from "react-lottie";
import * as computer from "../Json/computer.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: computer.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
const Contents = ({ handleFlag }) => {
  return (
    <>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Note New Here?</h3>
            <p>
              Hello everyone,i am tai,you is have account yet ? Can I help you?
              I am ready to help you now !
            </p>
            <Button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleFlag}
              title="Sign Up"
            />
          </div>
          <Lottie options={defaultOptions} />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Are you ready to go home website?</h3>
            <p>
              Thank you was a visit company TaiHeo Dev Web, I wish you a good
              day,I love you so much
            </p>
            <Button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleFlag}
              title="Sign in"
            />
          </div>
          {/* <Lottie options={defaultOptions} /> */}
        </div>
      </div>
    </>
  );
};

export default Contents;
