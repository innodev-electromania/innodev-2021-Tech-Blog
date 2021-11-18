import React, { useEffect, useState } from "react";
import "./EditComponent.css";
import { GrAddCircle } from "react-icons/gr";
import { EditPost, GetPost } from "../../service/api";
import { useHistory, useParams } from "react-router";

const initialPost = {
  title: "",
  description: "",
  picture: "",
  categories: "Tech",
  createdDate: new Date(),
};

const EditComponent = () => {
  const [post, setPost] = useState(initialPost);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      let data = await GetPost(id);
      setPost(data);
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const saveEdit = async () => {
    await EditPost(id, post);
    history.push(`/details/${post._id}`);
  };
  return (
    <div className="write">
      <img
        src="https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg"
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <GrAddCircle className="writeIcon" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => handleChange(e)}
            value={post.title}
            name="title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your Story"
            type="text"
            className="writeInput writeText"
            name="description"
            onChange={(e) => handleChange(e)}
            value={post.description}
          ></textarea>
        </div>
        <button className="writeSubmit" onClick={() => saveEdit()}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditComponent;
