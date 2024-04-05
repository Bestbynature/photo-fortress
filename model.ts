import mongoose, { Document } from 'mongoose';

// Define interface for Image document
interface ImageDocument extends Document {
  name: string;
  image: {
    data: Buffer;
    contentType: string;
  };
}

const imageSchema = new mongoose.Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String
  }
});

const ImageModel = mongoose.model<ImageDocument>('Image', imageSchema);

export default ImageModel;
export { ImageDocument }; // Export the interface for reuse
