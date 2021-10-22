import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitial } from "../Redux/Actions";

import "../Styles/Home.css";
import Navbar from "./Navbar";
const Home = () => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.user);
  const handleLogout = (user) => {
    user.preventDefault();
    if (current) {
      dispatch(logoutInitial(user));
    }
  };
  return (
    <>
      <Navbar />
      <div className="App">
        <h1>home</h1>
        <h3>hi,{current.displayName}</h3>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;
