// import { findUsersPage } from "./data";

const LOAD_USERS = "LOAD-USERS";
const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS_-COUNT";
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false
}

const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_USERS: {
    //   return { ...state, users: [...state.users, ...action.users] };
    // }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case LOAD_USERS: {
      return { ...state };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state, currentPage: action.currentPage
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state, totalUsersCount: action.totalUsersCount
      };
    }
    case TOGGLE_IS_LOADING: {
      return {
        ...state, isLoading: action.isLoading
      };
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
export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setUsersTotalCurrentPageAC = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });
export const setIsLoadingAC = isLoading => ({ type: TOGGLE_IS_LOADING, isLoading: isLoading });

export default findUsersReducer;
