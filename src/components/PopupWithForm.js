import { Popup } from './Popup.js';
import {
  popupFormSelector,
  popupInputSelector,
} from '../utils/constants.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm, callbackOpenForm) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this._callbackOpenForm = callbackOpenForm;
    this._formEl = this._popupEl.querySelector(popupFormSelector);
    this._inputList = this._popupEl.querySelectorAll(popupInputSelector);
  }

  _getInputValues() {
    const data = {};
    this._inputList.forEach(el => {
      data[el.name] = el.value;
    });
    return data;
  }

  setEventListeners() {
    this._formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    this._formEl.reset();
    super.close();
  }

  open() {
    this._callbackOpenForm();
    super.open();
  }
}
