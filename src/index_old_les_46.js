import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";
// import * as data from "./components/redux/data";
import store from "./components/redux/redux_store";
import { Provider } from "react-redux";
const renderEntireTree = data => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

function subscribeHandler() {
  renderEntireTree(store.getState());
}

renderEntireTree(store.getState());

store.subscribe(subscribeHandler);
