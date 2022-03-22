import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class CardRepository {
  _db = null;

  constructor(app) {
    this._db = getDatabase(app);
  }

  syncCards(userId, onUpdate) {
    const query = ref(this._db, `${userId}/cards`);

    onValue(query, snapshot => {
      const value = snapshot.val();

      value && onUpdate(value);
    });

    return () => off(query);
  }

  saveCard(userId, card) {
    set(ref(this._db, `${userId}/cards/${card.id}`), card).then(r => {
      console.log(r);
    });
  }

  removeCard(userId, cardId) {
    remove(ref(this._db, `${userId}/cards/${cardId}`)).then(r => {});
  }
}

export default CardRepository;
