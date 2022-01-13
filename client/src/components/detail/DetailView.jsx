import { Delete, Edit } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeletePost, GetPost } from "../../service/api";
import { useHistory, useParams } from "react-router";
import "./DetailView.css";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import Comments from "./comments/Comments";
import { LoginContext } from "../context/ContextProvider";
const initialValues = {
  title: "asdf",
  description: "This is the description",
  picture: "",
  author: "Myself",
  categories: "All",
  createdDate: new Date(),
};
const DetailView = () => {
  const [post, setPost] = useState(initialValues);
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await GetPost(id);
        console.log("post is ", data);
        setPost(data);
      } catch (error) {
        console.log("Error in the fetching inside the component", error);
      }
    };
    fetchData();
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseDisagree = () => {
    setOpen(false);
  };
  const handleCloseAgree = async () => {
    console.log("clicked");
    await DeletePost(post._id);
    history.push("/");
  };
  console.log(post.createdDate);
  return (
    <>
      <div className="detail__component">
        <img
          src="https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg"
          alt=""
          className="detail__Img"
        />
        {account && account.email === post.author_email ? (
          <div className="detailview__icons">
            <Link to={`/update/${post._id}`}>
              <Edit className="edit_button" color="primary" />
            </Link>

            <Delete
              className="delete__button"
              color="error"
              onClick={handleClickOpen}
              cursor="pointer"
            />
          </div>
        ) : (
          <p></p>
        )}

        <h4 className="detail__title">{post.title}</h4>
        <div className="detail__author">
          <Link
            className="detail__author"
            to={`/?author_name=${post.author_name}`}
          >
            <p>{post.author}</p>
          </Link>
          <p className="detail__date">
            {new Date(post.createdDate).toDateString()}
          </p>
        </div>

        <p className="detail__description">{post.description}</p>
      </div>
      <Dialog
        open={open}
        onClose={handleCloseDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You sure to delete this post?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDisagree}>Disagree</Button>
          <Button onClick={handleCloseAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {account ? <Comments post={post} /> : <p></p>}
    </>
  );
};

export default DetailView;
