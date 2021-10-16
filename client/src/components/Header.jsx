import React from 'react';
import "./header.css"
//import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
    return (
        <>
            <nav className="main-nav">
                 <div className="logo">
                    <h2>Techblog</h2>
                 </div>
                 <div className="menu-link">
                 <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>about</a>
            </li>
            <li>
              <a href='/'>services</a>
            </li>
            <li>
              <a href='/'>contact</a>
            </li>
          </ul>
                 </div>
                 <div className="hamburger-menu">
            <a href="#" >
              <GiHamburgerMenu />
            </a>
          </div>

            </nav>
            
            <section className="hero-section">
            <p>Hello, it's</p>
        <h1>Ritixxxxx</h1>
            </section>

        </>
    )
}
