import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  root
);
