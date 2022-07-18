const showInputError = (formEl, inputEl, inputErrorClass, errorClass) => {
  const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
  errorEl.textContent = inputEl.validationMessage;
  inputEl.classList.add(inputErrorClass);
  errorEl.classList.add(errorClass);
}

const hideInputError = (formEl, inputEl, inputErrorClass, errorClass) => {
  const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
  errorEl.textContent = '';
  inputEl.classList.remove(inputErrorClass);
  errorEl.classList.remove(errorClass);
}

const validateInput = inputEl => {
  if (inputEl.validity.valid)
    return true;
  else return false;
}

const toggleBtnSubmitState = (inputList, btnEl) => {
  if (inputList.some(inputEl => !inputEl.validity.valid))
    btnEl.disabled = true;
  else
    btnEl.disabled = false;
}

const enableValidation = names => {
  const formList = Array.from(document.querySelectorAll(names.formSelector));
  formList.forEach(formEl => {
    const inputList = Array.from(formEl.querySelectorAll(names.inputSelector));
    const btnSubmitEl = formEl.querySelector(names.submitButtonSelector);
    inputList.forEach(inputEl => {
      inputEl.addEventListener('input', () => {
        if (!validateInput(inputEl))
          showInputError(formEl, inputEl, names.inputErrorClass, names.errorClass);
        else
          hideInputError (formEl, inputEl, names.inputErrorClass, names.errorClass);
        toggleBtnSubmitState(inputList, btnSubmitEl);
      });
    });
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});
