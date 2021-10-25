import express from 'express';
import { CreatePost } from '../controllers/data_controller.js';
const router = express.Router();
 router.post('/create',CreatePost);

 export default router;