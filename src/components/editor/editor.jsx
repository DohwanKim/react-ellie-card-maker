import React from 'react';
import styles from 'components/editor/editor.module.css';
import CardEditForm from 'components/card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({ FileInput, cards, onUpdateCard, onDeleteCard }) => {
  return (
    <div className={styles.editor}>
      <h3>Editor</h3>
      <div className={styles.editorWrapper}>
        {Object.keys(cards).map(key => (
          <CardEditForm
            FileInput={FileInput}
            card={cards[key]}
            key={key}
            onUpdateCard={onUpdateCard}
            onDeleteCard={onDeleteCard}
          />
        ))}
        <CardAddForm FileInput={FileInput} onUpdateCard={onUpdateCard} />
      </div>
    </div>
  );
};

export default Editor;
