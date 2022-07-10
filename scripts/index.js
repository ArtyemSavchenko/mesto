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
const popups = [
  popupProfile,
  popupAddCard,
  popupImg
]

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-btn'))
      closePopup(popup);
  });
});
//evt.target === evt.currentTarget - 🔥сам бы не додумался до такого изящного решения, спасибо

function createCard(title, src) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = title;
  const cardImg = card.querySelector('.card__img');
  cardImg.src = src;
  cardImg.alt = title;
  cardImg.addEventListener('click', () => openPopupImg(card));
  card.querySelector('.card__like').addEventListener('click', () => likeCard(card));
  card.querySelector('.card__del').addEventListener('click', () => delCard(card));
  return card;
}

function addNewCard(card) {
  sectionCards.prepend(card);
}
function delCard(card) {
  card.remove();
}

function openPopup (popup) {
  popup.classList.add('popup_active');
}
function closePopup (popup) {
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

function likeCard (card) {
  card.querySelector('.card__like').classList.toggle('card__like_active');
}
function delCard (card) {
  card.remove();
}
function openPopupImg (card) {
  popupImgPic.src = card.querySelector('.card__img').src;
  popupImgPic.alt = card.querySelector('.card__title').textContent;
  popupImgCaption.textContent = card.querySelector('.card__title').textContent;
  openPopup(popupImg);
}

samplesCards.forEach(el => addNewCard(createCard(el.title, el.src)));
