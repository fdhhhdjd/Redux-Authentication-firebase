import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  return (
    <>
      <Router>
        <Switch>
          <Route>
            <div className={`container ${flag ? "sign-up-mode" : ""}`}>
              <div className="forms-container">
                <Login handleFlag={handleFlag} />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
