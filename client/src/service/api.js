import axios from "axios";
const URL = "http://localhost:8000";
// users

export const createUser = async (newUser) => {
  try {
    console.log(newUser);
    await axios.post(`${URL}/signup`, newUser);
  } catch (error) {
    console.log("Error while calling createUser API", error);
  }
};

export const loginUser = async (user) => {
  try {
    let response = await axios.post(`${URL}/login`, user);
    alert(response.data.message);
    console.log(response.data.loggedInUser);
    return response.data.loggedInUser;
  } catch (error) {
    console.log("Error while calling login API", error);
  }
};

// posts
export const createPost = async (post) => {
  try {
    await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost Api", error);
  }
};

export const GetAllPosts = async (param) => {
  try {
    let response = await axios.get(`${URL}/posts${param}`);
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

export const newComment = async (comment) => {
  try {
    return await axios.post(`${URL}/comment/new/`, comment);
  } catch (error) {
    console.log("Error while calling newComment API ", error);
  }
};

export const getComments = async (id) => {
  try {
    let response = await axios.get(`${URL}/comments/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getComments API ", error);
  }
};

export const deleteComment = async (id) => {
  try {
    return await axios.delete(`${URL}/comment/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deleteComments API ", error);
  }
};
