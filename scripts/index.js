//CLICK TEST
// document.querySelector('.page').addEventListener('click', evt => {
//   console.log(evt.type);
//   console.log(evt.target);
// });
// document.querySelector('.page').addEventListener('mousedown', evt => {
//   console.log(evt.type);
//   console.log(evt.target);
// });
// document.querySelector('.page').addEventListener('mouseup', evt => {
//   console.log(evt.type);
//   console.log(evt.target);
// });

window.addEventListener('keyup', evt => {
  if(evt.key === 'Escape') {
    const popup = document.querySelector('.popup');
    if (popup)
      removePopup (popup);
  }
});

function openPopup (popup) {
  setTimeout(() => popup.classList.add('popup_active'), 0);
  // popup.classList.add('popup_active');
}

function removePopup (popup) {
  popup.classList.remove('popup_active');
  setTimeout(() => { popup.remove(); }, 500);
}

function closePopup (evt) {
  if (evt.target.classList.contains('popup__close-btn')) {
    // evt.stopPropagation();
    const btnClose = evt.target;
    const popup = btnClose.closest('.popup');
    removePopup(popup);
  }
  // if (evt.target.classList.contains('popup')) {
  //   removePopup(evt.target);
  // }
}

//PROFILE
const openProfileBtn = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

function openProfile () {
  const profileTemplate = document.querySelector('#profile').content;
  const profilePopup = profileTemplate.querySelector('.popup').cloneNode(true);
  const inputName = profilePopup.querySelector('.popup__input_type_name');
  const inputAbout = profilePopup.querySelector('.popup__input_type_about');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  profilePopup.querySelector('.popup__close-btn').addEventListener('click', closePopup);
  // profilePopup.addEventListener('click', closePopup);

  const userForm = profilePopup.querySelector('.popup__form');
  userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    profileName.textContent = userForm.querySelector('.popup__input_type_name').value;
    profileAbout.textContent = userForm.querySelector('.popup__input_type_about').value;
    removePopup(profilePopup);
  });

  const page = openProfileBtn.closest('.page');
  page.prepend(profilePopup);
  openPopup(profilePopup);
}

openProfileBtn.addEventListener('click', openProfile);

// CARDS
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
//ADD CARD
const addCardBtn = document.querySelector('.profile__add-card');
function addCard (evt) {
  evt.preventDefault();
  const form = evt.target;
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = form.querySelector('.popup__input_type_card-name').value;
  card.querySelector('.card__img').src = form.querySelector('.popup__input_type_card-url').value;
  const cardsSection = document.querySelector('.cards');
  cardsSection.prepend(card);
  removePopup(evt.target.closest('.popup'));
}

function openCardPopup () {
  const cardPopupTeplate = document.querySelector('#card-popup').content;
  const cardPopup = cardPopupTeplate.querySelector('.popup').cloneNode(true);

  const form = cardPopup.querySelector('.popup__form');
  form.addEventListener('submit', addCard);

  cardPopup.querySelector('.popup__close-btn').addEventListener('click', closePopup);

  const page = openProfileBtn.closest('.page');
  page.append(cardPopup);
  openPopup(cardPopup);
}

addCardBtn.addEventListener('click', openCardPopup);
// ---
