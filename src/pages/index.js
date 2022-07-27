import './index.css';

import {
  FormValidator,
  validationSettings,
} from "../components/FormValidator.js";
import {
  samplesCards,
  sectionCardsSelector,
  templateCardSelector,
  userNameSelector,
  userAboutSelector,
  popupFormSelector,
  popupProfileEditSelector,
  popupAddCardSelector,
  popupImgSelector,
  btnOpenProfile,
  btnAddCard,
  popupAddCard,
  popupProfile,
  popupProfileName,
  popupProfileAbout,
  inputUserName,
  inputUserAbout,
  inputCardName,
  inputCardUrl,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";

const userInfo = new UserInfo({ userNameSelector, userAboutSelector });

const createCard = (item) => {
  const newCard = new Card(item, templateCardSelector, () => {
    popupWithImage.open(item.title, item.src);
  });
  return newCard.getCard();
}

const cardSection = new Section(
  {
    items: samplesCards,
    renderer: (card) => {
      return createCard(card);
    },
  },
  sectionCardsSelector
);
cardSection.renderItems();

const popupProfileValidator = new FormValidator(
  popupProfile.querySelector(popupFormSelector),
  validationSettings
);
popupProfileValidator.enableValidation();

const popupAddCardValidator = new FormValidator(
  popupAddCard.querySelector(popupFormSelector),
  validationSettings
);
popupAddCardValidator.enableValidation();

const popupUserInfo = new PopupWithForm(
  popupProfileEditSelector,
  (data) => {
    userInfo.setUserInfo({
      userName: data[inputUserName],
      userAbout: data[inputUserAbout],
    });
  },
  () => {
    const info = userInfo.getUserInfo();
    popupProfileName.value = info.userName;
    popupProfileAbout.value = info.userAbout;
    popupProfileValidator.clearValidationErrors();
  }
);
popupUserInfo.setEventListeners();
btnOpenProfile.addEventListener("click", () => {
  popupUserInfo.open();
});

const popupWithImage = new PopupWithImage(popupImgSelector);
popupWithImage.setEventListeners();

const popupImg = new PopupWithForm(
  popupAddCardSelector,
  (data) => {
    const card = {
      title: data[inputCardName],
      src: data[inputCardUrl],
      isLike: false,
    };
    cardSection.addItem(createCard(card));
  },
  () => {
    popupAddCardValidator.clearValidationErrors();
  }
);
popupImg.setEventListeners();
btnAddCard.addEventListener("click", () => {
  popupImg.open();
});
