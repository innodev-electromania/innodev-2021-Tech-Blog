import { useState, useEffect } from "react";
import { Box, TextareaAutosize, Button, makeStyles } from "@material-ui/core";

import { newComment, getComments } from "../../../service/api";

//components
import Comment from "./Comment";
import { AccountTreeTwoTone } from "@material-ui/icons";
import { useContext } from "react";
import avatar1 from "../../home/posts/post/images/avatar1.jpg";
import { LoginContext } from "../../context/ContextProvider";

const useStyles = makeStyles({
  container: {
    marginTop: 100,
    display: "flex",
    "& > *": {
      // padding: '10px '
    },
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  textarea: {
    height: 100,
    width: "100%",
    margin: "0 20px",
  },
  button: {
    height: 40,
  },
});

const initialValue = {
  postAuthor: "",
  commentAuthor_email: "",
  commentAuthor_name: "",
  postId: "",
  date: new Date(),
  comments: "",
};

const Comments = ({ post }) => {
  const classes = useStyles();
  const { account, setAccount } = useContext(LoginContext);
  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const comment_response = await getComments(post._id);
      setComments(comment_response);
    };
    getData();
  }, [toggle, post]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      postAuthor: post.author_name,
      commentAuthor_email: account.email,
      commentAuthor_name: "Shashank",
      postId: post._id,
      comments: e.target.value,
    });
    setData(e.target.value);
  };

  const addComment = async () => {
    await newComment(comment);
    setData("");
    setToggle((prev) => ~prev);
  };

  return (
    <Box>
      <Box className={classes.container}>
        <img src={avatar1} className={classes.image} alt="dp" />
        <TextareaAutosize
          rowsMin={5}
          className={classes.textarea}
          placeholder="what's on your mind?"
          onChange={(e) => handleChange(e)}
          value={data}
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={classes.button}
          onClick={(e) => addComment(e)}
        >
          Post
        </Button>
      </Box>
      <Box>
        {comments &&
          comments.map((comment) => (
            <Comment comment={comment} setToggle={setToggle} />
          ))}
      </Box>
    </Box>
  );
};

export default Comments;
