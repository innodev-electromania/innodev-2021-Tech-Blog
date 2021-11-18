import axios from "axios";
const URL = "http://localhost:8000";
export const createPost = async (post) => {
  try {
    await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost Api", error);
  }
};

export const GetAllPosts = async () => {
  try {
    let response = await axios.get(`${URL}/posts`);
    return response.data;
  } catch (error) {
    console.log("Error while calling GetAllPosts API ", error);
  }
};
export const GetPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling GetPost API ", error);
  }
};
export const EditPost = async (id, post) => {
  try {
    return await axios.put(`${URL}/update/${id}`, post);
  } catch (error) {
    console.log("Error while calling EditPost API ", error);
  }
};

export const DeletePost = async (id) => {
  try {
    return await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deletePost API ", error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${URL}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling the image", error);
  }
};
