import express from "express";
import {
    getGallery,
    getGalleryById,
    saveGallery,
    updateGallery,
    deleteGallery
} from "../controlerimage/uploadControler.js";

const router = express.Router();

router.get('/gallery', getGallery);
router.get('/gallery/:id', getGalleryById);
router.post('/gallery', saveGallery);
router.patch('/gallery/:id', updateGallery);
router.delete('/gallery/:id', deleteGallery);

export default router;
