import { combineReducers } from "redux";
import employee from "./employeeReducer";
import { rrtableReducer } from "react-redux-table";

export default combineReducers({
  employee,
  rrtableReducer,
});
