import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";
import * as data from "./components/redux/data";
import { store } from "./components/redux/state";

const renderEntireTree = data => {
  ReactDOM.render(
    <App data={data} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
