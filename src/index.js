import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";
import * as data from "./components/redux/state";
import { addPost, updatePostText, subscribe } from "./components/redux/helpers";

const renderEntireTree = data => {
  ReactDOM.render(
    <App data={data} handler={{ addPost, updatePostText }} />,
    document.getElementById("root")
  );
};

renderEntireTree(data);
subscribe(renderEntireTree);
