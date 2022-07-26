import { FormValidator, validationSettings } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { samplesCards } from '../utils/cards.js';

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
const formAddCard = popupAddCard.querySelector('.popup__form');

popups.forEach(popup => {
  popup.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-btn'))
      closePopup(popup);
  });
});

const popupProfileValidator = new FormValidator(popupProfile.querySelector('.popup__form'), validationSettings);
popupProfileValidator.enableValidation();
const popupAddCardValidator = new FormValidator(popupAddCard.querySelector('.popup__form'), validationSettings);
popupAddCardValidator.enableValidation();

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
  popupProfileValidator.clearValidationErrors();
  openPopup(popupProfile);
});

popupProfile.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  closePopup(popupProfile);
});

btnAddCard.addEventListener('click', () => {
  formAddCard.reset();
  popupAddCardValidator.clearValidationErrors();
  openPopup(popupAddCard);
});

const createCard = card => {
  const newCard = new Card(card, '#card', openPopupImg);
  return newCard.getCard();
}

popupAddCard.addEventListener('submit', evt => {
  evt.preventDefault();
  addNewCard(createCard({ title: popupCardName.value, src: popupCardUrl.value, isLike: false }));
  closePopup(popupAddCard);
});

const openPopupImg = (title, src) => {
  popupImgPic.src = src;
  popupImgPic.alt = title;
  popupImgCaption.textContent = title;
  openPopup(popupImg);
}

samplesCards.forEach(card => {
  addNewCard(createCard(card));
});
