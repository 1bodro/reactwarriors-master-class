// import { findUsersPage } from "./data";
import {usersAPI} from "../../api/users";

const LOAD_USERS = "LOAD-USERS";
const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS_-COUNT";
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: []
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
    case TOGGLE_IS_FOLLOWING: {

      return {
        ...state, followingInProgress : action.isFollowing
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !==action.userId)
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

export const loadUsers = users => ({ type: LOAD_USERS, users: users });
export const setUsers = users => ({ type: SET_USERS, users: users });
export const follow = userId => ({ type: FOLLOW, userId: userId });
export const unFollow = userId => ({ type: UNFOLLOW, userId: userId });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setUsersTotalCurrentPage = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });
export const setIsLoading = isLoading => ({ type: TOGGLE_IS_LOADING, isLoading: isLoading });
export const toggleFollowingInProgress = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWING, isFollowing: isFollowing, userId: userId });

export const getUsersThunkCreator = (currentPage, pageSize) => dispatch => {
  dispatch(setIsLoading(true));
  usersAPI.getUsers(currentPage, pageSize)
      .then(response => {
        dispatch(setUsers(response.items));
        dispatch(setUsersTotalCurrentPage(response.totalCount));
        dispatch(setIsLoading(false));
      })
      .catch(error => console.log(error));
}

// export const getUsersThunkCreator = (currentPage, pageSize) => {
//   return dispatch => {
//     dispatch(setIsLoading(true));
//     usersAPI.getUsers(currentPage, pageSize)
//         .then(response => {
//           dispatch(setUsers(response.items));
//           dispatch(setUsersTotalCurrentPage(response.totalCount));
//           dispatch(setIsLoading(false));
//         })
//         .catch(error => console.log(error));
//   }
// }

export default findUsersReducer;
