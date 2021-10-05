import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "./redux/reducers/index"
import { createStore } from "redux";
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({reducer: reducer})

// const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
