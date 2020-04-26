import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";
import { addPost } from "./components/redux/helpers";
import { updatePostText } from "./components/redux/helpers";

export const renderEntireTree = data => {
  ReactDOM.render(
    <App data={data} handler={{addPost, updatePostText}} />,
    document.getElementById("root")
  );
};
