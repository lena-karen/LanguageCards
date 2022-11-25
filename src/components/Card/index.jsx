import React from 'react'
import s from './index.module.css'

export default function Card({id, eng, rus, lang, changeLang}) {
  const card_lang = lang == 'rus' ? rus : eng
  const card_style = {
      backgroundColor: lang == 'rus' ? 'white' : 'rgb(41, 128, 185)',
      color: lang == 'rus' ? 'rgb(41, 128, 185)' : 'white'
  }
  
  return (
    <div className={s.card} style = {card_style} onClick = {() => changeLang(id)}>
      <p>{card_lang}</p>
    </div>
  )
}
