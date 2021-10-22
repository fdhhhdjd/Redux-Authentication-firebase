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
  UseRoute,
  AddEdit,
  NotFound,
  View,
} from "./import";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./utils/Firebase";
import { setUser } from "./Redux/Actions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
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
        <ToastContainer position="top-center" />
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
          <UseRoute path="/addContact" component={AddEdit} />
          <UseRoute path="/update/:id" component={AddEdit} />
          <UseRoute path="/view/:id" component={View} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
