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

    this._generateCard();
    this._setEventsListeners();
  }

  _likeCard() {
    this._like = !this._like;
    this._renderLike();
  }

  _renderLike() {
    const likeEl = this._card.querySelector(this._settings.likeSelector);
    this._like ?
      likeEl.classList.add(this._settings.likeActiveClass)
      : likeEl.classList.remove(this._settings.likeActiveClass);
  }

  _generateCard() {
    this._card = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(this._settings.cardSelector)
      .cloneNode(true);
    this._card.querySelector(this._settings.titleSelector).textContent = this._title;
    const cardImg = this._card.querySelector(this._settings.imgSelector);
    cardImg.src = this._imgSrc;
    cardImg.alt = this._title;
    this._renderLike();
  }

  _delCard() {
    this._card.remove();
  }

  _setEventsListeners () {
    this._card.querySelector(this._settings.likeSelector)
    .addEventListener('click', () => this._likeCard());
    this._card.querySelector(this._settings.delBtnSelector)
    .addEventListener('click', () => this._delCard());
    this._card.querySelector(this._settings.imgSelector)
    .addEventListener('click', () => this._callBackOpenPopup(this._title, this._imgSrc));
  }

  getCard() { return this._card; }
}
