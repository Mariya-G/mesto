const initialCards = [
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
const elementsContainer = document.querySelector('.elements');
const formElementAdd = document.querySelector('.popup__form_add');
const elementTemplate = document.querySelector('#element-template');
const buttonAddClose = popupAdd.querySelector('.popup__close-button_add');

const titleInput = formElementAdd.querySelector('.popup__input_type_title');
const linkInput = formElementAdd.querySelector('.popup__input_type_link');
//const inputErrorAdd = formElementAdd.querySelector(`.${allInputElementAdd.id}-error`);



const popupImage = document.querySelector('.popup_view');
const popupImageView = popupImage.querySelector('.popup__image');
const popupNameImage = popupImage.querySelector('.popup__name');
const buttonCloseView = popupImage.querySelector('.popup__close-button_view');
const cardElement = elementTemplate.querySelector('.element');

const openPopup = (popup) => { 
  popup.classList.add('popup_opened'); 
} 
const closePopup = (popup) => { 
  popup.classList.remove('popup_opened'); 
} 

function handleOpenEditProfilePopup () {
  nameInput.value = titleName.textContent;
  jobInput.value = subtitleProfile.textContent;

  openPopup(popupEdit);
}
function formSubmitEditProfileHandler (evt) {
  evt.preventDefault();

  titleName.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  
  closePopup(popupEdit);
}
function handleLikeClick (evt) {
  evt.target.classList.toggle('element__like_active');
}

const handleDelete = (evt) => {
  evt.target.closest('.element').remove();
};

const getAddElement = (cardData) => {
  const cardElement = elementTemplate.content.cloneNode(true);
  const titleElement = cardElement.querySelector('.element__title');
  const imageElement = cardElement.querySelector('.element__image');
  const buttonDelete= cardElement.querySelector('.element__delete');
  const elementLike = cardElement.querySelector('.element__like');
  
  titleElement.textContent = cardData.name;
  imageElement.src = cardData.link;
  imageElement.alt = cardData.name;

  buttonDelete.addEventListener('click', handleDelete);
  elementLike.addEventListener('click', handleLikeClick);
  imageElement.addEventListener('click', function () {
    openPopup(popupImage);
    popupImageView.src = cardData.link;
    popupImageView.alt = cardData.name;
    popupNameImage.textContent = cardData.name;
  });
  return cardElement;
}

const renderElement = (wrap, cardData) => {
  wrap.prepend(getAddElement(cardData));
}

initialCards.forEach((cardData) => {
  renderElement(elementsContainer, cardData);
});

formElementAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const link = evt.target.link.value;
  const name = evt.target.name.value;
  
  renderElement(elementsContainer, {name, link});

  evt.target.link.value = '';
  evt.target.name.value = '';

  closePopup(popupAdd);
});

const handleOpenEditButtonClick = () => {
  openPopup(popupEdit);
}
const handleCloseEditButtonClick = () => {
  closePopup(popupEdit);
}
const handleOpenImageClick = () => {
  openPopup(popupImage);
}
const handleCloseImageClick = () => {
  closePopup(popupImage);
}
const handleAddOpenButtonClick = () => {
  openPopup(popupAdd);
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
const keyAddHandler = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(popupAdd);
  }
}
const keyEditHandler = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(popupEdit);
  }
}
const keyImageHandler = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(popupImage);
  }
}
buttonEditProfile.addEventListener('click', handleOpenEditButtonClick);
buttonCloseEditProfile.addEventListener('click', handleCloseEditButtonClick);
formEditProfile.addEventListener('submit', formSubmitEditProfileHandler);
popupEdit.addEventListener('click', handleOverlayClick);

buttonAddImage.addEventListener('click', handleAddOpenButtonClick);
buttonAddClose.addEventListener('click', handleAddCloseButtonClick);
popupAdd.addEventListener('click', handleAddOverlayClick);

popupImage.addEventListener('click', handleImageOverlayClick);
buttonCloseView.addEventListener('click', handleCloseImageClick);

document.addEventListener('keydown', keyAddHandler);
document.addEventListener('keydown', keyEditHandler);
document.addEventListener('keydown', keyImageHandler);