import React, { useEffect, useRef } from "react";
import "../Styles/Navbar.css";
import { Link, useHistory, useLocation } from "react-router-dom";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const handleSubmit = () => {};
  const InputEl = useRef();
  const history = useHistory();
  const location = useLocation();
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
    }
  }, [location]);
  return (
    <>
      <div className="header">
        <p className="logo">Contact App</p>
        <div className="header-right">
          <form onSubmit={handleSubmit} style={{ display: "inline" }}>
            <input
              type="text"
              className="inputField"
              placeholder="Search Name..."
              ref={InputEl}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <Link to="/">
            <p
              className={`${activeTab === "Home" ? "active" : ""}`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </p>
          </Link>
          <Link to="/add">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
