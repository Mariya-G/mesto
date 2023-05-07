(()=>{"use strict";var e=document.querySelector(".popup_view"),t=(e.querySelector(".popup__image"),e.querySelector(".popup__name"),document.querySelector(".profile__edit-button"),document.querySelector(".popup_edit").querySelector(".popup__close-button_edit"),document.querySelector(".popup__form")),n=(t.querySelector(".popup__input_type_name"),t.querySelector(".popup__input_type_job"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".popup_add"));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function i(e,t,n){return(t=l(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}document.querySelector(".profile__add-button"),n.querySelector(".popup__close-button_add"),document.querySelector(".popup__close-button_view"),document.querySelector(".profile__avatar"),document.querySelector(".profile__avatar-button"),document.querySelector(".popup_avatar");var u=function(){function e(t,n,r,o,l,u,a){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_getTemplate",(function(){return document.querySelector("#element-template").content.querySelector(".element").cloneNode(!0)})),i(this,"_setEventListeners",(function(){c._image.addEventListener("click",(function(){c._handleCardClick(c._name,c._link)}))})),i(this,"_handleLikeClick",(function(e){e.target.classList.toggle("element__like_active")})),i(this,"_handleDelete",(function(){c._element.remove(),c._element=null})),i(this,"generateCard",(function(){return c._element=c._getTemplate(),c._title=c._element.querySelector(".element__title"),c._image=c._element.querySelector(".element__image"),c._deleteBtn=c._element.querySelector(".element__delete"),c._title.textContent=c._name,c._image.src=c._link,c._image.alt=c._name,c._hasDeleteBtn(),c._setEventListeners(),c._element})),this._name=t.name,this._link=t.link,this._templateSelector=n,this._userId=r,this._cardId=t._id,this._handleCardClick=o,this._handleDeleteIconClick=l,this._likes=t.likes,this._handleSetLike=u,this._handleRemoveLike=a}var t,n;return t=e,(n=[{key:"handleLikeCard",value:function(e){this._likes=e.likes,this._likeBtn.classList.toggle("element__like_active")}},{key:"_hasDeleteBtn",value:function(){this._userId!==this._cardOwnerId&&this._deleteBtn.remove()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var s=function(){function e(t){var n=t.username,r=t.job,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{username:this._userName.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userJob.textContent=t}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var m=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b,h=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.json()}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.json()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{Authorization:"940e7328-d290-4330-b219-7aff84540300","Content-Type":"application/json"}});Promise.all([h.getInitialCards(),h.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,u=[],a=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{if(!a&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];v.setUserInfo(i),b=i._id,S.renderItems(o)})).catch((function(e){console.log("Ошибка загрузки с сервера: ".concat(e))}));var v=new s({username:".profile__title",job:".profile__subtitle",avatar:".profile__avatar"}),S=new m({renderer:function(e){S.addItem(function(e){var t=new u({data:e,templateSelector:".element-template",userId:b,handleCardClick:function(e,t){viewImagePopup.open(e,t)},handleDeleteIconClick:function(e){deleteCardPopup.open(),deleteCardPopup.submitCallback((function(){h.deleteCard(e).then((function(){deleteCardPopup.close(),t.deleteCard()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))},handleSetLike:function(e){h.setLike(e).then((function(e){t.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},handleRemoveLike:function(e){h.deleteLike(e).then((function(e){t.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});return t.generateCard()}(e))}},".elements")})();