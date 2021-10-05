import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import { rrtableReducer } from "react-redux-table";

export default combineReducers({
  employee: employeeReducer,
  rrtable: rrtableReducer,
});
