import React, { useRef } from 'react';
import styles from 'components/card_edit_form/card_edit_form.module.css';

const CardEditForm = ({ card, onDelete }) => {
  const { id, name, company, title, email, message, theme, fileName, fileURL } = card;
  const formImageInput = useRef();
  const onImageInput = e => {
    e.preventDefault();
    formImageInput.current.click();
  };

  return (
    <form className={styles.cardEditForm}>
      <div className={styles.row}>
        <input type="text" name="name" defaultValue={name} />
        <input type="text" name="company" defaultValue={company} />
        <select name="theme" defaultValue={theme}>
          <option value="" disabled>
            Theme
          </option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
      </div>
      <div className={styles.row}>
        <input type="text" name="title" defaultValue={title} />
        <input type="text" name="email" defaultValue={email} />
      </div>
      <div>
        <textarea name="message" id="" rows="5" defaultValue={message} />
      </div>
      <div className={styles.row}>
        <button type="button" onClick={onImageInput}>
          {fileName}
        </button>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
        <input ref={formImageInput} type="file" accept="image/*" />
      </div>
    </form>
  );
};

export default CardEditForm;
