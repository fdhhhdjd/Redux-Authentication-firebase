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
import UseRoute from "./Components/UseRoute";
function App() {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  return (
    <>
      <Router>
        <Switch>
          <div className="App">
            <UseRoute exact path="/" component={Home} />
          </div>

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
