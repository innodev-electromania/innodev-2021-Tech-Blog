import express from "express";
import {
  CreatePost,
  GetAllPosts,
  GetPost,
  UpdatePost,
  DeletePost,
} from "../controllers/data_controller.js";
import upload from "../utils/upload.js";
import { UploadImage, GetImage } from "../controllers/image_controller.js";
import { CreateUser, LoginUser } from "../controllers/user_controller.js";
import {
  newComment,
  getComments,
  deleteComment,
} from "../controllers/comment_controller.js";

const router = express.Router();

//posts
router.post("/create", CreatePost);
router.get("/posts", GetAllPosts);
router.get("/post/:id", GetPost);
router.put("/update/:id", UpdatePost);
router.delete("/delete/:id", DeletePost);

// images
router.post("/file/upload", upload.single("file"), UploadImage);
router.get("/file/:filename", GetImage);

//users
router.post("/signup", CreateUser);
router.post("/login", LoginUser);

// comments
router.post("/comment/new", newComment);
router.get("/comments/:id", getComments);
router.delete("/comment/delete/:id", deleteComment);

export default router;
