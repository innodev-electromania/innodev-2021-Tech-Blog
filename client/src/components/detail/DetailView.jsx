import { Delete, Edit } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './DetailView.css';
const DetailView = () => {
    return (
        <>
          <div className="detail__component">
          <div className="detail__container">
                
            <p className="detail__title">Title</p>
          <div className="detailview__icons">
                 <Link to="/update" > <Edit className="edit_button" color="primary"/></Link>
                                     <Delete   className="delete__button" color="error" />
                </div>
            </div>
       <img src="https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg" alt="" className="detail__Img"/>
           
            <p className="detail__container">
                Here is the description
            </p>
      </div>
        </>
    )
}

export default DetailView
