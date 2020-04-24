const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReduser = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 123,
        text: state.newPostText,
        likesCout: 0
      };
      state.newPostText = "";
      state.posts.push(newPost);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

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
