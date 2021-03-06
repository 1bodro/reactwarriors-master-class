import { findUsersPage } from "./data";

const LOAD_USERS = "LOAD-USERS";
const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const findUsersReduser = (state = findUsersPage, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    case LOAD_USERS: {
      return { ...state };
    }
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    }
    default:
      return state;
  }
};

export const loadUsersAC = users => ({ type: LOAD_USERS, users: users });
export const setUsersAC = users => ({ type: SET_USERS, users: users });
export const followAC = userId => ({ type: FOLLOW, userId: userId });
export const unFollowAC = userId => ({ type: UNFOLLOW, userId: userId });

export default findUsersReduser;
