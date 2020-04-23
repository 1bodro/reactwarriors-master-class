import * as data from "./data";

const ADD_POST = "ADD-POST";
const UPDATE_TEXT_POST = "UPDATE-POST-TEXT";

export const store = {
  _state: data,
  _callSubscrible() {},

  subscribe(observer) {
    this._callSubscrible = observer;
  },
  getState() {
    return this._state;
  },

  _addPost() {
    let newPost = {
      id: 123,
      text: this._state.profile.newPostText,
      likesCout: 0
    };
    this._state.profile.newPostText = "";
    this._state.profile.posts.push(newPost);
    this._callSubscrible(data);
  },
  _updatePostText(newText) {
    this._state.profile.newPostText = newText;
    this._callSubscrible(data);
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    }
    if (action.type === UPDATE_TEXT_POST) {
      this._updatePostText(action.newText);
    }
  }
};

//action - object with type (examplpe, type:'ADD-POST')

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostTextActionCreator = text => ({
  type: UPDATE_TEXT_POST,
  newText: text
});
