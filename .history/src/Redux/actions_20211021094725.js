import * as types from "./ActionTypes";
const registerStart = () => ({
  type: types.REGISTER_START,
});
const registerStart = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
const registerStart = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});
