export class Popup {
  constructor(popupSelector) {
    this._popupEl = document.querySelector(popupSelector);
    this.activePopupClass = 'popup_active';
    this.closeBtnClass = 'popup__close-btn';
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    document.addEventListener('keyup', this._handleEscClose);
    this._popupEl.classList.add(this.activePopupClass);
  }

  close() {
    document.removeEventListener('keyup', this._handleEscClose);
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
