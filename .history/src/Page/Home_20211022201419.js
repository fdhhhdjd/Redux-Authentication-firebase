import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitial } from "../Redux/Actions";
import "../Styles/Home.css";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
const Home = () => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.user);
  return (
    <>
      <Navbar />

      <div className="App">
        <h1>home</h1>
        <h3>hi,{current.displayName}</h3>
      </div>
    </>
  );
};

export default Home;
