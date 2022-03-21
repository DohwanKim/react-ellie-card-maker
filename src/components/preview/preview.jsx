import React from 'react';
import styles from 'components/preview/preview.module.css';
import Card from 'components/card/card';

const Preview = ({ cards }) => {
  return (
    <div className={styles.preview}>
      <h3>Card Preview</h3>
      <ul className={styles.previewWrapper}>{cards && cards.map(card => <Card key={card.id} card={card} />)}</ul>
    </div>
  );
};

export default Preview;
