import React from "react";
import "./profile.css";
import avatar1 from "../posts/post/images/avatar1.jpg";

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="profile__upper">
        <img className="profile__picture" src={avatar1} alt="" />
      </div>
      Here is the Profile
    </div>
  );
};

export default Profile;
