import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forget from "./Components/Forget";
import Contents from "./Components/Contents";
function App() {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className={`container ${flag ? "sign-up-mode" : ""}`}>
              <div className="forms-container">
                <div className="signin-signup">
                  <Login handleFlag={handleFlag} flag={flag} />
                </div>
                <Contents handleFlag={handleFlag} flag={flag} />
              </div>
            </div>
          </Route>
          <Route path="/forget">
            <Forget />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
