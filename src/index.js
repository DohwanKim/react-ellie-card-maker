import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import 'index.module.css';
import App from 'app';
import { firebaseApp } from 'service/firebase';
import AuthService from 'service/auth_service';
import ImageUploader from 'service/image_uploader';
import CardRepository from 'service/card_repository';
import ImageFileInput from 'components/image_file_input/image_file_input';

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository(firebaseApp);
const imageUploader = new ImageUploader(
  process.env.REACT_APP_CLOUDINARY_NAME,
  process.env.REACT_APP_CLOUDINARY_API_KEY,
);
const FileInput = memo(props => <ImageFileInput {...props} imageUploader={imageUploader} />);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById('root'),
);
