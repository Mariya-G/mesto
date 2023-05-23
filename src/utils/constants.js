export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const popupImage = document.querySelector('.popup_view');
export const popupImageView = popupImage.querySelector('.popup__image');
export const popupNameImage = popupImage.querySelector('.popup__name');
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const popupEdit = document.querySelector('.popup_edit');
export const buttonCloseEditProfile = popupEdit.querySelector('.popup__close-button_edit');
export const formEditProfile = document.querySelector('.popup__form');
export const nameInput = formEditProfile.querySelector('.popup__input_type_name');
export const jobInput = formEditProfile.querySelector('.popup__input_type_job');
export const titleName = document.querySelector('.profile__title');
export const subtitleProfile = document.querySelector('.profile__subtitle');
export const popupAdd = document.querySelector('.popup_add');
export const buttonAddImage = document.querySelector('.profile__add-button');
export const buttonAddClose = popupAdd.querySelector('.popup__close-button_add');
export const buttonCloseView = document.querySelector('.popup__close-button_view');

export const formleValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};