import React from 'react'
import s from './index.module.css'

export default function AddPostForm({addCard}) {
    const formSubmit = (event) => {
        event.preventDefault();
        const {russian, english} = event.target;
        addCard(russian.value, english.value);
        russian.value = '';
        english.value = '';
    }
  return (
    <div>
        <form onSubmit = {formSubmit} className = {s.add_form}>
            <input type="text" placeholder='Russian' name = 'russian'/>
            <input type="text" placeholder='English' name = 'english'/>
            <button>Add</button>
        </form>
    </div>
  )
}
