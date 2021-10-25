import React from 'react';
import './EditComponent.css';
import {GrAddCircle} from 'react-icons/gr';
const EditComponent = () =>{
    return (
      <div className="write">
       <img src="https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg" alt="" className="writeImg"/>
        <form className="writeForm">
            <div className="writeFormGroup">
                 <label htmlFor="fileInput">
                 <GrAddCircle className="writeIcon"/>
                 </label>
                <input type="file" id="fileInput"style={{display: 'none'}}/>
                <input type="text" placeholder="title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your Story" type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
      </div>
    )
}

export default EditComponent;
