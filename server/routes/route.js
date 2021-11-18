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
const router = express.Router();
router.post("/create", CreatePost);
router.get("/posts", GetAllPosts);
router.get("/post/:id", GetPost);
router.put("/update/:id", UpdatePost);
router.delete("/delete/:id", DeletePost);
router.post("/file/upload", upload.single("file"), UploadImage);
router.get("/file/:filename", GetImage);

export default router;
