const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__item_type_name');
let jobInput = formElement.querySelector('.popup__item_type_job');
let titleName = document.querySelector('.profile__title');
let subtitleProfile = document.querySelector('.profile__subtitle');

function closePopup () {
  popup.classList.remove('popup_opened');
}
function openPopup () {
  popup.classList.add('popup_opened');
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

const handleOpenButtonClick = () => {
  openPopup();
}
const handleCloseButtonClick = () => {
  closePopup();
}
const handleOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', handleOpenButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
popup.addEventListener('click', handleOverlayClick);