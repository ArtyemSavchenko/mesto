import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImgEl = this._popupEl.querySelector('.card-image__img');
    this._popupCaptionEl = this._popupEl.querySelector('.card-image__caption');
  }

  open(title, src) {
    this._popupImgEl.src = src;
    this._popupImgEl.alt = title;
    this._popupCaptionEl.textContent = title;
    super.open();
  }
}
