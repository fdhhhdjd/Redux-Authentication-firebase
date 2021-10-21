import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./utils/Firebase";
import setUser from "./Redux/Actions";
function App() {
  const [flag, setFlag] = useState(false);
  const { current } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleFlag = () => {
    setFlag(!flag);
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <UseRoute exact path="/" component={Home} />
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
