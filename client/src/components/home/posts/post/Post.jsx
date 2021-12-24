import React from "react";
import "./Post.css";
import default_post_image from "./images/post_image.png";
import avatar1 from "./images/avatar1.jpg";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const seemore = "...see more";
  const addlimit = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + seemore : str;
  };
  // const url ="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <div className="post">
      <div className="post__upper">
        <img className="post__icon" src={avatar1} alt="S" />
        <div>
          <h4>
            <Link
              className="post__author"
              to={`/?author_name=${post.author_name}`}
            >
              {post.author_name}
            </Link>
          </h4>
          <p className="post__createdDate">
            {new Date(post.createdDate).toDateString()}
          </p>
          <Link to={`/details/${post._id}`} className="posts__link">
            <h3 className="post__heading">
              <text>{addlimit(post.title, 80)}</text>
            </h3>
          </Link>
        </div>
      </div>

      <p className="post__details">{addlimit(post.description, 300)}</p>

      <Link to={`/details/${post._id}`} className="posts__link">
        <img
          src={post.picture || default_post_image}
          alt=""
          className="post__image"
        />
      </Link>
    </div>
  );
};

export default Post;
