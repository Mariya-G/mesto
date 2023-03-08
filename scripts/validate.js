const formleValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

const showInputError = (input, errorElement, config) => {
  input.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = input.validationMessage;
}

const hideInputErrors = (input, errorElement, config) => {
  input.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
}

const disableSubmitButton = (button) => {
  button.setAttribute('disabled', true);
  button.classList.add('popup__button_disabled');
};

const removeValidationErrors = (formElementAdd) => {
  const inputList = Array.from(formElementAdd.querySelectorAll('.popup__input'));
  inputList.forEach(function (input) {
    const inputId = input.id;
    const errorElement = formElementAdd.querySelector(`#${inputId}-error`);
    input.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_visible');
    errorElement.textContent = '';
  });
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function (form) {
    enableFormValidation(form, config);
  });
};

function enableFormValidation(form, config) {
    form.addEventListener('submit', disableSubmit);
    form.addEventListener('input', () => {
      toggleButton(form, config);
    });
    addInputListners(form, config);
    toggleButton(form, config);
};

function handleFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);
  if (input.validity.valid){
    hideInputErrors(input, errorElement, config);
  } else {
    showInputError(input, errorElement, config);
  }
};

function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
};

function addInputListners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  inputList.forEach(function (item) {
    item.addEventListener('input', (event) => {
      handleFormInput(event, config)
    });
  });
};

function disableSubmit (event) {
  event.preventDefault();
};

enableValidation(formleValidationConfig);