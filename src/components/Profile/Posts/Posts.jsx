import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {Avatar} from "../../common/Avatar/Avatar";

const maxLength30 = maxLengthCreator(30);

export const Posts = React.memo(props => {
  const {
    sendPost,
    userPhoto,
    posts
  } = props;

  const postsElements = posts.map(post => (
    <Post
      key={post.id}
      message={post.text}
      likesCout={post.likesCout}
      photo={userPhoto}
    />
  ));


  const onSendPost = values => {
    sendPost(values.newPostText);
  };

  return (
    <div className={s.container}>
      <AddPostsFormRedux onSubmit={onSendPost}/>
      <div className={`${s.storage} customScrollbar`}>
        {postsElements}
      </div>
    </div>
  );
});

const AddPostsForm = props => {
  return (
      <form onSubmit={props.handleSubmit} className={s.write}>
        <Field
            component={TextArea}
            name="newPostText"
            className="textarea"
            placeholder="Write posts here"
            validate={[required, maxLength30]}
        />
        <button className={s.btnSend}>
          send
        </button>
      </form>
  )
}

const AddPostsFormRedux = reduxForm({form: 'profileAddPostsForm'})(AddPostsForm);