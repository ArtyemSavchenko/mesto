const openProfileBtn = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const cardsSection = document.querySelector('.cards');
const addCardBtn = document.querySelector('.profile__add-card');

const samplesCards = [
  { title: 'Теберда', src: './images/card-teberda.webp' },
  { title: 'Рускеала', src: './images/card-ruskeala.webp' },
  { title: 'Карелия', src: './images/card-kareliya.webp' },
  { title: 'Домбай', src: './images/card-dombay.webp' },
  { title: 'Архыз', src: './images/card-arkhyz.webp' },
  { title: 'Совы у моего дома', src: './images/card-sovy.webp' }
]

function addCard(title, src) {
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = title;
  card.querySelector('.card__img').src = src;
  const cardsSection = document.querySelector('.cards');
  cardsSection.prepend(card);
}

function initialLoad (cards) {
  cards.forEach(el => addCard(el.title, el.src));
}
initialLoad(samplesCards);

//закрываем попап на ESC
window.addEventListener('keyup', evt => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup');
    if (popup)
      removePopup (popup);
  }
});

function openPopup (popup) {
  setTimeout(() => {
    popup.classList.add('popup_active');
    const input = popup.querySelector('input');
    if (input)
      input.focus();
  });
}
function closePopup (evt) {
  const evtTarget = evt.target;
  if (evtTarget.classList.contains('popup__close-btn')) {
    evt.stopPropagation();
    const btnClose = evt.target;
    const popup = btnClose.closest('.popup');
    removePopup(popup);
  }
  if (evtTarget.classList.contains('popup')) {
    removePopup(evt.target);
  }
}
function removePopup (popup) {
  popup.classList.remove('popup_active');
  setTimeout(() => { popup.remove(); }, 400);
}

function openProfile () {
  const profileTemplate = document.querySelector('#profile').content;
  const profilePopup = profileTemplate.querySelector('.popup').cloneNode(true);
  const inputName = profilePopup.querySelector('.popup__input_type_name');
  const inputAbout = profilePopup.querySelector('.popup__input_type_about');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  profilePopup.querySelector('.popup__close-btn').addEventListener('click', closePopup);
  profilePopup.addEventListener('click', closePopup);

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

function like (evt) {
  if (evt.target.classList.contains('card__like'))
    evt.target.classList.toggle('card__like_active');
}
cardsSection.addEventListener('click', like);

function deleteCard(evt) {
  if (evt.target.classList.contains('card__del')) {
    evt.target.closest('.card').remove();
  }
}
cardsSection.addEventListener('click', deleteCard);

function openImage(evt) {
  if (evt.target.classList.contains('card__img')) {
    const imgPopupTemplate = document.querySelector('#card-image').content;
    const imgPopupEl = imgPopupTemplate.querySelector('.popup').cloneNode(true);
    const cardEl = evt.target.closest('.card');

    imgPopupEl.querySelector('.card-image__img').src = cardEl.querySelector('.card__img').src;
    imgPopupEl.querySelector('.card-image__caption').textContent = cardEl.querySelector('.card__title').textContent;
    imgPopupEl.querySelector('.popup__close-btn').addEventListener('click', closePopup);
    imgPopupEl.addEventListener('click', closePopup);

    cardEl.prepend(imgPopupEl);
    openPopup(imgPopupEl);
  }
}
cardsSection.addEventListener('click', openImage);

function addNewCard (evt) {
  evt.preventDefault();
  const form = evt.target;
  addCard(form.querySelector('.popup__input_type_card-name').value, form.querySelector('.popup__input_type_card-url').value);
  removePopup(evt.target.closest('.popup'));
}

function openNewCardPopup () {
  const cardPopupTeplate = document.querySelector('#card-popup').content;
  const cardPopup = cardPopupTeplate.querySelector('.popup').cloneNode(true);

  const form = cardPopup.querySelector('.popup__form');
  form.addEventListener('submit', addNewCard);

  cardPopup.querySelector('.popup__close-btn').addEventListener('click', closePopup);
  cardPopup.addEventListener('click', closePopup);

  const page = openProfileBtn.closest('.page');
  page.append(cardPopup);
  openPopup(cardPopup);
}

addCardBtn.addEventListener('click', openNewCardPopup);

