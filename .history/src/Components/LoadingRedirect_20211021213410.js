import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Lottie from "react-lottie";
import * as loading from "../Json/Loading.json";
import * as done from "../Json/done.json";
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
  const [count1, setCount1] = useState(2);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      setCount((current) => --current);
      setTimeout(() => {
        setDone(true);
      }, 1000);
    }, 1000);
    setLoading(false);
    count === 0 && history.push("./login");
    return () => clearInterval(interval);
  }, [count, history]);
  return (
    <div>
      <>
        <h1>Bạn hãy chờ trong {count}s</h1>
        {!loading && (
          <Lottie options={defaultOptions} height={120} width={120} />
        )}
      </>
    </div>
  );
};

export default LoadingRedirect;
