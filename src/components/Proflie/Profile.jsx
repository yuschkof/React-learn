import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="http://mountain.nsu.ru/nas_tour/Altay2016.05/photos/hi-res/IMG_34325-34327.JPG" />
      <div className={s.ava}>
        <img src="http://1311.ru/pwg/galleries/2015-16/2015-11-15-1/img_4694.jpg" />
        ava + description
      </div>
      <div>
        My posts
        <div className={s.posts}>New post</div>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
