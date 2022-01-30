import React, { useEffect, useState } from "react";
import "./CreateComponent.css";
import { GrAddCircle } from "react-icons/gr";
import { createPost, uploadFile } from "../../service/api";
import { useHistory, useLocation } from "react-router-dom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import { LoginContext } from "../context/ContextProvider.jsx";
import TextEditor from "./editor/TextEditor";
const initialValues = {
  title: "",
  description: "",
  picture: "",
  author_email: "mathmagic812000@gmail.com",
  author_name: "Srinath",
  categories: "",
  createdDate: new Date(),
};
const CreateComponent = () => {
  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");
  console.log(post.author_name);
  const [imageURL, setImageURL] = useState("");
  const { account, setAccount } = useContext(LoginContext);
  const history = useHistory();
  const location = useLocation();
  // const url = post.picture
  // ? post.picture
  const url =
    "https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        console.log(file);
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const image = await uploadFile(data);
        post.picture = image.data;
        setImageURL(image.data);
      }
    };
    getImage();
  }, [file]);
  const handleEditor = (content) => {
    setPost({ ...post, [post.description]: content });
    console.log("post", post);
  };
  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
    console.log(post);
  };
  useEffect(() => {
    console.log("post ", post);
  }, [post]);

  const savePost = async () => {
    post.author_email = account.email;
    post.author_name = account.firstName;
    post.categories = location.search?.split("=")[1] || "All";
    await createPost(post);
    history.push("/");
  };

  return (
    <div className="create__container">
      <img src={url} alt="" className="create__image" />
      <form className="create__title">
        <label htmlFor="fileInput">
          <GrAddCircle className="create__addIcon" />
        </label>

        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <input
          type="text"
          placeholder="title"
          className="create__input"
          autoFocus={true}
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <Button color="primary" variant="contained" onClick={savePost}>
          Publish
        </Button>
      </form>
      <div className="create__textarea">
        <TextareaAutosize
          minRows={5}
          id="editor"
          placeholder="Tell your Story"
          type="text"
          className="create__textarea"
          // onChange={(e) => handleChange(e)}
          name="description"
        ></TextareaAutosize>
      </div>

      <TextEditor post={post} changePost={(value) => setPost(value)} />
    </div>
  );
};

export default CreateComponent;
