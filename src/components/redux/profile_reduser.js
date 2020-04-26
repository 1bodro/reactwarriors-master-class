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

      let stateCopy = { ...state };

      stateCopy.newPostText = { ...state.newPostText };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";

      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };

      stateCopy.newPostText = action.newText;

      return stateCopy;
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
