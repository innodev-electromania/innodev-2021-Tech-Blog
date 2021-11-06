/*import React from "react";
import "./header.css";
//import { NavLink } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="main-nav">
      <Link to="/">
        <div className="logo">
          <h2>Techblog</h2>
        </div>
        </Link>
        <div className="menu-link">
          <ul>
            <li>
             <Link to='/aboutMNNIT' >MNNIT</Link>
            </li>
            <li>
            <Link to='/about' >About</Link>
            </li>
          </ul>
          </div>
        <div className="hamburger-menu">
          <Link to="/">
            <MenuIcon />
          </Link>
        </div>
      </nav>
    </>
  );
}; */

import React, {useState} from 'react';
import "./header.css"
import { Link } from "react-router-dom";

export const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
          <h3 className="logo">Techblog</h3>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={()=> setIsMobile(false)}
          >
            <Link to="/" className="home">
              <li>Home</li>
            </Link>
            <Link to="/about" className="about">
              <li>About</li>
            </Link>
            <Link to="/skills" className="skills">
              <li>Skills</li>
            </Link>
            <Link to="/contact" className="contact">
              <li>Contact</li>
            </Link>
            <Link to="/signup" className="signup">
              <li>Sign Up</li>
            </Link>
          </ul>
         <button className="mobile-menu-icon"
         onClick={() => setIsMobile(!isMobile)}
         >
           {isMobile ? (
             <i className="fas fa-times"></i>
           ) :(
             <i className="fas fa-bars"></i>
           )}
         </button>
        </nav>
    );
};
