import React, { useRef, useState } from 'react';
import styles from 'components/card_edit_form/card_edit_form.module.css';

const CardAddForm = ({ onUpdateCard, FileInput }) => {
  const fileMap = { fileName: null, fileURL: null };
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();
  const [file, setFile] = useState(fileMap);

  const onSubmit = e => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current?.value || '',
      company: companyRef.current?.value || '',
      theme: themeRef.current?.value || 'light',
      title: titleRef.current?.value || '',
      email: emailRef.current?.value || '',
      message: messageRef.current?.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile(fileMap);
    onUpdateCard(card);
  };

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form className={styles.cardEditForm} ref={formRef}>
      <div className={styles.row}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="text" placeholder="Company" ref={companyRef} />
        <select ref={themeRef}>
          <option value="" disabled>
            Theme
          </option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
      </div>
      <div className={styles.row}>
        <input type="text" placeholder="Title" ref={titleRef} />
        <input type="text" placeholder="Email" ref={emailRef} />
      </div>
      <div>
        <textarea name="message" id="" rows="5" ref={messageRef} />
      </div>
      <div className={styles.row}>
        <FileInput onFileChange={onFileChange} name={file.fileName} />
        <button name="Add" type="button" onClick={onSubmit}>
          Add
        </button>
      </div>
    </form>
  );
};

export default CardAddForm;
