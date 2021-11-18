import React, { useEffect, useState } from 'react'
// import { makeStyles } from '@material-ui/styles'
import './Posts.css';
import Post from './post/Post';
import { Link } from 'react-router-dom';
import { GetAllPosts } from '../../../service/api';
// const useStyles = makeStyles({
//     component : {
//         backgroundColor : 'green'
//     }
// });

const Posts = () => {
    const [posts, setPosts] = useState([]);
    // let posts = [1,2,3,4,5,6]; 

    useEffect(() => {
        const fetchData = async () => {
            let data = await GetAllPosts();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [])
    return (
        <div className="posts__component">
            {
                posts.map(post => (
                    <Link to={`/details/${post._id}`} className="posts__link" ><Post post={post} /></Link>
                ))
            }
            
            
            
            
        </div>
    )
}

export default Posts
