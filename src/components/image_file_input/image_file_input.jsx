import React, { useRef } from 'react';
import styles from 'components/image_file_input/image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const imageInputRef = useRef();
  const onImageInput = e => {
    e.preventDefault();
    imageInputRef.current.click();
  };
  const onChangeImageInput = async e => {
    const uploaded = await imageUploader.upload(e.currentTarget.files[0]);

    if (uploaded) {
      onFileChange({
        name: uploaded.data.original_filename,
        url: uploaded.data.url,
      });
    }
  };

  return (
    <>
      <button type="button" onClick={onImageInput}>
        {name || 'No file'}
      </button>
      <input
        ref={imageInputRef}
        className={styles.fileInput}
        name="file"
        type="file"
        accept="image/*"
        onChange={onChangeImageInput}
      />
    </>
  );
};

export default ImageFileInput;
