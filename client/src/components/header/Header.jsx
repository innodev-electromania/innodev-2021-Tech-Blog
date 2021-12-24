import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { LoginContext } from "../context/ContextProvider.jsx";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    document.body.classList.toggle("darkTheme");
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    setTheme("light");
  }, []);
  return (
    <nav className="navbar">
      <h3 className="logo">Techblog</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
        <Link to="/contact" className="contact">
          <li>Contact</li>
        </Link>
        <Link to="/login" className="login">
          {account ? <li> {account.firstName} </li> : <li> Login</li>}
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
      <Button onClick={toggleTheme}>
        {theme === "light" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon style={{ color: "white" }} />
        )}
      </Button>
    </nav>
  );
};
export default Header;
