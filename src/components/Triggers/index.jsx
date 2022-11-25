import React from 'react'
import s from './index.module.css'

export default function Triggers({changeToEng, changeToRus}) {
  return (
    <div className = {s.triggers}>
        <button onClick={changeToEng}>Eng</button>
        <button onClick={changeToRus}>Rus</button>
    </div>
  )
}
