import React from "react";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { Sidebar } from "./Sidebar";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Profile />
        <Sidebar />
      </div>
    );
  }
}
