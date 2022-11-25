import { useState, useEffect } from 'react';
import CardsContainer from '../CardsContainer';
import {words} from '../../data/words'
import Triggers from '../Triggers';
import AddPostForm from '../AddPostForm';

function App() {

  const [cards, setCards] = useState(words);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('cards'));
    setCards(res);
  }, [])

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]);
  //localStorage.setItem('cards', JSON.stringify(cards));
  const changeToEng = () => {
    setCards(cards.map(el => {
      el.lang = 'eng';
      return el;
    }))
  }
  const changeToRus = () => {
    setCards(cards.map(el => {
      el.lang = 'rus';
      return el;
    }))
  }

  const changeLang = (id) => {
    setCards(
    //  cards[id-1].lang = cards[id-1].lang == 'eng' ? 'rus' : 'eng'
      cards.map(el => {
        if (el.id === id) {
          el.lang = el.lang === 'rus' ? 'eng' : 'rus'
        }
        return el;
      })
      //setCards([...cards]);
    )
  }

  const addCard = (rus_value, eng_value) => {
    setCards([...cards, {
      id: cards.length + 1,
      eng: eng_value,
      rus: rus_value,
      lang: 'eng'
    }])
  }
  return (
      <div>
        <AddPostForm addCard = {addCard}/>
        <CardsContainer words = {cards} changeLang = {changeLang}/>
        <Triggers changeToEng = {changeToEng} changeToRus = {changeToRus}/>
      </div>
  );
}

export default App;
