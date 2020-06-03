import React from "react";

import {Route, withRouter} from "react-router-dom";
import {Sidebar} from "./Sidebar/Sidebar";

import Profile from "./Profile/Profile";
import {Music} from "./Music/Music";
import {News} from "./News/News";
import {Settings} from "./Settings/Settings";
import HeaderContainer from "./Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import {Preloader} from "./Preloader/Preloader";
import {withSuspense} from "../hoc/withSuspense";
import {catchAllUnHandleError, removeCatchAllUnHandleError} from "../utils/object-helpers";

const FindUsers = React.lazy(()=> import("./FindUsers/FindUsersContainer"));
const Dialogs = React.lazy(()=> import("./Dialogs/Dialogs"));
const Login = React.lazy(()=> import("./Login/LoginContainer"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    componentDidMount() {
        this.props.initializeApp();
        catchAllUnHandleError();
    }


    componentWillUnmount() {
        removeCatchAllUnHandleError();
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
              <Route exact path="/" render={() => <Profile/>}/>
              {/*<Route exact path="/" render={() => <Redirect to="/profile" />}/>*/}
              <Route path="/profile/:userId?" render={() => <Profile/>}/>
              <Route path="/messages" render={() => withSuspense(Dialogs)}/>
              <Route path="/users" render={() => withSuspense(FindUsers)}/>
              <Route path="/music" render={() => <Music/>}/>
              <Route path="/news" render={() => <News/>}/>
              <Route path="/settings" render={() => <Settings/>}/>
              <Route path="/login" render={() =>  withSuspense(Login)}/>
              <Route path="*" render={() =>  <div>NOT FOUND</div>}/>
          </div>
      </div>
         );
  }
}
// <Route path="/users" render={withSuspense(Users)}/>
const mapStateToProps = state => {
    return {
        initialized: state.app.initialized,
        profile: state.profilePage
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

// без  withRouter не корректно работают  Route