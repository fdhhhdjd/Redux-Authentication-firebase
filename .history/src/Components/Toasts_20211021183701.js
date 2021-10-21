import React, { useRef, useState, useEffect } from "react";
import lottie from "lottie-web";
const Toasts = () => {
  const [list, setList] = useState([]);
  let toastProperties = null;
  const success = useRef(null);
  const danger = useRef(null);
  const info = useRef(null);
  const warning = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: success.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/success.json"),
    });
    lottie.loadAnimation({
      container: danger.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/danger.json"),
    });
    lottie.loadAnimation({
      container: info.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/info.json"),
    });
    lottie.loadAnimation({
      container: warning.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/warning.json"),
    });
  }, [list]);
  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {};

        break;
      case y:
        break;
      default:
    }
  };
  return (
    <div>
      <h1>Toasts</h1>
    </div>
  );
};

export default Toasts;
