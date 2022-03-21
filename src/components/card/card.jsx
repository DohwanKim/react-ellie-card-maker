import React from 'react';
import styles from 'components/card/card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';
const getStyles = theme => {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
};

const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${card && getStyles(theme)}`}>
      <img src={url} alt="profile" />
      <div className={styles.cardInfo}>
        <h4 className={styles.name}>{name}</h4>
        <p>{company}</p>
        <div className={styles.divider} />
        <p>{title}</p>
        <p>{email}</p>
        <pre>{message}</pre>
      </div>
    </li>
  );
};

export default Card;
