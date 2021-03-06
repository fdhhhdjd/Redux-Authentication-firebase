import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { registerInitial } from "../Redux/Actions";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const passwords = useRef({});
  passwords.current = watch("password");
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { displayName, email, password, passwordConfirm } = state;
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.user);
  const history = useHistory();
  const handleSubmitForm = (data) => {
    const { displayName, email, password } = data;
    e.preventDefault();
    if (password !== passwordConfirm) {
      return alert("con cac mat khau sai ");
    }
    dispatch(registerInitial(displayName, email, password));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
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
        actions=""
        className="sign-up-form form-main"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input
            {...register("displayName", { required: true, maxLength: 15 })}
            type="text"
            placeholder="Full Name"
            name="displayName"
            id="displayName"
            // value={displayName}
            // onChange={handleChange}
          />
        </div>

        <span style={{ color: "red" }}>
          {errors.displayName?.type === "required" &&
            "M???i b???n nh???p ?????y ????? t??n v??o!"}
          {errors?.displayName?.type === "maxLength" &&
            "T??n c???a b???n kh??ng ???????c qu?? 15 k?? t???"}
        </span>
        <div className="input-field">
          <i className="fas fa-envelope" />
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
        </span>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            {...register("passwordConfirm", {
              required: true,
              validate: (value) =>
                value === passwords.current || "The passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            id="passwordConfirm"
            // value={passwordConfirm}
            // onChange={handleChange}
          />
        </div>
        <span style={{ color: "red" }}>
          {errors.passwordConfirm?.type === "required" &&
            "M???i b???n nh???p l???i m???t kh???u."}
          {errors.passwordConfirm?.type === "validate" &&
            "M???t kh???u nh???p l???i kh??ng kh???p!   "}
        </span>
        <input type="submit" className="btn" name="signup" />
      </form>
    </>
  );
};

export default Register;
