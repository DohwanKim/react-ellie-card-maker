import React, { useRef } from 'react';
import styles from 'components/card_edit_form/card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, onUpdateCard, onDeleteCard }) => {
  const { id, name, company, title, email, message, theme, fileName } = card;
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();
  const onChange = e => {
    if (e.currentTarget === null) {
      return;
    }
    e.preventDefault();

    const updatedCard = {
      ...card,
      id: id,
      name: nameRef.current?.value || '',
      company: companyRef.current?.value || '',
      theme: themeRef.current?.value || 'light',
      title: titleRef.current?.value || '',
      email: emailRef.current?.value || '',
      message: messageRef.current?.value || '',
    };

    onUpdateCard(updatedCard);
  };
  const onFileChange = file => {
    onUpdateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form className={styles.cardEditForm} ref={formRef}>
      <div className={styles.row}>
        <input type="text" name="name" value={name} ref={nameRef} onChange={onChange} />
        <input type="text" name="company" value={company} ref={companyRef} onChange={onChange} />
        <select name="theme" value={theme} ref={themeRef} onChange={onChange}>
          <option value="" disabled>
            Theme
          </option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
      </div>
      <div className={styles.row}>
        <input type="text" name="title" value={title} ref={titleRef} onChange={onChange} />
        <input type="text" name="email" value={email} ref={emailRef} onChange={onChange} />
      </div>
      <div>
        <textarea name="message" id="" rows="5" value={message} ref={messageRef} onChange={onChange} />
      </div>
      <div className={styles.row}>
        <FileInput onFileChange={onFileChange} name={fileName} />
        <button type="button" onClick={() => onDeleteCard(id)}>
          Delete
        </button>
      </div>
    </form>
  );
};

export default CardEditForm;
