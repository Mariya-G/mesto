import './index.css';
import {formleValidationConfig, buttonEditProfile, popupEdit, nameInput, jobInput, 
popupAdd, buttonAddImage, avatar, buttonEditAvatar, popupAvatar
} from '../utils/constants.js';
import Card from '../components/Сard.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    Authorization: '940e7328-d290-4330-b219-7aff84540300',
    'Content-Type': 'application/json'
  }
});

let userId;

//Загрузка готовых карточек и данных о пользователе с сервера
Promise.all([api.getInitialCards(), api.getUserInfo()]) //,
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardsList.renderItems(initialCards.reverse());
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

//валидация формы добавления карточек
const validAdd = new FormValidator(formleValidationConfig, popupAdd);
validAdd.enableValidation();

//валидация формы редактированяи пользователя
const validEdit = new FormValidator(formleValidationConfig, popupEdit);
validEdit.enableValidation();

//валидация редактирования аватара пользователя
const validFormAvatar = new FormValidator(formleValidationConfig, popupAvatar);
validFormAvatar.enableValidation();

//открытие попапа с увеличенной картинкой
const viewImagePopup = new PopupWithImage('.popup_view');
viewImagePopup.setEventListeners();

// создание попапа с формой добавления новой карточки
const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (formData) => {
    addCardPopup.loading(true);
    api.addCard(formData)
      .then((formData) => {
        cardsList.addItem(createCard(formData));
        addCardPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        addCardPopup.loading(false);
      });
  }
});
addCardPopup.setEventListeners();

// обработчик открытия попапа карточки
buttonAddImage.addEventListener('click', () => {
  validAdd.enableValidation();
  addCardPopup.open();
})


/* -------------- Профиль юзера --------------- */
//Создание экземпляра класса, отвечающего за отображение информации о пользователе
const userInfo = new UserInfo({
  username: '.profile__title',
  job: '.profile__subtitle',
  avatar: '.profile__avatar'
});

//Редактирование пользователя
const formPopupEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (dataForm) => {
    formPopupEdit.loading(true);
    api.editUserInfo(dataForm)
      .then((dataForm) => {
        userInfo.setUserInfo(dataForm);
        formPopupEdit.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        formPopupEdit.loading(false);
      });
  }
});
formPopupEdit.setEventListeners();

function fillInEditProfileFormInputs({username, job}) {
  nameInput.value = username;
  jobInput.value = job;
}

// Обработчик кнопки Edit попапа редактирования профиля
buttonEditProfile.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  fillInEditProfileFormInputs({
    username: info.username,
    job: info.job
  });
  
  formPopupEdit.open();
  validEdit.removeValidationErrors();
});

// Создание попапа редактирования аватара пользователя
const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleFormSubmit: (data) => {
    editAvatarPopup.loading(true);
    api.editAvatar(data)
      .then((data) => {
        avatar.src = data.avatar;
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.loading(false);
      });
  }
});
editAvatarPopup.setEventListeners();

// Обработчик кнопки аватара пользователя
buttonEditAvatar.addEventListener('click', () => {
  validFormAvatar.removeValidationErrors();
  editAvatarPopup.open();
});

/* ----------- Карточки с изображениями ----------- */
const createCard = (data) => {
  const card = new Card({
    data: data,
    templateSelector: '#element-template',
    userId: userId,
    handleCardClick: (name, link) => {
      viewImagePopup.open(name, link);
    },
    handleDeleteIconClick: (cardId) => {
      deleteCardPopup.open();
      console.log('клик');
      deleteCardPopup.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCardPopup.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          })
      });
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
};

//Создание экземпляра класса Section
const cardsList = new Section({
  renderer: (card) => {
    cardsList.addItem(createCard(card));
  },
}, '.elements');

//Создаем попап с подтверждением удаления карточки
const deleteCardPopup = new PopupWithConfirmation({
  popupSelector: '.popup_delete'
});
deleteCardPopup.setEventListeners();