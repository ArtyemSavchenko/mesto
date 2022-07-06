const profilePopup = document.querySelector('.popup');
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

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  openClosePopup(profilePopup);
});

//delete card
const cardsSection = document.querySelector('.cards');
function deleteCard(evt) {
  if (evt.target.classList.contains('card__del')) {
    evt.target.closest('.card').remove();
  }
}
cardsSection.addEventListener('click', deleteCard);
// ---
