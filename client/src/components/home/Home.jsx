import React from 'react'
import Posts from './posts/Posts';
import Sidebar from './sidebar/Sidebar'
import './Home.css';
const Home = () => {
    return (
        <div className="container">
           <Sidebar className="sidebar" />
            <Posts className="posts"/>
        </div>
    )
}

export default Home
