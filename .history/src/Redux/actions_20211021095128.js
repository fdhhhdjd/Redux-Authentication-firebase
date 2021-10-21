import { auth } from "../utils/Firebase";
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
export const registerInitial = (displayName, email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth.createUserWithEmailAndPassword(email, password).then(({ user }) => {
      user.updateProfile({
        displayName,
      });
      dispatch(registerSuccess(user));
    });
    .catch((error)=>dispatch(registerFail(error)))
  };
};
