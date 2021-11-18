import React, { useEffect, useState } from "react";
import "./CreateComponent.css";
import { GrAddCircle } from "react-icons/gr";
import { createPost, uploadFile } from "../../service/api";
const initialValues = {
  title: "",
  description: "",
  picture: "",
  author: "Myself",
  categories: "All",
  currentDate: new Date(),
};
const CreateComponent = () => {
  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");

  //   const [ImageUrl, setImageUrl] = useState("");
  const url = post.picture
    ? post.picture
    : "https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        console.log(file);
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const image = await uploadFile(data);
        post.picture = image.data;
      }
    };
    getImage();
  }, [file]);

  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const savePost = async () => {
    await createPost(post);
  };

  return (
    <div className="write">
      <img src={url} alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <GrAddCircle className="writeIcon" />
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
            className="writeInput"
            autoFocus={true}
            onChange={(e) => handleChange(e)}
            name="title"
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your Story"
            type="text"
            className="writeInput writeText"
            onChange={(e) => handleChange(e)}
            name="description"
          ></textarea>
        </div>
        <button className="writeSubmit" onClick={savePost}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateComponent;
