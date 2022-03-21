import axios from 'axios';

class ImageUploader {
  _url = 'https://api.cloudinary.com/v1_1/demo/image/upload';

  async upload(file) {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'docs_upload_example_us_preset');

    return await axios.post(this._url, formData);
  }
}

export default ImageUploader;
