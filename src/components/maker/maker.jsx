import React, { useCallback, useEffect, useState } from 'react';
import styles from 'components/maker/maker.module.css';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Preview from 'components/preview/preview';
import Editor from 'components/editor/editor';
import { useNavigate, useLocation } from 'react-router-dom';

const Maker = ({ authService, FileInput, cardRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);
  const onDeleteCard = cardId => {
    const updated = { ...cards };

    delete updated[cardId];
    setCards(updated);
    cardRepository.removeCard(userId, cardId);
  };
  const onUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  useEffect(() => {
    if (!userId) {
      return;
    }

    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    });

    return () => stopSync();
  }, [cardRepository, userId]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} onUpdateCard={onUpdateCard} onDeleteCard={onDeleteCard} FileInput={FileInput} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
