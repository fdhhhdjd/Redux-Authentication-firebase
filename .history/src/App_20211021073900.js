import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Contents, Forget, Login, Navbar, Register } from "./import";
function App() {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/login" exact>
            <div className={`container ${flag ? "sign-up-mode" : ""}`}>
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
