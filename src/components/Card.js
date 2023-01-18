import React from "react";
import BusketDeleteBtn from '../img/delete.svg';

export default function Card(props) {

  console.log(props)
  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <li className="card">
      <button className="card__delete">
        <img className="card__delete-img" 
        src={BusketDeleteBtn}
        alt="удалить"/> 
      </button>
      <picture>
        <source 
        media="(min-width: 1280px)"/>
        <source 
        media="(min-width: 768px)"/>
        <img className="card__img" src={props.link} alt={props.name} onClick={handleClick} />
      </picture>
      <div className="card__text-block">
        <h3 className="card__title">{props.name}</h3>
        <div className="card__like">
          <button type="button" className="card__like-btn" />
          <span className="card__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}