export const formleValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

class FormValidator {
  constructor(formleValidationConfig, form) {
    this._formSelector = formleValidationConfig.formSelector;
    this._inputSelector = formleValidationConfig.inputSelector;
    this._submitButtonSelector = formleValidationConfig.submitButtonSelector;
    this._inactiveButtonClass = formleValidationConfig.inactiveButtonClass;
    this._inputErrorClass = formleValidationConfig.inputErrorClass;
    this._errorClass = formleValidationConfig.errorClass;
    this._form = form;
  }

  _showInputError = (input, errorElement) => {
    input.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideInputErrors = (input, errorElement) => {
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _removeValidationErrors = (formElementAdd) => {
    const inputList = Array.from(formElementAdd.querySelectorAll('.popup__input'));
    inputList.forEach(function (input) {
      const inputId = input.id;
      const errorElement = formElementAdd.querySelector(`#${inputId}-error`);
      input.classList.remove('popup__input_type_error');
      errorElement.classList.remove('popup__input-error_visible');
      errorElement.textContent = '';
    });
  };

  _enableFormValidation(form) {
      form.addEventListener('submit', this._disableSubmit);
      form.addEventListener('input', () => {
        this._toggleButton(form);
      });
      this._addInputListners(form);
      this._toggleButton(form);
  };

  _handleFormInput(event) {
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);
    if (input.validity.valid){
      this._hideInputErrors(input, errorElement);
    } else {
      this._showInputError(input, errorElement);
    }
  };

  _addInputListners(form) {
    const inputList = Array.from(form.querySelectorAll(this._inputSelector));

    inputList.forEach((item) => {
      item.addEventListener('input', (event) => {
        this._handleFormInput(event)
      });
    });
  };
  
  _disableSubmitButton = (button) => {
    button.setAttribute('disabled', true);
    button.classList.add(this._inactiveButtonClass);
  };

  _toggleButton(form) {
    const buttonSubmit = form.querySelector(this._submitButtonSelector);
    const isFormValid = form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(this._inactiveButtonClass, !isFormValid);
  };

  _disableSubmit (event) {
    event.preventDefault();
  };
  
  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((form) => {
      this._enableFormValidation(form);
    });
  };

  getCheckValidation = (formElementAdd, button) => {
    this._removeValidationErrors(formElementAdd);
    this._disableSubmitButton(button);
  }
}
export default FormValidator;