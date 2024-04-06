import { Request, Response } from "express";
import { ImageModel, ImageDocument } from "../models/image";
import multer from "multer";

async function getImages(req: Request, res: Response) {
  try {
    const images = await ImageModel.find({}, "_id");
    const imageIds = images.map((image) => image._id);
    res.json({ imageIds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch image IDs" });
  }
}

async function getImage(req: Request, res: Response) {
  try {
    const imageId = req.params.id;
    const image: ImageDocument | null = await ImageModel.findById(imageId);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
    const secureUrl = `data:${image.image.contentType};base64,${image.image.data}`;
    res.json({ imageUrl: secureUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get image" });
  }
}

async function uploadImage(req: Request, res: Response) {
  try {
    if (req.file) {
      const image = {
        name: req.file.originalname,
        image: {
          data: req.file.buffer.toString("base64"),
          contentType: req.file.mimetype,
        },
      };

      const savedImage = await ImageModel.create(image);

      return res.json({
        message: "Image uploaded successfully",
        imageId: savedImage._id,
      });
    } else {
      return res.status(400).json({ error: "No image file provided" });
    }
  } catch (error) {
    if (error instanceof multer.MulterError && error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({ error: "Invalid file type. Only images are allowed." });
    } else {
      console.error(error);
      return res.status(500).json({ error: "Failed to upload image" });
    }
  }
}

export { getImages, getImage, uploadImage };
