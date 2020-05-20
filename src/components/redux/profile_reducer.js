import { profilePage } from "./data";
import profileAPI from "../../api/profile";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const TOGGLE_IS_LOADING_PROFILE = 'TOGGLE-IS-LOADING-PROFILE';
const GET_USER_STATUS = 'GET-USER-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
const SET_AUTH_USER_PROFILE = 'SET-AUTH-USER-PROFILE';

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
            return {...state, profile: action.profile};
        }

        case TOGGLE_IS_LOADING_PROFILE: {
            return {
                ...state, isLoading: action.isLoading
            };
        }

        case GET_USER_STATUS: {
            return {
                ...state, status: action.status
            };
        }

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos }
            };
        }

        case SET_AUTH_USER_PROFILE: {
            return {
                ...state, authUser: action.authUser
            };
        }

        default:
            return state;
    }
};
//action creators
export const addPostCreator = newPostText => ({ type: ADD_POST, newPostText: newPostText });

export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile: profile});

export const setIsLoadingProfile = isLoading => ({ type: TOGGLE_IS_LOADING_PROFILE, isLoading: isLoading });

export const setUserStatus = status => ({type: GET_USER_STATUS, status: status });

export const setUser = authUser => ({type: SET_AUTH_USER_PROFILE, authUser: authUser });

export const savePhotoSuccess = photos => ({type: SAVE_PHOTO_SUCCESS, photos: photos })

//thunks

export const getProfile = (userId, isOwner=false) => dispatch => {
  dispatch(setIsLoadingProfile(true));
  profileAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data));
        dispatch(setIsLoadingProfile(false));
        isOwner && dispatch(setUser(response.data));
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

export const savePhoto = photo => async dispatch => {
    let response = await profileAPI.savePhoto(photo);
    (response.resultCode === 0) && dispatch(savePhotoSuccess(response.data.photos));
}

export const saveProfile = profile => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await profileAPI.saveProfile(profile);
    (response.resultCode === 0) && dispatch(getProfile(userId));
}
export default profileReducer;
