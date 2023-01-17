import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(cardInfo) {
    setSelectedCard(true);
    setCardInfo({
      name: cardInfo.name,
      link: cardInfo.link
    })
    console.log(cardInfo)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cardInfo, setCardInfo] = React.useState({})

  return (
    <div className="App">
      <div className='page'>
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onOpenFullImg={handleCardClick}
        />
        <Footer />
        <PopupWithForm 
        name="profile" 
        button="Сохранить"
        title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <label className="pop-up__form-label">
            <input 
              type="text" 
              className="pop-up__input" 
              name="name" 
              placeholder="Введите ваше имя" 
              id="pop-up__name" 
              required 
              minLength="2"
              maxLength="40"/>
              <span className="pop-up__span-error pop-up__name-error"></span>
            </label>
            <label className="pop-up__form-label">
            <input 
              type="text" 
              className="pop-up__input" 
              name="profession" 
              placeholder="Введите вашу профессию" 
              id="pop-up__text" 
              required 
              minLength="2" 
              maxLength="200"/>
            <span className="pop-up__span-error pop-up__text-error"></span>
          </label> 
        </PopupWithForm>
        <PopupWithForm 
        name="add" 
        button="Сохранить" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <label className="pop-up__form-label">
            <input 
            type="text" 
            className="pop-up__input" 
            name="title"  
            placeholder="Название" 
            id="pop-up__title" 
            required 
            minLength="2" 
            maxLength="40"/>
            <span className="pop-up__span-error pop-up__title-error"></span>
          </label>
          <label className="pop-up__form-label">
            <input 
            type="url" 
            className="pop-up__input" 
            name="link" 
            placeholder="Ссылка на картинку" 
            id="pop-up__link" 
            required/>
            <span className="pop-up__span-error pop-up__link-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm 
        name="profile-edit" 
        button="Сохранить"
        title="Обновить аватар" isOpen={isEditAvatarPopupOpen}  onClose={closeAllPopups}>
          <label className="pop-up__form-label">
            <input 
            type="url" 
            className="pop-up__input" 
            name="link" 
            placeholder="Ссылка на Аватарку" 
            id="pop-up__link-ava"  
            required/>
            <span className="pop-up__span-error pop-up__link-ava-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm  title="Вы уверены?" button="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} cardInfo={cardInfo} />  
      </div>
    </div>
  );
}

export default App;
