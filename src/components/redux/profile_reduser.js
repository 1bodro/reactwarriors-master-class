import { profilePage } from "./data";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReduser = (state = profilePage, action) => {
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
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updatePostTextCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReduser;
