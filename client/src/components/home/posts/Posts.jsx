import React, { useEffect, useState } from "react";
// import { makeStyles } from '@material-ui/styles'
import "./Posts.css";
import Post from "./post/Post";
import { Link, useLocation } from "react-router-dom";
import { GetAllPosts } from "../../../service/api";
// const useStyles = makeStyles({
//     component : {
//         backgroundColor : 'green'
//     }
// });

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // let posts = [1,2,3,4,5,6];
  const { search } = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      let data = await GetAllPosts(search);
      console.log(data);
      setPosts(data);
    };
    fetchData();
  }, [search]);
  let posts2;
  if (posts) {
    posts2 = [...posts];
  }
  return (
    <div className="posts__component">
      {posts2 ? (
        posts2.map((post, index, posts2) => (
          // <Link
          //   to={`/details/${posts2[posts2.length - 1 - index]._id}`}
          //   className="posts2__link"
          // >
          <Post post={posts2[posts2.length - 1 - index]} />
          // </Link>
        ))
      ) : (
        <p>No data is available</p>
      )}
    </div>
  );
};

export default Posts;
