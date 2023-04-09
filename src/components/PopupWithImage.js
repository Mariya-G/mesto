import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupName = this._popup.querySelector('.popup__name');
    this._popupImage = this._popup.querySelector('.popup__image');
  }
  open(name, link){
    super.open();
    this._popupImage.alt = name;
    this._popupName.textContent = name;
    this._popupImage.src = link;    
  }
}