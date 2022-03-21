import React, { useRef } from 'react';
import styles from 'components/card_edit_form/card_edit_form.module.css';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();

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
      fileName: '',
      fileURL: '',
    };
    formRef.current.reset();
    onAdd(card);
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
        <button type="button">Add Image</button>
        <button name="Add" type="button" onClick={onSubmit}>
          Add
        </button>
      </div>
    </form>
  );
};

export default CardAddForm;
