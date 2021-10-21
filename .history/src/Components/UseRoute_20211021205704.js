import React from "react";
import { useSelector } from "react-redux";

const UseRoute = () => {
  const { current } = useSelector((state) => state.user);
  return <div></div>;
};

export default UseRoute;
