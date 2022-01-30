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
            <Link to={`/update/${post._id}`} className="editlink">
              <Edit
                className="edit_button"
                style={{
                  color: "var(--edit-color)",
                  borderColor: "var(--edit-color)",
                }}
              />
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
          <p style={{ color: " var(--font-color2)", marginRight: 3 }}>
            Author:{" "}
          </p>
          <Link
            className="detail__author"
            to={`/?author_name=${post.author_name}`}
          >
            <p>{post.author_name}</p>
          </Link>

          <div
            className="detail__date"
            style={{ display: "flex", width: "fit-content" }}
          >
            <small
              style={{
                color: " var(--font-color2)",
                marginRight: 3,
                width: "100%",
              }}
            >
              Last Modified on: {""}
            </small>
            <p style={{ display: "block", width: "70%" }}>
              {new Date(post.createdDate).toDateString()}
            </p>
          </div>
        </div>

        <p
          className="detail__description"
          style={{ color: "var(--font-color2)" }}
        >
          {post.description}
        </p>
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
      <Comments post={post} />
    </>
  );
};

export default DetailView;
