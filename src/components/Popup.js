import {
  activePopupClass,
  closeBtnClass,
} from '../utils/constants.js';

export class Popup {
  constructor(popupSelector) {
    this._popupEl = document.querySelector(popupSelector);
    this.activePopupClass = activePopupClass;
    this.closeBtnClass = closeBtnClass;
  }

  open() {
    window.addEventListener('keyup', this._handleEscClose.bind(this));
    this._popupEl.classList.add(this.activePopupClass);
  }

  close() {
    window.removeEventListener('keyup', this._handleEscClose.bind(this));
    this._popupEl.classList.remove(this.activePopupClass);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape')
      this.close();
  }

  setEventListeners() {
    this._popupEl.addEventListener('click', evt => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains(this.closeBtnClass))
        this.close();
    });
  }
}
