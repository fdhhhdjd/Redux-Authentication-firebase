import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
} from "../utils/Firebase";
import * as types from "./ActionTypes";
const registerStart = () => ({
  type: types.REGISTER_START,
});
const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});
const loginStart = () => ({
  type: types.LOGIN_START,
});
const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
const logoutStart = () => ({
  type: types.LOGOUT_START,
});
const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});
const googleStart = () => ({
  type: types.LOGIN_GOOGLE_START,
});
const googleSuccess = (user) => ({
  type: types.LOGIN_GOOGLE_SUCCESS,
  payload: user,
});
const googleFail = (error) => ({
  type: types.LOGIN_GOOGLE_FAIL,
  payload: error,
});
const facebookStart = () => ({
  type: types.LOGIN_FB_START,
});
const facebookSuccess = (user) => ({
  type: types.LOGIN_FB_SUCCESS,
  payload: user,
});
const facebookFail = (error) => ({
  type: types.LOGIN_FB_FAIL,
  payload: error,
});
export const registerInitial = (displayName, email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};
export const loginInitial = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};
export const logoutInitial = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((user) => {
        dispatch(logoutSuccess(user));
      })
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};
export const loginGoogleInitial = () => {
  return function (dispatch) {
    dispatch(googleStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSuccess(user));
      })
      .catch((error) => dispatch(googleFail(error.message)));
  };
};
export const loginFacebookInitial = () => {
  return function (dispatch) {
    dispatch(facebookStart());
    auth
      .signInWithPopup(facebookAuthProvider)
      .then(({ user }) => {
        dispatch(facebookSuccess(user));
      })
      .catch((error) => dispatch(facebookFail(error.message)));
  };
};
