import * as data from "./state";

// lessons before 37
let renderEntireTree = new function() {}();

export const addPost = () => {
  let newPost = {
    id: 123,
    text: data.profile.newPostText,
    likesCout: 0
  };
  data.profile.newPostText = "";
  data.profile.posts.push(newPost);
  renderEntireTree(data);
};

export const updatePostText = newPost => {
  data.profile.newPostText = newPost;
  renderEntireTree(data);
};

export const subscribe = observer => (renderEntireTree = observer);

// lessons before 36
// export const addPost = postMsg => {
//   let newPost = {
//     id: 123,
//     text: postMsg,
//     likesCout: 0
//   };
//   data.profile.posts.push(newPost);
//   renderEntireTree(data);
// };
