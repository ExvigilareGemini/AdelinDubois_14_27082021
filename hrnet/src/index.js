import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers/reducer";
import { configureStore } from '@reduxjs/toolkit'


// const store = createStore(reducers);
const store = configureStore({
  reducer: reducers
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
