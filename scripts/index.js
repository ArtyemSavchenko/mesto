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

function createCard(title, src) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = title;
  const cardImg = card.querySelector('.card__img');
  cardImg.src = src;
  cardImg.alt = title;
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
popupProfile.querySelector('.popup__close-btn').addEventListener('click', evt => {
  evt.stopPropagation();
  closePopup(popupProfile);
});
popupProfile.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  closePopup(popupProfile);
});
popupProfile.addEventListener('click', () => closePopup(popupProfile));
popupProfile.querySelector('.popup__window').addEventListener('click', evt => evt.stopPropagation());

btnAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
  popupCardName.value = '';
  popupCardUrl.value = '';
});
popupAddCard.querySelector('.popup__close-btn').addEventListener('click', evt => {
  evt.stopPropagation();
  closePopup(popupAddCard);
});
popupAddCard.addEventListener('submit', evt => {
  evt.preventDefault();
  const card = createCard(popupCardName.value, popupCardUrl.value);
  addNewCard(card);
  closePopup(popupAddCard);
});
popupAddCard.addEventListener('click', () => closePopup(popupAddCard));
popupAddCard.querySelector('.popup__window').addEventListener('click', evt => evt.stopPropagation());

popupImg.querySelector('.popup__close-btn').addEventListener('click', evt => {
  evt.stopPropagation();
  closePopup(popupImg);
});
popupImg.addEventListener('click', () => closePopup(popupImg));
popupImg.querySelector('.card-image__img').addEventListener('click', evt => evt.stopPropagation());
popupImg.querySelector('.card-image__caption').addEventListener('click', evt => evt.stopPropagation());


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
sectionCards.addEventListener('click', evt => {
  if (evt.target.classList.contains('card__like')) {
    likeCard (evt.target.closest('.card'));
    return;
  }
  if (evt.target.classList.contains('card__del')) {
    delCard (evt.target.closest('.card'));
    return;
  }
  if (evt.target.classList.contains('card__img')) {
    openPopupImg(evt.target.closest('.card'));
    return;
  }
});

function loadPage () {
  samplesCards.forEach(el => addNewCard(createCard(el.title, el.src)));
}
loadPage();
