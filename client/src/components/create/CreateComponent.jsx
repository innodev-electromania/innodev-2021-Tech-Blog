import React, { useState } from 'react';
import './CreateComponent.css';
import {GrAddCircle} from 'react-icons/gr';
import { createPost } from '../../service/api';

const initialValues = {
    title : "",
    description : "",
    picture : "",
    author : "Myself",
    categories : "All",
    currentDate : new Date()
}
const CreateComponent = () => {
    const [post, setPost] = useState(initialValues);
    const handleChange = (event) => {
            setPost({
                ...post,
                [event.target.name]: event.target.value});
    }
    const savePost  = async () => {
        await createPost(post);
    }
    return (
      <div className="write">
       <img src="https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg" alt="" className="writeImg"/>
        <form className="writeForm">
            <div className="writeFormGroup">
                 <label htmlFor="fileInput">
                 <GrAddCircle className="writeIcon"/>
                 </label>
                
                <input type="file" id="fileInput" style={{display: 'none'}}/>
               
                <input type="text" 
                placeholder="title"
                className="writeInput" 
                autoFocus={true}
                onChange ={(e) => handleChange(e)}
                name="title"
                />
            </div>
            
            <div className="writeFormGroup">
                <textarea
                placeholder="Tell your Story" 
                type="text" 
                className="writeInput writeText"
                onChange ={(e) => handleChange(e)}
                name ="description"></textarea>
            </div>
            <button className="writeSubmit" onClick={savePost} >Publish</button>
        </form>
      </div>
    )
}

export default CreateComponent;
