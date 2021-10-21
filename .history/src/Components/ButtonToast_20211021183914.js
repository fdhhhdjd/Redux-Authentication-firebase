import React from "react";

const ButtonToast = ({ children, handleClick, btn }) => (
  <button className={btn} onClick={handleClick}>
    {children}
  </button>
);

export default ButtonToast;
