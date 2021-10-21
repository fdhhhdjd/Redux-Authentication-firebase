import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginInitial } from "../Redux/Actions";
import "../Styles/authentication.css";
import LoginGoogleFb from "./LoginGoogleFb";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("dau buoi ");
    }
    dispatch(loginInitial(email, password));
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    if (current) {
      history.push("/");
    }
  }, [current]);
  return (
    <>
      <form
        actions=""
        className="sign-in-form form-main"
        onSubmit={handleSubmit}
      >
        <h2 className="title">Sign in</h2>
        <LoginGoogleFb />
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <span className="Login-span">maatj khau tao lao qua di nha </span>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          defaultValue="Login"
          name="signin"
          className="btn solid"
        />
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Link to="/forget">
            <a href="" style={{ color: "#4590ef" }}>
              Forgot Password?
            </a>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
