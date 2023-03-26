import {popupImage, popupImageView, popupNameImage} from './constants.js';
import {openPopup} from './index.js';

class Card {
  
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate = () => {
    const cardElement = document.querySelector('#element-template').content.querySelector('.element').cloneNode(true);

    return cardElement;
  }
  _setEventListeners = () => {
    this._element.querySelector('.element__delete').addEventListener('click', this._handleDelete);
    this._element.querySelector('.element__like').addEventListener('click', this._handleLikeClick);
  }
  
  _handleLikeClick = (evt) => {
    evt.target.classList.toggle('element__like_active');
  }

  _handleDelete = () => {
    this._element.remove();
    this._element = null;
  };

  generateCard = () => {
    this._element = this._getTemplate();
    const titleElement = this._element.querySelector('.element__title');
    const imageElement = this._element.querySelector('.element__image');
    
    titleElement.textContent = this._name;
    imageElement.src = this._link;
    imageElement.alt = this._name;
    
    this._setEventListeners();

    imageElement.addEventListener('click', () => {
      openPopup(popupImage);
      popupImageView.src = this._link;
      popupImageView.alt = this._name;
      popupNameImage.textContent = this._name;
    });

    return this._element;
  }
}

export default Card;