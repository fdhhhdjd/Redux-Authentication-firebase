import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInitial } from "../Redux/Actions";
import "../Styles/Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(loginInitial());
  };
  return (
    <div>
      <h1>Home</h1>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
