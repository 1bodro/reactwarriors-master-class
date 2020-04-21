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
    const { data, addPost } = this.props;
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Sidebar />
          <div className="content">
            <Route
              path="/profile"
              render={() => (
                <Profile data={data.posts} user={data.user} addPost={addPost} />
              )}
            />
            <Route
              path="/messages"
              render={() => {
                return (
                  <Dialogs
                    dialogs={data.dialogs}
                    messages={data.messages}
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
      </BrowserRouter>
    );
  }
}
