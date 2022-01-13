import React, { useContext } from "react";
import {
  Avatar,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { LockOutlined } from "@material-ui/icons";
import { useState } from "react";
import { createUser } from "../../service/api";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";

const useStyles = makeStyles({
  container: {
    marginTop: "10px",
  },
  paper: {
    padding: 20,
    height: "60vh important",
    width: 300,
    margin: "20px auto",
  },
  avatar: {
    backgroundColor: "#9ddede",
  },
  inputs: {
    marginBottom: "25px",
    marginLeft: "5px",
    marginRight: "5px",
    display: "flex",
  },
  btn: {
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "#7cb2d2",
  },
});
const Signup = () => {
  const history = useHistory();
  const { account, setAccount } = useContext(LoginContext);

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    year: "",
    branch: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
    console.log(newUser);
  };
  const saveUser = async () => {
    try {
      await createUser(newUser);
      setAccount(newUser);
    } catch (error) {
      console.log(error);
    }
    history.push("/");
  };
  const classes = useStyles();
  return (
    <Grid align="center" className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>

        <h2>Sign Up</h2>
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <TextField
            className={classes.inputs}
            label="First Name"
            name="firstName"
            type="text"
            value={newUser.firstName}
            onChange={(e) => handleChange(e)}
            placeholder="Enter first name"
            required
          />

          <TextField
            className={classes.inputs}
            label="Last Name"
            name="lastName"
            type="text"
            value={newUser.lastName}
            onChange={(e) => handleChange(e)}
            placeholder="Enter last name"
            required
          />
        </div>
        <TextField
          className={classes.inputs}
          label="Username"
          name="username"
          type="text"
          value={newUser.username}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your codename"
          fullWidth
          required
        />
        <FormControl className={classes.inputs}>
          <InputLabel id="year-select">Year</InputLabel>
          <Select
            id="year-select"
            value={newUser.year}
            name="year"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={2015}>2015</MenuItem>
            <MenuItem value={2016}>2016</MenuItem>
            <MenuItem value={2017}>2017</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2024}>2024</MenuItem>
            <MenuItem value={2025}>2025</MenuItem>
            <MenuItem value={2026}>2026</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.inputs}>
          <InputLabel id="branch-select-label">Branch</InputLabel>
          <Select
            labelId="branch-select-label"
            id="branch-select"
            label="Branch"
            name="branch"
            value={newUser.branch}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"ECE"}>ECE</MenuItem>
            <MenuItem value={"CSE"}>CSE</MenuItem>
            <MenuItem value={"IT"}>IT</MenuItem>
            <MenuItem value={"ME"}>ME</MenuItem>
            <MenuItem value={"Civil"}>Civil</MenuItem>
            <MenuItem value={"PIE"}>PIE</MenuItem>
            <MenuItem value={"EE"}>EE</MenuItem>
            <MenuItem value={"CE"}>CE</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={classes.inputs}
          label="Email"
          value={newUser.email}
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="Enter email"
          fullWidth
          required
        />

        <TextField
          className={classes.inputs}
          label="Password"
          name="password"
          value={newUser.password}
          type="password"
          onChange={(e) => handleChange(e)}
          placeholder="Enter username"
          fullWidth
          required
        />

        <TextField
          className={classes.inputs}
          label="Confirm Password"
          name="confirmedPassword"
          value={newUser.confirmedPassword}
          type="password"
          onChange={(e) => handleChange(e)}
          placeholder="Enter password again"
          fullWidth
          required
        />

        <Button
          className={classes.btn}
          type="Submit"
          variant="contained"
          color="primary"
          onClick={saveUser}
          fullWidth
        >
          Submit
        </Button>
      </Paper>
    </Grid>
  );
};

export default Signup;
