const innitalstate = {
  loading: false,
  current: null,
  error: null,
};
const userReducer = (state = innitalstate, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
export default userReducer;
