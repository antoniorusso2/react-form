import Card from '../card/Card.jsx';
import style from './main.module.css';
import { posts } from '../../data/posts.js';
import { useState } from 'react';

function Main() {
  const [titleInput, setTitleInput] = useState('');
  const [newPosts, setNewPosts] = useState(posts);
  const [addedList, setAddedList] = useState([]);

  const publishedPosts = newPosts.filter((post) => post.published);

  //id da inserire ad ogni elemento aggiunto
  let nextId = newPosts.length + 1;

  function newTitle(e) {
    setTitleInput(e.target.value);
    // console.log(titleInput);
  }

  function addNewElement() {
    const newElement = {
      id: nextId,
      title: titleInput,
      published: true,
    };

    setNewPosts([...newPosts, newElement]);

    setAddedList([...addedList, newElement]);
  }

  function deletePost(id) {
    setNewPosts(newPosts.filter((post) => post.id !== id));
    setAddedList(addedList.filter((post) => post.id !== id));
  }

  console.log(newPosts);

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
          <div className="col-12">
            <form onSubmit={(e) => e.preventDefault()} className={style.form}>
              <h3>Aggiungi un nuovo post</h3>
              <label className={style.label} htmlFor="new-title">
                <span className={style.input_title}>Titolo:</span>
                <input onChange={newTitle} className={style.input} name="new-title" type="text" placeholder="Inserisci il nuovo titolo" value={titleInput} />
              </label>
              <div className="btn_wrap">
                {/* add */}
                <button onClick={addNewElement} className={style.add_btn}>
                  Add
                </button>
              </div>

              <div className="col-12">
                <ul className={style.added_list}>
                  {addedList &&
                    addedList.map((el) => (
                      <li key={el.id} className={style.new_el}>
                        {' '}
                        <p>
                          <strong>Hai aggiunto:</strong> {el.title}
                        </p>
                        {/* delete */}
                        <button onClick={() => deletePost(el.id)} className={style.delete_btn}>
                          Delete
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
