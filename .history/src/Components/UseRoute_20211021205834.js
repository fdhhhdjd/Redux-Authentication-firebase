import React from "react";
import { useSelector } from "react-redux";
import LoadingRedirect from "./LoadingRedirect";
const UseRoute = ({ children, ...rest }) => {
  const { current } = useSelector((state) => state.user);

  return current ? <Route {...rest} /> : <LoadingRedirect />;
};

export default UseRoute;
