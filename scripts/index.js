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
const cardTemplate = document.querySelector('#card').content;
const popups = document.querySelectorAll('.popup');

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-btn'))
      closePopup(popup);
  });
});

const createCard = (title, src) => {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = title;
  const cardImg = card.querySelector('.card__img');
  cardImg.src = src;
  cardImg.alt = title;
  cardImg.addEventListener('click', () => openPopupImg(title, src));
  card.querySelector('.card__like').addEventListener('click', () => likeCard(card));
  card.querySelector('.card__del').addEventListener('click', () => delCard(card));
  return card;
}

const addNewCard = (card) => {
  sectionCards.prepend(card);
}
const delCard = (card) => {
  card.remove();
}

const closePopupHandler = (evt) => {
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
}

const openPopup = (popup) => {
  if (popup.classList.contains('popup_type_form')) {
    clearValidationErrors(popup);
    const inputList = Array.from(popup.querySelectorAll('.popup__input'));
    const submitBtnEl = popup.querySelector('.popup__submit-btn');
    toggleBtnSubmitState(inputList, submitBtnEl);
  }
  window.addEventListener('keyup', closePopupHandler);
  popup.classList.add('popup_active');
}
const closePopup = (popup) => {
  window.removeEventListener('keyup', closePopupHandler);
  popup.classList.remove('popup_active');
}

btnOpenProfile.addEventListener('click', () => {
  popupProfileName.value = profileName.textContent;
  popupProfileAbout.value = profileAbout.textContent;
  openPopup(popupProfile);
});

popupProfile.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  closePopup(popupProfile);
});

btnAddCard.addEventListener('click', () => {
  popupCardName.value = '';
  popupCardUrl.value = '';
  openPopup(popupAddCard);
});

popupAddCard.addEventListener('submit', evt => {
  evt.preventDefault();
  const card = createCard(popupCardName.value, popupCardUrl.value);
  addNewCard(card);
  closePopup(popupAddCard);
});

const likeCard = (card) => {
  card.querySelector('.card__like').classList.toggle('card__like_active');
}

const openPopupImg = (title, src) => {
  popupImgPic.src = src;
  popupImgPic.alt = title;
  popupImgCaption.textContent = title;
  openPopup(popupImg);
}

samplesCards.forEach(el => addNewCard(createCard(el.title, el.src)));
