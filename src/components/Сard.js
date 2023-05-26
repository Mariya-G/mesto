export default class Card {
  constructor({data, templateSelector, userId, handleCardClick, handleDeleteIconClick, handleSetLike, handleRemoveLike}) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._userId = userId;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._likes = data.likes;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
  }
  
  _getTemplate = () => {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

    return cardElement;
  }

   // Удаление карточки
   deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
    // слушатель кнопки удаления карточки
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteIconClick(this._cardId);
    })
    // слушатель кнопки лайк
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('element__like_active')) {
        this._handleRemoveLike(this._cardId);
      } else {
        this._handleSetLike(this._cardId);
      }
    })
 }

  generateCard(){
    this._element = this._getTemplate();
    this._title = this._element.querySelector('.element__title');
    this._image = this._element.querySelector('.element__image');
    this._likesNumber = this._element.querySelector('.element__likes-number');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._likeButton = this._element.querySelector('.element__like');

    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._hasDeleteBtn();
    this._isCardLiked();
    this._likesNumber.textContent = this._likes.length;

    this._setEventListeners();

    return this._element;
  }
  
  //Проверка, стоит ли лайк на карточке
  _isCardLiked() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._likeButton.classList.add('element__like_active');
    }
  }

  //поставить/удалить лайк, изменение количества лайков
  handleLikeCard(data) {
    this._likes = data.likes;
    this._likesNumber.textContent = this._likes.length;
    this._likeButton.classList.toggle('element__like_active');
  }

  //проверяем владельца карточки и убираем кнопку Delete
  _hasDeleteBtn() {
    if (this._userId !== this._cardOwnerId) {
      this._deleteButton.remove();
    }
  }
}