import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";
import { addPost } from "./components/redux/data";

export const renderEntireTree = data => {
  ReactDOM.render(
    <App data={data} addPost={addPost} />,
    document.getElementById("root")
  );
};
