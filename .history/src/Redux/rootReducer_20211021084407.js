import { combineReducers } from "redux";
import userReducer from "./Reducer";
const rootReducer = combineReducers({
  data: userReducer,
});
export default rootReducer;
