import React from "react";

export const Profile = () => {
  return (
    <div className="content">
      <div className="content__img">
        <img
          src="https://i.pinimg.com/originals/8c/c4/ae/8cc4aeb619633bcb879565e9488f0b0e.jpg"
          alt="wallpaper"
        />
      </div>
      <div className="info">
        <div className="info__ava">
          <div className="content__img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz5DhqhLRNZLqOkCKuyJg5rZ_vCTrFQcUliE-T4TuhP7rAkBWD&usqp=CAU"
              alt="ava"
            />
          </div>
        </div>
        <div className="info__descr">
          <div>Dmitro</div>
        </div>
      </div>
      <div className="posts">
        <h3 className="posts__header">My Posts</h3>
        <div className="posts__text">Write here</div>
        <div className="posts__list">My Post#1</div>
        <div className="posts__list">My Post#2</div>
      </div>
    </div>
  );
};
