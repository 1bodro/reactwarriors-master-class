import { profilePage } from "./data";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';

const profileReducer = (state = profilePage, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 123,
        text: state.newPostText,
        likesCout: 0
      };

      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost]
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case TOGGLE_IS_LOADING: {
      return {
        ...state, isLoading: action.isLoading
      };
    }
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updatePostTextCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile: profile
});
export const setIsLoading = isLoading => ({ type: TOGGLE_IS_LOADING, isLoading: isLoading });

export default profileReducer;
