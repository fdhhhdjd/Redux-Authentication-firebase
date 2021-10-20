import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";

function App() {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  return (
    <>
      <div className="container sign-up-mode">
        <div className="forms-container">
          <Login />
        </div>
      </div>
    </>
  );
}

export default App;
