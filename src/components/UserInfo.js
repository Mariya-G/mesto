export default class UserInfo {
  constructor({usernameSelector, jobSelector}) {
    this._userName = document.querySelector(usernameSelector);
    this._userJob = document.querySelector(jobSelector);
  }

  getUserInfo(){
    return {
      username: this._userName.textContent,
      job: this._userJob.textContent
    }
  }
  
  setUserInfo(username, job) {
    this._userName.textContent = username;
    this._userJob.textContent = job;
  }
}