import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const LoadingRedirect = () => {
  const [count, setCount] = useState(5);
  const history = useHistory();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((current) => --current);
    }, 1000);
    count === 0 && history.push("/login");
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1></h1>
    </>
  );
};

export default LoadingRedirect;
