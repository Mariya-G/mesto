export default class FormValidator {
  constructor(formleValidationConfig, form) {
    this._formSelector = formleValidationConfig.formSelector;
    this._inputSelector = formleValidationConfig.inputSelector;
    this._submitButtonSelector = formleValidationConfig.submitButtonSelector;
    this._inactiveButtonClass = formleValidationConfig.inactiveButtonClass;
    this._inputErrorClass = formleValidationConfig.inputErrorClass;
    this._errorClass = formleValidationConfig.errorClass;
    this._form = form;
    this._inputList = formleValidationConfig.inputList;
    this._buttonElement = formleValidationConfig.buttonElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _checkInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
  };

  _setSubmitButtonState = (inputList) => {
    if(this._checkInvalidInput(inputList)){
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };

  _setEventListeners = (formElement) => {
    this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = formElement.querySelector(this._submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._setSubmitButtonState(this._inputList,  this._buttonElement);
      });
    });
  };

  removeValidationErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
    this._setSubmitButtonState(this._inputList,  this._buttonElement);
  };

  enableValidation () {
    this._setEventListeners(this._form);
    this.removeValidationErrors(this._form);
  };
}
 FormValidator;