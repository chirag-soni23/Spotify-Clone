import express from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import uploadFile from '../middlewares/multer.js';
import { addSong, addThumbnail, createAlbum, deleteSong, getallAlbums, getAllSongs, getAllsongsByAlbum } from '../controllers/songController.js';
const router = express.Router();

router.post("/album/new",isAuth,uploadFile,createAlbum);
router.get("/album/all",isAuth,getallAlbums);
router.post("/new",isAuth,uploadFile,addSong);
router.post("/:id",isAuth,uploadFile,addThumbnail);
router.get("/all",isAuth,getAllSongs);
router.get("/album/:id",isAuth,getAllsongsByAlbum);
router.delete("/delete/:id",isAuth,deleteSong);
export default router;