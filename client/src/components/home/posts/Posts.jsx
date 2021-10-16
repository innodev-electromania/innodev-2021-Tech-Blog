import React from 'react'
import { makeStyles } from '@material-ui/styles'
import './Posts.css';
import Post from './post/Post';
const useStyles = makeStyles({
    component : {
        backgroundColor : 'green'
    }
});

const Posts = () => {
    const classes = useStyles();
    return (
        <div className="posts__component">
            Hii from posts
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
        </div>
    )
}

export default Posts
