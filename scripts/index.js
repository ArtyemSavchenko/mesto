const profilePopup = document.querySelector('.popup');
const openProfileBtn = document.querySelector('.profile__edit-btn');
const closePopupBtn = document.querySelector('.popup__close-btn');
const userForm = document.querySelector('.popup__user-form');

const inputName = document.querySelector('.popup__input_type_name');
const profileName = document.querySelector('.profile__name');
const inputAbout = document.querySelector('.popup__input_type_about');
const profileAbout = document.querySelector('.profile__about');

function openPopup (popup) {
  setTimeout(() => popup.classList.add('popup_active'), 0);
  // popup.classList.add('popup_active');
}

function closePopup (evt) {
  if (evt.target.classList.contains('popup__close-btn')) {
    evt.stopPropagation();
    const btnClose = evt.target;
    const popup = btnClose.closest('.popup');
    popup.classList.remove('popup_active');
    setTimeout(() => { popup.remove(); }, 500);
  }
  if (evt.target.classList.contains('popup')) {
    const popup = evt.target;
    const popupChildren = popup.children[0];
    popupChildren.addEventListener('mousedown', () => evt.stopPropagation());
    popup.classList.remove('popup_active');
    setTimeout(() => { popup.remove(); }, 500);
  }
}

openProfileBtn.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  //TODO
  openClosePopup(profilePopup);
});

closePopupBtn.addEventListener('click', () => {
  //TODO
  openClosePopup(profilePopup);
});

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  //TODO
  openClosePopup(profilePopup);
});

const cardsSection = document.querySelector('.cards');
//like mechanic
function like (evt) {
  if (evt.target.classList.contains('card__like'))
    evt.target.classList.toggle('card__like_active');
}
cardsSection.addEventListener('click', like);
//delete card
function deleteCard(evt) {
  if (evt.target.classList.contains('card__del')) {
    evt.target.closest('.card').remove();
  }
}
cardsSection.addEventListener('click', deleteCard);
// ---
//open image
function openImage(evt) {
  if (evt.target.classList.contains('card__img')) {
    const imgPopupTemplate = document.querySelector('#card-image').content;
    const imgPopupEl = imgPopupTemplate.querySelector('.popup').cloneNode(true);
    const cardEl = evt.target.closest('.card');

    imgPopupEl.querySelector('.card-image__img').src = cardEl.querySelector('.card__img').src;
    imgPopupEl.querySelector('.card-image__caption').textContent = cardEl.querySelector('.card__title').textContent;
    const closeBtnEl = imgPopupEl.querySelector('.popup__close-btn');
    closeBtnEl.addEventListener('click', closePopup);
    imgPopupEl.addEventListener('click', closePopup);

    cardEl.prepend(imgPopupEl);
    openPopup(imgPopupEl);
  }
}
cardsSection.addEventListener('click', openImage);
// ---
