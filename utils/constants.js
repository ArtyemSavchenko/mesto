export const samplesCards = [
  { title: 'Теберда', src: './images/card-teberda.webp', isLike: false },
  { title: 'Рускеала', src: './images/card-ruskeala.webp', isLike: false },
  { title: 'Карелия', src: './images/card-kareliya.webp', isLike: false },
  { title: 'Домбай', src: './images/card-dombay.webp', isLike: false },
  { title: 'Архыз', src: './images/card-arkhyz.webp', isLike: false },
  { title: 'Совы у моего дома', src: './images/card-sovy.webp', isLike: false }
]

export const sectionCardsSelector = '.cards';
export const templateCardSelector = '#card';
export const userNameSelector = '.profile__name';
export const userAboutSelector = '.profile__about';
export const popupFormSelector = '.popup__form';
export const popupInputSelector = '.popup__input';
export const popupProfileEditSelector = '.popup_type_profile-edit';
export const popupAddCardSelector = '.popup_type_add-card';
export const popupImgSelector = '.popup_type_image';
export const popupImgPicSelector = '.card-image__img';
export const popupImgCaptionSelector = '.card-image__caption';
export const activePopupClass = 'popup_active';
export const closeBtnClass = 'popup__close-btn';
export const inputUserName = 'input-user-name';
export const inputUserAbout = 'input-user-about';
export const inputCardName = 'input-card-name';
export const inputCardUrl = 'input-card-url';
export const btnOpenProfile = document.querySelector(".profile__edit-btn");
export const btnAddCard = document.querySelector(".profile__add-card");
export const popupAddCard = document.querySelector(popupAddCardSelector);
export const popupProfile = document.querySelector(popupProfileEditSelector);
export const popupProfileName = popupProfile.querySelector(".popup__input_type_name");
export const popupProfileAbout = popupProfile.querySelector(".popup__input_type_about");
