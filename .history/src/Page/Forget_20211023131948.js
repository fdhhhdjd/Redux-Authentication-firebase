import React from "react";
import Lottie from "react-lottie";
import * as code from "../Json/code.json";
import "../Styles/authentication.css";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: code.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    className: "image",
  },
};
const Forget = () => {
  return (
    <>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="" method="post" class="sign-in-form">
              <h2 class="title">Reset Password</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  value="<?php echo $_POST['email']; ?>"
                  required
                />
              </div>
              <input
                type="submit"
                value="Send Verification Link"
                name="resetPassword"
                class="btn solid"
              />
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>Forgot Password ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
            </div>
            <img src="img/log.svg" class="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
