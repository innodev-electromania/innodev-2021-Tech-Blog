import { Typography, Box, makeStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useContext } from "react";

import { deleteComment } from "../../../service/api";
import { LoginContext } from "../../context/ContextProvider";

const useStyles = makeStyles({
  component: {
    marginTop: 30,
    background: "#F5F5F5",
    padding: 10,
  },
  container: {
    display: "flex",
    marginBottom: 5,
  },
  name: {
    fontWeight: 600,
    fontSize: 18,
    marginRight: 20,
  },
  date: {
    fontSize: 14,
    color: "#878787",
  },
  delete: {
    marginLeft: "auto",
  },
});

const Comment = ({ comment, setToggle }) => {
  const classes = useStyles();
  const { account, setAccount } = useContext(LoginContext);
  console.log(account);
  console.log("comment is ", comment);
  const removeComment = async () => {
    await deleteComment(comment._id);
    setToggle((prev) => !prev);
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <Typography className={classes.name}>
          {comment.commentAuthor_name}
        </Typography>
        <Typography className={classes.date}>
          {new Date(comment.date).toDateString()}
        </Typography>
        {account && account.email === comment.commentAuthor_email ? (
          <Delete className={classes.delete} onClick={() => removeComment()} />
        ) : account && account.email === comment.postAuthor ? (
          <Delete className={classes.delete} onClick={() => removeComment()} />
        ) : (
          ""
        )}
      </Box>
      <Typography>{comment.comments}</Typography>
    </Box>
  );
};

export default Comment;
