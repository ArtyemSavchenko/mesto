export class Card {
  constructor(title, imgSrc, isLike, templateSelector, callbackOpenPopup) {
    this._title = title;
    this._imgSrc = imgSrc;
    this._like = isLike;
    this._templateSelector = templateSelector;
    this._callBackOpenPopup = callbackOpenPopup;

    this._settings = {
      cardSelector: '.card',
      likeSelector: '.card__like',
      likeActiveClass: 'card__like_active',
      titleSelector: '.card__title',
      imgSelector: '.card__img',
      delBtnSelector: '.card__del'
    }

    this._card = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(this._settings.cardSelector)
      .cloneNode(true);
    this._titleEl = this._card.querySelector(this._settings.titleSelector);
    this._imgEl = this._card.querySelector(this._settings.imgSelector);
    this._likeBtnEl = this._card.querySelector(this._settings.likeSelector);
    this._delBtnEl = this._card.querySelector(this._settings.delBtnSelector);
  }

  _likeCard() {
    this._like = !this._like;
    this._renderLike();
  }

  _renderLike() {
    this._like ?
      this._likeBtnEl.classList.add(this._settings.likeActiveClass)
      : this._likeBtnEl.classList.remove(this._settings.likeActiveClass);
  }

  _generateCard() {
    this._titleEl.textContent = this._title;
    this._imgEl.src = this._imgSrc;
    this._imgEl.alt = this._title;
    this._renderLike();
  }

  _delCard() {
    this._card.remove();
  }

  _setEventsListeners () {
    this._likeBtnEl.addEventListener('click', () => this._likeCard());
    this._delBtnEl.addEventListener('click', () => this._delCard());
    this._imgEl.addEventListener('click', () => this._callBackOpenPopup(this._title, this._imgSrc));
  }

  getCard() {
    this._generateCard();
    this._setEventsListeners();
    return this._card;
  }
}
