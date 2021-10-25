import React from 'react';
import MidAbout from './MidAbout';
import Sdata from './Sdata';
import './About.css';
 
const About = () =>{
    
    return(
     <>
      {Sdata.map( (val) => { 
     return(
      <MidAbout
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
       links={val.links} 
      />
      )
     })}
     </>  
    )
 
} 

export default About;