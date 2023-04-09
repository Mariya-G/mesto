import './index.css';
import {initialCards, formleValidationConfig, buttonEditProfile, popupEdit, 
buttonCloseEditProfile, nameInput, jobInput, titleName, subtitleProfile, 
popupAdd, buttonAddImage, buttonAddClose, buttonCloseView
} from '../utils/constants.js';
import Card from '../components/card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';

const validAdd = new FormValidator(formleValidationConfig, popupAdd);
const validEdit = new FormValidator(formleValidationConfig, popupEdit);

const handleCardClick = (name, link) => {
  viewImagePopup.open(name, link);
}

const handleCloseZoomImage = () => {
  viewImagePopup.close();
}

const handleCloseEditButtonClick = () => {
  formPopupEdit.close();
}

const handleAddCloseButtonClick = () => {
  formPopupAdd.close();
}

const handleAddOpenButtonClick = () => {
  formPopupAdd.open();
  validAdd.enableValidation();
}

const handleOpenEditButtonClick = () => {
  formPopupEdit.open();
  nameInput.value = titleName.textContent;
  jobInput.value = subtitleProfile.textContent;
  validEdit.removeValidationErrors();
}

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#element-template', handleCardClick);
    const cardElement = card.generateCard(); 
    cardsList.addItem(cardElement);
  },
}, '.elements');
cardsList.renderItems();

const createCard = (data, templateSelector) => {
  const card = new Card(data, templateSelector, handleCardClick);
  return card.generateCard();
};

const viewImagePopup = new PopupWithImage('.popup_view');

const formPopupAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (name, link) => {
    cardsList.addItem(createCard(name, link, '#element-template'));
    formPopupAdd.close();
  }
});

const userInfo = new UserInfo({
  usernameSelector: '.profile__title',
  jobSelector: '.profile__subtitle'
});

const formPopupEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (username, job) => {
    userInfo.setUserInfo(username, job)
    titleName.textContent = nameInput.value;
    subtitleProfile.textContent = jobInput.value;
    formPopupEdit.close();
  },
});

viewImagePopup.setEventListeners();
formPopupAdd.setEventListeners();
formPopupEdit.setEventListeners();

validEdit.enableValidation();

buttonAddImage.addEventListener('click', handleAddOpenButtonClick);
buttonAddClose.addEventListener('click', handleAddCloseButtonClick);
buttonEditProfile.addEventListener('click', handleOpenEditButtonClick);
buttonCloseEditProfile.addEventListener('click', handleCloseEditButtonClick);
buttonCloseView.addEventListener('click', handleCloseZoomImage);