import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  About,
  Contents,
  Forget,
  Home,
  Login,
  Navbar,
  Register,
} from "./import";
function App() {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <div className="App">
              <Home />
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <div className={`container1 ${flag ? "sign-up-mode" : ""}`}>
              <div className="forms-container">
                <div className="signin-signup">
                  <Login handleFlag={handleFlag} flag={flag} />
                  <Register />
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
