import { auth } from "../utils/Firebase";
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
export const registerInitial = (displayName, email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth.createUserWithEmailAndPassword(email, password).then(({ user }) => {
      user.updateProfile({
        displayName,
      });
    });
  };
};
