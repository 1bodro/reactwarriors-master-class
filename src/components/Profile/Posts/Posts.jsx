import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";

export const Posts = () => {
  const postsData = [
    {
      text: "Hello, Kate, are you coming to my party today?",
      likesCout: 11
    },
    { id: 2, text: "Hello, on what occasion is the party?", likesCout: 3 },
    {
      text: "On the occasion of my arrival from Spain.",
      likesCout: 7
    },
    {
      text: "Oh, my God, I completely forgot, sorry, of course, I’ll be there!",
      likesCout: 9
    },
    { text: "And who else is invited", likesCout: 18 },
    {
      text:
        "Lily, Marry, Jenny – you know them, and a couple of good-looking guys!",
      likesCout: 1
    },
    {
      text: "Оh, it ‘ll be fun! What shall I bring with me?",
      likesCout: 7
    },
    {
      text:
        "Please, take a few bottles of Cola and some snacks: crisps, for example.",
      likesCout: 4
    }
  ];

  const postsElements = postsData.map(post => (
    <Post message={post.text} likesCout={post.likesCout} />
  ));
  return (
    <div className={s.container}>
      <h3 className="header">My Posts</h3>
      <div className="write">
        <textarea defaultValue="Write here..." className="textarea" />
        <button>send</button>
      </div>
      <div className={s.storage}>{postsElements}</div>
    </div>
  );
};
