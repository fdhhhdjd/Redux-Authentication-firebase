import * as types from "./ActionTypes";
const innitalstate = {
  loading: false,
  current: null,
  error: null,
};
const userReducer = (state = innitalstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        current: payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export default userReducer;
