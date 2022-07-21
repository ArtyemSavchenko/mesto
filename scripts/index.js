const btnOpenProfile = document.querySelector('.profile__edit-btn');
const popupProfile = document.querySelector('.popup_type_profile-edit');
const popupProfileName = popupProfile.querySelector('.popup__input_type_name');
const popupProfileAbout = popupProfile.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const btnAddCard = document.querySelector('.profile__add-card');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupCardName = document.querySelector('.popup__input_type_card-name');
const popupCardUrl = document.querySelector('.popup__input_type_card-url');
const popupImg = document.querySelector('.popup_type_image');
const popupImgPic = popupImg.querySelector('.card-image__img');
const popupImgCaption = popupImg.querySelector('.card-image__caption');
const sectionCards = document.querySelector('.cards');
const popups = document.querySelectorAll('.popup');

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-btn'))
    closePopup(popup);
  });
});

class Card {
  constructor(title, imgSrc, isLike, templateSelector, callbackOpenPopup) {
    this._title = title;
    this._imgSrc = imgSrc;
    this._like = isLike;
    this._templateSelector = templateSelector;
    this._callBackOpenPopup = callbackOpenPopup;
    this._cardNames = {
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
    const likeEl = this._card.querySelector(this._cardNames.likeSelector);
    this._like ?
      likeEl.classList.add(this._cardNames.likeActiveClass)
      : likeEl.classList.remove(this._cardNames.likeActiveClass);
  }

  _generateCard() {
    this._card = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(this._cardNames.cardSelector)
      .cloneNode(true);
    this._card.querySelector(this._cardNames.titleSelector).textContent = this._title;
    const cardImg = this._card.querySelector(this._cardNames.imgSelector);
    cardImg.src = this._imgSrc;
    cardImg.alt = this._title;
    this._renderLike();
  }

  _delCard() {
    this._card.remove();
  }

  _setEventsListeners () {
    this._card.querySelector(this._cardNames.likeSelector)
    .addEventListener('click', () => this._likeCard());
    this._card.querySelector(this._cardNames.delBtnSelector)
    .addEventListener('click', () => this._delCard());
    this._card.querySelector(this._cardNames.imgSelector)
    .addEventListener('click', () => this._callBackOpenPopup(this._title, this._imgSrc));
  }

  getCard() { return this._card; }
}

const addNewCard = card => {
  sectionCards.prepend(card);
}

const closePopupHandler = evt => {
  if (evt.key === 'Escape') {
    for (let i = 0; i < popups.length; i++) {
      if (popups[i].classList.contains('popup_active')) {
        closePopup(popups[i]);
        return;
      }
    }
  }
}

const clearValidationErrors = formEl => {
  const inputList = Array.from(formEl.querySelectorAll('.popup__input'));
  inputList.forEach(inputEl => hideInputError(formEl, inputEl, 'popup__input_type_error', 'popup__input-error_active'));
  const submitBtnEl = formEl.querySelector('.popup__submit-btn');
  toggleBtnSubmitState(inputList, submitBtnEl);
}

const openPopup = popup => {
  window.addEventListener('keyup', closePopupHandler);
  popup.classList.add('popup_active');
}
const closePopup = popup => {
  window.removeEventListener('keyup', closePopupHandler);
  popup.classList.remove('popup_active');
}

btnOpenProfile.addEventListener('click', () => {
  popupProfileName.value = profileName.textContent;
  popupProfileAbout.value = profileAbout.textContent;
  clearValidationErrors(popupProfile);
  openPopup(popupProfile);
});

popupProfile.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  closePopup(popupProfile);
});

btnAddCard.addEventListener('click', () => {
  popupAddCard.querySelector('.popup__form').reset();
  clearValidationErrors(popupAddCard);
  openPopup(popupAddCard);
});

popupAddCard.addEventListener('submit', evt => {
  evt.preventDefault();
  const newCard = new Card(popupCardName.value, popupCardUrl.value, false, '#card', openPopupImg);
  addNewCard(newCard.getCard());
  closePopup(popupAddCard);
});

const openPopupImg = (title, src) => {
  popupImgPic.src = src;
  popupImgPic.alt = title;
  popupImgCaption.textContent = title;
  openPopup(popupImg);
}

samplesCards.forEach(el => {
  const newCard = new Card(el.title, el.src, el.isLike, '#card', openPopupImg);
  addNewCard(newCard.getCard());
});
