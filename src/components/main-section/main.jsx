import Card from '../card/card.jsx';
import Style from './main.module.css';
import { posts } from "../../data/posts.js";

function Main() {

  const publishedPosts = posts.filter((post) => post.published);

  return (
    <main className={Style.main}>
      <div className="container">
        <div className="row">
          <div className="title col-12">
            <h1 className={`${Style.title} col-12`}>
              Titolo pagina
            </h1>
          </div>
        </div>
        <div className="row">
          {publishedPosts.map((post) => {
            return <Card key={post.id} title={post.title} image={post.image} tags={post.tags} />;
          })}
        </div>
      </div>
    </main>

  );
}

export default Main;