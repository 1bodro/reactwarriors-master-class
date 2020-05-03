import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import userReducer from "./user_reducer";
import findUsersReducer from "./find_users_reducer";
import authReducer from "./auth_reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  user: userReducer,
  findUsersPage: findUsersReducer,
  auth: authReducer
});
const store = createStore(reducers, applyMiddleware());

window.store = store;

export default store;
