/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Satoshi-Regular.woff2 */ "./src/fonts/Satoshi-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Satoshi-Regular.woff */ "./src/fonts/Satoshi-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Satoshi-Bold.woff2 */ "./src/fonts/Satoshi-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Satoshi-Bold.woff */ "./src/fonts/Satoshi-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/search-icon.svg */ "./src/img/search-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.text_bold {
  font-weight: 700;
}

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-size: 100%; /* 16px */
}

body {
  margin: 0;
}

.preload-transitions * {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -ms-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
}

:root {
  --color-gray-400: #161617;
  --color-gray-300: #232325;
  --color-gray-200: #2f2f32;
  --color-yellow: #fdde55;
  --color-white-400: #fff;
  --color-white-300: hsla(0, 0%, 100%, 0.8);
  --color-white-200: hsla(0, 0%, 100%, 0.6);
  --color-white-100: hsla(0, 0%, 100%, 0.4);
  --color-bg-primary: var(--color-gray-400);
  --color-bg-secondary: var(--color-gray-300);
  --color-bg-tertiary: var(--color-gray-200);
  --color-bg-overlay: rgba(0, 0, 0, 0.6);
  --color-text-primary: var(--color-white-400);
  --color-text-secondary: var(--color-white-300);
}

@font-face {
  font-family: "Satoshi";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(woff2), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(woff);
}
@font-face {
  font-family: "Satoshi";
  font-weight: 700;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(woff2), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format(woff);
}
:root {
  --font-fallback: "Satoshi", sans-serif;
  --font-family-body: var(--font-fallback);
  --font-family-heading: var(--font-fallback);
  --font-size-900: 3.052rem;
  --font-size-800: 2.441rem;
  --font-size-700: 1.953rem;
  --font-size-600: 1.563rem;
  --font-size-500: 1.25rem;
  --font-size-400: 1rem;
  --font-size-300: 0.8rem;
  --font-size-body: var(--font-size-400);
  --font-size-h1: var(--font-size-800);
  --font-size-h2: var(--font-size-600);
  --font-size-h3: var(--font-size-500);
  --font-size-small: var(--font-size-300);
  --line-height-body: 1.75;
  --line-height-heading: 1.3;
  --font-type-body: 400 var(--font-size-body) / var(--line-height-body)
    var(--font-family-body);
  --font-type-h1: 700 var(--font-size-h1) / var(--line-height-heading)
    var(--font-family-heading);
  --font-type-h2: 700 var(--font-size-h2) / var(--line-height-heading)
    var(--font-family-heading);
  --font-type-h3: 700 var(--font-size-h3) / var(--line-height-heading)
    var(--font-family-heading);
}

:root {
  --border-radius-400: 0.875rem;
  --border-radius-300: 0.75rem;
  --border-radius-200: 0.5rem;
  --button-height-m: 2.25rem;
  --transition-popup: 0.3s cubic-bezier(0.3, 0, 0.2, 1);
  --transition-popup-open: 120ms ease-out;
}

.popup {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
}

.popup_opened {
  pointer-events: auto;
}
.popup_opened .popup__overlay {
  opacity: 1;
}
.popup_opened .popup__content {
  transform: translateY(0);
}

.popup__overlay {
  position: fixed;
  inset: 0;
  background: var(--color-bg-overlay);
  opacity: 0;
  transition: opacity var(--transition-popup);
}

.popup__content {
  position: relative;
  width: 100%;
  height: 300px;
  padding: 1rem 1.5rem;
  background: var(--color-bg-secondary);
  transform: translateY(100%);
  border-radius: var(--border-radius-400) var(--border-radius-400) 0 0;
  transition: transform var(--transition-popup);
}

body {
  font: var(--font-type-body);
  color: var(--color-text-primary);
}

.main {
  min-height: 100svh;
  background: var(--color-bg-primary);
}

.wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 8px;
}

.content {
  display: grid;
  row-gap: 10px;
  padding-top: 100px;
}

/* SEARCH */
.search {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
}

.search__form {
  display: flex;
  position: relative;
  height: 2.8rem;
  background: var(--color-bg-tertiary);
  border-radius: var(--border-radius-200);
  overflow: hidden;
}

.search__search-icon {
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  width: 25px;
  height: 25px;
  margin: auto 0;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-repeat: no-repeat;
  background-size: contain;
}

.search__input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 0.8rem 0.8rem 0.8rem 3rem;
  font: inherit;
  color: inherit;
}
.search__input:focus {
  outline: none;
}

.search__button {
  display: none;
  height: 100%;
  border: 0;
  margin: 0;
}

.filters {
  width: 100%;
}

.filters__button {
  display: grid;
  place-items: center;
  height: var(--button-height-m);
  /* height: 100px; */
  aspect-ratio: 1/1;
  border: 0;
  padding: 0;
  background: var(--color-bg-tertiary);
  border-radius: var(--border-radius-200);
}

.filters__button-svg {
  /* background: #fff; */
}
.filters__button-svg * {
  fill: #fff;
}

/* INGREDIENTS */
/* .ingredients {
  width: 100%;
  height: 100px;
  background: var(--color-bg-secondary);

  @media (width < 1024px) {
    display: none;
  }
} */
/* RECIPES */
.recipes {
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  width: 100%;
}

/* RECIPE CARD */
.recipe-card {
  width: 100%;
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-400);
}

.recipe-card__img-wrapper {
  height: 55.5vw;
  overflow: hidden;
  padding: 0.25rem;
  border-radius: var(--border-radius-400);
}

.recipe-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-300);
}

.recipe-card__description {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0.5rem 1rem;
}

.recipe-card__title {
  font: var(--font-type-h3);
  color: var(--color-text-secondary);
}`, "",{"version":3,"sources":["webpack://./src/scss/_abstract.scss","webpack://./src/scss/main.scss","webpack://./src/scss/_base.scss","webpack://./src/scss/_colors.scss","webpack://./src/scss/_fonts.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_variables.scss","webpack://./src/scss/popup.scss"],"names":[],"mappings":"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","sourcesContent":[".text_bold {\r\n  font-weight: 700;\r\n}\r\n","@import \"./_abstract.scss\";\n@import \"./_base.scss\";\n@import \"./_colors.scss\";\n@import \"./_fonts.scss\";\n@import \"./_typography.scss\";\n@import \"./_variables.scss\";\n@import \"./popup.scss\";\n\nbody {\n  font: var(--font-type-body);\n  color: var(--color-text-primary);\n}\n\n.main {\n  min-height: 100svh;\n  background: var(--color-bg-primary);\n}\n\n.wrapper {\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n\n.content {\n  display: grid;\n  row-gap: 10px;\n\n  padding-top: 100px;\n}\n\n/* SEARCH */\n\n.search {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n\n  width: 100%;\n}\n\n.search__form {\n  display: flex;\n  position: relative;\n\n  height: 2.8rem;\n  background: var(--color-bg-tertiary);\n\n  border-radius: var(--border-radius-200);\n  overflow: hidden;\n}\n\n.search__search-icon {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 10px;\n\n  width: 25px;\n  height: 25px;\n  margin: auto 0;\n\n  background: url(\"../img/search-icon.svg\");\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.search__input {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n\n  padding: 0.8rem 0.8rem 0.8rem 3rem;\n\n  font: inherit;\n  color: inherit;\n\n  &:focus {\n    outline: none;\n  }\n}\n\n.search__button {\n  display: none;\n\n  height: 100%;\n  border: 0;\n  margin: 0;\n}\n\n.filters {\n  width: 100%;\n}\n\n.filters__button {\n  display: grid;\n  place-items: center;\n\n  height: var(--button-height-m);\n  /* height: 100px; */\n  aspect-ratio: 1 / 1;\n  border: 0;\n  padding: 0;\n  background: var(--color-bg-tertiary);\n\n  border-radius: var(--border-radius-200);\n}\n\n.filters__button-svg {\n  /* background: #fff; */\n  & * {\n    fill: #fff;\n  }\n}\n\n/* INGREDIENTS */\n\n/* .ingredients {\n  width: 100%;\n  height: 100px;\n  background: var(--color-bg-secondary);\n\n  @media (width < 1024px) {\n    display: none;\n  }\n} */\n\n/* RECIPES */\n\n.recipes {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.75rem;\n\n  width: 100%;\n}\n\n/* RECIPE CARD */\n\n.recipe-card {\n  width: 100%;\n  background: var(--color-bg-secondary);\n\n  border-radius: var(--border-radius-400);\n}\n\n.recipe-card__img-wrapper {\n  height: 55.5vw;\n  overflow: hidden;\n  padding: 0.25rem;\n\n  border-radius: var(--border-radius-400);\n}\n\n.recipe-card__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n\n  border-radius: var(--border-radius-300);\n}\n\n.recipe-card__description {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n\n  padding: 0.5rem 1rem;\n}\n\n.recipe-card__title {\n  font: var(--font-type-h3);\n  color: var(--color-text-secondary);\n}\n\n.recipe-card__cooking-time {\n}\n","*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 100%; /* 16px */\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.preload-transitions * {\r\n  -webkit-transition: none !important;\r\n  -moz-transition: none !important;\r\n  -ms-transition: none !important;\r\n  -o-transition: none !important;\r\n  transition: none !important;\r\n}\r\n",":root {\r\n  --color-gray-400: #161617;\r\n  --color-gray-300: #232325;\r\n  --color-gray-200: #2f2f32;\r\n  --color-yellow: #fdde55;\r\n\r\n  --color-white-400: #fff;\r\n  --color-white-300: hsla(0, 0%, 100%, 0.8);\r\n  --color-white-200: hsla(0, 0%, 100%, 0.6);\r\n  --color-white-100: hsla(0, 0%, 100%, 0.4);\r\n\r\n  --color-bg-primary: var(--color-gray-400);\r\n  --color-bg-secondary: var(--color-gray-300);\r\n  --color-bg-tertiary: var(--color-gray-200);\r\n  --color-bg-overlay: rgba(0, 0, 0, 0.6);\r\n\r\n  --color-text-primary: var(--color-white-400);\r\n  --color-text-secondary: var(--color-white-300);\r\n}\r\n","@font-face {\r\n  font-family: \"Satoshi\";\r\n  font-weight: 400;\r\n  src: url(../fonts/Satoshi-Regular.woff2) format(woff2),\r\n    url(../fonts/Satoshi-Regular.woff) format(woff);\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Satoshi\";\r\n  font-weight: 700;\r\n  src: url(../fonts/Satoshi-Bold.woff2) format(woff2),\r\n    url(../fonts/Satoshi-Bold.woff) format(woff);\r\n}\r\n",":root {\r\n  --font-fallback: \"Satoshi\", sans-serif;\r\n  --font-family-body: var(--font-fallback);\r\n  --font-family-heading: var(--font-fallback);\r\n\r\n  --font-size-900: 3.052rem;\r\n  --font-size-800: 2.441rem;\r\n  --font-size-700: 1.953rem;\r\n  --font-size-600: 1.563rem;\r\n  --font-size-500: 1.25rem;\r\n  --font-size-400: 1rem;\r\n  --font-size-300: 0.8rem;\r\n\r\n  --font-size-body: var(--font-size-400);\r\n  --font-size-h1: var(--font-size-800);\r\n  --font-size-h2: var(--font-size-600);\r\n  --font-size-h3: var(--font-size-500);\r\n  --font-size-small: var(--font-size-300);\r\n  --line-height-body: 1.75;\r\n  --line-height-heading: 1.3;\r\n\r\n  --font-type-body: 400 var(--font-size-body) / var(--line-height-body)\r\n    var(--font-family-body);\r\n  --font-type-h1: 700 var(--font-size-h1) / var(--line-height-heading)\r\n    var(--font-family-heading);\r\n  --font-type-h2: 700 var(--font-size-h2) / var(--line-height-heading)\r\n    var(--font-family-heading);\r\n  --font-type-h3: 700 var(--font-size-h3) / var(--line-height-heading)\r\n    var(--font-family-heading);\r\n}\r\n",":root {\r\n  --border-radius-400: 0.875rem;\r\n  --border-radius-300: 0.75rem;\r\n  --border-radius-200: 0.5rem;\r\n\r\n  --button-height-m: 2.25rem;\r\n\r\n  --transition-popup: 0.3s cubic-bezier(0.3, 0, 0.2, 1);\r\n  --transition-popup-open: 120ms ease-out;\r\n}\r\n",".popup {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: fixed;\n  inset: 0;\n  z-index: 100;\n\n  pointer-events: none;\n}\n\n.popup_opened {\n  pointer-events: auto;\n\n  & .popup__overlay {\n    opacity: 1;\n  }\n\n  & .popup__content {\n    transform: translateY(0);\n  }\n}\n\n.popup__overlay {\n  position: fixed;\n  inset: 0;\n\n  background: var(--color-bg-overlay);\n\n  opacity: 0;\n\n  transition: opacity var(--transition-popup);\n}\n\n.popup__content {\n  position: relative;\n\n  width: 100%;\n  height: 300px;\n  padding: 1rem 1.5rem;\n  background: var(--color-bg-secondary);\n\n  transform: translateY(100%);\n  border-radius: var(--border-radius-400) var(--border-radius-400) 0 0;\n\n  transition: transform var(--transition-popup);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData)
/* harmony export */ });
const ACESS_POINT = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c7a90a5da456492890c94a3e2f7e9b38";

const fetchData = async function (queries, successCallback) {
  const query = queries?.join("&").replace(/,/g, "=");

  const url = `${ACESS_POINT}?apiKey=${API_KEY}${query ? `&${query}` : ""}`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  }
};


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./src/js/search.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.js */ "./src/js/filters.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");




/* HANDLERS */
document.addEventListener("DOMContentLoaded", (event) => {
  (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.addSearchFormHandlers)();
  (0,_filters_js__WEBPACK_IMPORTED_MODULE_1__.addFiltersButtonHandlers)();
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.addHandlersToAllPopups)();
});


/***/ }),

/***/ "./src/js/filters.js":
/*!***************************!*\
  !*** ./src/js/filters.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFiltersButtonHandlers: () => (/* binding */ addFiltersButtonHandlers)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");


const handleFiltersButtonClick = (event) => {
  const filtersPopup = document.querySelector(".filters-popup");
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.openPopup)(filtersPopup);
};

const addFiltersButtonHandlers = () => {
  const filtersButtonElem = document.querySelector(".filters__button");

  filtersButtonElem.addEventListener("click", handleFiltersButtonClick);
};


/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHandlersToAllPopups: () => (/* binding */ addHandlersToAllPopups),
/* harmony export */   openPopup: () => (/* binding */ openPopup)
/* harmony export */ });
const getPopupContentHeight = (popupContentElem) => {
  return popupContentElem.offsetHeight;
};

const clearPopupInlineStyles = (popupContentElem, popupOverlayElem) => {
  popupContentElem.style = "";
  popupOverlayElem.style = "";
};

const setPopupContentTranslateY = (popupContentElem, translateValue) => {
  popupContentElem.style.transform = `translateY(${translateValue})`;
};

const setPopupOverlayOpacity = (popupOverlayElem, opacityValue) => {
  popupOverlayElem.style.opacity = opacityValue;
};

const makePopupTransformFaster = (popupContentElem, popupOverlayElem) => {
  popupContentElem.style.transition = `transform var(--transition-popup-open)`;
  popupOverlayElem.style.transition = `opacity var(--transition-popup-open)`;
};

const openPopup = (popupElem) => {
  popupElem.classList.add("popup_opened");
};

const closePopup = (popupElem) => {
  popupElem.classList.remove("popup_opened");
};

const addPopupTouchHandlers = (popupElem) => {
  const popupContentElem = popupElem.querySelector(".popup__content");
  const popupOverlayElem = popupElem.querySelector(".popup__overlay");

  const popupContentHeight = getPopupContentHeight(popupContentElem);

  let startTouchData = {};
  let popupSwiped = false;

  const handlePopupTouchstart = (event) => {
    event.preventDefault();

    popupSwiped = false;

    startTouchData.startY = event.touches[0].clientY;
    startTouchData.startTime = Date.now();

    popupElem.addEventListener("touchmove", handlePopupTouchmove);
  };

  const handlePopupTouchmove = (event) => {
    event.preventDefault();

    makePopupTransformFaster(popupContentElem, popupOverlayElem);

    const currentY = event.touches[0].clientY;

    const deltaY = currentY - startTouchData.startY;
    const deltaTime = Date.now() - startTouchData.startTime;
    const touchVelocity = deltaY / deltaTime;

    if (deltaY >= 0) {
      let contentTranslate = (deltaY / popupContentHeight) * 100;

      setPopupContentTranslateY(popupContentElem, `${contentTranslate}%`);
      setPopupOverlayOpacity(popupOverlayElem, 1 - contentTranslate / 100);
    }

    if (touchVelocity > 0.5) {
      popupSwiped = true;
    }
  };

  const handlePopupTouchend = (event) => {
    event.preventDefault();

    const endY = event.changedTouches[0].clientY;

    const deltaY = endY - startTouchData.startY;

    if (popupSwiped || deltaY > popupContentHeight * 0.7) {
      closePopup(popupElem);
    }

    clearPopupInlineStyles(popupContentElem, popupOverlayElem);

    popupElem.removeEventListener("touchmove", handlePopupTouchmove);
  };

  popupElem.addEventListener("touchstart", handlePopupTouchstart);
  popupElem.addEventListener("touchend", handlePopupTouchend);
};

const addHandlersToAllPopups = () => {
  const popupElems = document.querySelectorAll(".popup");

  popupElems.forEach((popupElem) => {
    addPopupTouchHandlers(popupElem);
  });
};


/***/ }),

/***/ "./src/js/recipe.js":
/*!**************************!*\
  !*** ./src/js/recipe.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayParsedRecipe: () => (/* binding */ displayParsedRecipe)
/* harmony export */ });
const displayParsedRecipe = ({
  image,
  title = "untitled",
  src = "",
  cookingTime = "",
}) => {
  const recipesElem = document.querySelector(".recipes");

  const recipeCardElem = document.createElement("div");
  recipeCardElem.classList.add("recipe-card");

  recipeCardElem.innerHTML = `
    <div class="recipe-card__img-wrapper">
      <img src=${image} class="recipe-card__img" />
    </div>
      <div class="recipe-card__description">
      <div class="recipe-card__title">${title}</div>
      <div class="recipe-card__cooking-time"><span class="text_bold">${cookingTime}</span> minutes</div>
    </div>
  `;

  recipesElem.appendChild(recipeCardElem);
};


/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSearchFormHandlers: () => (/* binding */ addSearchFormHandlers)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/js/api.js");
/* harmony import */ var _recipe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.js */ "./src/js/recipe.js");



/* FUNCTIONS */

const getSearchInputValue = () => {
  const searchInput = document.querySelector(".search__input");

  return searchInput.value;
};

const createRecipeQueries = (searchInputValue, numberOfRecipes) => {
  let queries = [];

  queries.push(["query", searchInputValue]);
  queries.push(["number", numberOfRecipes]);
  queries.push(["addRecipeInformation", true]);

  return queries;
};

const clearRecipesList = () => {
  const recipesElem = document.querySelector(".recipes");
  recipesElem.innerHTML = "";
};

const parseRecipes = (fetchedData) => {
  clearRecipesList();

  fetchedData.results.forEach((fetchedRecipe) => {
    const {
      image: image,
      title,
      readyInMinutes: cookingTime,
      sourceUrl: src,
    } = fetchedRecipe;

    const parsedRecipe = { image, title, cookingTime, src };

    (0,_recipe_js__WEBPACK_IMPORTED_MODULE_1__.displayParsedRecipe)(parsedRecipe);
  });
};

const handleSearchFormSubmit = (event) => {
  event.preventDefault();

  const searchInputValue = getSearchInputValue();
  const queries = createRecipeQueries(searchInputValue, 5);

  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)([...queries], parseRecipes);
};

const addSearchFormHandlers = () => {
  const searchForm = document.querySelector(".search__form");

  searchForm.addEventListener("submit", handleSearchFormSubmit);
};


/***/ }),

/***/ "./src/fonts/Satoshi-Bold.woff":
/*!*************************************!*\
  !*** ./src/fonts/Satoshi-Bold.woff ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a875ff682ee232938607.woff";

/***/ }),

/***/ "./src/fonts/Satoshi-Bold.woff2":
/*!**************************************!*\
  !*** ./src/fonts/Satoshi-Bold.woff2 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0e6d25529eab537426c.woff2";

/***/ }),

/***/ "./src/fonts/Satoshi-Regular.woff":
/*!****************************************!*\
  !*** ./src/fonts/Satoshi-Regular.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca3da5fd2b609836ef69.woff";

/***/ }),

/***/ "./src/fonts/Satoshi-Regular.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/Satoshi-Regular.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ec05085c4cd2966eba8.woff2";

/***/ }),

/***/ "./src/img/search-icon.svg":
/*!*********************************!*\
  !*** ./src/img/search-icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cd518997b20d39c3270.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");



})();

/******/ })()
;
//# sourceMappingURL=build.js.map