import React, { useEffect, useRef, useState } from "react";
import "../Styles/Navbar.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitial } from "../Redux/Actions";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const handleSubmit = () => {};
  const InputEl = useRef();
  const location = useLocation();
  const { current } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = (user) => {
    user.preventDefault();
    if (current) {
      dispatch(logoutInitial(user));
    }
  };
  useEffect(() => {
    InputEl.current.focus();
  }, []);
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddContact");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    } else if (location.pathname === "/login") {
      setActiveTab("Login");
    }
  }, [location]);
  return (
    <>
      <div className="header">
        <p className="logo">Contact App</p>
        <div className="header-right">
          <Link to="/">
            <p
              className={`${activeTab === "Home" ? "active" : ""}`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </p>
          </Link>
          <Link to="/addContact">
            <p
              className={`${activeTab === "AddContact" ? "active" : ""}`}
              onClick={() => setActiveTab("AddContact")}
            >
              Add Contact
            </p>
          </Link>
          <Link to="/about">
            <p
              className={`${activeTab === "About" ? "active" : ""}`}
              onClick={() => setActiveTab("About")}
            >
              About
            </p>
          </Link>
          {current ? (
            <>
              <p
                className={`${activeTab === "Logout" ? "active" : ""}`}
                onClick={handleLogout}
              >
                LoguOut
              </p>
            </>
          ) : (
            <>
              <Link to="/login">
                <p
                  className={`${activeTab === "Login" ? "active" : ""}`}
                  onClick={() => setActiveTab("Login")}
                ></p>
              </Link>
            </>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "block", textAlign: "center" }}
        >
          <input
            type="text"
            className="inputField"
            placeholder="Search Name..."
            ref={InputEl}
          />
        </form>
      </div>
    </>
  );
};

export default Navbar;
