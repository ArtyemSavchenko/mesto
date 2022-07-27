import { Popup } from './Popup.js';
import {
  popupImgPicSelector,
  popupImgCaptionSelector,
} from '../utils/constants.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImgEl = this._popupEl.querySelector(popupImgPicSelector);
    this._popupCaptionEl = this._popupEl.querySelector(popupImgCaptionSelector);
  }

  open(title, src) {
    this._popupImgEl.src = src;
    this._popupImgEl.alt = title;
    this._popupCaptionEl.textContent = title;
    super.open();
  }
}
