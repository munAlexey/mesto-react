import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { isOpen, onClose } = props;
  const inputNameRef = React.useRef();
  const inputLinkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: inputNameRef.current.value,
      link: inputLinkRef.current.value,
    });
  }

  React.useEffect(() => {
    inputNameRef.current.value = "";
    inputLinkRef.current.value = "";
  }, [isOpen]);
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="add"
      button="Сохранить"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="pop-up__form-label">
        <input
          ref={inputNameRef}
          type="text"
          className="pop-up__input"
          name="title"
          placeholder="Название"
          id="pop-up__title"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="pop-up__span-error pop-up__title-error"></span>
      </label>
      <label className="pop-up__form-label">
        <input
          ref={inputLinkRef}
          type="url"
          className="pop-up__input"
          name="link"
          placeholder="Ссылка на картинку"
          id="pop-up__link"
          required
        />
        <span className="pop-up__span-error pop-up__link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
