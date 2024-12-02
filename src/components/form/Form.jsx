/* eslint-disable react/prop-types */
import style from './Form.module.css';
import { useState } from 'react';

export default function Form({ add }) {
  const [titleInput, setTitleInput] = useState('');

  function newTitle(e) {
    setTitleInput(e.target.value);
    // console.log(titleInput);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className={style.form}>
      <h3>Aggiungi un nuovo post</h3>
      <label className={style.label} htmlFor="new-title">
        <span className={style.input_title}>Titolo:</span>
        <input onChange={newTitle} className={style.input} name="new-title" type="text" placeholder="Inserisci il nuovo titolo" value={titleInput} />
      </label>
      <div className="btn_wrap">
        <button onClick={() => add(titleInput)} className={style.add_btn}>
          Add
        </button>
      </div>
    </form>
  );
}
