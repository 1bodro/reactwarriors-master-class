import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";
import * as data from "./components/redux/data";
import { store } from "./components/redux/store";

const renderEntireTree = data => {
  ReactDOM.render(
    <BrowserRouter>
      <App data={data} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
