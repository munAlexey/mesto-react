import React from 'react';
import ProfilePen from '../img/edit-btn.svg';
import AddBtn from '../img/add.svg';
import PhotoAva from '../img/image.jpg';
import AvaPen from '../img/edit-btn.svg';

function Main(props) {
  const {onEditProfile, onAddPlace, onEditAvatar} = props;
  
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__block">
            <div className="profile__left-side">
              <div className="profile__block-icon">
                <img className="profile__photo" src={PhotoAva} alt="Жак-Ив Кусто"/>
                <button type="button" className="profile__pen" onClick={onEditAvatar}>
                  <img className="profile__pen-img" src={AvaPen} alt="ручка"/>
                </button>
              </div>
              <div className="profile__text-block">
                <div className="profile__text-container">
                  <h1 className="profile__title">Жак-Ив Кусто</h1>
                  <button type="button" onClick={onEditProfile} className="profile__edit-btn">
                    <img className="profile__icon" src={ProfilePen} alt="ручка"/>
                  </button>
                </div>
                <p className="profile__subtitle">Исследователь океана</p>
              </div>
              </div>
              <button onClick={onAddPlace} className="button profile__add-button">
                <img className="button__image" src={AddBtn} alt="добавить"/>
              </button>
          </div>
        </section>

        <section className="cards">
          <ul className="cards__list">
          </ul>
        </section>
      </main>
  );
}

export default Main;