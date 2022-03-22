import React, { memo, useRef, useState } from 'react';
import styles from 'components/image_file_input/image_file_input.module.css';

const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const imageInputRef = useRef();
  const onImageInput = e => {
    e.preventDefault();
    imageInputRef.current.click();
  };
  const onChangeImageInput = async e => {
    setIsLoading(true);
    const uploaded = await imageUploader.upload(e.currentTarget.files[0]);

    if (uploaded) {
      onFileChange({
        name: uploaded.data.original_filename,
        url: uploaded.data.url,
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      {!isLoading ? (
        <button type="button" onClick={onImageInput}>
          {name || 'No file'}
        </button>
      ) : (
        <div className={styles.loadingContainer}>
          <span className={styles.loading} />
        </div>
      )}
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
});

export default ImageFileInput;
