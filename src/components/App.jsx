import React from "react";

import { Route } from "react-router-dom";
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
    const { data, dispatch } = this.props;
    return (
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                data={data.profile}
                user={data.user}
                dispatch={dispatch}
              />
            )}
          />
          <Route
            path="/messages"
            render={() => {
              return (
                <Dialogs
                  dispatch={dispatch}
                  dialogsPage={data.dialogsPage}
                  user={data.user}
                />
              );
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
