import React from "react";
import "../Styles/Navbar.css";
const Navbar = () => {
  const handleSubmit = () => {};
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
