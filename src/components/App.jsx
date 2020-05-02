import React from "react";

import { Route } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";

import { Profile } from "./Profile/Profile";
import { Dialogs } from "./Dialogs/Dialogs";
import { Music } from "./Music/Music";
import { News } from "./News/News";
import { Settings } from "./Settings/Settings";
import { FindUsersContainer } from "./FindUsers/FindUsersContainer";
import HeaderContainer from "./Header/HeaderContainer";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
    /*   ? => означает, что параметр :userId не обязательный*/
  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="content">
          <Route path="/profile/:userId?" render={() => <Profile />} />
          <Route
            path="/messages"
            render={() => {
              return <Dialogs />;
            }}
          />
          <Route
            path="/users"
            render={() => {
              return <FindUsersContainer />;
            }}
          />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    );
  }
}
