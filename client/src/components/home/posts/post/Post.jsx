import React from "react";
import "./Post.css";
import logo from './images/post_image.png';
import avatar1 from './images/avatar1.jpg';
import { Link } from "react-router-dom";
const Post = () => {
  // const url ="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <div className="post">
      <div className="post__upper">
    <img  className="post__icon" src={avatar1} alt="S" />
      <div>
      <h4>Author name, His Branch, Year or Batch 
        </h4><span className="post__createdDate" >created on</span>
      
      <p> His interests</p>
      <small className="post__details">details about the blog which contains a definite amount of portion of the detailed blog wwritten by the 
        bloggerdetails about the blog which contains a definite amount of portion of the detailed blog wwritten by the 
        bloggerdetails about the blog which contains a definite amount of portion of the detailed blog wwritten by the 
        blogger whose avatar or icon has been provided.
        <Link to='details'><p className="post__seemore">...see more</p> </Link>
      </small>
      
      </div>
      </div>
      <Link to='/details'>
      <img src={logo} alt="" className="post__image"/>
      </Link>
    </div>
   
  );
};

export default Post;
