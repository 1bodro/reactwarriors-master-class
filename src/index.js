import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";
import * as data from "./components/redux/data";

ReactDOM.render(<App data={data} />, document.getElementById("root"));
