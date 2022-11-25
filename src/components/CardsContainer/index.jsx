import React from 'react'
import Card from '../Card'
import s from './index.module.css'

export default function CardsContainer({words, changeLang}) {
  return (
    <div className = {s.cards_container}>
        {
            words.map(el => <Card key={el.id} {...el} changeLang = {changeLang}/>)
        }
    </div>
  )
}
