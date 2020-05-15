// import { findUsersPage } from "./data";
import {usersAPI} from "../../api/users";
import {updateObjectInArray} from "../../utils/object-helpers";

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
  pageSize: 20,
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
        ...state, followingInProgress: action.isFollowing
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !==action.userId)
      };
    }
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} )
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
export const followSuccess = userId => ({ type: FOLLOW, userId: userId });
export const unFollowSuccess = userId => ({ type: UNFOLLOW, userId: userId });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setUsersTotalCurrentPage = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });
export const setIsLoadingUsers = isLoading => ({ type: TOGGLE_IS_LOADING, isLoading: isLoading });
export const toggleFollowingInProgress = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWING, isFollowing: isFollowing, userId: userId });

export const getUsersThunkCreator = (currentPage, pageSize) => async dispatch => {
  dispatch(setIsLoadingUsers(true));
  dispatch(setCurrentPage(currentPage));

  const response = await usersAPI.getUsers(currentPage, pageSize);

  dispatch(setUsers(response.items));
  dispatch(setUsersTotalCurrentPage(response.totalCount));
  dispatch(setIsLoadingUsers(false));
}

export const toggleFollowing = (userId, follow=false) => async dispatch => {
  dispatch(toggleFollowingInProgress(true, userId));
  const usersAPIRequest = follow
  ? usersAPI.followUser
  : usersAPI.unFollowUser;

  const followState = follow
  ? followSuccess
  : unFollowSuccess;

  const response = await usersAPIRequest(userId);

  (response.resultCode ===0) && dispatch(followState(userId));
  dispatch(toggleFollowingInProgress(false, userId));
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
