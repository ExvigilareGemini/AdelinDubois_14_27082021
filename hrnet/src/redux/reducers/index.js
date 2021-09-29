import { combineReducers } from "redux";
import employee from "./employeeReducer";
import { rrtable } from "react-redux-table";

export default combineReducers({
  employee,
  rrtable,
});
