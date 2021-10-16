import React from "react";
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
};
