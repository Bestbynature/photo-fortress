import express from "express";
import multer from "multer";
import { getImage, getImages, uploadImage } from "../controllers/image";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), fileFilter });

function fileFilter(req: any, file: any, cb: any) {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images are allowed.'));
  }
}

// Routes
router.get("/get_images", getImages);
router.get("/get_image/:id", getImage);
router.post("/upload", upload.single("imagefile"), uploadImage);

export { router as imageRoutes };
