import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import "./Sidebar.css";
import Categories from "./Categories";
import { Link, useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => {
  return {
    component: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    createbtn: {
      backgroundColor: "#7cb2d2",
      textDecoration: "none",
      marginTop: "10px",
      zIndex: "10",
    },
  };
});
const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <div className="sidebar">
      <Button className={classes.createbtn} variant="contained" color="primary">
        <Link
          to={`/create/${location.search}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          Create Blog
        </Link>
      </Button>
      <div>
        <Categories />
      </div>
    </div>
  );
};

export default Sidebar;
