import mongoose, { Document } from 'mongoose';

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
export { ImageDocument };
