const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const popupSubmit = popup.querySelector('.popup__button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__item_type_name');
let jobInput = formElement.querySelector('.popup__item_type_job');
let titleName = document.querySelector('.profile__title');
let subtitleProfile = document.querySelector('.profile__subtitle');

const toggleOpenPopup = () => {
  popup.classList.toggle('popup_opened');
  nameInput.value = titleName.textContent
  jobInput.value = subtitleProfile.textContent;
}
const handleEditButtonClick = () => {
  toggleOpenPopup();
}
const handleCloseButtonClick = () => {
  toggleOpenPopup();
}
const handleOverlayClick = (event) => {
  if (event.target === event.currentTarget){
    toggleOpenPopup();
  }
}

function formSubmitHandler (evt) {
	evt.preventDefault();

  titleName.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  handleCloseButtonClick();
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
popup.addEventListener('click', handleOverlayClick);