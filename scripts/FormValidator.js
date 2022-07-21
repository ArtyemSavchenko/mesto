export class FormValidator {
  constructor (formEl, settings) {
    this._settings = settings;
    this._formEl = formEl;
    this._inputList = Array.from(this._formEl.querySelectorAll(settings.inputSelector));
    this._btnSubmitEl = this._formEl.querySelector(settings.submitButtonSelector);
  }

  _showInputError (inputEl)  {
    const errorEl = this._formEl.querySelector(`.${inputEl.id}-error`);
    errorEl.textContent = inputEl.validationMessage;
    inputEl.classList.add(this._settings.inputErrorClass);
    errorEl.classList.add(this._settings.errorClass);
  }

  _hideInputError (inputEl) {
    const errorEl = this._formEl.querySelector(`.${inputEl.id}-error`);
    errorEl.textContent = '';
    inputEl.classList.remove(this._settings.inputErrorClass);
    errorEl.classList.remove(this._settings.errorClass);
  }

  _validateInput (inputEl) {
    if (inputEl.validity.valid)
      return true;
    else return false;
  }

  _toggleBtnSubmitState () {
    if (this._inputList.some(inputEl => !inputEl.validity.valid))
      this._btnSubmitEl.disabled = true;
    else
      this._btnSubmitEl.disabled = false;
  }

  clearValidationErrors() {
    this._inputList.forEach(inhputEl => this._hideInputError(inhputEl));
    this._toggleBtnSubmitState();
  }

  enableValidation () {
    this._inputList.forEach(inputEl => {
      inputEl.addEventListener('input', () => {
        if (!this._validateInput(inputEl))
          this._showInputError(inputEl);
        else
          this._hideInputError (inputEl);
        this._toggleBtnSubmitState(this._btnSubmitEl);
      });
    });
  }
}

export const validationSettings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}
