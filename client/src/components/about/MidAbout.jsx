import React from "react";

const MidAbout = (props) =>{
  
    return(
        <>
        <div className="cards">
        <div className="card">
        <img src={props.imgsrc} alt="myPic"  className="card__img" />
        <div className="card__info">
        <h3 className="card__title">{props.sname}</h3>
        <span className="card__category">{props.title}</span>
        <h4 className="rollnumber"><span>Roll Number-</span>{props.links}</h4>
       </div>
     </div>
   </div>
  </>
    )
}


export default MidAbout;
