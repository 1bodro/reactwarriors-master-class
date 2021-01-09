// import * as data from "./store";
import profileReduser from "../profile_reducer";
import dialogsReduser from "../dialogs_reducer";
import sidebarReduser from "../sidebar_reducer";
import findUsersReduser from "../find_users_reducer";
const data = {};

export const store = {
  _state: data,
  _callSubscrible() {},

  subscribe(observer) {
    this._callSubscrible = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    //action - object with type (examplpe, type:'ADD-POST')
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    this._state.findUsersPage = findUsersReduser(
      this._state.findUsersPage,
      action
    );
    this._callSubscrible(this._state);
  }
};
