import express from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import uploadFile from '../middlewares/multer.js';
import { createAlbum, getallAlbums } from '../controllers/songController.js';
const router = express.Router();

router.post("/album/new",isAuth,uploadFile,createAlbum);
router.get("/album/all",isAuth,getallAlbums);

export default router;