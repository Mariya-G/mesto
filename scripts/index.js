const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const popupSubmit = popup.querySelector('.popup__button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__item_type_name');
let jobInput = formElement.querySelector('.popup__item_type_job');
let titleName = document.querySelector('.profile__title');
let subtitleJob = document.querySelector('.profile__subtitle');

const toggleOpenPopup = () => {
  popup.classList.toggle('popup_opened')
}
const handleEditButtonClick = () => {
  toggleOpenPopup();
}
const handleCloseButtonClick = () => {
  toggleOpenPopup();
}
const handleSubmitButtonClick = () => {
  toggleOpenPopup();
}
const handleOverlayClick = (event) => {
  if (event.target === event.currentTarget){
    toggleOpenPopup();
  }
}

function formSubmitHandler (evt) {
	evt.preventDefault();

	nameInput.getAttribute('value');
  jobInput.getAttribute('value');

  titleName.textContent = nameInput.value;
  subtitleJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
popupSubmit.addEventListener('click', handleSubmitButtonClick);
popup.addEventListener('click', handleOverlayClick);


