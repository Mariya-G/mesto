(()=>{"use strict";var e=document.querySelector(".popup_view"),t=(e.querySelector(".popup__image"),e.querySelector(".popup__name"),document.querySelector(".profile__edit-button")),n=document.querySelector(".popup_edit"),r=(n.querySelector(".popup__close-button_edit"),document.querySelector(".popup__form")),o=r.querySelector(".popup__input_type_name"),i=r.querySelector(".popup__input_type_job"),u=(document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".popup_add")),a=document.querySelector(".profile__add-button"),l=(u.querySelector(".popup__close-button_add"),document.querySelector(".popup__close-button_view"),document.querySelector(".profile__avatar")),c=(document.querySelector(".profile__avatar-button"),document.querySelector(".popup_avatar")),s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function y(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}var m=function(){function e(t,n,r,o,i,u,a){var l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"_getTemplate",(function(){return document.querySelector("#element-template").content.querySelector(".element").cloneNode(!0)})),y(this,"_setEventListeners",(function(){l._image.addEventListener("click",(function(){l._handleCardClick(l._name,l._link)})),l._deleteBtn.addEventListener("click",(function(){l._handleDeleteIconClick(l._cardId)})),l._likeBtn.addEventListener("click",(function(){l._likeBtn.classList.contains("element__like_active")?l._handleRemoveLike(l._cardId):l._handleSetLike(l._cardId)}))})),y(this,"_handleLikeClick",(function(e){e.target.classList.toggle("element__like_active")})),y(this,"_handleDelete",(function(){l._element.remove(),l._element=null})),y(this,"generateCard",(function(){return l._element=l._getTemplate(),l._title=l._element.querySelector(".element__title"),l._image=l._element.querySelector(".element__image"),l._likesNumber=l._element.querySelector(".element__likes-number"),l._deleteBtn=l._element.querySelector(".element__delete"),l._title.textContent=l._name,l._image.src=l._link,l._image.alt=l._name,l._hasDeleteBtn(),l._isCardLiked(),l._likesNumber.textContent=l._likes.length,l._setEventListeners(),l._element})),this._name=t.name,this._link=t.link,this._templateSelector=n,this._userId=r,this._cardId=t._id,this._cardOwnerId=t.owner._id,this._handleCardClick=o,this._handleDeleteIconClick=i,this._likes=t.likes,this._handleSetLike=u,this._handleRemoveLike=a}var t,n;return t=e,(n=[{key:"_isCardLiked",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._likeBtn.classList.add("element__like_active")}},{key:"handleLikeCard",value:function(e){this._likes=e.likes,this._likesNumber.textContent=this._likes.length,this._likeBtn.classList.toggle("element__like_active")}},{key:"_hasDeleteBtn",value:function(){this._userId!==this._cardOwnerId&&this._deleteBtn.remove()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function b(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===_(t)?t:String(t)}var v=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=b(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close})),this._popup.addEventListener("mousedown",(function(t){e._handleOverlayClose(t)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupName=t._popup.querySelector(".popup__name"),t._popupImage=t._popup.querySelector(".popup__image"),t}return t=u,(n=[{key:"open",value:function(e,t){k(E(u.prototype),"open",this).call(this),this._popupImage.alt=e,this._popupName.textContent=e,this._popupImage.src=t}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popup.querySelector(".popup__form"),t._popupInput=t._popupForm.querySelector(".popup__input"),t._popupButton=t._popupForm.querySelector(".popup__button"),t._inputList=t._popupForm.querySelectorAll(".popup__input"),t._submitBtnText=t._popupButton.textContent,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;L(I(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){L(I(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(e){this._popupButton.textContent=e?"Сохранение...":this._submitBtnText}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var U=function(){function e(t){var n=t.username,r=t.job,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{username:this._userName.textContent,job:this._userJob.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e,t,n){this._userName.value=e,this._userJob.value=t,this._avatar.src=n.avatar}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,D(r.key),r)}}function A(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function V(e,t,n){return(t=D(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){var t=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===R(t)?t:String(t)}var F=A((function e(t,n){var r=this,o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),V(this,"addItem",(function(e){r._containerSelector.prepend(e)})),V(this,"renderItems",(function(){r._renderedItems.forEach((function(e){r._renderer(e)}))})),this._renderedItems=o,this._renderer=i,this._containerSelector=document.querySelector(n)}));function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,M(r.key),r)}}function H(e,t,n){return(t=M(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===N(t)?t:String(t)}var z=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),H(this,"_setSubmitButtonState",(function(e){r._checkInvalidInput(e)?(r._buttonElement.setAttribute("disabled",!0),r._buttonElement.classList.add(r._inactiveButtonClass)):(r._buttonElement.removeAttribute("disabled"),r._buttonElement.classList.remove(r._inactiveButtonClass))})),H(this,"_setEventListeners",(function(e){r._inputList=Array.from(e.querySelectorAll(r._inputSelector)),r._buttonElement=e.querySelector(r._submitButtonSelector),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._setSubmitButtonState(r._inputList,r._buttonElement)}))}))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=t.inputList,this._buttonElement=t.buttonElement}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_checkInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"removeValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._setSubmitButtonState(this._inputList,this._buttonElement)}},{key:"enableValidation",value:function(){this._setEventListeners(this._form),this.removeValidationErrors(this._form)}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const $=z;function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==G(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W,X=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.username,about:e.job})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"940e7328-d290-4330-b219-7aff84540300","Content-Type":"application/json"}});Promise.all([X.getInitialCards(),X.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(i),W=i._id,ne.renderItems(o)})).catch((function(e){console.log("Ошибка загрузки с сервера: ".concat(e))}));var Y=new U({username:".profile__title",job:".profile__subtitle",avatar:".profile__avatar"}),Z=new q({popupSelector:".popup_edit",handleFormSubmit:function(e){Z.loading(!0),X.editUserInfo(e).then((function(e){Y.setUserInfo(e),Z.close()})).catch((function(e){console.log("Ошибка редактирования пользователя: ".concat(e))})).finally((function(){Z.loading(!1)}))}});t.addEventListener("click",(function(){var e,t,n,r=Y.getUserInfo();t=(e={username:r.username,job:r.job}).username,n=e.job,o.value=t,i.value=n,Z.open()}));var ee=new q({popupSelector:".popup_avatar",handleFormSubmit:function(e){ee.loading(!0),X.editAvatar(e).then((function(e){l.src=e.avatar,ee.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ee.loading(!1)}))}});ee.setEventListeners();var te=function(e){var t=new m({data:e,templateSelector:".element-template",userId:W,handleCardClick:function(e,t){oe.open(e,t)},handleDeleteIconClick:function(e){deleteCardPopup.open(),deleteCardPopup.submitCallback((function(){X.deleteCard(e).then((function(){deleteCardPopup.close(),t.deleteCard()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))},handleSetLike:function(e){X.setLike(e).then((function(e){t.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},handleRemoveLike:function(e){X.deleteLike(e).then((function(e){t.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});return t.generateCard()},ne=new F({renderer:function(e){ne.addItem(te(e))}},".elements"),re=new q({popupSelector:".popup_add",handleFormSubmit:function(e){re.loading(!0),X.addCard(e).then((function(e){ne.addItem(te(e)),re.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){re.loading(!1)}))}});re.setEventListeners(),a.addEventListener("click",(function(){ue.enableValidation(),re.open()}));var oe=new j(".popup_view"),ie=new q({popupSelector:".popup_add",handleFormSubmit:function(e,t){ne.addItem(te(e)),ie.close()}});oe.setEventListeners(),ie.setEventListeners(),Z.setEventListeners();var ue=new $(s,u);ue.enableValidation(),new $(s,n).enableValidation(),new $(s,c).enableValidation()})();