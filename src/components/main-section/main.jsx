import Card from '../card/Card.jsx';
import style from './main.module.css';
import { posts } from '../../data/posts.js';
import { useState } from 'react';

function Main() {
  const [titleInput, setTitleInput] = useState('');
  const [newPosts, setNewPosts] = useState(posts);

  const publishedPosts = newPosts.filter((post) => post.published);

  function newTitle(e) {
    setTitleInput(e.target.value);
    // console.log(titleInput);
  }

  // console.log(titleInput);
  return (
    <main className={style.main}>
      <div className="container">
        <div className="row">
          <div className="title col-12">
            <h1 className={`${style.title} col-12`}>Titolo pagina</h1>
          </div>
        </div>
        <div className="row">
          {publishedPosts.map((post) => {
            return <Card key={post.id} title={post.title} image={post.image} tags={post.tags} />;
          })}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={(e) => e.preventDefault()} className={style.form}>
              <h3>Aggiungi un nuovo post</h3>
              <label className={style.label} htmlFor="new-title">
                <span className={style.input_title}>Titolo:</span>
                <input onChange={newTitle} className={style.input} name="new-title" type="text" placeholder="Inserisci il nuovo titolo" value={titleInput} />
              </label>
              <button className={style.add_btn}>Add</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
