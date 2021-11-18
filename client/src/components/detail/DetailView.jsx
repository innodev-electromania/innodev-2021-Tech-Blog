import { Delete, Edit } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeletePost, GetPost } from "../../service/api";
import { useHistory, useParams } from "react-router";
import "./DetailView.css";
import AlertDialog from "../edit/AlertDialog";
const initialValues = {
  title: "asdf",
  description: "This is the description",
  picture: "",
  author: "Myself",
  categories: "All",
  currentDate: new Date(),
};
const DetailView = () => {
  const [post, setPost] = useState(initialValues);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await GetPost(id);
        console.log(data);
        setPost(data);
      } catch (error) {
        console.log("Error in the fetching inside the component", error);
      }
    };
    fetchData();
  }, []);
  const handleClick = async () => {
    console.log("clicked");
    await DeletePost(post._id);
    history.push("/");
  };
  return (
    <>
      <div className="detail__component">
        <div className="detail__container">
          <p className="detail__title">{post.title}</p>
          <div className="detailview__icons">
            <Link to={`/update/${post._id}`}>
              <Edit className="edit_button" color="primary" />
            </Link>

            <Delete
              className="delete__button"
              color="error"
              onClick={((<AlertDialog />), () => handleClick())}
              cursor="pointer"
            />
          </div>
        </div>
        <img
          src="https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg"
          alt=""
          className="detail__Img"
        />

        <p className="detail__container">{post.description}</p>
      </div>
    </>
  );
};

export default DetailView;
