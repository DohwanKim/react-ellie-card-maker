import axios from 'axios';

class ImageUploader {
  _uploadUrl = null;
  _apiKey = null;

  constructor(cloudinaryName, cloudinaryApiKey) {
    this._uploadUrl = `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload`;
    this._apiKey = cloudinaryApiKey;
  }

  async upload(file) {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'ellie-card-maker');
    formData.append('api_key', this._apiKey);

    return await axios.post(this._uploadUrl, formData);
  }
}

export default ImageUploader;
