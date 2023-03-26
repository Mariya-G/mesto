import {initialCards, popupImage} from './constants.js';
import Card from './card.js';
import FormValidator from './validate.js';
import {formleValidationConfig} from './constants.js';

const elementsContainer = document.querySelector('.elements');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const buttonCloseEditProfile = popupEdit.querySelector('.popup__close-button');
const formEditProfile = document.querySelector('.popup__form');
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_job');
const titleName = document.querySelector('.profile__title');
const subtitleProfile = document.querySelector('.profile__subtitle');

const popupAdd = document.querySelector('.popup_add');
const buttonAddImage = document.querySelector('.profile__add-button');

const formElementAdd = document.querySelector('.popup__form_add');
const buttonAddClose = popupAdd.querySelector('.popup__close-button_add');
const buttonSubmitAdd = popupAdd.querySelector('.popup__button_add');

const buttonCloseView = document.querySelector('.popup__close-button_view');


export const openPopup = (popup) => { 
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
} 
const closePopup = (popup) => { 
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
} 

function formSubmitEditProfileHandler (evt) {
  evt.preventDefault();

  titleName.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  
  closePopup(popupEdit);
}

const handleOpenEditButtonClick = () => {
  nameInput.value = titleName.textContent;
  jobInput.value = subtitleProfile.textContent;
  openPopup(popupEdit);
}

const handleCloseEditButtonClick = () => {
  closePopup(popupEdit);
}

const handleCloseImageClick = () => {
  closePopup(popupImage);
}

const handleAddOpenButtonClick = () => {
  openPopup(popupAdd);
  formElementAdd.reset();
  validAdd.removeValidationErrors(formElementAdd, buttonSubmitAdd);
}

const handleAddCloseButtonClick = () => {
  closePopup(popupAdd);
}

const handleOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupEdit);
  }
}

const handleAddOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupAdd);
  }
}

const handleImageOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupImage);
  }
}

const closeByEsc = (evt) => { 
  if (evt.key === 'Escape') { 
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  } 
} 

const renderElement = (item) => {
  const card = new Card(item);
  const cardElement = card.generateCard();
  elementsContainer.prepend(cardElement);
}

formElementAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const link = evt.target.link.value;
  const name = evt.target.name.value;
  
  renderElement({name, link});

  evt.target.reset();

  closePopup(popupAdd);
});

initialCards.forEach((item) => {
  renderElement(item);
});

const validAdd = new FormValidator(formleValidationConfig, popupAdd);
validAdd.enableValidation();

const validEdit = new FormValidator(formleValidationConfig, popupEdit);
validEdit.enableValidation();

buttonEditProfile.addEventListener('click', handleOpenEditButtonClick);
buttonCloseEditProfile.addEventListener('click', handleCloseEditButtonClick);
formEditProfile.addEventListener('submit', formSubmitEditProfileHandler);
popupEdit.addEventListener('click', handleOverlayClick);

buttonAddImage.addEventListener('click', handleAddOpenButtonClick);
buttonAddClose.addEventListener('click', handleAddCloseButtonClick);
popupAdd.addEventListener('click', handleAddOverlayClick);

popupImage.addEventListener('click', handleImageOverlayClick);
buttonCloseView.addEventListener('click', handleCloseImageClick);