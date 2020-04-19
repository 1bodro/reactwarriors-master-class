import React from "react";
import { Header } from "./Header/Header";
import { Profile } from "./Profile/Profile";
import { Sidebar } from "./Sidebar/Sidebar";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="content">
          <Profile />
        </div>
      </div>
    );
  }
}
