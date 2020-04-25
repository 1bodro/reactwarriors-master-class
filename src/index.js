import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";
import * as data from "./components/redux/data";
import store from "./components/redux/redux_store";
import StoreContext from "./StoreContext";

const renderEntireTree = data => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App store={store} />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

function subscribeHandler() {
  renderEntireTree(store.getState());
}

renderEntireTree(store.getState());
store.subscribe(subscribeHandler);
