import React from "react";

import {Route, withRouter} from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";

import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import { Music } from "./Music/Music";
import { News } from "./News/News";
import { Settings } from "./Settings/Settings";
import FindUsersContainer from "./FindUsers/FindUsersContainer";
import HeaderContainer from "./Header/HeaderContainer";
import LoginContainer from "./Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import {Preloader} from "./Preloader/Preloader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    componentDidMount() {
        this.props.initializeApp();
    }

    /*   ? => означает, что параметр :userId не обязательный */
    /*   :userId =>  параметр id  юзера */
  render() {
     return (!this.props.initialized)
      ? <Preloader />
      : (
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="content">
          <Route path="/profile/:userId?" render={() => <Profile />} />
          <Route
            path="/messages"
            render={() => <Dialogs />}
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
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

// без  withRouter не корректно работают  Route