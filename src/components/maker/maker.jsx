import React, { useEffect, useState } from 'react';
import styles from 'components/maker/maker.module.css';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Preview from 'components/preview/preview';
import Editor from 'components/editor/editor';
import { useNavigate } from 'react-router-dom';

const Maker = ({ authService, FileInput }) => {
  const navigate = useNavigate();
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'KimDongGle',
      company: 'SpadeCompany',
      theme: 'colorful',
      title: 'Web Frontend',
      email: 'windboy098@gmail.com',
      message: 'hello',
      fileName: 'good-image',
      fileURL:
        'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1420692388.1641168000',
    },
    2: {
      id: '2',
      name: 'KingWonJun',
      company: 'SpadeCompany',
      theme: 'light',
      title: 'Web Backend',
      email: 'dnjswns@gmail.com',
      message: 'hi!',
      fileName: '',
      fileURL:
        'https://images.ctfassets.net/aq13lwl6616q/5EJjT6YQQmQvXd5HSzyZKr/135bca31d7ec981b083cbeac86eef6d7/yihua-compress.jpg',
    },
    3: {
      id: '3',
      name: 'Jin',
      company: 'Tekken',
      theme: 'dark',
      title: 'Hero',
      email: 'tekken@gmail.com',
      message:
        'Jin Kazama (風間 仁 Kazama Jin) is one of the main characters of the Tekken series. He is featured on the packaging for the console version of almost every sequel following his introduction in Tekken 3. He has been the main protagonist for the majority of the following entries ever since his debut in Tekken 3, and his main motivation has been trying to end the Mishima Bloodline to save the world from their evil.',
      fileName: 'good-image',
      fileURL: 'https://i1.sndcdn.com/artworks-000118861913-ds7q8d-t500x500.jpg',
    },
  });
  const onLogout = () => {
    authService.logout();
  };

  const onDeleteCard = cardId => {
    const updated = { ...cards };

    delete updated[cardId];
    setCards(updated);
  };
  const onUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
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
