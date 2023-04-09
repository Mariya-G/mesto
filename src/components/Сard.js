export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  
  _getTemplate = () => {
    const cardElement = document.querySelector('#element-template').content.querySelector('.element').cloneNode(true);

    return cardElement;
  }
  _setEventListeners = () => {
    this._element.querySelector('.element__delete').addEventListener('click', this._handleDelete);
    this._element.querySelector('.element__like').addEventListener('click', this._handleLikeClick);
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
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
    this._title = this._element.querySelector('.element__title');
    this._image = this._element.querySelector('.element__image');
    
    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    
    this._setEventListeners();

    return this._element;
  }
}