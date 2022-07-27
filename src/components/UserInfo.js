export class UserInfo {
  constructor({ userNameSelector, userAboutSelector }) {
    this._userNameEl = document.querySelector(userNameSelector);
    this._userAboutEl = document.querySelector(userAboutSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameEl.textContent,
      userAbout: this._userAboutEl.textContent
    }
  }

  setUserInfo({ userName, userAbout }) {
    this._userNameEl.textContent = userName;
    this._userAboutEl.textContent = userAbout;
  }
}
