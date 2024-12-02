/* eslint-disable react/prop-types */
import Style from './card.module.css';
import Btn from '../btn/Card-btn.jsx';
import placeholder from '../../assets/placeholder.png';

function Card({ title = '', image = '', tags = [] }) {
  return (
    <div className="col-4">
      <div className={Style.card}>
        <img className={Style.card__img} src={image || placeholder} alt="" />
        <div className={Style.card__body}>
          <h3 className={Style.card__title}>{title}</h3>
          {tags ? (
            <ul className={Style.banners}>
              {tags.map((tag, index) => {
                return (
                  <li className={`${Style.tag_banner} ${Style[`${tag}`]}`} key={index}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          ) : null}

          <p className={Style.card__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro. Nesciunt corporis doloremque nihil voluptate id incidunt praesentium illo quibusdam!</p>
          <Btn />
        </div>
      </div>
    </div>
  );
}

export default Card;
