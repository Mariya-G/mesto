(()=>{"use strict";var e=document.querySelector(".popup_view"),t=(e.querySelector(".popup__image"),e.querySelector(".popup__name"),document.querySelector(".profile__edit-button"),document.querySelector(".popup_edit").querySelector(".popup__close-button_edit"),document.querySelector(".popup__form")),r=(t.querySelector(".popup__input_type_name"),t.querySelector(".popup__input_type_job"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".popup_add"));function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,u=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===o(u)?u:String(u)),n)}var u}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}document.querySelector(".profile__add-button"),r.querySelector(".popup__close-button_add"),document.querySelector(".popup__close-button_view"),document.querySelector(".profile__avatar"),document.querySelector(".profile__avatar-button"),document.querySelector(".popup_avatar");var i=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,r;return t=e,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.json()}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.json()}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{Authorization:"940e7328-d290-4330-b219-7aff84540300","Content-Type":"application/json"}});Promise.all([i.getInitialCards(),i.getUserInfo()]).then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,u,i,l=[],a=!0,c=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(o=u.call(r)).done)&&(l.push(o.value),l.length!==t);a=!0);}catch(e){c=!0,n=e}finally{try{if(!a&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw n}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=o[0],i=o[1];console.log(n),console.log("user: ".concat(i))}))})();