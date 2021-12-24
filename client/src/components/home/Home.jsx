import React from "react";
import Posts from "./posts/Posts";
import Sidebar from "./sidebar/Sidebar";
import "./Home.css";
const Home = (props) => {
  console.log("I am the user", props.user);
  return (
    <div className="home__container">
      <Sidebar className="home__sidebar" />
      <Posts className="home__posts" />
    </div>
  );
};

export default Home;
