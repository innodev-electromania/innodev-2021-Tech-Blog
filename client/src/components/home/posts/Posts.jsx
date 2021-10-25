import React from 'react'
// import { makeStyles } from '@material-ui/styles'
import './Posts.css';
import Post from './post/Post';
import { Link } from 'react-router-dom';
// const useStyles = makeStyles({
//     component : {
//         backgroundColor : 'green'
//     }
// });

const Posts = () => {
    
    return (
        <div className="posts__component">
            Hii from posts
            <Post />
            <Link to='/details'><Post /></Link>
            <Link to='/details'><Post /></Link>
            <Link to='/details'><Post /></Link>
            <Link to='/details'><Post /></Link>
            
            
        </div>
    )
}

export default Posts
