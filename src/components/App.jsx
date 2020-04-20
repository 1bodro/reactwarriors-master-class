import React from "react";

import { Route, BrowserRouter } from "react-router-dom";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

import { Profile } from "./Profile/Profile";
import { Dialogs } from "./Dialogs/Dialogs";
import { Music } from "./Music/Music";
import { News } from "./News/News";
import { Settings } from "./Settings/Settings";


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (

      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Sidebar />
          <div className="content">
            <Route path="/profile" component={Profile} />
            <Route path="/messages" component={Dialogs} />
            <Route path="/music" component={Music} />
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
