const profilePopup = document.querySelector('.popup');
const popupWindow = document.querySelector('.popup__window'); // для закрытия попапа при клике по пустой области
const openProfileBtn = document.querySelector('.profile__edit-btn');
const closePopupBtn = document.querySelector('.popup__close-btn');
const userForm = document.querySelector('.popup__user-form');

const inputName = document.querySelector('.popup__input_type_name');
const profileName = document.querySelector('.profile__name');
const inputAbout = document.querySelector('.popup__input_type_about');
const profileAbout = document.querySelector('.profile__about');


function openClosePopup (popup) {
  popup.classList.toggle('popup_active');
}

openProfileBtn.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openClosePopup(profilePopup);
});

closePopupBtn.addEventListener('click', () => {
  openClosePopup(profilePopup);
});
profilePopup.addEventListener('click', () => {
  openClosePopup(profilePopup);
});
popupWindow.addEventListener('click', (evt) => {
  evt.stopPropagation()
});

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  openClosePopup(profilePopup);
});

//like mechanic
const likeBtns = document.querySelectorAll('.card__like');

function toggleLike () {
  this.classList.toggle('card__like_active');
}

likeBtns.forEach(btn => {
  btn.addEventListener('click', toggleLike);
});
//---
