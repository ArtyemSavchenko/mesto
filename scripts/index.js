const profilePopup = document.querySelector('.popup');
const openProfileBtn = document.querySelector('.profile__edit-btn');
const closeProfileBtn = document.querySelector('.popup__close-btn');
const submitProfileBtn = document.querySelector('.popup__submit-btn');

const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');

openProfileBtn.addEventListener('click', () => {
  inputName.value = document.querySelector('.profile__name').textContent;
  inputAbout.value = document.querySelector('.profile__about').textContent;
  profilePopup.classList.toggle('popup_active');
});

closeProfileBtn.addEventListener('click', () => {
  profilePopup.classList.toggle('popup_active');
});

submitProfileBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = inputName.value;
  document.querySelector('.profile__about').textContent = inputAbout.value;
  profilePopup.classList.toggle('popup_active');
});
