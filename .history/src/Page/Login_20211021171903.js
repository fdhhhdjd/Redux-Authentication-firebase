import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginInitial } from "../Redux/Actions";
import "../Styles/authentication.css";
import LoginGoogleFb from "./LoginGoogleFb";
import { useForm } from "react-hook-form";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [a, setA] = useState("");
  const { email, password } = state;
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const passwords = useRef({});
  passwords.current = watch("password", "");
  const history = useHistory();
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.user);

  const handleSubmitForm = (data, e) => {
    e.preventDefault();
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
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h2 className="title">Sign in</h2>
        <LoginGoogleFb />
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            // {...register("email", {
            //   required: true,
            //   pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            //   onChange: {
            //     handleChange,
            //   },
            // })}
            {...register({
              required: {
                value: true,
                message: "Email is reqired",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            type="text"
            placeholder="Email Address"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.email?.type === "required" && "Mời bạn nhập Email đầy đủ! "}
          {errors?.email?.type === "pattern" && "Email của ban không hợp lệ!"}
        </span>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register("password", { required: true })}
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.password?.type === "required" &&
            "Mời bạn nhập đầy đủ mật khẩu. "}
        </span>
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
