(()=>{"use strict";var t=document.querySelector(".popup_view"),e=(t.querySelector(".popup__image"),t.querySelector(".popup__name"),document.querySelector(".profile__edit-button")),r=document.querySelector(".popup_edit"),n=(r.querySelector(".popup__close-button_edit"),document.querySelector(".popup__form")),o=n.querySelector(".popup__input_type_name"),i=n.querySelector(".popup__input_type_job"),u=(document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".popup_add")),a=(document.querySelector(".profile__add-button"),u.querySelector(".popup__close-button_add"),document.querySelector(".popup__close-button_view"),document.querySelector(".profile__avatar")),s=(document.querySelector(".profile__avatar-button"),document.querySelector(".popup_avatar")),c={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},b.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(n);if(o){var r=_(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._handleFormSubmit=n,e._popupForm=e._popup.querySelector(".popup__form"),e._popupInput=e._popupForm.querySelector(".popup__input"),e._popupButton=e._popupForm.querySelector(".popup__button"),e._inputList=e._popupForm.querySelectorAll(".popup__input"),e._submitBtnText=e._popupButton.textContent,e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;b(_(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){b(_(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(t){this._popupButton.textContent=t?"Сохранение...":this._submitBtnText}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=f(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close-button")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleOverlayClose",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){t.close})),this._popup.addEventListener("mousedown",(function(e){t._handleOverlayClose(e)}))}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}());function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var g=function(){function t(e){var r=e.username,n=e.job,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._avatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{username:this._userName.textContent,job:this._userJob.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.username,this._userJob.textContent=t.job,this._avatar.src=t.avatar}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,k(n.key),n)}}function j(t,e,r){return(e=k(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function k(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}var C=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,"_setSubmitButtonState",(function(t){n._checkInvalidInput(t)?(n._buttonElement.setAttribute("disabled",!0),n._buttonElement.classList.add(n._inactiveButtonClass)):(n._buttonElement.removeAttribute("disabled"),n._buttonElement.classList.remove(n._inactiveButtonClass))})),j(this,"_setEventListeners",(function(t){n._inputList=Array.from(t.querySelectorAll(n._inputSelector)),n._buttonElement=t.querySelector(n._submitButtonSelector),n._inputList.forEach((function(t){t.addEventListener("input",(function(){n._checkInputValidity(t),n._setSubmitButtonState(n._inputList,n._buttonElement)}))}))})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=r,this._inputList=e.inputList,this._buttonElement=e.buttonElement}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){var r=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),r.textContent=e,r.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_checkInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"removeValidationErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._setSubmitButtonState(this._inputList,this._buttonElement)}},{key:"enableValidation",value:function(){this._setEventListeners(this._form),this.removeValidationErrors(this._form)}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const O=C;function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var I=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_parseResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return t.json()})).then((function(t){console.log(t)}))}},{key:"addCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._parseResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"setLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return t.json()})).then((function(t){console.log(t)}))}},{key:"editUserInfo",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.job})})}},{key:"editAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._parseResponse(t)}))}}])&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"940e7328-d290-4330-b219-7aff84540300","Content-Type":"application/json"}});Promise.all([I.getUserInfo()]).then((function(t){var e,r,n=(e=t,r=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],s=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);s=!0);}catch(t){c=!0,o=t}finally{try{if(!s&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];T.setUserInfo(n),n._id})).catch((function(t){console.log("Ошибка загрузки с сервера: ".concat(t))}));var T=new g({username:".profile__title",job:".profile__subtitle",avatar:".profile__avatar"}),U=new v({popupSelector:".popup_edit",handleFormSubmit:function(t){U.loading(!0),I.editUserInfo(t).then((function(t){T.setUserInfo(t),U.close()})).catch((function(t){console.log("Ошибка редактирования пользователя: ".concat(t))})).finally((function(){U.loading(!1)})),console.log(t)}});e.addEventListener("click",(function(){var t,e,r,n=T.getUserInfo();e=(t={username:n.username,job:n.job}).username,r=t.job,o.value=e,i.value=r,console.log({username:e}),U.open()}));var B=new v({popupSelector:".popup_avatar",handleFormSubmit:function(t){B.loading(!0),I.editAvatar(t).then((function(t){a.src=t.avatar,B.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){B.loading(!1)}))}});B.setEventListeners(),U.setEventListeners(),new O(c,u).enableValidation(),new O(c,r).enableValidation(),new O(c,s).enableValidation()})();