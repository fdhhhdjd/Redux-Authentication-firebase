import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Lottie from "react-lottie";
import * as loading from "./Loading.json";
import * as done from "./done.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: done.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LoadingRedirect = () => {
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((current) => --current);
      setLoading(true);
    //   const setTime = setTimeout(() => {
    //     setDone(true);
    //   }, 1000);
    //   return()=>clearTimeout(setTime)
    // }, 1000);
    count === 0 && history.push("/login");
    setLoading(false);
    return () => clearInterval(interval)
  }, []);
}
  return (
    <>
      <h1>Bạn hãy chờ trong {count}s</h1>
      {!loading ? (
        <Lottie options={defaultOptions} height={120} width={120} />
      ) : (
        <Lottie options={defaultOptions2} height={120} width={120} />
      )}
    </>
  );
};

export default LoadingRedirect;
