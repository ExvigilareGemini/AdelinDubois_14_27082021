import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import employee from "./redux/reducers/employeeReducer"
import { rrtableReducer } from "react-redux-table";

const store = configureStore({
  reducer: {employee: employee, rrtable: rrtableReducer},
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
