import React from 'react';
import styles from 'components/editor/editor.module.css';
import CardEditForm from 'components/card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({ cards, onAdd, onDelete }) => {
  return (
    <div className={styles.editor}>
      <h3>editor</h3>
      <div className={styles.editorWrapper}>
        {cards.map(card => (
          <CardEditForm card={card} key={card.id} onDelete={onDelete} />
        ))}
        <CardAddForm cards={cards} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Editor;
