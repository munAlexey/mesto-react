import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';
// import closeBtnFull from '../img/768/close-btn.svg';
// import closeBtn from '../img/close-btn.svg';
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

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  return (
    <div className="App">
      <div className='page'>
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}>
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
      <PopupWithForm name="add" children="Сохранить" title="Новое место" isOpen={isAddPlacePopupOpen}>
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
      <PopupWithForm name="profile-edit" children="Да" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} />
      <PopupWithForm />
      <ImagePopup />
      {/* <div className="pop-up pop-up_delete-card">
        <div className="pop-up__block">
          <button type="button" className="pop-up__close-btn">
            <picture>
              <source 
                srcSet={closeBtnFull}
                media="(min-width: 768px)"/>
              <img src={closeBtn} alt="закрыть"/>
            </picture>
          </button>
          <h2 className="pop-up__title">
            Вы уверены?
          </h2>
          <button type="button" className="pop-up__button pop-up__confirm-btn">Да</button>
        </div>
      </div> 
      <div className="pop-up pop-up_profile">
        <div className="pop-up__block">
          <button type="button" className="pop-up__close-btn">
            <picture>
              <source 
                srcSet={closeBtnFull}
                media="(min-width: 768px)"/>
              <img src="<%=require('')%>" alt="закрыть"/>
            </picture>
          </button>
          <h2 className="pop-up__title">
            Редактировать профиль
          </h2>
          <form className="pop-up__form pop-up__form-profile" name="form-Profile" noValidate>
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
            <button type="submit" className="pop-up__button pop-up__profile-btn">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="pop-up pop-up_add">
        <div className="pop-up__block">
          <button type="button" className="pop-up__close-btn">
            <picture>
              <source 
                srcSet={closeBtnFull}
                media="(min-width: 768px)"/>
              <img src={closeBtn} alt="закрыть"/>
            </picture>
          </button>
          <h2 className="pop-up__title">
            Новое место
          </h2>
          <form className="pop-up__form pop-up__form-add" name="form-Add" noValidate>
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
            <button type="submit" className="pop-up__button pop-up__add-btn" disabled>Создать</button>
          </form>
        </div>
      </div>
      <div className="pop-up pop-up_profile-edit">
        <div className="pop-up__block">
          <button type="button" className="pop-up__close-btn">
            <picture>
              <source 
                srcSet={closeBtnFull}
                media="(min-width: 768px)"/>
              <img src={closeBtn} alt="закрыть"/>
            </picture>
          </button>
          <h2 className="pop-up__title">
            Обновить аватар
          </h2>
          <form className="pop-up__form pop-up__form-add" name="form-EditAva" noValidate>
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
            <button type="submit" className="pop-up__button pop-up__add-btn" disabled>Сохранить</button>
          </form>
        </div>
      </div> */}

      {/* <div className="pop-up pop-up_cards">
        <div className="pop-up__full-cards">
          <button type="button" className="pop-up__close-btn">
            <picture>
              <source 
                srcSet={closeBtnFull}
                media="(min-width: 768px)"/>
              <img src={closeBtn} className="pop-up__card-close-btn" alt="закрыть"/>
            </picture>
          </button>
          <img className="pop-up__card-full-img"/>
          <h3 className="pop-up__card-full-title"></h3>
        </div>
      </div> */}

      <template id="item">
        <li className="card">
          <button className="card__delete">
            <img className="card__delete-img" 
            src="<%=require('../img/delete.svg')%>"
            alt="удалить"/> 
          </button>
          <picture>
            <source 
            media="(min-width: 1280px)"/>
            <source 
            media="(min-width: 768px)"/>
            <img className="card__img"/>
          </picture>
          <div className="card__text-block">
            <h3 className="card__title"></h3>
            <div className="card__like">
              <button type="button" className="card__like-btn">
              </button>
              <span className="card__like-count">0</span>
            </div>
          </div>
        </li>
      </template>
      </div>
    </div>
  );
}

export default App;
