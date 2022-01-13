import React, { useContext } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { LockOutlined } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../service/api";
import { LoginContext } from "../context/ContextProvider";
const useStyles = makeStyles({
  container: {
    margin: "10px auto",
  },
  paper: {
    padding: 20,
    height: "50vh important",
    width: 300,
    margin: "20px auto",
  },
  avatar: {
    backgroundColor: "#9ddede",
  },
  inputs: {
    marginBottom: "40px",
  },
  btn: {
    marginTop: "50px",
    marginBottom: "20px",
    backgroundColor: "#7cb2d2",
  },
});
const Login = (props) => {
  const { account, setAccount } = useContext(LoginContext);
  const history = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const localStore = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
  };
  const handleLogin = async () => {
    let loggedInUser = await loginUser(user);
    history.push("/");
    try {
      setAccount(loggedInUser);
      localStore(loggedInUser);
    } catch (error) {
      console.log(error);
    }
    // console.log("here is the logged in user", loggedInUser);
  };
  return (
    <Grid align="center" className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <h2>Sign In</h2>
        <TextField
          className={classes.inputs}
          label="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={(e) => handleChange(e)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={(e) => handleChange(e)}
          fullWidth
          required
        />
        <Button
          className={classes.btn}
          type="Submit"
          variant="contained"
          color="primary"
          onClick={() => handleLogin()}
          fullWidth
        >
          Submit
        </Button>
        <Typography>
          Don't have and account? <Link to="/signup">Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
