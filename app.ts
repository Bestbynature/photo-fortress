import * as express from "express";

import * as path from "path";
import * as multer from "multer";
import "./db-connection";
import ImageModel, { ImageDocument } from "./model";

const app = express();


const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images are allowed.'));
  }
};

const memoryStorage = multer.memoryStorage();

const upload = multer({ storage: memoryStorage, fileFilter});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(path.join(__dirname, "public")));

// Routes
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/get_images", async (req, res) => {
  try {
    const images = await ImageModel.find({}, "_id");
    const imageIds = images.map((image) => image._id);
    res.json({ imageIds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch image IDs" });
  }
});

app.get("/api/get_image/:id", async (req, res) => {
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
});

app.post("/api/upload", upload.single("imagefile"), async (req, res) => {
  if (req.file) {
    try {
      const image = {
        name: req.file.originalname,
        image: {
          data: req.file.buffer.toString("base64"),
          contentType: req.file.mimetype,
        },
      };

      const savedImage = await ImageModel.create(image);

      res.json({
        message: "Image uploaded successfully",
        imageId: savedImage._id,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to upload image" });
    }
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
