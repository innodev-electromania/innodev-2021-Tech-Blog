import {  Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import './Sidebar.css';
import Categories from './Categories';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    component :{
        border : '1px solid grey',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
    }
    
}); 
const Sidebar = () => {
    const classes = useStyles();
    return (
        <div className="sidebar">
            <Link to='/create'><Button className={classes.createbtn} variant="contained" color="primary" >Create Blog</Button></Link>
            <div>
            <Categories />
            </div>  
        </div>
    )
}

export default Sidebar
