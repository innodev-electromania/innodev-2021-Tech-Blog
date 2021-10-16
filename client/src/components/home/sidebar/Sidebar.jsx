import {  Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import './Sidebar.css';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles({
    component :{
        border : '1px solid grey',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
    },
    createbtn : {

    }
    
}); 
const Sidebar = () => {
    const classes = useStyles();
    return (
        <div className="sidebar">
            
            <Button className={classes.createbtn} variant="contained" color="primary" >Create Blog</Button>
            <div className="categories">
            <div className="category"><Search /><p>Web Development</p></div>
            <div className="category"><Search /><p>Android Development</p></div>
            <div className="category"><Search /><p>Games</p></div>
            <div className="category"><Search /><p>Embedded Devices</p></div>
            <div className="category"><Search /><p>Software</p></div>
            <div className="category"><Search /><p>Programming Languages</p></div>
            <div className="category"><Search /><p>Online Platforms</p></div>
            </div>
        </div>
    )
}

export default Sidebar
