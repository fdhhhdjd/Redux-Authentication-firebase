import React from "react";
import Button from "./Button";

const Contents = ({ handleFlag }) => {
  return (
    <>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleFlag}
              title="Sign Up"
            />
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <Button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleFlag}
              title="Sign in"
            />
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </>
  );
};

export default Contents;
