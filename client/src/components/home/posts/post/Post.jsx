import React from "react";
import "./Post.css";
import default_post_image from './images/post_image.png';
import avatar1 from './images/avatar1.jpg';
import { Link } from "react-router-dom";

const Post = ({post}) => {
  // const url ="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <div className="post">
      <div className="post__upper">
    <img  className="post__icon" src={avatar1} alt="S" />
      <div>
      <h4>Author name, His Branch, Year or Batch 
        </h4><span className="post__createdDate" >created on</span>
      
      <p> His interests</p>
      <h4 className="post__heading" >{post.title}</h4>
      <small className="post__details">{post.description} 
      
      
        <Link to='/details'><p className="post__seemore">...see more</p> </Link>
      </small>
      
      </div>
      </div>
      <Link to='/details'>
      <img src={ post.picture || default_post_image} alt="" className="post__image"/>
      </Link>
    </div>
   
  );
};

export default Post;
