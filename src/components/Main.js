import React, { useEffect } from 'react';
import ProfilePen from '../img/edit-btn.svg';
import AddBtn from '../img/add.svg';
import AvaPen from '../img/edit-btn.svg';
import api from '../utils/API';
import Card from './Card';

function Main(props) {
  const {onEditProfile, onAddPlace, onEditAvatar, onOpenFullImg} = props;

  const [userName, setUserName] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getProfileInfo().then((response) => {
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
    });
  }, []);

  useEffect(() => {
    api.getCardsList().then((response) => {
      setCards(response);
    })
  }, []);
  
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__block">
            <div className="profile__left-side">
              <div className="profile__block-icon">
                <img className="profile__photo" 
                style={{
                  backgroundSize: 'cover',
                  backgroundImage: `url(${userAvatar})`,
                  }}  alt={userName}/>
                <button type="button" className="profile__pen" onClick={onEditAvatar}>
                  <img className="profile__pen-img" src={AvaPen} alt="ручка"/>
                </button>
              </div>
              <div className="profile__text-block">
                <div className="profile__text-container">
                  <h1 className="profile__title">{userName}</h1>
                  <button type="button" onClick={onEditProfile} className="profile__edit-btn">
                    <img className="profile__icon" src={ProfilePen} alt="ручка"/>
                  </button>
                </div>
                <p className="profile__subtitle">{userDescription}</p>
              </div>
              </div>
              <button onClick={onAddPlace} className="button profile__add-button">
                <img className="button__image" src={AddBtn} alt="добавить"/>
              </button>
          </div>
        </section>

        <section className="cards">
          <ul className="cards__list">
            {cards.map(card => {
              return <Card key={card._id} name={card.name} link={card.link} onCardClick={onOpenFullImg} card={card} />
            })}
          </ul>
        </section>
      </main>
  );
}

export default Main;