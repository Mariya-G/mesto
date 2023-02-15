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

const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__item_type_name');
const jobInput = formElement.querySelector('.popup__item_type_job');
const titleName = document.querySelector('.profile__title');
const subtitleProfile = document.querySelector('.profile__subtitle');

const popupAdd = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile__add-button');
const elementsContainer = document.querySelector('.elements');
const formElementAdd = document.querySelector('.popup__form_add');
const elementTemplate = document.querySelector('#element-template');
const closeButtonAdd = popupAdd.querySelector('.popup__close-button_add');

const popupImage = document.querySelector('.popup_view');
const popupImageView = popupImage.querySelector('.popup__image_large');
const popupNameImage = popupImage.querySelector('.popup__name');
const closeButtonView = popupImage.querySelector('.popup__close-button_view');
const cardElement = elementTemplate.querySelector('.element');

function closePopup () {
  popup.classList.remove('popup_opened');
}
function openPopup () {
  popup.classList.add('popup_opened');
}
function closePopupAdd () {
  popupAdd.classList.remove('popup_opened');
}
function openPopupAdd () {
  popupAdd.classList.add('popup_opened');
}
function openImagePopup() {
  popupImage.classList.add('popup_opened');
}
function closeImagePopup () {
  popupImage.classList.remove('popup_opened');
}
function handleOpenEditProfilePopup () {
  nameInput.value = titleName.textContent;
  jobInput.value = subtitleProfile.textContent;

  openPopup();
}
function formSubmitHandler (evt) {
	evt.preventDefault();

  titleName.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  
  closePopup();
}
function handleLikeClick (evt) {
  evt.target.classList.toggle('element__like_active');
}

elementsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__delete')) {
    handleDelete(evt);
  }
});

const handleDelete = (evt) => {
  evt.target.closest('.element').remove();
};

const getAddElement = (item) => {
  const cardElement = elementTemplate.content.cloneNode(true);
  const titleElement = cardElement.querySelector('.element__title');
  const imageElement = cardElement.querySelector('.element__image');
  const deleteButton = cardElement.querySelector('.element__delete');
  const elementLike = cardElement.querySelector('.element__like');
  
  
  titleElement.textContent = item.name;
  imageElement.src = item.link;
  imageElement.alt = titleElement.textContent;

  deleteButton.addEventListener('click', handleDelete);
  elementLike.addEventListener('click', handleLikeClick);
  imageElement.addEventListener('click', function () {
    openImagePopup();
    popupImageView.src = imageElement.src;
    popupImageView.alt = titleElement.textContent;
    popupNameImage.textContent = titleElement.textContent;
  });
  return cardElement;
}

const renderElement = (wrap, item) => {
  wrap.prepend(getAddElement(item));
}

initialCards.forEach((item) => {
  renderElement(elementsContainer, item);
});

formElementAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const link = evt.target.link.value;
  const name = evt.target.name.value;
  
  renderElement(elementsContainer, {name, link});

  evt.target.link.value = '';
  evt.target.name.value = '';

  closePopupAdd();
});

const handleOpenButtonClick = () => {
  openPopup();
}
const handleCloseButtonClick = () => {
  closePopup();
}
const handleOpenImageClick = () => {
  openImagePopup();
}
const handleCloseImageClick = () => {
  closeImagePopup();
}
const handleAddOpenButtonClick = () => {
  openPopupAdd();
}
const handleAddCloseButtonClick = () => {
  closePopupAdd();
}
const handleOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}
const handleAddOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closePopupAdd();
  }
}
const handleImageOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closeImagePopup();
  }
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', handleOpenButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
popup.addEventListener('click', handleOverlayClick);

addButton.addEventListener('click', handleAddOpenButtonClick);
closeButtonAdd.addEventListener('click', handleAddCloseButtonClick);
popupAdd.addEventListener('click', handleAddOverlayClick);

popupImage.addEventListener('click', handleImageOverlayClick);
closeButtonView.addEventListener('click', handleCloseImageClick);