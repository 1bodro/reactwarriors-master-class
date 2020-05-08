import { profilePage } from "./data";
import profileAPI from "../../api/profile";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';
const GET_USER_STATUS = 'GET-USER-STATUS';

const profileReducer = (state = profilePage, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 123,
        text: action.newPostText,
        likesCout: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case TOGGLE_IS_LOADING: {
      return {
        ...state, isLoading: action.isLoading
      };
    }

    case GET_USER_STATUS: {
      return {
        ...state, status: action.status
      };
    }

    default:
      return state;
  }
};

export const addPostCreator = newPostText => ({ type: ADD_POST, newPostText: newPostText });

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile: profile
});

export const setIsLoading = isLoading => ({ type: TOGGLE_IS_LOADING, isLoading: isLoading });

export const setUserStatus = status => ({type: GET_USER_STATUS, status: status })

export const getProfile = (userId) => dispatch => {
  dispatch(setIsLoading(true));
  profileAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data));
        dispatch(setIsLoading(false));
      })
      .catch(error => console.log(error));
}

export const getUserStatus = userId => dispatch => {
  profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setUserStatus(response));
      })
}

export const getUpdateUserStatus = status => dispatch => {
  profileAPI.updateStatus(status)
      .then(response => {
            (response.resultCode === 0) && dispatch(setUserStatus(status))
          }
      );
}

export default profileReducer;
