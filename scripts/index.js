const profilePopupEl = document.querySelector('.popup');
const openProfileBtnEl = document.querySelector('.profile__edit-btn');
const closeProfileBtnEl = document.querySelector('.popup__close-btn');
const submitProfileBtnEl = document.querySelector('.popup__submit-btn');

const inputNameEl = document.querySelector('.popup__input_type_name');
const inputAboutEl = document.querySelector('.popup__input_type_about');

openProfileBtnEl.addEventListener('click', () => {
  inputNameEl.value = document.querySelector('.profile__name').textContent;
  inputAboutEl.value = document.querySelector('.profile__about').textContent;
  profilePopupEl.classList.toggle('popup_active');
});

closeProfileBtnEl.addEventListener('click', () => {
  profilePopupEl.classList.toggle('popup_active');
});

submitProfileBtnEl.addEventListener('click', (evt) => {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = inputNameEl.value;
  document.querySelector('.profile__about').textContent = inputAboutEl.value;
  profilePopupEl.classList.toggle('popup_active');
});

