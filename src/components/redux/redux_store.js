import { createStore, combineReducers } from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import userReducer from "./user_reduser";
import findUsersReducer from "./find_users_reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  user: userReducer,
  findUsersPage: findUsersReducer
});
const store = createStore(reducers);

window.store = store;

export default store;
