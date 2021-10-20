import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <div className="container">
        <div className="forms-container">
          {/* <Login /> */}
          <Register />
        </div>
      </div>
    </>
  );
}

export default App;
