import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginInitial } from "../Redux/Actions";
import "../Styles/authentication.css";
import LoginGoogleFb from "../Components/LoginGoogleFb";
import LoginFacebook from "../Components/LoginFacebook";
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
  passwords.current = watch("password");
  const history = useHistory();
  const dispatch = useDispatch();
  const { current, error } = useSelector((state) => state.user);

  const handleSubmitForm = (data) => {
    const { email, password } = data;
    dispatch(loginInitial(email, password));
    console.log(data);
  };
  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   setState({ ...state, [name]: value });
  // };
  useEffect(() => {
    if (current) {
      history.push("/");
    }
  }, [current, history]);

  return (
    <>
      <form
        className="sign-in-form form-main"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h2 className="title">Sign in</h2>
        <div className="loginGoogleFb">
          <div className="login_google">
            <LoginGoogleFb />
          </div>
          <div className="login_google">
            <LoginFacebook />
          </div>
        </div>

        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            })}
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            // value={email}
            // onChange={handleChange}
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.email?.type === "required" && "M???i b???n nh???p Email ?????y ?????! "}
          {errors?.email?.type === "pattern" && "Email c???a ban kh??ng h???p l???!"}
        </span>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            // value={password}
            // onChange={handleChange}
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.password?.type === "required" &&
            "M???i b???n nh???p ?????y ????? m???t kh???u. "}
          {error && "M???t kh???u kh??ng ch??nh x??c "}
        </span>
        <input type="submit" name="signin" className="btn solid" />
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
