import * as data from "./data";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

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
      text: this._state.profilePage.newPostText,
      likesCout: 0
    };
    this._state.profilePage.newPostText = "";
    this._state.profilePage.posts.push(newPost);
    this._callSubscrible(this._state);
  },
  _updatePostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscrible(this._state);
  },
  _sendMessage() {
    let newMessage = {
      idUser: 1,
      idMsg: 14,
      text: this._state.dialogsPage.newMesssageText
    };
    this._state.dialogsPage.newMesssageText = "";
    this._state.dialogsPage.messages.push(newMessage);
    this._callSubscrible(this._state);
  },
  _updateMessageText(newText) {
    this._state.dialogsPage.newMesssageText = newText;
    this._callSubscrible(this._state);
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updatePostText(action.newText);
    }
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._updateMessageText(action.newText);
    }
    if (action.type === SEND_MESSAGE) {
      this._sendMessage();
    }
  }
};

//action - object with type (examplpe, type:'ADD-POST')

export const addPostCreator = () => ({ type: ADD_POST });

export const updatePostTextCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateMessageTextCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});
