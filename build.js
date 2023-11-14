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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
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
  --color-bg-highlight: var(--color-white-200);
  --color-text-primary: var(--color-white-400);
  --color-text-secondary: var(--color-white-300);
  --color-text-tertiary: var(--color-white-100);
  --color-text-highlight: #000;
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
  --button-height: 2.25rem;
  --text-input-height: 42px;
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
  height: 100%;
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
  overflow: auto;
  width: 100%;
  height: auto;
  max-height: calc(100% - 3rem);
  background: var(--color-bg-secondary);
  transform: translateY(100%);
  border-radius: var(--border-radius-400) var(--border-radius-400) 0 0;
  scroll-behavior: smooth;
  transition: transform var(--transition-popup);
}

/* -------------------------------------------------------------------------- */
/*                                   SEARCH                                   */
/* -------------------------------------------------------------------------- */
.recipes-search-container {
  display: grid;
  row-gap: 10px;
  padding: 1rem 0;
}

.ingredients-search {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  column-gap: 0.75rem;
  row-gap: 0.75rem;
  width: 100%;
}
.ingredients-search__selected-ingredients {
  grid-column: 1/3;
}

.ingredients-search__form {
  display: flex;
  flex-direction: column;
  position: relative;
  height: var(--text-input-height);
}

.ingredients-search__input-container {
  position: relative;
  height: 100%;
}

.ingredients-search__search-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-left: 0.75rem;
  fill: #fff;
  pointer-events: none;
}

.ingredients-search__input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: var(--color-bg-secondary);
  padding: 0 0.8rem;
  padding-left: 2.75rem;
  border-radius: var(--border-radius-200);
  font: inherit;
  color: inherit;
}
.ingredients-search__input::placeholder {
  font: var(--font-type-body);
  color: var(--color-text-tertiary);
}

/* -------------------------------------------------------------------------- */
/*                        INGREDIENT SEARCH SUGGESTIONS                       */
/* -------------------------------------------------------------------------- */
.ingredients-search__suggestions {
  display: none;
  position: absolute;
  top: calc(100% + 0.5rem);
  overflow: hidden;
  z-index: 10;
  width: 100%;
  background: var(--color-bg-secondary);
  font: var(--font-type-body);
  border-radius: var(--border-radius-200);
}

.ingredients-search__suggestions_show {
  display: block;
}

.ingredients-search__suggestions-list {
  max-height: calc(var(--text-input-height) * 5);
  margin: 0;
  padding: 0;
  overflow: auto;
  text-indent: 0;
  list-style-type: none;
}

.ingredients-search__suggestions-item {
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  height: var(--text-input-height);
}
.ingredients-search__suggestions-item_active {
  background: var(--color-bg-tertiary);
}

/* -------------------------------------------------------------------------- */
/*                          SELECTED INGREDIENTS MENU                         */
/* -------------------------------------------------------------------------- */
.selected-ingredients-menu {
  width: 100%;
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-200);
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.selected-ingredients-menu_active .selected-ingredients-menu__body {
  grid-template-rows: 1fr;
  border-width: 2px;
  transition: grid-template-rows 0.2s;
}
.selected-ingredients-menu_active .selected-ingredients-menu__arrow-down-icon {
  transform: rotateX(180deg);
  transition: transform 0.2s;
}

.selected-ingredients-menu__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75rem;
  min-height: 42px;
}

.selected-ingredients-menu__arrow-down-icon {
  fill: #fff;
  transition: transform 0.3s;
}

.selected-ingredients-menu__body {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  padding: 0 0.5rem;
  border-top: solid var(--color-bg-primary);
  border-width: 0;
  transition: grid-template-rows 0.2s, border 0s 0.2s;
}

.selected-ingredients-menu__content {
  overflow: hidden;
}

.selected-ingredients-menu__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem 0;
  margin: 0;
  text-indent: 0;
  list-style-type: none;
}
.selected-ingredients-menu__list[empty] .selected-ingredients-menu__list-message {
  display: block;
}

.selected-ingredients-menu__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 36px;
  padding: 0 0.75rem;
  background: var(--color-bg-tertiary);
  border-radius: 18px;
  font: var(--font-type-body);
}
.selected-ingredients-menu__item-xmark-icon {
  position: relative;
  top: 1px;
  fill: #fff;
}

.selected-ingredients-menu__list-message {
  display: none;
  margin: 0 auto;
  padding: 0;
  color: var(--color-text-secondary);
}

/* -------------------------------------------------------------------------- */
/*                                   RECIPES                                  */
/* -------------------------------------------------------------------------- */
.recipe-search-button {
  padding: 0.5rem;
  background: var(--color-bg-tertiary);
  border: none;
  border-radius: var(--border-radius-200);
  color: inherit;
  font: inherit;
  font-weight: bold;
}

.recipes__cards-list {
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  width: 100%;
}

/* -------------------------------------------------------------------------- */
/*                                 RECIPE CARD                                */
/* -------------------------------------------------------------------------- */
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
}

.recipe-card__cooking-time-value {
  font-weight: 700;
}

/* -------------------------------------------------------------------------- */
/*                                   RECIPE                                   */
/* -------------------------------------------------------------------------- */
.recipe {
  position: fixed;
  inset: 0;
  overflow: auto;
  background: var(--color-bg-primary);
  transform: translateX(100%);
  transition: transform 0.3s;
}
.recipe_show {
  transform: translateX(0%);
}

.recipe-content {
  width: 100%;
  height: 100%;
}

.recipe__header {
  position: relative;
}

.recipe__close-button {
  display: grid;
  place-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 35px;
  height: 35px;
  border: none;
  background-color: var(--color-bg-primary);
  border-radius: 50%;
  color: inherit;
  font: inherit;
}
.recipe__close-button svg {
  width: 1rem;
  fill: #fff;
}

.recipe__img-wrapper {
  height: 60vw;
  overflow: hidden;
  box-shadow: inset 0 0 20px 10px rgba(0, 0, 0, 0.6);
}

.recipe__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: -1;
}

.recipe__body {
  position: relative;
  top: -1rem;
  padding: 1rem;
  background: var(--color-bg-primary);
  border-radius: var(--border-radius-400);
}

.recipe__title {
  font: var(--font-type-h3);
}

.recipe__cooking-time {
  font: var(--font-type-body);
  color: var(--color-text-secondary);
}

.tab-menu {
  margin-top: 1rem;
}

.tab-menu__tab-buttons {
  display: flex;
}

.tab-menu__tab-button {
  width: 100%;
  padding: 0.5rem;
  border: none;
  background: var(--color-bg-secondary);
  font: var(--font-type-body);
  color: var(--color-text-primary);
}
.tab-menu__tab-button:first-child {
  border-radius: var(--border-radius-200) 0 0 var(--border-radius-200);
}
.tab-menu__tab-button:last-child {
  border-radius: 0 var(--border-radius-200) var(--border-radius-200) 0;
}
.tab-menu__tab-button_active {
  background: var(--color-bg-tertiary);
}

.tab-menu__content-box {
  margin-top: 1rem;
}

.tab-menu__content-item {
  display: none;
}
.tab-menu__content-item_active {
  display: block;
}

.recipe__ingredients-list {
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
}

.recipe__ingredient {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-left: 1.25rem;
  font: var(--font-type-body);
  color: var(--color-text-secondary);
}
.recipe__ingredient::before {
  content: "+";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
.recipe__ingredient_used {
  color: var(--color-text-primary);
}
.recipe__ingredient_used::before {
  content: "";
  left: 1px;
  top: 3px;
  width: 7px;
  height: 7px;
  background: #fff;
  border-radius: 50%;
}

.recipe__instruction-steps-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
}

.instruction-step {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  font: var(--font-type-body);
  line-height: 1.5;
}

.instruction-step__step {
  margin: 0;
}

/* -------------------------------------------------------------------------- */
/*                                   FILTERS                                  */
/* -------------------------------------------------------------------------- */
.filters__button {
  display: grid;
  place-items: center;
  height: 42px;
  aspect-ratio: 1/1;
  border: 0;
  padding: 0;
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-200);
}

.filters__button-svg * {
  fill: #fff;
}

.filters {
  position: relative;
  padding: 1.5rem 0;
}

.filters__body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--color-bg-secondary);
  padding: 0 1.5rem;
}

/* -------------------------------------------------------------------------- */
/*                             POPULAR INGREDIENTS                            */
/* -------------------------------------------------------------------------- */
.popular-ingredients__title {
  font: var(--font-type-h3);
  color: var(--color-text-secondary);
}

.popular-ingredients__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  margin-top: 0.75rem;
  text-indent: 0;
  list-style-type: none;
}

.popular-ingredients__list-item {
  display: flex;
  align-items: center;
  padding: 0.1rem 0.7rem;
  background: var(--color-bg-tertiary);
  border-radius: var(--border-radius-300);
}
.popular-ingredients__list-item_selected {
  background: var(--color-bg-highlight);
  color: var(--color-text-highlight);
}

body {
  font: var(--font-type-body);
  color: var(--color-text-primary);
}

.prevent-scrolling {
  overflow: hidden;
}

.main {
  min-height: 100svh;
  background: var(--color-bg-primary);
}

.wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}`, "",{"version":3,"sources":["webpack://./src/scss/base/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_colors.scss","webpack://./src/scss/base/_fonts.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_variables.scss","webpack://./src/scss/popup.scss","webpack://./src/scss/search.scss","webpack://./src/scss/recipes.scss","webpack://./src/scss/filters.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;ACCF;;ADEA;EACE,eAAA,EAAA,SAAA;ACCF;;ADEA;EACE,SAAA;ACCF;;ADEA;EACE,mCAAA;EACA,gCAAA;EACA,+BAAA;EACA,8BAAA;EACA,2BAAA;ACCF;;ACpBA;EACE,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,uBAAA;EAEA,uBAAA;EACA,yCAAA;EACA,yCAAA;EACA,yCAAA;EAEA,yCAAA;EACA,2CAAA;EACA,0CAAA;EACA,sCAAA;EACA,4CAAA;EAEA,4CAAA;EACA,8CAAA;EACA,6CAAA;EACA,4BAAA;ADoBF;;AExCA;EACE,sBAAA;EACA,gBAAA;EACA,gHAAA;AF2CF;AErCA;EACE,sBAAA;EACA,gBAAA;EACA,gHAAA;AFuCF;AGnDA;EACE,sCAAA;EACA,wCAAA;EACA,2CAAA;EAEA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,wBAAA;EACA,qBAAA;EACA,uBAAA;EAEA,sCAAA;EACA,oCAAA;EACA,oCAAA;EACA,oCAAA;EACA,uCAAA;EACA,wBAAA;EACA,0BAAA;EAEA;2BAAA;EAEA;8BAAA;EAEA;8BAAA;EAEA;8BAAA;AHmDF;;AI9EA;EACE,6BAAA;EACA,4BAAA;EACA,2BAAA;EAEA,wBAAA;EAEA,yBAAA;EAEA,qDAAA;EACA,uCAAA;AJ8EF;;AKxFA;EACE,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,eAAA;EACA,QAAA;EACA,YAAA;EAEA,YAAA;EAEA,oBAAA;ALyFF;;AKtFA;EACE,oBAAA;ALyFF;AKvFE;EACE,UAAA;ALyFJ;AKtFE;EACE,wBAAA;ALwFJ;;AKpFA;EACE,eAAA;EACA,QAAA;EAEA,mCAAA;EAEA,UAAA;EAEA,2CAAA;ALoFF;;AKjFA;EACE,kBAAA;EACA,cAAA;EAEA,WAAA;EACA,YAAA;EACA,6BAAA;EACA,qCAAA;EAEA,2BAAA;EACA,oEAAA;EAEA,uBAAA;EAEA,6CAAA;ALgFF;;AMlIA,+EAAA;AACA,+EAAA;AACA,+EAAA;AAEA;EACE,aAAA;EACA,aAAA;EAEA,eAAA;ANmIF;;AMhIA;EACE,aAAA;EACA,+BAAA;EACA,6BAAA;EACA,mBAAA;EACA,gBAAA;EAEA,WAAA;ANkIF;AMhIE;EACE,gBAAA;ANkIJ;;AM9HA;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EAEA,gCAAA;ANgIF;;AM7HA;EACE,kBAAA;EAEA,YAAA;AN+HF;;AM5HA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EAEA,YAAA;EACA,oBAAA;EAEA,UAAA;EACA,oBAAA;AN6HF;;AM1HA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,qCAAA;EAEA,iBAAA;EACA,qBAAA;EAEA,uCAAA;EAEA,aAAA;EACA,cAAA;AN0HF;AMxHE;EACE,2BAAA;EACA,iCAAA;AN0HJ;;AMtHA,+EAAA;AACA,+EAAA;AACA,+EAAA;AAEA;EACE,aAAA;EACA,kBAAA;EACA,wBAAA;EACA,gBAAA;EACA,WAAA;EAEA,WAAA;EAEA,qCAAA;EAEA,2BAAA;EACA,uCAAA;ANqHF;;AMlHA;EACE,cAAA;ANqHF;;AMlHA;EACE,8CAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EAEA,cAAA;EACA,qBAAA;ANoHF;;AMjHA;EACE,aAAA;EACA,mBAAA;EAEA,iBAAA;EACA,gCAAA;ANmHF;AMjHE;EACE,oCAAA;ANmHJ;;AM/GA,+EAAA;AACA,+EAAA;AACA,+EAAA;AAEA;EACE,WAAA;EACA,qCAAA;EAGA,uCAAA;EAEA,eAAA;EACA,mDAAA;AN8GF;AM3GI;EACE,uBAAA;EAEA,iBAAA;EAEA,mCAAA;AN2GN;AMxGI;EACE,0BAAA;EAEA,0BAAA;ANyGN;;AMpGA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EAEA,kBAAA;EAEA,gBAAA;ANqGF;;AMlGA;EACE,UAAA;EACA,0BAAA;ANqGF;;AMlGA;EACE,aAAA;EACA,uBAAA;EACA,gBAAA;EAEA,iBAAA;EACA,yCAAA;EACA,eAAA;EAEA,mDAAA;ANmGF;;AMhGA;EACE,gBAAA;ANmGF;;AMhGA;EACE,aAAA;EACA,eAAA;EACA,WAAA;EAEA,iBAAA;EACA,SAAA;EAEA,cAAA;EACA,qBAAA;ANiGF;AM9FI;EACE,cAAA;ANgGN;;AM3FA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EAEA,gBAAA;EACA,kBAAA;EACA,oCAAA;EAGA,mBAAA;EACA,2BAAA;AN2FF;AMzFE;EACE,kBAAA;EACA,QAAA;EAEA,UAAA;AN0FJ;;AMtFA;EACE,aAAA;EAEA,cAAA;EACA,UAAA;EAEA,kCAAA;ANuFF;;AOvTA,+EAAA;AACA,+EAAA;AACA,+EAAA;AAEA;EACE,eAAA;EACA,oCAAA;EACA,YAAA;EAEA,uCAAA;EAEA,cAAA;EACA,aAAA;EACA,iBAAA;APuTF;;AOpTA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EAEA,WAAA;APsTF;;AOnTA,+EAAA;AACA,+EAAA;AACA,+EAAA;AAEA;EACE,WAAA;EACA,qCAAA;EAEA,uCAAA;APoTF;;AOjTA;EACE,cAAA;EACA,gBAAA;EACA,gBAAA;EAEA,uCAAA;APmTF;;AOhTA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EAEA,uCAAA;APkTF;;AO/SA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EAEA,oBAAA;APiTF;;AO9SA;EACE,yBAAA;EACA,kCAAA;APiTF;;AO9SA;EACE,gBAAA;APiTF;;AO9SA,+EAAA;AACA,+EAAA;AACA,+EAAA;AACA;EACE,eAAA;EACA,QAAA;EACA,cAAA;EAEA,mCAAA;EAEA,2BAAA;EAEA,0BAAA;AP8SF;AO5SE;EACE,yBAAA;AP8SJ;;AO1SA;EACE,WAAA;EACA,YAAA;AP6SF;;AO1SA;EACE,kBAAA;AP6SF;;AO1SA;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EAEA,WAAA;EACA,YAAA;EACA,YAAA;EACA,yCAAA;EAEA,kBAAA;EAEA,cAAA;EACA,aAAA;AP0SF;AOxSE;EACE,WAAA;EACA,UAAA;AP0SJ;;AOtSA;EACE,YAAA;EACA,gBAAA;EAEA,kDAAA;APwSF;;AOrSA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;APwSF;;AOrSA;EACE,kBAAA;EACA,UAAA;EAEA,aAAA;EACA,mCAAA;EAEA,uCAAA;APsSF;;AOnSA;EACE,yBAAA;APsSF;;AOnSA;EACE,2BAAA;EACA,kCAAA;APsSF;;AOnSA;EACE,gBAAA;APsSF;;AOnSA;EACE,aAAA;APsSF;;AOnSA;EACE,WAAA;EACA,eAAA;EACA,YAAA;EACA,qCAAA;EAEA,2BAAA;EACA,gCAAA;APqSF;AOnSE;EACE,oEAAA;APqSJ;AOlSE;EACE,oEAAA;APoSJ;AOjSE;EACE,oCAAA;APmSJ;;AO/RA;EACE,gBAAA;APkSF;;AO/RA;EACE,aAAA;APkSF;AOhSE;EACE,cAAA;APkSJ;;AO9RA;EACE,SAAA;EACA,UAAA;EACA,cAAA;EACA,qBAAA;APiSF;;AO9RA;EACE,aAAA;EACA,8BAAA;EACA,kBAAA;EAEA,qBAAA;EAEA,2BAAA;EACA,kCAAA;AP+RF;AO7RE;EACE,YAAA;EAEA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EAEA,cAAA;AP6RJ;AOxRE;EACE,gCAAA;AP0RJ;AOxRI;EACE,WAAA;EAEA,SAAA;EACA,QAAA;EAEA,UAAA;EACA,WAAA;EACA,gBAAA;EAEA,kBAAA;APuRN;;AOzQA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EAEA,SAAA;EACA,UAAA;EAEA,cAAA;EACA,qBAAA;AP0QF;;AOvQA;EACE,aAAA;EACA,iCAAA;EAEA,2BAAA;EACA,gBAAA;APyQF;;AOnQA;EACE,SAAA;APsQF;;AQ1hBA,+EAAA;AACA,+EAAA;AACA,+EAAA;AAEA;EACE,aAAA;EACA,mBAAA;EAEA,YAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;EACA,qCAAA;EAEA,uCAAA;AR0hBF;;AQthBE;EACE,UAAA;ARyhBJ;;AQrhBA;EACE,kBAAA;EAEA,iBAAA;ARuhBF;;AQphBA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EAEA,qCAAA;EAEA,iBAAA;ARqhBF;;AQlhBA,+EAAA;AACA,+EAAA;AACA,+EAAA;AAKA;EACE,yBAAA;EACA,kCAAA;ARihBF;;AQ9gBA;EACE,aAAA;EACA,eAAA;EACA,WAAA;EAEA,UAAA;EACA,SAAA;EACA,mBAAA;EAEA,cAAA;EACA,qBAAA;AR+gBF;;AQ5gBA;EACE,aAAA;EACA,mBAAA;EAEA,sBAAA;EACA,oCAAA;EAEA,uCAAA;AR6gBF;AQ3gBE;EACE,qCAAA;EAEA,kCAAA;AR4gBJ;;AAllBA;EACE,2BAAA;EACA,gCAAA;AAqlBF;;AAllBA;EACE,gBAAA;AAqlBF;;AAllBA;EACE,kBAAA;EACA,mCAAA;AAqlBF;;AAllBA;EACE,WAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;AAqlBF","sourcesContent":["*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 100%; /* 16px */\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.preload-transitions * {\r\n  -webkit-transition: none !important;\r\n  -moz-transition: none !important;\r\n  -ms-transition: none !important;\r\n  -o-transition: none !important;\r\n  transition: none !important;\r\n}\r\n","@import \"./base/index.scss\";\n@import \"./popup.scss\";\n@import \"./search.scss\";\n@import \"./recipes.scss\";\n@import \"./filters.scss\";\n\nbody {\n  font: var(--font-type-body);\n  color: var(--color-text-primary);\n}\n\n.prevent-scrolling {\n  overflow: hidden;\n}\n\n.main {\n  min-height: 100svh;\n  background: var(--color-bg-primary);\n}\n\n.wrapper {\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 16px;\n}\n\n.content {\n}\n",":root {\r\n  --color-gray-400: #161617;\r\n  --color-gray-300: #232325;\r\n  --color-gray-200: #2f2f32;\r\n  --color-yellow: #fdde55;\r\n\r\n  --color-white-400: #fff;\r\n  --color-white-300: hsla(0, 0%, 100%, 0.8);\r\n  --color-white-200: hsla(0, 0%, 100%, 0.6);\r\n  --color-white-100: hsla(0, 0%, 100%, 0.4);\r\n\r\n  --color-bg-primary: var(--color-gray-400);\r\n  --color-bg-secondary: var(--color-gray-300);\r\n  --color-bg-tertiary: var(--color-gray-200);\r\n  --color-bg-overlay: rgba(0, 0, 0, 0.6);\r\n  --color-bg-highlight: var(--color-white-200);\r\n\r\n  --color-text-primary: var(--color-white-400);\r\n  --color-text-secondary: var(--color-white-300);\r\n  --color-text-tertiary: var(--color-white-100);\r\n  --color-text-highlight: #000;\r\n}\r\n","@font-face {\r\n  font-family: \"Satoshi\";\r\n  font-weight: 400;\r\n  src: url(../fonts/Satoshi-Regular.woff2) format(woff2),\r\n    url(../fonts/Satoshi-Regular.woff) format(woff);\r\n  // src: url(../../assets/fonts/Satoshi-Regular.woff2) format(woff2),\r\n  //   url(../../assets/fonts/Satoshi-Regular.woff) format(woff);\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Satoshi\";\r\n  font-weight: 700;\r\n  src: url(../fonts/Satoshi-Bold.woff2) format(woff2),\r\n    url(../fonts/Satoshi-Bold.woff) format(woff);\r\n}\r\n",":root {\r\n  --font-fallback: \"Satoshi\", sans-serif;\r\n  --font-family-body: var(--font-fallback);\r\n  --font-family-heading: var(--font-fallback);\r\n\r\n  --font-size-900: 3.052rem;\r\n  --font-size-800: 2.441rem;\r\n  --font-size-700: 1.953rem;\r\n  --font-size-600: 1.563rem;\r\n  --font-size-500: 1.25rem;\r\n  --font-size-400: 1rem;\r\n  --font-size-300: 0.8rem;\r\n\r\n  --font-size-body: var(--font-size-400);\r\n  --font-size-h1: var(--font-size-800);\r\n  --font-size-h2: var(--font-size-600);\r\n  --font-size-h3: var(--font-size-500);\r\n  --font-size-small: var(--font-size-300);\r\n  --line-height-body: 1.75;\r\n  --line-height-heading: 1.3;\r\n\r\n  --font-type-body: 400 var(--font-size-body) / var(--line-height-body)\r\n    var(--font-family-body);\r\n  --font-type-h1: 700 var(--font-size-h1) / var(--line-height-heading)\r\n    var(--font-family-heading);\r\n  --font-type-h2: 700 var(--font-size-h2) / var(--line-height-heading)\r\n    var(--font-family-heading);\r\n  --font-type-h3: 700 var(--font-size-h3) / var(--line-height-heading)\r\n    var(--font-family-heading);\r\n}\r\n",":root {\r\n  --border-radius-400: 0.875rem;\r\n  --border-radius-300: 0.75rem;\r\n  --border-radius-200: 0.5rem;\r\n\r\n  --button-height: 2.25rem;\r\n\r\n  --text-input-height: 42px;\r\n\r\n  --transition-popup: 0.3s cubic-bezier(0.3, 0, 0.2, 1);\r\n  --transition-popup-open: 120ms ease-out;\r\n}\r\n",".popup {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: fixed;\n  inset: 0;\n  z-index: 100;\n\n  height: 100%;\n\n  pointer-events: none;\n}\n\n.popup_opened {\n  pointer-events: auto;\n\n  & .popup__overlay {\n    opacity: 1;\n  }\n\n  & .popup__content {\n    transform: translateY(0);\n  }\n}\n\n.popup__overlay {\n  position: fixed;\n  inset: 0;\n\n  background: var(--color-bg-overlay);\n\n  opacity: 0;\n\n  transition: opacity var(--transition-popup);\n}\n\n.popup__content {\n  position: relative;\n  overflow: auto;\n\n  width: 100%;\n  height: auto;\n  max-height: calc(100% - 3rem);\n  background: var(--color-bg-secondary);\n\n  transform: translateY(100%);\n  border-radius: var(--border-radius-400) var(--border-radius-400) 0 0;\n\n  scroll-behavior: smooth;\n\n  transition: transform var(--transition-popup);\n}\n","/* -------------------------------------------------------------------------- */\r\n/*                                   SEARCH                                   */\r\n/* -------------------------------------------------------------------------- */\r\n\r\n.recipes-search-container {\r\n  display: grid;\r\n  row-gap: 10px;\r\n\r\n  padding: 1rem 0;\r\n}\r\n\r\n.ingredients-search {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  grid-template-rows: auto auto;\r\n  column-gap: 0.75rem;\r\n  row-gap: 0.75rem;\r\n\r\n  width: 100%;\r\n\r\n  &__selected-ingredients {\r\n    grid-column: 1 / 3;\r\n  }\r\n}\r\n\r\n.ingredients-search__form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n\r\n  height: var(--text-input-height);\r\n}\r\n\r\n.ingredients-search__input-container {\r\n  position: relative;\r\n\r\n  height: 100%;\r\n}\r\n\r\n.ingredients-search__search-icon {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n\r\n  margin: auto;\r\n  margin-left: 0.75rem;\r\n\r\n  fill: #fff;\r\n  pointer-events: none;\r\n}\r\n\r\n.ingredients-search__input {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n  background: var(--color-bg-secondary);\r\n\r\n  padding: 0 0.8rem;\r\n  padding-left: 2.75rem;\r\n\r\n  border-radius: var(--border-radius-200);\r\n\r\n  font: inherit;\r\n  color: inherit;\r\n\r\n  &::placeholder {\r\n    font: var(--font-type-body);\r\n    color: var(--color-text-tertiary);\r\n  }\r\n}\r\n\r\n/* -------------------------------------------------------------------------- */\r\n/*                        INGREDIENT SEARCH SUGGESTIONS                       */\r\n/* -------------------------------------------------------------------------- */\r\n\r\n.ingredients-search__suggestions {\r\n  display: none;\r\n  position: absolute;\r\n  top: calc(100% + 0.5rem);\r\n  overflow: hidden;\r\n  z-index: 10;\r\n\r\n  width: 100%;\r\n\r\n  background: var(--color-bg-secondary);\r\n\r\n  font: var(--font-type-body);\r\n  border-radius: var(--border-radius-200);\r\n}\r\n\r\n.ingredients-search__suggestions_show {\r\n  display: block;\r\n}\r\n\r\n.ingredients-search__suggestions-list {\r\n  max-height: calc(var(--text-input-height) * 5);\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: auto;\r\n\r\n  text-indent: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.ingredients-search__suggestions-item {\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  padding: 0 0.8rem;\r\n  height: var(--text-input-height);\r\n\r\n  &_active {\r\n    background: var(--color-bg-tertiary);\r\n  }\r\n}\r\n\r\n/* -------------------------------------------------------------------------- */\r\n/*                          SELECTED INGREDIENTS MENU                         */\r\n/* -------------------------------------------------------------------------- */\r\n\r\n.selected-ingredients-menu {\r\n  width: 100%;\r\n  background: var(--color-bg-secondary);\r\n  // border: 2px solid var(--color-bg-tertiary);\r\n\r\n  border-radius: var(--border-radius-200);\r\n\r\n  cursor: pointer;\r\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\r\n\r\n  &_active {\r\n    .selected-ingredients-menu__body {\r\n      grid-template-rows: 1fr;\r\n\r\n      border-width: 2px;\r\n\r\n      transition: grid-template-rows 0.2s;\r\n    }\r\n\r\n    .selected-ingredients-menu__arrow-down-icon {\r\n      transform: rotateX(180deg);\r\n\r\n      transition: transform 0.2s;\r\n    }\r\n  }\r\n}\r\n\r\n.selected-ingredients-menu__header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  padding: 0 0.75rem;\r\n\r\n  min-height: 42px;\r\n}\r\n\r\n.selected-ingredients-menu__arrow-down-icon {\r\n  fill: #fff;\r\n  transition: transform 0.3s;\r\n}\r\n\r\n.selected-ingredients-menu__body {\r\n  display: grid;\r\n  grid-template-rows: 0fr;\r\n  overflow: hidden;\r\n\r\n  padding: 0 0.5rem;\r\n  border-top: solid var(--color-bg-primary);\r\n  border-width: 0;\r\n\r\n  transition: grid-template-rows 0.2s, border 0s 0.2s;\r\n}\r\n\r\n.selected-ingredients-menu__content {\r\n  overflow: hidden;\r\n}\r\n\r\n.selected-ingredients-menu__list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 0.5rem;\r\n\r\n  padding: 0.5rem 0;\r\n  margin: 0;\r\n\r\n  text-indent: 0;\r\n  list-style-type: none;\r\n\r\n  &[empty] {\r\n    .selected-ingredients-menu__list-message {\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n\r\n.selected-ingredients-menu__item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n\r\n  min-height: 36px;\r\n  padding: 0 0.75rem;\r\n  background: var(--color-bg-tertiary);\r\n  // border: 2px solid var(--color-white-400);\r\n\r\n  border-radius: 18px;\r\n  font: var(--font-type-body);\r\n\r\n  &-xmark-icon {\r\n    position: relative;\r\n    top: 1px;\r\n\r\n    fill: #fff;\r\n  }\r\n}\r\n\r\n.selected-ingredients-menu__list-message {\r\n  display: none;\r\n\r\n  margin: 0 auto;\r\n  padding: 0;\r\n\r\n  color: var(--color-text-secondary);\r\n}\r\n","/* -------------------------------------------------------------------------- */\r\n/*                                   RECIPES                                  */\r\n/* -------------------------------------------------------------------------- */\r\n\r\n.recipe-search-button {\r\n  padding: 0.5rem;\r\n  background: var(--color-bg-tertiary);\r\n  border: none;\r\n\r\n  border-radius: var(--border-radius-200);\r\n\r\n  color: inherit;\r\n  font: inherit;\r\n  font-weight: bold;\r\n}\r\n\r\n.recipes__cards-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 0.75rem;\r\n\r\n  width: 100%;\r\n}\r\n\r\n/* -------------------------------------------------------------------------- */\r\n/*                                 RECIPE CARD                                */\r\n/* -------------------------------------------------------------------------- */\r\n\r\n.recipe-card {\r\n  width: 100%;\r\n  background: var(--color-bg-secondary);\r\n\r\n  border-radius: var(--border-radius-400);\r\n}\r\n\r\n.recipe-card__img-wrapper {\r\n  height: 55.5vw;\r\n  overflow: hidden;\r\n  padding: 0.25rem;\r\n\r\n  border-radius: var(--border-radius-400);\r\n}\r\n\r\n.recipe-card__img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n\r\n  border-radius: var(--border-radius-300);\r\n}\r\n\r\n.recipe-card__description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1rem;\r\n\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.recipe-card__title {\r\n  font: var(--font-type-h3);\r\n  color: var(--color-text-secondary);\r\n}\r\n\r\n.recipe-card__cooking-time-value {\r\n  font-weight: 700;\r\n}\r\n\r\n/* -------------------------------------------------------------------------- */\r\n/*                                   RECIPE                                   */\r\n/* -------------------------------------------------------------------------- */\r\n.recipe {\r\n  position: fixed;\r\n  inset: 0;\r\n  overflow: auto;\r\n\r\n  background: var(--color-bg-primary);\r\n\r\n  transform: translateX(100%);\r\n\r\n  transition: transform 0.3s;\r\n\r\n  &_show {\r\n    transform: translateX(0%);\r\n  }\r\n}\r\n\r\n.recipe-content {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.recipe__header {\r\n  position: relative;\r\n}\r\n\r\n.recipe__close-button {\r\n  display: grid;\r\n  place-items: center;\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n\r\n  width: 35px;\r\n  height: 35px;\r\n  border: none;\r\n  background-color: var(--color-bg-primary);\r\n\r\n  border-radius: 50%;\r\n\r\n  color: inherit;\r\n  font: inherit;\r\n\r\n  & svg {\r\n    width: 1rem;\r\n    fill: #fff;\r\n  }\r\n}\r\n\r\n.recipe__img-wrapper {\r\n  height: 60vw;\r\n  overflow: hidden;\r\n\r\n  box-shadow: inset 0 0 20px 10px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.recipe__img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  position: relative;\r\n  z-index: -1;\r\n}\r\n\r\n.recipe__body {\r\n  position: relative;\r\n  top: -1rem;\r\n\r\n  padding: 1rem;\r\n  background: var(--color-bg-primary);\r\n\r\n  border-radius: var(--border-radius-400);\r\n}\r\n\r\n.recipe__title {\r\n  font: var(--font-type-h3);\r\n}\r\n\r\n.recipe__cooking-time {\r\n  font: var(--font-type-body);\r\n  color: var(--color-text-secondary);\r\n}\r\n\r\n.tab-menu {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.tab-menu__tab-buttons {\r\n  display: flex;\r\n}\r\n\r\n.tab-menu__tab-button {\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  border: none;\r\n  background: var(--color-bg-secondary);\r\n\r\n  font: var(--font-type-body);\r\n  color: var(--color-text-primary);\r\n\r\n  &:first-child {\r\n    border-radius: var(--border-radius-200) 0 0 var(--border-radius-200);\r\n  }\r\n\r\n  &:last-child {\r\n    border-radius: 0 var(--border-radius-200) var(--border-radius-200) 0;\r\n  }\r\n\r\n  &_active {\r\n    background: var(--color-bg-tertiary);\r\n  }\r\n}\r\n\r\n.tab-menu__content-box {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.tab-menu__content-item {\r\n  display: none;\r\n\r\n  &_active {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.recipe__ingredients-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-indent: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.recipe__ingredient {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: relative;\r\n\r\n  padding-left: 1.25rem;\r\n\r\n  font: var(--font-type-body);\r\n  color: var(--color-text-secondary);\r\n\r\n  &::before {\r\n    content: \"+\";\r\n\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n\r\n    margin: auto 0;\r\n\r\n    // font-weight: 700;\r\n  }\r\n\r\n  &_used {\r\n    color: var(--color-text-primary);\r\n\r\n    &::before {\r\n      content: \"\";\r\n\r\n      left: 1px;\r\n      top: 3px;\r\n\r\n      width: 7px;\r\n      height: 7px;\r\n      background: #fff;\r\n\r\n      border-radius: 50%;\r\n    }\r\n  }\r\n}\r\n\r\n// .recipe__ingredient-name {\r\n// }\r\n\r\n// .recipe__ingredient-amount {\r\n// }\r\n\r\n// .recipe__instructions {\r\n// }\r\n\r\n.recipe__instruction-steps-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.75rem;\r\n\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  text-indent: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.instruction-step {\r\n  display: grid;\r\n  grid-template-columns: 1.5rem 1fr;\r\n\r\n  font: var(--font-type-body);\r\n  line-height: 1.5;\r\n}\r\n\r\n.instruction-step__number {\r\n}\r\n\r\n.instruction-step__step {\r\n  margin: 0;\r\n}\r\n","/* -------------------------------------------------------------------------- */\r\n/*                                   FILTERS                                  */\r\n/* -------------------------------------------------------------------------- */\r\n\r\n.filters__button {\r\n  display: grid;\r\n  place-items: center;\r\n\r\n  height: 42px;\r\n  aspect-ratio: 1 / 1;\r\n  border: 0;\r\n  padding: 0;\r\n  background: var(--color-bg-secondary);\r\n\r\n  border-radius: var(--border-radius-200);\r\n}\r\n\r\n.filters__button-svg {\r\n  & * {\r\n    fill: #fff;\r\n  }\r\n}\r\n\r\n.filters {\r\n  position: relative;\r\n\r\n  padding: 1.5rem 0;\r\n}\r\n\r\n.filters__body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n\r\n  background: var(--color-bg-secondary);\r\n\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n/* -------------------------------------------------------------------------- */\r\n/*                             POPULAR INGREDIENTS                            */\r\n/* -------------------------------------------------------------------------- */\r\n\r\n.popular-ingredients {\r\n}\r\n\r\n.popular-ingredients__title {\r\n  font: var(--font-type-h3);\r\n  color: var(--color-text-secondary);\r\n}\r\n\r\n.popular-ingredients__list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 0.5rem;\r\n\r\n  padding: 0;\r\n  margin: 0;\r\n  margin-top: 0.75rem;\r\n\r\n  text-indent: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.popular-ingredients__list-item {\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  padding: 0.1rem 0.7rem;\r\n  background: var(--color-bg-tertiary);\r\n\r\n  border-radius: var(--border-radius-300);\r\n\r\n  &_selected {\r\n    background: var(--color-bg-highlight);\r\n\r\n    color: var(--color-text-highlight);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

const fetchData = async function (query, successCallback) {
  // const query = queries?.join("&").replace(/,/g, "=");

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
/* harmony import */ var _ingredientsSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredientsSearch */ "./src/js/ingredientsSearch.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.js */ "./src/js/filters.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");
/* harmony import */ var _ingredients_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredients.js */ "./src/js/ingredients.js");
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes */ "./src/js/recipes.js");






document.addEventListener("DOMContentLoaded", (event) => {
  (0,_ingredientsSearch__WEBPACK_IMPORTED_MODULE_0__.addIngredientsSearchFormHandlers)();
  (0,_filters_js__WEBPACK_IMPORTED_MODULE_1__.addFiltersHandlers)();
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.addHandlersToAllPopups)();
  (0,_ingredients_js__WEBPACK_IMPORTED_MODULE_3__.addIngredientsHandlers)();
  (0,_recipes__WEBPACK_IMPORTED_MODULE_4__.addRecipesHandlers)();
});


/***/ }),

/***/ "./src/js/filters.js":
/*!***************************!*\
  !*** ./src/js/filters.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFiltersHandlers: () => (/* binding */ addFiltersHandlers),
/* harmony export */   togglePopularIngredientsItemSelection: () => (/* binding */ togglePopularIngredientsItemSelection)
/* harmony export */ });
/* harmony import */ var _assets_popular_ingredients_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/popular-ingredients.json */ "./src/assets/popular-ingredients.json");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");
/* harmony import */ var _ingredients_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredients.js */ "./src/js/ingredients.js");




const getPopularIngredientsArr = () => {
  return _assets_popular_ingredients_json__WEBPACK_IMPORTED_MODULE_0__.map((ingredient) => ingredient.name);
};

const displayPopularIngredientsListItem = (ingredientName) => {
  const ingredientsListElem = document.querySelector(
    ".popular-ingredients__list"
  );

  const ingredientsListItemTemplate = document.querySelector(
    ".popular-ingredients-list-item-template"
  );
  const ingredientsListItemFrag =
    ingredientsListItemTemplate.content.cloneNode(true);
  const ingredientsListItemElem = ingredientsListItemFrag.children[0];

  ingredientsListItemElem.textContent = ingredientName;

  ingredientsListElem.append(ingredientsListItemElem);
};

const displayAllPopularIngredientsListItems = () => {
  const popularIngredientsArr = getPopularIngredientsArr();

  popularIngredientsArr.forEach((ingredientName) => {
    displayPopularIngredientsListItem(ingredientName);
  });
};

const handleFiltersButtonClick = (event) => {
  const filtersPopup = document.querySelector(".filters-popup");
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(filtersPopup);
};

const getPopularIngredientsItemElemByName = (ingredientItemName) => {
  const ingredientsItemElems = document.querySelectorAll(
    ".popular-ingredients__list-item"
  );

  return Array.from(ingredientsItemElems).find((ingredientsItemElem) => {
    return ingredientsItemElem.textContent === ingredientItemName;
  });
};

const togglePopularIngredientsItemSelection = (ingredientItemName) => {
  const ingredientItemElem =
    getPopularIngredientsItemElemByName(ingredientItemName);

  if (!ingredientItemElem) return;

  return ingredientItemElem.classList.toggle(
    "popular-ingredients__list-item_selected"
  );
};

const handlePopularIngredientsItemClick = (event) => {
  const ingredientItemElem = event.target.closest(
    ".popular-ingredients__list-item"
  );

  if (!ingredientItemElem) return;

  const itemIsSelected = togglePopularIngredientsItemSelection(
    ingredientItemElem.textContent
  );

  const ingredientName = ingredientItemElem.textContent;

  (0,_ingredients_js__WEBPACK_IMPORTED_MODULE_2__.updateSelectedIngredientsList)(ingredientName, !itemIsSelected);
};

const addFiltersButtonHandlers = () => {
  const filtersButtonElem = document.querySelector(".filters__button");

  filtersButtonElem.addEventListener("click", handleFiltersButtonClick);
};

const addPopuarIngredientsHandlers = () => {
  const popularIngredientsElem = document.querySelector(".popular-ingredients");

  popularIngredientsElem.addEventListener(
    "click",
    handlePopularIngredientsItemClick
  );
};

const addFiltersHandlers = () => {
  addFiltersButtonHandlers();
  addPopuarIngredientsHandlers();
};

displayAllPopularIngredientsListItems();


/***/ }),

/***/ "./src/js/general.js":
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allowBodyScrolling: () => (/* binding */ allowBodyScrolling),
/* harmony export */   preventBodyScrolling: () => (/* binding */ preventBodyScrolling)
/* harmony export */ });
const preventBodyScrolling = () => {
  document.querySelector("body").classList.add("prevent-scrolling");
};

const allowBodyScrolling = () => {
  document.querySelector("body").classList.remove("prevent-scrolling");
};


/***/ }),

/***/ "./src/js/ingredients.js":
/*!*******************************!*\
  !*** ./src/js/ingredients.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addIngredientsHandlers: () => (/* binding */ addIngredientsHandlers),
/* harmony export */   getAllIngredientsArr: () => (/* binding */ getAllIngredientsArr),
/* harmony export */   getSelectedIngredientsArr: () => (/* binding */ getSelectedIngredientsArr),
/* harmony export */   updateSelectedIngredientsList: () => (/* binding */ updateSelectedIngredientsList)
/* harmony export */ });
/* harmony import */ var _assets_ingredients_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/ingredients.json */ "./src/assets/ingredients.json");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./src/js/filters.js");



const getAllIngredientsArr = () => {
  return _assets_ingredients_json__WEBPACK_IMPORTED_MODULE_0__.map((ingredient) => ingredient.name);
};

const getSelectedIngredientName = (selectedIngredientsListItem) => {
  return selectedIngredientsListItem.dataset.name;
};

const getSelectedIngredientsArr = () => {
  const selectedIngredientsItemElems = document.querySelectorAll(
    ".selected-ingredients-menu__item"
  );

  return Array.from(selectedIngredientsItemElems).map((ingredientsItem) => {
    return getSelectedIngredientName(ingredientsItem);
  });
};

const updateSelectedIngredientsListEmptyAttr = (
  selectedIngredientsListElem
) => {
  const selectedIngredientsCount = selectedIngredientsListElem.querySelectorAll(
    ".selected-ingredients-menu__item"
  ).length;

  selectedIngredientsCount
    ? selectedIngredientsListElem.removeAttribute("empty")
    : selectedIngredientsListElem.setAttribute("empty", "");
};

const handleSelectedIngredientsMenuClick = (event) => {
  const ingredientsMenuElem = event.currentTarget;

  if (event.target.closest(".selected-ingredients-menu__header")) {
    ingredientsMenuElem.classList.toggle("selected-ingredients-menu_active");
  }
};

const displaySelectedIngredient = (
  ingredientName,
  selectedIngredientsListElem
) => {
  const selectedIngredientsItemTemplate = document.querySelector(
    ".selected-ingredients-menu-item-template"
  );

  const selectedIngredientItemDocFragment =
    selectedIngredientsItemTemplate.content.cloneNode(true);

  const selectedIngredientItemElem =
    selectedIngredientItemDocFragment.children[0];
  const selectedIngredientTitleElem = selectedIngredientItemElem.querySelector(
    ".selected-ingredients-menu__item-title"
  );

  selectedIngredientItemElem.dataset.name = ingredientName;

  const ingredientNameToDisplay =
    ingredientName[0].toUpperCase() + ingredientName.slice(1);

  selectedIngredientTitleElem.textContent = ingredientNameToDisplay;

  selectedIngredientsListElem.append(selectedIngredientItemDocFragment);
};

const getSelectedIngredientElemByName = (ingredientName) => {
  const ingredientsItemElems = document.querySelectorAll(
    ".selected-ingredients-menu__item"
  );

  return Array.from(ingredientsItemElems).find((ingredientElem) => {
    return (
      getSelectedIngredientName(ingredientElem) === ingredientName.toLowerCase()
    );
  });
};

const deleteSelectedIngredient = (
  ingredientName,
  selectedIngredientsListElem
) => {
  selectedIngredientsListElem.removeChild(
    getSelectedIngredientElemByName(ingredientName)
  );
};

const isIngredientAlreadySelected = (ingredientName) => {
  const selectedIngredientsArr = getSelectedIngredientsArr();

  return selectedIngredientsArr.includes(ingredientName);
};

const updateSelectedIngredientsList = (
  ingredientName,
  deleteIngredient = false
) => {
  const selectedIngredientsListElem = document.querySelector(
    ".selected-ingredients-menu__list"
  );

  if (deleteIngredient) {
    deleteSelectedIngredient(ingredientName, selectedIngredientsListElem);

    updateSelectedIngredientsListEmptyAttr(selectedIngredientsListElem);

    return;
  }

  if (isIngredientAlreadySelected(ingredientName)) {
    return;
  }

  displaySelectedIngredient(ingredientName, selectedIngredientsListElem);

  updateSelectedIngredientsListEmptyAttr(selectedIngredientsListElem);
};

const handleSelectedIngredientsItemClick = (event) => {
  const ingredientsItemElem = event.target.closest(
    ".selected-ingredients-menu__item"
  );

  if (!ingredientsItemElem) return;

  const ingredientName = getSelectedIngredientName(ingredientsItemElem);

  updateSelectedIngredientsList(ingredientName, true);

  (0,_filters__WEBPACK_IMPORTED_MODULE_1__.togglePopularIngredientsItemSelection)(ingredientName);
};

const addIngredientsHandlers = () => {
  const selectedIngredientsMenuElem = document.querySelector(
    ".selected-ingredients-menu"
  );

  selectedIngredientsMenuElem.addEventListener(
    "click",
    handleSelectedIngredientsMenuClick
  );

  selectedIngredientsMenuElem.addEventListener(
    "click",
    handleSelectedIngredientsItemClick
  );
};


/***/ }),

/***/ "./src/js/ingredientsSearch.js":
/*!*************************************!*\
  !*** ./src/js/ingredientsSearch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addIngredientsSearchFormHandlers: () => (/* binding */ addIngredientsSearchFormHandlers)
/* harmony export */ });
/* harmony import */ var _ingredients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredients */ "./src/js/ingredients.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./src/js/filters.js");



const openSearchSuggestions = () => {
  const searchSuggestionsElem = document.querySelector(
    ".ingredients-search__suggestions"
  );

  searchSuggestionsElem.classList.add("ingredients-search__suggestions_show");
};

const closeSearchSuggestions = () => {
  const searchSuggestionsElem = document.querySelector(
    ".ingredients-search__suggestions"
  );

  searchSuggestionsElem.classList.remove(
    "ingredients-search__suggestions_show"
  );
};

const displaySuggestionsItem = (suggestionsItemValue, suggestionsListElem) => {
  const suggestionsItemElem = document.createElement("li");
  suggestionsItemElem.classList.add("ingredients-search__suggestions-item");

  suggestionsItemElem.textContent = suggestionsItemValue;

  suggestionsListElem.appendChild(suggestionsItemElem);

  return suggestionsItemElem;
};

const clearSuggestionsList = (suggestionsListElem) => {
  suggestionsListElem.innerHTML = "";
};

const highlightSuggestionsItemByIndex = (suggestionsItemIndex) => {
  const suggestionsItemElems = document.querySelectorAll(
    ".ingredients-search__suggestions-item"
  );

  suggestionsItemElems[suggestionsItemIndex].classList.add(
    "ingredients-search__suggestions-item_active"
  );
};

const highlightSuggestionsItemByElem = (suggestionsItemElem) => {
  suggestionsItemElem.classList.add(
    "ingredients-search__suggestions-item_active"
  );
};

const getHighlightedItemIndex = (suggestionsItemElems) => {
  return Array.from(suggestionsItemElems).findIndex((suggestionsItem) => {
    return suggestionsItem.classList.contains(
      "ingredients-search__suggestions-item_active"
    );
  });
};

const getHighlightedSuggestionsItem = (suggestionsItemElems) => {
  const highlightedItemIndex = getHighlightedItemIndex(suggestionsItemElems);

  return suggestionsItemElems[highlightedItemIndex];
};

const unhighlightAllSuggestionsItems = () => {
  const suggestionsItemElems = document.querySelectorAll(
    ".ingredients-search__suggestions-item"
  );

  suggestionsItemElems.forEach((suggestionsItem) => {
    suggestionsItem.classList.remove(
      "ingredients-search__suggestions-item_active"
    );
  });
};

const scrollToHighlightedSuggestionsItems = (suggestionsItemElems) => {
  const suggestionsListElem = document.querySelector(
    ".ingredients-search__suggestions-list"
  );
  const suggestionsElem = document.querySelector(
    ".ingredients-search__suggestions"
  );
  const highlightedSuggestionsItemElem =
    getHighlightedSuggestionsItem(suggestionsItemElems);

  const itemOffsetTop = highlightedSuggestionsItemElem.offsetTop;
  const itemHeight = highlightedSuggestionsItemElem.clientHeight;
  const listScrollTop = suggestionsListElem.scrollTop;
  const suggestionsHeight = suggestionsElem.clientHeight;

  if (itemOffsetTop < listScrollTop) {
    suggestionsListElem.scrollTop = itemOffsetTop;
  } else if (itemOffsetTop >= listScrollTop + suggestionsHeight) {
    suggestionsListElem.scrollTop =
      itemOffsetTop - suggestionsHeight + itemHeight;
  }
};

const clearSearchInput = () => {
  const searchInputElem = document.querySelector(".ingredients-search__input");

  searchInputElem.value = "";
};

const handleSuggestionsItemHover = (event) => {
  const hoveredSuggestionsItem = event.currentTarget;

  unhighlightAllSuggestionsItems();
  highlightSuggestionsItemByElem(hoveredSuggestionsItem);
};

const handleSearchInputInput = (event) => {
  const searchInputElem = event.target;
  const searchSuggestionsListElem = document.querySelector(
    ".ingredients-search__suggestions-list"
  );

  const allIngredientsArr = (0,_ingredients__WEBPACK_IMPORTED_MODULE_0__.getAllIngredientsArr)();

  const searchValue = searchInputElem.value.toLowerCase();

  if (searchValue.length < 3) {
    closeSearchSuggestions();
    return;
  }

  clearSuggestionsList(searchSuggestionsListElem);

  const filteredSuggestionsArr = allIngredientsArr.filter((ingredient) => {
    return ingredient.includes(searchValue) && ingredient.split(" ").length < 3;
  });

  filteredSuggestionsArr.forEach((suggestion) => {
    const suggestionsItemElem = displaySuggestionsItem(
      suggestion,
      searchSuggestionsListElem
    );
    suggestionsItemElem.addEventListener(
      "mouseenter",
      handleSuggestionsItemHover
    );
  });

  if (filteredSuggestionsArr.length) {
    highlightSuggestionsItemByIndex(0);
    openSearchSuggestions();
  }
};

const handleSearchInputKeydown = (event) => {
  if (event.code === "ArrowUp" || event.code === "ArrowDown") {
    event.preventDefault();

    const suggestionsItemElems = document.querySelectorAll(
      ".ingredients-search__suggestions-item"
    );

    const highlightedItemIndex = getHighlightedItemIndex(suggestionsItemElems);

    let itemIndexToHighlight =
      highlightedItemIndex + (event.code === "ArrowUp" ? -1 : 1);

    itemIndexToHighlight =
      itemIndexToHighlight >= suggestionsItemElems.length
        ? 0
        : itemIndexToHighlight < 0
        ? suggestionsItemElems.length - 1
        : itemIndexToHighlight;

    unhighlightAllSuggestionsItems();
    highlightSuggestionsItemByIndex(itemIndexToHighlight);
    scrollToHighlightedSuggestionsItems(
      suggestionsItemElems,
      itemIndexToHighlight
    );
  }
};

const handleSuggestionsItemClick = (event) => {
  const clickedSuggestionsItem = event.target.closest(
    ".ingredients-search__suggestions-item"
  );

  if (!clickedSuggestionsItem) {
    return;
  }

  const ingredientName = highlightedSuggestionsItemElem.textContent;

  (0,_ingredients__WEBPACK_IMPORTED_MODULE_0__.updateSelectedIngredientsList)(ingredientName);

  (0,_filters__WEBPACK_IMPORTED_MODULE_1__.togglePopularIngredientsItemSelection)(ingredientName);

  clearSearchInput();
  closeSearchSuggestions();
  unhighlightAllSuggestionsItems();
};

const handleIngredientsSearchFormSubmit = (event) => {
  event.preventDefault();

  const suggestionsItemElems = document.querySelectorAll(
    ".ingredients-search__suggestions-item"
  );

  const highlightedSuggestionsItemElem =
    getHighlightedSuggestionsItem(suggestionsItemElems);

  if (!highlightedSuggestionsItemElem) {
    return;
  }

  const ingredientName = highlightedSuggestionsItemElem.textContent;

  (0,_ingredients__WEBPACK_IMPORTED_MODULE_0__.updateSelectedIngredientsList)(ingredientName);

  (0,_filters__WEBPACK_IMPORTED_MODULE_1__.togglePopularIngredientsItemSelection)(ingredientName);

  clearSearchInput();
  closeSearchSuggestions();
  unhighlightAllSuggestionsItems();
};

const handleDocumentWithSuggestionsOpenedClick = (event) => {
  if (!event.target.closest(".ingredients-search__suggestions")) {
    closeSearchSuggestions();
  }
};

const addIngredientsSearchFormHandlers = () => {
  const searchFormElem = document.querySelector(".ingredients-search__form");
  const searchInputElem = document.querySelector(".ingredients-search__input");

  searchFormElem.addEventListener("submit", handleIngredientsSearchFormSubmit);
  searchFormElem.addEventListener("click", handleSuggestionsItemClick);
  searchInputElem.addEventListener("input", handleSearchInputInput);
  searchInputElem.addEventListener("keydown", handleSearchInputKeydown);
  document.addEventListener("click", handleDocumentWithSuggestionsOpenedClick);
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
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/js/general.js");


const getPopupContentHeight = (popupContentElem) => {
  return popupContentElem.offsetHeight;
};

const hidePopupElem = (popupElem) => {
  const popupContentElem = popupElem.querySelector(".popup__content");

  const handlePopupSwiped = (event) => {
    popupElem.style.display = "none";

    popupContentElem.removeEventListener("transitionend", handlePopupSwiped);
  };

  popupContentElem.addEventListener("transitionend", handlePopupSwiped);
};

const displayPopupElem = (popupElem) => {
  popupElem.style = "";
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
  displayPopupElem(popupElem);

  setTimeout(function () {
    popupElem.classList.add("popup_opened");
  }, 0);

  (0,_general__WEBPACK_IMPORTED_MODULE_0__.preventBodyScrolling)();
};

const closePopup = (popupElem) => {
  popupElem.classList.remove("popup_opened");

  hidePopupElem(popupElem);

  (0,_general__WEBPACK_IMPORTED_MODULE_0__.allowBodyScrolling)();
};

const contentIsScrolledToTop = (popupContentElem) => {
  return popupContentElem.scrollTop === 0;
};

const addPopupTouchHandlers = (popupElem) => {
  const popupContentElem = popupElem.querySelector(".popup__content");
  const popupOverlayElem = popupElem.querySelector(".popup__overlay");

  let popupContentHeight = getPopupContentHeight(popupContentElem);

  let startTouchData = {};
  let relativeTouchData = {};
  let popupSwiped = false;

  const handlePopupClick = (event) => {
    if (!event.target.closest(".popup__content")) {
      closePopup(popupElem);
    }
  };

  const handlePopupTouchstart = (event) => {
    popupContentHeight = getPopupContentHeight(popupContentElem);
    popupSwiped = false;

    startTouchData.startY = event.touches[0].clientY;
    startTouchData.startTime = Date.now();

    relativeTouchData.startY = event.touches[0].clientY;
    relativeTouchData.startTime = Date.now();

    popupElem.addEventListener("touchmove", handlePopupTouchmove, {
      once: true,
    });
  };

  const handlePopupTouchmove = (event) => {
    event.preventDefault();

    const currentY = event.touches[0].clientY;
    const deltaY = currentY - startTouchData.startY;

    if (
      (deltaY > 0 && contentIsScrolledToTop(popupContentElem)) ||
      !event.touches[0].target.closest(".popup__scrollable-content")
    ) {
      popupElem.addEventListener("touchmove", handlePopupDrag);
    }
  };

  const handlePopupDrag = (event) => {
    event.preventDefault();

    const currentY = event.touches[0].clientY;

    const deltaYAbs = currentY - startTouchData.startY;
    const deltaTimeAbs = Date.now() - startTouchData.startTime;

    const deltaYRel = currentY - relativeTouchData.startY;
    const deltaTimeRel = Date.now() - relativeTouchData.startTime;

    const touchVelocityAbs = deltaYAbs / deltaTimeAbs;
    const touchVelocityRel = deltaYRel / deltaTimeRel;

    if (deltaYAbs >= 0) {
      makePopupTransformFaster(popupContentElem, popupOverlayElem);

      let contentTranslate = (deltaYAbs / popupContentHeight) * 100;

      setPopupContentTranslateY(popupContentElem, `${contentTranslate}%`);
      setPopupOverlayOpacity(popupOverlayElem, 1 - contentTranslate / 100);
    }

    if (touchVelocityAbs > 0.4 || touchVelocityRel > 0.4) {
      popupSwiped = true;
    } else if (touchVelocityAbs < 0.15) {
      relativeTouchData.startY = currentY;
      relativeTouchData.startTime = Date.now();
    }
  };

  const handlePopupTouchend = (event) => {
    const endY = event.changedTouches[0].clientY;

    const deltaY = endY - startTouchData.startY;

    if (popupSwiped || deltaY > popupContentHeight * 0.7) {
      closePopup(popupElem);
    }

    clearPopupInlineStyles(popupContentElem, popupOverlayElem);

    popupElem.removeEventListener("touchmove", handlePopupDrag);
  };

  popupElem.addEventListener("click", handlePopupClick);
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

/***/ "./src/js/recipes.js":
/*!***************************!*\
  !*** ./src/js/recipes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRecipesHandlers: () => (/* binding */ addRecipesHandlers)
/* harmony export */ });
/* harmony import */ var _ingredients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredients */ "./src/js/ingredients.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/js/api.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general */ "./src/js/general.js");
/* harmony import */ var _tmp_recipes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tmp/recipes.json */ "./src/tmp/recipes.json");





const fetchedRecipes = [];

const displayRecipeCard = ({ title, image, cookingTime, id }) => {
  const recipesListElem = document.querySelector(".recipes__cards-list");

  const recipeCardTemplate = document.querySelector(".recipe-card-template");
  const recipeCardElem = recipeCardTemplate.content.cloneNode(true);

  const recipeCardImgElem = recipeCardElem.querySelector(".recipe-card__img");
  const recipeCardTitleElem = recipeCardElem.querySelector(
    ".recipe-card__title"
  );
  const recipeCardCookingTimeValueElem = recipeCardElem.querySelector(
    ".recipe-card__cooking-time-value"
  );

  recipeCardImgElem.src = image;
  recipeCardTitleElem.textContent = title;
  recipeCardCookingTimeValueElem.textContent = cookingTime;

  recipesListElem.append(recipeCardElem);

  recipesListElem.lastElementChild.dataset.recipeId = id;
};

const clearRecipesList = () => {
  const recipesElem = document.querySelector(".recipes__cards-list");
  recipesElem.innerHTML = "";
};

const parseRecipes = (fetchedData) => {
  clearRecipesList();

  // fetchedRecipes = fetchedData.results.map((fetchedRecipe) => {
  //   return ({ id, readyInMinutes } = fetchedRecipe);
  // });
};

const createRecipesSearchQuery = (ingredientsArr, recipesNumber) => {
  let query = `includeIngredients=${ingredientsArr.join(",")}`;

  query = query + "&" + `number=${recipesNumber}`;
  query = query + "&" + `sort=min-missing-ingredients`;
  query = query + "&" + `ignorePantry=${true}`;
  query = query + "&" + `instructionsRequired=${true}`;
  query = query + "&" + `addRecipeInformation=${true}`;
  query = query + "&" + `fillIngredients=${true}`;

  return query;
};

const displayFetchedRecipes = () => {
  fetchedRecipes.forEach((fetchedRecipe) => {
    displayRecipeCard(fetchedRecipe);
  });
};

const handleRecipesSearchButtonClick = (event) => {
  const selectedIngredientsArr = (0,_ingredients__WEBPACK_IMPORTED_MODULE_0__.getSelectedIngredientsArr)();

  if (!selectedIngredientsArr.length) return;

  const searchQuery = createRecipesSearchQuery(selectedIngredientsArr, 2);

  (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchData)(searchQuery, parseRecipes);
};

const showRecipe = () => {
  const recipeElem = document.querySelector(".recipe");

  recipeElem.classList.add("recipe_show");
};

const hideRecipe = () => {
  const recipeElem = document.querySelector(".recipe");

  recipeElem.classList.remove("recipe_show");
};

const getRecipeObjById = (recipeId) => {
  return fetchedRecipes.find((fetchedRecipe) => {
    return fetchedRecipe.id === recipeId;
  });
};

const sortRecipeIngredients = (ingredientsArr) => {
  ingredientsArr.sort((a, b) => {
    return a.isUsed ? -1 : 1;
  });
};

const getIngredientsInfo = (recipeId) => {
  const recipeObj = getRecipeObjById(recipeId);

  const usedIngredientsArr = recipeObj.usedIngredients.map((ingredientObj) => {
    return ingredientObj.name;
  });

  const allIngredientsArr = recipeObj.allIngredients.map((ingredientObj) => {
    const {
      name,
      measures: {
        metric: { amount, unitShort: unit },
      },
    } = ingredientObj;

    return { name, amount, unit, isUsed: usedIngredientsArr.includes(name) };
  });

  sortRecipeIngredients(allIngredientsArr);

  return allIngredientsArr;
};

const displayRecipeIngredient = (ingredientObj) => {
  const recipeIngredientsList = document.querySelector(
    ".recipe__ingredients-list"
  );

  const ingredientTemplate = document.querySelector(
    ".recipe-ingredient-template"
  );

  const ingredientElem = ingredientTemplate.content.cloneNode(true);
  const ingredientNameElem = ingredientElem.querySelector(
    ".recipe__ingredient-name"
  );
  const ingredientAmountElem = ingredientElem.querySelector(
    ".recipe__ingredient-amount"
  );

  ingredientNameElem.textContent =
    ingredientObj.name[0].toUpperCase() + ingredientObj.name.slice(1);
  ingredientAmountElem.textContent = `${ingredientObj.amount} ${ingredientObj.unit}`;

  if (ingredientObj.isUsed) {
    ingredientElem.children[0].classList.add("recipe__ingredient_used");
  }

  recipeIngredientsList.append(ingredientElem);
};

const clearRecipeIngredientsList = () => {
  const recipeIngredientsList = document.querySelector(
    ".recipe__ingredients-list"
  );

  recipeIngredientsList.innerHTML = "";
};

const getInstructionsInfo = (recipeId) => {
  const recipeObj = getRecipeObjById(recipeId);

  const instructionsArr = recipeObj.instruction.map((instructionStep) => {
    return { number: instructionStep.number, step: instructionStep.step };
  });

  return instructionsArr;
};

const displayRecipeInstructionStep = (instructionStepObj) => {
  const recipeInstructionStepsList = document.querySelector(
    ".recipe__instruction-steps-list"
  );

  const instructionStepTemplate = document.querySelector(
    ".recipe-instruction-step-template"
  );

  const instructionStepElem = instructionStepTemplate.content.cloneNode(true);

  const stepNumberElem = instructionStepElem.querySelector(
    ".instruction-step__number"
  );
  const stepStepElem = instructionStepElem.querySelector(
    ".instruction-step__step"
  );

  stepNumberElem.textContent = `${instructionStepObj.number}.`;
  stepStepElem.textContent = instructionStepObj.step;

  recipeInstructionStepsList.append(instructionStepElem);
};

const clearRecipeInstructionStepsList = () => {
  const recipeInstructionsList = document.querySelector(
    ".recipe__instruction-steps-list"
  );

  recipeInstructionsList.innerHTML = "";
};

const displayRecipeInfo = (recipeId) => {
  const recipeObj = getRecipeObjById(recipeId);

  const recipeTitleElem = document.querySelector(".recipe__title");
  const recipeImgElem = document.querySelector(".recipe__img");
  const recipeCookingTimeValueElem = document.querySelector(
    ".recipe__cooking-time-value"
  );
  const recipeIngredients = getIngredientsInfo(recipeId);
  const recipeInstruction = getInstructionsInfo(recipeId);

  clearRecipeIngredientsList();
  clearRecipeInstructionStepsList();

  recipeTitleElem.textContent = recipeObj.title;
  recipeImgElem.src = recipeObj.image;
  recipeCookingTimeValueElem.textContent = recipeObj.cookingTime;
  recipeIngredients.forEach((ingredientObj) => {
    displayRecipeIngredient(ingredientObj);
  });
  recipeInstruction.forEach((instructionStepObj) => {
    displayRecipeInstructionStep(instructionStepObj);
  });
};

const handleRecipeCardClick = (event) => {
  const recipeCardElem = event.target.closest(".recipe-card");

  if (!recipeCardElem) return;

  const recipeId = parseInt(recipeCardElem.dataset.recipeId);

  displayRecipeInfo(recipeId);
  showRecipe();
  (0,_general__WEBPACK_IMPORTED_MODULE_2__.preventBodyScrolling)();
};

const handleRecipeCloseButtonClick = (event) => {
  hideRecipe();
  (0,_general__WEBPACK_IMPORTED_MODULE_2__.allowBodyScrolling)();
};

const handleTabMenuButtonClick = (event) => {
  const clickedTabElem = event.target.closest(".tab-menu__tab-button");

  if (!clickedTabElem) return;

  const tabs = document.querySelectorAll(".tab-menu__tab-button");
  const contentItems = document.querySelectorAll(".tab-menu__content-item");
  let clickedTabIndex = 0;

  tabs.forEach((tab, index) => {
    tab.classList.remove("tab-menu__tab-button_active");

    clickedTabIndex = tab === clickedTabElem ? index : clickedTabIndex;
  });

  contentItems.forEach((contentItem) => {
    contentItem.classList.remove("tab-menu__content-item_active");
  });

  clickedTabElem.classList.add("tab-menu__tab-button_active");
  contentItems[clickedTabIndex].classList.add("tab-menu__content-item_active");
};

const addRecipesHandlers = () => {
  const recipesList = document.querySelector(".recipes__cards-list");
  const recipesSearchButton = document.querySelector(".recipe-search-button");
  const recipeElem = document.querySelector(".recipe");
  const recipeCloseButton = document.querySelector(".recipe__close-button");

  recipesSearchButton.addEventListener("click", handleRecipesSearchButtonClick);
  recipesList.addEventListener("click", handleRecipeCardClick);
  recipeElem.addEventListener("click", handleTabMenuButtonClick);
  recipeCloseButton.addEventListener("click", handleRecipeCloseButtonClick);
};

const loadSavedRecipes = () => {
  _tmp_recipes_json__WEBPACK_IMPORTED_MODULE_3__.results.forEach((fetchedRecipe) => {
    let {
      id,
      readyInMinutes: cookingTime,
      extendedIngredients: allIngredients,
      usedIngredients,
      title,
      sourceUrl: src,
      image,
      analyzedInstructions: [{ steps: instruction }],
    } = fetchedRecipe;

    fetchedRecipes.push({
      id,
      cookingTime,
      allIngredients,
      usedIngredients,
      title,
      src,
      image,
      instruction,
    });
  });
};

loadSavedRecipes();
displayFetchedRecipes();


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

/***/ "./src/assets/ingredients.json":
/*!*************************************!*\
  !*** ./src/assets/ingredients.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"5 spice powder","id":1002002},{"name":"acorn squash","id":11482},{"name":"adobo sauce","id":6979},{"name":"agave nectar","id":19912},{"name":"ahi tuna","id":15117},{"name":"alfredo pasta sauce","id":93606},{"name":"almond extract","id":1002050},{"name":"almond flour","id":93740},{"name":"almond milk","id":93607},{"name":"almonds","id":12061},{"name":"amaretto","id":10014534},{"name":"ancho chiles","id":10211962},{"name":"anchovies","id":15001},{"name":"andouille sausage","id":7064},{"name":"angel food cake mix","id":18087},{"name":"angel hair pasta","id":10020420},{"name":"angostura bitters","id":93653},{"name":"apple","id":9003},{"name":"apple butter spread","id":19294},{"name":"apple cider","id":1009016},{"name":"apple juice","id":9016},{"name":"apple pie spice","id":1042035},{"name":"apricot preserves","id":19719},{"name":"apricots","id":9021},{"name":"arborio rice","id":10020052},{"name":"arrowroot powder","id":20003},{"name":"artichoke heart quarters","id":93828},{"name":"artichokes","id":11007},{"name":"arugula","id":11959},{"name":"asafoetida","id":1032035},{"name":"asafoetida powder","id":0},{"name":"asiago cheese","id":1001033},{"name":"asian pear","id":9252},{"name":"asparagus spears","id":11011},{"name":"avocado","id":9037},{"name":"avocado oil","id":4581},{"name":"baby bell peppers","id":10311821},{"name":"baby bok choy","id":93636},{"name":"baby carrots","id":11960},{"name":"baby corn","id":10011168},{"name":"baby spinach leaves","id":11457},{"name":"baby-back ribs","id":10010204},{"name":"baby-back ribs","id":10192},{"name":"bacon","id":10123},{"name":"bacon fat","id":4609},{"name":"baguette","id":18033},{"name":"baking bar","id":19078},{"name":"baking powder","id":18371},{"name":"baking soda","id":18372},{"name":"balsamic glaze","id":98998},{"name":"balsamic vinegar","id":2069},{"name":"bamboo shoots","id":11028},{"name":"banana","id":9040},{"name":"basmati rice","id":10020444},{"name":"bay leaves","id":2004},{"name":"bbq sauce","id":6150},{"name":"beans","id":16069},{"name":"beef","id":23572},{"name":"beef brisket","id":13023},{"name":"beef broth","id":6008},{"name":"beef chuck roast","id":13786},{"name":"beef stock","id":6170},{"name":"beef tenderloin","id":13926},{"name":"beer","id":14003},{"name":"beer","id":14006},{"name":"beets","id":11080},{"name":"bell pepper","id":10211821},{"name":"berries","id":1009054},{"name":"biscuit mix","id":18010},{"name":"biscuits","id":18009},{"name":"bittersweet chocolate","id":19903},{"name":"black bean sauce","id":99210},{"name":"black beans","id":16015},{"name":"black olives","id":1059195},{"name":"black pepper","id":1002030},{"name":"black sesame seeds","id":10012023},{"name":"blackberries","id":9042},{"name":"blanched almonds","id":12062},{"name":"blood orange","id":1009200},{"name":"blue cheese","id":1004},{"name":"blueberries","id":9050},{"name":"bok choy","id":11116},{"name":"boneless skinless chicken breast","id":1055062},{"name":"bourbon","id":10014037},{"name":"brandy","id":10114037},{"name":"bread","id":18064},{"name":"bread flour","id":10120129},{"name":"breakfast links","id":7919},{"name":"brie","id":1006},{"name":"broccoli","id":11090},{"name":"broccoli florets","id":10011090},{"name":"brown rice","id":20040},{"name":"brown rice flour","id":20090},{"name":"brown sugar","id":19334},{"name":"brownie mix","id":18632},{"name":"brussel sprouts","id":11098},{"name":"bulgur","id":20012},{"name":"butter","id":1001},{"name":"butterhead lettuce","id":11250},{"name":"buttermilk","id":1230},{"name":"butternut squash","id":11485},{"name":"butterscotch chips","id":19070},{"name":"cabbage","id":11109},{"name":"caesar dressing","id":43015},{"name":"cajun seasoning","id":1032028},{"name":"cake flour","id":10020129},{"name":"candy canes","id":93759},{"name":"candy coating","id":98857},{"name":"candy melts","id":93775},{"name":"canned black beans","id":16018},{"name":"canned diced tomatoes","id":11531},{"name":"canned garbanzo beans","id":16058},{"name":"canned green chiles","id":11980},{"name":"canned kidney beans","id":16034},{"name":"canned mushrooms","id":11264},{"name":"canned pinto beans","id":16044},{"name":"canned red kidney beans","id":10016034},{"name":"canned tomatoes","id":10011693},{"name":"canned tuna","id":10115121},{"name":"canned white beans","id":16051},{"name":"canned white cannellini beans","id":10016051},{"name":"cannellini beans","id":10716050},{"name":"cantaloupe","id":9181},{"name":"capers","id":2054},{"name":"caramel sauce","id":19364},{"name":"caramels","id":19074},{"name":"caraway seed","id":2005},{"name":"cardamom","id":2006},{"name":"cardamom pods","id":1002006},{"name":"carp","id":15008},{"name":"carrots","id":11124},{"name":"cat fish filets","id":15010},{"name":"cauliflower","id":11135},{"name":"cauliflower florets","id":10011135},{"name":"cauliflower rice","id":10111135},{"name":"celery","id":11143},{"name":"celery ribs","id":10111143},{"name":"celery root","id":11141},{"name":"celery salt","id":1052047},{"name":"celery seed","id":2007},{"name":"cereal","id":8029},{"name":"champagne","id":10043155},{"name":"chana dal","id":99236},{"name":"cheddar","id":1009},{"name":"cheese","id":1041009},{"name":"cheese curds","id":98921},{"name":"cheese dip","id":1188},{"name":"cheese soup","id":6038},{"name":"cheese tortellini","id":10093727},{"name":"cherry","id":9070},{"name":"cherry pie filling","id":19314},{"name":"cherry tomatoes","id":10311529},{"name":"chestnuts","id":12098},{"name":"chia seeds","id":12006},{"name":"chicken base","id":6080},{"name":"chicken bouillon","id":6480},{"name":"chicken bouillon granules","id":1006080},{"name":"chicken breasts","id":5062},{"name":"chicken broth","id":6194},{"name":"chicken drumsticks","id":5066},{"name":"chicken legs","id":5075},{"name":"chicken pieces","id":1005006},{"name":"chicken sausage","id":93668},{"name":"chicken stock","id":6172},{"name":"chicken tenders","id":1015062},{"name":"chicken thighs","id":5091},{"name":"chicken wings","id":5100},{"name":"chickpea","id":16057},{"name":"chile garlic sauce","id":93749},{"name":"chili paste","id":6973},{"name":"chili peppers","id":11962},{"name":"chili powder","id":2009},{"name":"chili sauce","id":6972},{"name":"chipotle chiles in adobo","id":11632},{"name":"chipotle chilies","id":98839},{"name":"chipotle peppers in adobo","id":99223},{"name":"chive & onion cream cheese spread","id":93748},{"name":"chocolate","id":19081},{"name":"chocolate chip cookies","id":28027},{"name":"chocolate chunks","id":10419903},{"name":"chocolate ice cream","id":19270},{"name":"chocolate milk","id":1102},{"name":"chocolate sandwich cookies","id":18166},{"name":"chocolate syrup","id":14181},{"name":"chocolate wafer cookies","id":10118157},{"name":"chorizo sausage","id":7019},{"name":"cider vinegar","id":2048},{"name":"cilantro","id":11165},{"name":"cinnamon roll","id":99020},{"name":"cinnamon stick","id":1002010},{"name":"cinnamon sugar","id":10219335},{"name":"cinnamon swirl bread","id":18047},{"name":"clam juice","id":14187},{"name":"clams","id":15157},{"name":"clarified butter","id":93632},{"name":"clove","id":1002011},{"name":"coarse salt","id":1002047},{"name":"coarsely ground pepper","id":2035},{"name":"cocoa nibs","id":98846},{"name":"cocoa powder","id":19165},{"name":"coconut","id":12104},{"name":"coconut aminos","id":98929},{"name":"coconut butter","id":93746},{"name":"coconut cream","id":12115},{"name":"coconut extract","id":1032050},{"name":"coconut flour","id":93747},{"name":"coconut milk","id":12118},{"name":"coconut oil","id":4047},{"name":"coconut water","id":12119},{"name":"cod","id":15015},{"name":"coffee","id":14209},{"name":"cognac","id":10414037},{"name":"cola","id":14400},{"name":"colby jack","id":1011},{"name":"collard greens","id":11161},{"name":"condensed cream of celery soup","id":6010},{"name":"condensed cream of mushroom soup","id":6147},{"name":"confectioner\'s swerve","id":99084},{"name":"cooked bacon","id":10862},{"name":"cooked brown rice","id":20041},{"name":"cooked chicken breast","id":5064},{"name":"cooked ham","id":10802},{"name":"cooked long grain rice","id":10220445},{"name":"cooked pasta","id":20421},{"name":"cooked polenta","id":1008166},{"name":"cooked quinoa","id":20137},{"name":"cooked wild rice","id":20088},{"name":"cookies","id":10118192},{"name":"coriander","id":2012},{"name":"corn","id":11168},{"name":"corn bread mix","id":18022},{"name":"corn chips","id":19003},{"name":"corn flakes cereal","id":8020},{"name":"corn flour","id":20019},{"name":"corn kernels","id":11172},{"name":"corn oil","id":42289},{"name":"corn tortillas","id":18363},{"name":"cornbread","id":18023},{"name":"corned beef","id":13346},{"name":"cornish hens","id":5307},{"name":"cornmeal","id":35137},{"name":"cornstarch","id":20027},{"name":"cotija cheese","id":1001019},{"name":"cottage cheese","id":1012},{"name":"country bread","id":10018029},{"name":"courgettes","id":11477},{"name":"couscous","id":20028},{"name":"cow pea","id":16063},{"name":"crabmeat","id":10015136},{"name":"cracked pepper","id":2030},{"name":"cranberries","id":9078},{"name":"cranberry juice","id":43382},{"name":"cream","id":1053},{"name":"cream cheese","id":1017},{"name":"cream cheese block","id":1186},{"name":"cream of chicken soup","id":6016},{"name":"cream of tartar","id":18373},{"name":"creamed corn","id":11174},{"name":"creamy peanut butter","id":10116098},{"name":"creme fraiche","id":1001056},{"name":"cremini mushrooms","id":11266},{"name":"creole seasoning","id":1002031},{"name":"crisp rice cereal","id":8066},{"name":"croutons","id":18242},{"name":"crystallized ginger","id":93751},{"name":"cucumber","id":11206},{"name":"cumin seeds","id":2014},{"name":"cup cake","id":18139},{"name":"currants","id":9085},{"name":"curry leaves","id":93604},{"name":"dairy free milk","id":10016223},{"name":"dark brown sugar","id":10019334},{"name":"dark chocolate","id":19904},{"name":"dark chocolate candy bars","id":10019904},{"name":"dark chocolate chips","id":10019071},{"name":"dark sesame oil","id":1004058},{"name":"dates","id":9087},{"name":"deep dish pie crust","id":18945},{"name":"deli ham","id":10010151},{"name":"deli turkey","id":7259},{"name":"dessert oats","id":8121},{"name":"dessert wine","id":10014057},{"name":"diced ham","id":99186},{"name":"diet pop","id":14146},{"name":"dijon mustard","id":1002046},{"name":"dill","id":2045},{"name":"dill pickles","id":10011937},{"name":"hot dog","id":21118},{"name":"double cream","id":1011053},{"name":"dried apricots","id":9032},{"name":"dried basil","id":2003},{"name":"dried cherries","id":93822},{"name":"dried chorizo","id":99233},{"name":"dried cranberries","id":9079},{"name":"dried dill","id":2017},{"name":"dried onion","id":11284},{"name":"dried porcini mushrooms","id":10011268},{"name":"dried rubbed sage","id":1002038},{"name":"dried thyme","id":2042},{"name":"dried tomatoes","id":11955},{"name":"dry bread crumbs","id":18079},{"name":"dry milk","id":1090},{"name":"dry mustard","id":1002024},{"name":"dry red wine","id":14097},{"name":"dry roasted peanuts","id":16090},{"name":"duck fat","id":4574},{"name":"dutch process cocoa powder","id":10019165},{"name":"edamame","id":11212},{"name":"egg substitute","id":1226},{"name":"egg vermicelli","id":20409},{"name":"egg whites","id":1124},{"name":"egg yolk","id":1125},{"name":"eggnog","id":1057},{"name":"eggplant","id":11209},{"name":"elbow macaroni","id":10120499},{"name":"enchilada sauce","id":6599},{"name":"english cucumber","id":10111205},{"name":"english muffin","id":18439},{"name":"erythritol","id":98887},{"name":"escarole","id":11213},{"name":"espresso","id":14210},{"name":"evaporated milk","id":1214},{"name":"extra firm tofu","id":16163},{"name":"extra virgin olive oil","id":1034053},{"name":"farfalle","id":10120420},{"name":"farro","id":10020005},{"name":"fat free mayo","id":42193},{"name":"fat-free less-sodium chicken broth","id":6984},{"name":"fennel","id":11957},{"name":"fennel seeds","id":2018},{"name":"fenugreek leaf","id":98963},{"name":"fenugreek seeds","id":2019},{"name":"feta cheese","id":1019},{"name":"fettuccine","id":10020409},{"name":"fire roasted tomatoes","id":98849},{"name":"fish","id":10115261},{"name":"fish sauce","id":6179},{"name":"fish stock","id":6963},{"name":"flank steak","id":23657},{"name":"flax seeds","id":10012220},{"name":"fleur de sel","id":1022047},{"name":"flour","id":20081},{"name":"flour tortillas","id":10218364},{"name":"fontina cheese","id":1020},{"name":"food dye","id":10711111},{"name":"frank\'s redhot sauce","id":98878},{"name":"free range eggs","id":1123},{"name":"french bread","id":18029},{"name":"fresh basil","id":2044},{"name":"fresh bean sprouts","id":11043},{"name":"fresh chives","id":11156},{"name":"fresh corn","id":11167},{"name":"fresh corn kernels","id":10011167},{"name":"fresh figs","id":9089},{"name":"fresh fruit","id":9431},{"name":"fresh herbs","id":10111297},{"name":"fresh mint","id":2064},{"name":"fresh mozzarella","id":1026},{"name":"fresh rosemary","id":2063},{"name":"fresh thyme leaves","id":2049},{"name":"fried onions","id":93709},{"name":"frosting","id":19230},{"name":"froyo bars","id":93629},{"name":"frozen corn","id":11913},{"name":"frozen spinach","id":11463},{"name":"fudge","id":19100},{"name":"fudge topping","id":10019348},{"name":"fun size almond joy bar","id":19065},{"name":"garam masala","id":93663},{"name":"garbanzo bean flour","id":16157},{"name":"garlic","id":11215},{"name":"garlic paste","id":10111215},{"name":"garlic powder","id":1022020},{"name":"garlic powder","id":2020},{"name":"garlic salt","id":1062047},{"name":"gelatin","id":19177},{"name":"gf chocolate cake mix","id":99040},{"name":"gin","id":10514037},{"name":"ginger","id":11216},{"name":"ginger ale","id":14136},{"name":"ginger paste","id":93754},{"name":"ginger-garlic paste","id":10093754},{"name":"gingersnap cookies","id":18172},{"name":"gnocchi","id":98853},{"name":"goat cheese","id":1159},{"name":"golden raisins","id":9297},{"name":"gorgonzola","id":1011004},{"name":"gouda cheese","id":1022},{"name":"graham cracker crumbs","id":10018617},{"name":"graham cracker pie crust","id":18942},{"name":"graham crackers","id":18617},{"name":"grain blend","id":10020088},{"name":"grand marnier","id":10314534},{"name":"granny smith apples","id":1089003},{"name":"granola","id":8212},{"name":"granulated garlic","id":1002020},{"name":"grape tomatoes","id":10111529},{"name":"grapefruit","id":9112},{"name":"grapeseed oil","id":4517},{"name":"gravy","id":6997},{"name":"great northern beans","id":16025},{"name":"greek yogurt","id":1256},{"name":"green beans","id":11052},{"name":"green bell pepper","id":11333},{"name":"green chili pepper","id":31015},{"name":"green food coloring","id":1441111},{"name":"green grapes","id":1019132},{"name":"green olives","id":1029195},{"name":"green onions","id":11291},{"name":"greens","id":21052},{"name":"grill cheese","id":10093624},{"name":"grill seasoning","id":1022034},{"name":"ground allspice","id":2001},{"name":"ground ancho chili","id":1022009},{"name":"ground beef","id":10023572},{"name":"ground chicken","id":5332},{"name":"ground chipotle chile pepper","id":1052009},{"name":"ground cinnamon","id":1012010},{"name":"ground cinnamon","id":2010},{"name":"ground cloves","id":2011},{"name":"ground coriander seeds","id":1002013},{"name":"ground cumin","id":1002014},{"name":"ground flaxseed","id":12220},{"name":"ground ginger","id":2021},{"name":"ground lamb","id":17224},{"name":"ground mace","id":2022},{"name":"ground nutmeg","id":2025},{"name":"ground pork","id":10219},{"name":"ground pork sausage","id":7063},{"name":"ground veal","id":17142},{"name":"gruyere","id":1023},{"name":"guacamole","id":1009037},{"name":"half n half","id":1049},{"name":"halibut fillet","id":15036},{"name":"ham","id":10151},{"name":"hamburger buns","id":18350},{"name":"hard cooked eggs","id":1129},{"name":"harissa","id":1006972},{"name":"hash brown potatoes","id":11390},{"name":"hazelnuts","id":12120},{"name":"healthy request cream of celery soup","id":6987},{"name":"hemp seeds","id":93602},{"name":"herbes de provence","id":1012042},{"name":"herbs","id":1002044},{"name":"hershey\'s kisses brand milk chocolates","id":93743},{"name":"hoisin sauce","id":6175},{"name":"honey mustard","id":99227},{"name":"horseradish","id":1002055},{"name":"hot sauce","id":6168},{"name":"hummus","id":16158},{"name":"ice","id":10014412},{"name":"ice cream","id":19095},{"name":"instant chocolate pudding mix","id":19184},{"name":"instant coffee powder","id":14214},{"name":"instant espresso powder","id":10014214},{"name":"instant lemon pudding mix","id":19332},{"name":"instant yeast","id":10118375},{"name":"irish cream","id":93764},{"name":"italian bread","id":10028033},{"name":"italian cheese blend","id":93651},{"name":"italian sausages","id":7036},{"name":"italian seasoning","id":1022027},{"name":"jaggery","id":99002},{"name":"jalapeno","id":11979},{"name":"jasmine rice","id":10120444},{"name":"jelly","id":19297},{"name":"jicama","id":11603},{"name":"jimmies","id":93645},{"name":"juice","id":1019016},{"name":"jumbo shell pasta","id":10520420},{"name":"kaffir lime leaves","id":93633},{"name":"kahlua","id":93716},{"name":"kalamata olives","id":1009195},{"name":"kale","id":11233},{"name":"ketchup","id":11935},{"name":"kitchen bouquet","id":93768},{"name":"kiwis","id":9148},{"name":"kosher salt","id":1082047},{"name":"ladyfingers","id":18423},{"name":"lamb","id":10017224},{"name":"lasagna noodles","id":10620420},{"name":"lb cake","id":18133},{"name":"lean ground beef","id":23557},{"name":"lean ground turkey","id":5662},{"name":"lean pork tenderloin","id":10060},{"name":"leeks","id":11246},{"name":"leg of lamb","id":17013},{"name":"lemon","id":9150},{"name":"lemon curd","id":93834},{"name":"lemon extract","id":12311111},{"name":"lemon juice","id":9152},{"name":"lemon peel","id":9156},{"name":"lemon pepper","id":1012030},{"name":"lemon wedges","id":1029150},{"name":"lemongrass","id":11972},{"name":"lettuce","id":11252},{"name":"lettuce leaves","id":93623},{"name":"light butter","id":4602},{"name":"light coconut milk","id":99009},{"name":"light corn syrup","id":19350},{"name":"light cream cheese","id":43274},{"name":"light mayonnaise","id":4641},{"name":"light olive oil","id":1054053},{"name":"light soy sauce","id":10216124},{"name":"lime","id":9159},{"name":"lime juice","id":9160},{"name":"lime wedges","id":1029159},{"name":"lime zest","id":1009159},{"name":"linguine","id":10720420},{"name":"liquid smoke","id":93627},{"name":"liquid stevia","id":10811111},{"name":"liquor","id":14037},{"name":"live lobster","id":15147},{"name":"long-grain rice","id":10220444},{"name":"low fat buttermilk","id":1088},{"name":"low fat milk","id":1082},{"name":"low fat milk","id":1174},{"name":"low fat plain yogurt","id":1117},{"name":"low fat ricotta cheese","id":1037},{"name":"low fat sour cream","id":1179},{"name":"low sodium chicken broth","id":6970},{"name":"low sodium soy sauce","id":16424},{"name":"low-sodium chicken stock","id":1006970},{"name":"lower sodium beef broth","id":10093741},{"name":"lump crab","id":10115136},{"name":"m&m candies","id":19157},{"name":"macadamia nuts","id":12131},{"name":"macaroni and cheese mix","id":32004},{"name":"madras curry powder","id":2015},{"name":"malt drink mix","id":14311},{"name":"mandarin orange sections","id":9383},{"name":"mandarin oranges","id":9218},{"name":"mango","id":9176},{"name":"maple syrup","id":19911},{"name":"maraschino cherries","id":9328},{"name":"margarine","id":4073},{"name":"marinara sauce","id":10111549},{"name":"marjoram","id":2023},{"name":"marsala wine","id":14057},{"name":"marshmallow fluff","id":93644},{"name":"marshmallows","id":19116},{"name":"masa harina","id":20317},{"name":"mascarpone","id":93820},{"name":"mat beans","id":99144},{"name":"matcha tea","id":98932},{"name":"mayonnaise","id":4025},{"name":"meat","id":1015006},{"name":"meat","id":1065062},{"name":"meatballs","id":10110219},{"name":"medjool dates","id":9421},{"name":"mexican cream","id":93772},{"name":"meyer lemon juice","id":1009152},{"name":"milk","id":1077},{"name":"milk chocolate chips","id":10019146},{"name":"mint chutney","id":98991},{"name":"minute rice","id":20048},{"name":"miracle whip","id":4014},{"name":"mirin","id":93830},{"name":"miso","id":16112},{"name":"molasses","id":19304},{"name":"monterey jack cheese","id":1001025},{"name":"mushroom","id":11260},{"name":"mussels","id":15164},{"name":"mustard","id":2046},{"name":"mustard seeds","id":2024},{"name":"napa cabbage","id":11119},{"name":"navel oranges","id":9202},{"name":"nectarine","id":9191},{"name":"new potatoes","id":11352},{"name":"non-fat greek yogurt","id":1011256},{"name":"nonfat cool whip","id":1200},{"name":"nonfat milk","id":1085},{"name":"nori","id":11446},{"name":"nut butter","id":12195},{"name":"nut meal","id":93620},{"name":"nutella","id":19125},{"name":"nutritional yeast","id":93690},{"name":"oat flour","id":20132},{"name":"oats","id":8120},{"name":"oil","id":4582},{"name":"oil packed sun dried tomatoes","id":11956},{"name":"okra","id":11278},{"name":"old bay seasoning","id":1052034},{"name":"olive oil","id":4053},{"name":"olives","id":9195},{"name":"onion","id":11282},{"name":"onion powder","id":2026},{"name":"onion soup mix","id":6094},{"name":"orange","id":9200},{"name":"orange bell pepper","id":10011821},{"name":"orange juice","id":9206},{"name":"orange juice concentrate","id":9214},{"name":"orange liqueur","id":10414534},{"name":"orange marmalade","id":19303},{"name":"orange oil","id":12511111},{"name":"orange zest","id":9216},{"name":"oregano","id":2027},{"name":"oreo cookies","id":10018166},{"name":"orzo","id":10920420},{"name":"oyster sauce","id":6176},{"name":"oysters","id":15167},{"name":"palm sugar","id":93831},{"name":"pancetta","id":10410123},{"name":"paneer","id":98847},{"name":"panko","id":10018079},{"name":"papaya","id":9226},{"name":"paprika","id":2028},{"name":"parmigiano reggiano","id":1033},{"name":"parsley","id":11297},{"name":"parsley flakes","id":2029},{"name":"parsnip","id":11298},{"name":"part-skim mozzarella cheese","id":1028},{"name":"pasta","id":20420},{"name":"pasta salad mix","id":99036},{"name":"pasta sauce","id":10011549},{"name":"pastry flour","id":10020080},{"name":"peach","id":9236},{"name":"peanut butter","id":16098},{"name":"peanut butter chips","id":93762},{"name":"peanut butter cups","id":19150},{"name":"peanut oil","id":4042},{"name":"peanuts","id":16091},{"name":"pear liqueur","id":98988},{"name":"pearl barley","id":20005},{"name":"pearl onions","id":10111282},{"name":"peas","id":11304},{"name":"pecan","id":12142},{"name":"pecan pieces","id":10012142},{"name":"pecorino","id":1038},{"name":"penne","id":11120420},{"name":"peperoncino","id":11976},{"name":"pepper jack cheese","id":1025},{"name":"peppercorns","id":1022030},{"name":"peppermint baking chips","id":98858},{"name":"peppermint extract","id":1022050},{"name":"pepperoni","id":7057},{"name":"peppers","id":10111333},{"name":"pesto","id":93698},{"name":"pickle relish","id":11944},{"name":"pickles","id":11937},{"name":"pico de gallo","id":27027},{"name":"pie crust","id":18334},{"name":"pimento stuffed olives","id":1049195},{"name":"pimientos","id":11943},{"name":"pine nuts","id":12147},{"name":"pineapple","id":9266},{"name":"pineapple chunks","id":1029354},{"name":"pineapple in juice","id":9354},{"name":"pineapple juice","id":9273},{"name":"pink himalayan salt","id":1032047},{"name":"pinto beans","id":16043},{"name":"pistachios","id":12151},{"name":"pita","id":18413},{"name":"pizza crust","id":93770},{"name":"pizza mix","id":98924},{"name":"plain greek yogurt","id":1001256},{"name":"plain nonfat yogurt","id":1118},{"name":"plain yogurt","id":1001116},{"name":"plantain","id":9277},{"name":"plum","id":9279},{"name":"plum tomatoes","id":10411529},{"name":"poblano peppers","id":10011333},{"name":"polenta","id":10035137},{"name":"polish sausage","id":7059},{"name":"pomegranate juice","id":9442},{"name":"pomegranate molasses","id":10042040},{"name":"pomegranate seeds","id":9286},{"name":"popcorn","id":19034},{"name":"poppy seeds","id":2033},{"name":"pork","id":10010219},{"name":"Pork & Beans","id":16009},{"name":"pork belly","id":10005},{"name":"pork butt","id":10084},{"name":"pork chops","id":10010062},{"name":"pork links","id":1007063},{"name":"pork loin chops","id":10062},{"name":"pork loin roast","id":10225},{"name":"pork roast","id":10010225},{"name":"pork shoulder","id":10072},{"name":"pork tenderloin","id":10218},{"name":"port","id":10114057},{"name":"portabella mushrooms","id":11265},{"name":"pot roast","id":23612},{"name":"potato chips","id":19411},{"name":"potato starch","id":11413},{"name":"potatoes","id":11362},{"name":"poultry seasoning","id":2034},{"name":"powdered sugar","id":19336},{"name":"pretzel sandwiches","id":19047},{"name":"processed american cheese","id":1253},{"name":"prosciutto","id":10010123},{"name":"provolone cheese","id":1035},{"name":"prunes","id":9291},{"name":"puff pastry","id":18337},{"name":"pumpkin","id":11422},{"name":"pumpkin pie filling","id":11426},{"name":"pumpkin pie spice","id":1002035},{"name":"pumpkin puree","id":11424},{"name":"pumpkin seeds","id":12014},{"name":"queso fresco","id":1228},{"name":"quick cooking oats","id":8402},{"name":"quinoa","id":20035},{"name":"quinoa flour","id":93773},{"name":"radicchio","id":11952},{"name":"radishes","id":11429},{"name":"raisins","id":9299},{"name":"rajma masala","id":10193663},{"name":"ramen noodles","id":6583},{"name":"ranch dressing","id":4639},{"name":"ranch dressing mix","id":93733},{"name":"raspberries","id":9302},{"name":"raspberry jam","id":10719297},{"name":"raw cashews","id":12087},{"name":"raw shrimp","id":15152},{"name":"ready-to-serve Asian fried rice","id":93721},{"name":"real bacon recipe pieces","id":99229},{"name":"red apples","id":1079003},{"name":"red bell peppers","id":11821},{"name":"red cabbage","id":11112},{"name":"red chilli","id":11819},{"name":"red delicious apples","id":1059003},{"name":"red food coloring","id":1451111},{"name":"red grapefruit juice","id":98926},{"name":"red grapes","id":9132},{"name":"red kidney beans","id":16033},{"name":"red lentils","id":10016069},{"name":"red onion","id":10011282},{"name":"red pepper flakes","id":1032009},{"name":"red pepper powder","id":2031},{"name":"red potatoes","id":10011355},{"name":"red velvet cookie","id":18157},{"name":"red wine","id":14096},{"name":"red wine vinegar","id":1022068},{"name":"reduced fat shredded cheddar cheese","id":1001168},{"name":"refried beans","id":16202},{"name":"refrigerated crescent rolls","id":93618},{"name":"refrigerated pizza dough","id":93610},{"name":"refrigerated sugar cookie dough","id":18205},{"name":"rhubarb","id":9307},{"name":"rib tips","id":98937},{"name":"rice","id":20444},{"name":"rice flour","id":20061},{"name":"rice krispies cereal","id":8065},{"name":"rice milk","id":93761},{"name":"rice noodles","id":20133},{"name":"rice paper","id":10118368},{"name":"rice syrup","id":93784},{"name":"rice vinegar","id":1022053},{"name":"rice wine","id":43479},{"name":"ricotta salata","id":1036},{"name":"ritz crackers","id":18621},{"name":"roast beef","id":93713},{"name":"roasted chicken","id":5114},{"name":"roasted nuts","id":12135},{"name":"roasted peanuts","id":16092},{"name":"roasted red peppers","id":11916},{"name":"roma tomatoes","id":10211529},{"name":"romaine lettuce","id":10111251},{"name":"root vegetables","id":10011298},{"name":"rosemary","id":2036},{"name":"rotini pasta","id":11320420},{"name":"rotisserie chicken","id":5348},{"name":"round steak","id":23617},{"name":"rub","id":1012034},{"name":"rum extract","id":12211111},{"name":"runny honey","id":19296},{"name":"russet potatoes","id":11353},{"name":"rutabaga","id":11435},{"name":"rye bread","id":18060},{"name":"rye meal","id":98905},{"name":"saffron threads","id":2037},{"name":"sage","id":2038},{"name":"sage leaves","id":99226},{"name":"salad dressing","id":4114},{"name":"salami","id":7071},{"name":"salmon fillet","id":15076},{"name":"salsa","id":6164},{"name":"salsa verde","id":27028},{"name":"salt","id":2047},{"name":"salt and pepper","id":1102047},{"name":"salted butter","id":1001001},{"name":"saltine crackers","id":18228},{"name":"sandwich bun","id":18353},{"name":"sauerkraut","id":11439},{"name":"sausage","id":1017063},{"name":"sausage links","id":1037063},{"name":"scotch bonnet chili","id":10011819},{"name":"sea salt","id":1012047},{"name":"sea scallops","id":10015172},{"name":"seasoned bread crumbs","id":18376},{"name":"seasoned rice vinegar","id":1032053},{"name":"seasoned salt","id":1042047},{"name":"seasoning","id":1042027},{"name":"seasoning blend","id":1032027},{"name":"seeds","id":93818},{"name":"self-rising flour","id":20129},{"name":"semi sweet chocolate chips","id":10019903},{"name":"serrano chile","id":11977},{"name":"sesame oil","id":4058},{"name":"sesame seed hamburger buns","id":10018350},{"name":"sesame seeds","id":12023},{"name":"shallot","id":11677},{"name":"sharp cheddar cheese","id":1031009},{"name":"sheeps milk cheese","id":1011019},{"name":"shells","id":11020420},{"name":"sherry","id":10114106},{"name":"sherry","id":10214106},{"name":"sherry vinegar","id":1012068},{"name":"shiitake mushroom caps","id":11238},{"name":"short grain rice","id":10120052},{"name":"short pasta","id":20499},{"name":"short ribs","id":10013149},{"name":"shortbread cookies","id":18192},{"name":"shortcrust pastry","id":10018338},{"name":"shortening","id":4615},{"name":"shredded cheddar cheese","id":1001009},{"name":"shredded cheese","id":1011026},{"name":"shredded chicken","id":1005114},{"name":"shredded coconut","id":12108},{"name":"shredded mexican cheese blend","id":1001251},{"name":"shredded mexican cheese blend","id":1251},{"name":"shredded mozzarella","id":1001026},{"name":"silken tofu","id":16161},{"name":"sirloin steak","id":23625},{"name":"skim milk ricotta","id":93630},{"name":"skim vanilla greek yogurt","id":99033},{"name":"skin-on bone-in chicken leg quarters","id":1005091},{"name":"skinless boneless chicken breast halves","id":1045062},{"name":"skinless boneless chicken thighs","id":5096},{"name":"skinned black gram","id":93718},{"name":"slaw dressing","id":43016},{"name":"slaw mix","id":10011109},{"name":"slivered almonds","id":10012061},{"name":"smoked paprika","id":1012028},{"name":"smoked salmon","id":15077},{"name":"smoked sausage","id":7916},{"name":"smooth peanut butter","id":16150},{"name":"snapper fillets","id":15101},{"name":"snow peas","id":11300},{"name":"soda water","id":14121},{"name":"sour cream","id":1056},{"name":"sourdough bowl","id":99169},{"name":"sourdough bread","id":10118029},{"name":"soy milk","id":16223},{"name":"soy protein powder","id":16122},{"name":"soy sauce","id":16124},{"name":"spaghetti","id":11420420},{"name":"spaghetti squash","id":11492},{"name":"sparkling wine","id":43155},{"name":"spelt flour","id":93823},{"name":"spicy brown mustard","id":1022046},{"name":"spinach","id":10011457},{"name":"sprite","id":14144},{"name":"sprouts","id":11001},{"name":"squash","id":10011485},{"name":"sriracha sauce","id":1016168},{"name":"steaks","id":23232},{"name":"steel cut oats","id":93695},{"name":"stevia","id":93628},{"name":"stew meat","id":10023618},{"name":"stew vegetables","id":11583},{"name":"stock","id":1006615},{"name":"store-bought phyllo","id":18338},{"name":"stout","id":93619},{"name":"strawberries","id":9316},{"name":"strawberry jam","id":10819297},{"name":"strawberry jello","id":10219172},{"name":"stuffing","id":18082},{"name":"stuffing mix","id":18081},{"name":"sub rolls","id":98940},{"name":"sugar","id":19335},{"name":"sugar snap peas","id":10011300},{"name":"sugar syrup","id":90480},{"name":"sukrin sweetener","id":99190},{"name":"summer savory","id":98961},{"name":"summer squash","id":11641},{"name":"sunflower oil","id":4584},{"name":"sunflower seeds","id":12036},{"name":"sweet chilli sauce","id":98962},{"name":"sweet onion","id":11294},{"name":"sweet paprika","id":1002028},{"name":"sweet pickle juice","id":93640},{"name":"sweet pickle relish","id":11945},{"name":"sweet potato","id":11507},{"name":"sweet tea","id":14355},{"name":"sweetened coconut","id":12109},{"name":"sweetened condensed milk","id":1095},{"name":"sweetened shredded coconut","id":12179},{"name":"swiss chard","id":11147},{"name":"swiss cheese","id":1040},{"name":"taco seasoning mix","id":2073},{"name":"taco shells","id":18360},{"name":"tahini","id":12698},{"name":"tamari","id":10116124},{"name":"tapioca flour","id":93696},{"name":"tarragon","id":2041},{"name":"tart apple","id":1029003},{"name":"tea bags","id":10111111},{"name":"tequila","id":10814037},{"name":"teriyaki sauce","id":6112},{"name":"thai basil","id":1012044},{"name":"thai chiles","id":11670},{"name":"thai red curry paste","id":93605},{"name":"thick-cut bacon","id":10310123},{"name":"tilapia fillets","id":15261},{"name":"toast","id":18070},{"name":"toffee bits","id":19383},{"name":"tofu","id":16213},{"name":"tomatillos","id":11954},{"name":"tomato juice","id":11886},{"name":"tomato paste","id":11887},{"name":"tomato puree","id":11547},{"name":"tomato sauce","id":11549},{"name":"tomato soup","id":6159},{"name":"tomatoes","id":11529},{"name":"top blade steak","id":13523},{"name":"top round steak","id":23636},{"name":"Top Sirloin","id":23584},{"name":"tortilla","id":18364},{"name":"tortilla chips","id":19056},{"name":"triple sec","id":14534},{"name":"truffle oil","id":1024053},{"name":"tuna","id":10015121},{"name":"turbinado sugar","id":19908},{"name":"turkey","id":5165},{"name":"turkey breast","id":5696},{"name":"turkey kielbasa","id":7955},{"name":"turmeric","id":2043},{"name":"turnips","id":11564},{"name":"unbleached flour","id":10020081},{"name":"unsalted butter","id":1145},{"name":"unsmoked back bacon","id":10130},{"name":"unsweetened applesauce","id":9019},{"name":"unsweetened coconut milk","id":12117},{"name":"unsweetened shredded coconut","id":10012108},{"name":"vanilla bean","id":93622},{"name":"vanilla bean paste","id":93813},{"name":"vanilla essence","id":1012050},{"name":"vanilla extract","id":2050},{"name":"vanilla frosting","id":10019230},{"name":"vanilla instant pudding mix","id":19206},{"name":"vanilla protein powder","id":99076},{"name":"vanilla wafers","id":18609},{"name":"vanilla yogurt","id":1119},{"name":"vegan cheese","id":93701},{"name":"vegan chocolate chips","id":98848},{"name":"vegan margarine","id":4673},{"name":"vegetable broth","id":6615},{"name":"vegetable oil","id":4513},{"name":"vegetarian bacon","id":16542},{"name":"vermouth","id":14132},{"name":"vinaigrette","id":4135},{"name":"vinegar","id":2053},{"name":"vodka","id":14051},{"name":"walnuts","id":12155},{"name":"water","id":14412},{"name":"water chestnuts","id":11590},{"name":"water-packed tuna","id":15121},{"name":"watercress","id":11591},{"name":"watermelon chunks","id":9326},{"name":"wheat bran","id":20077},{"name":"wheat germ","id":20078},{"name":"whipped cream","id":1054},{"name":"whipped topping","id":42135},{"name":"whipping cream","id":1001053},{"name":"whiskey","id":14052},{"name":"white balsamic vinegar","id":1012069},{"name":"white bread","id":18069},{"name":"white cake mix","id":18137},{"name":"white cheddar","id":1011009},{"name":"white chocolate","id":19087},{"name":"white chocolate chips","id":10019087},{"name":"white onion","id":10611282},{"name":"white pepper","id":2032},{"name":"white whole wheat flour","id":93824},{"name":"white wine","id":14106},{"name":"white wine vinegar","id":1002068},{"name":"whole allspice berries","id":1002001},{"name":"whole chicken","id":5006},{"name":"whole coriander seeds","id":2013},{"name":"whole cranberry sauce","id":9081},{"name":"whole kernel corn","id":11177},{"name":"whole star anise","id":1012002},{"name":"whole wheat bread","id":18075},{"name":"whole wheat flour","id":20080},{"name":"whole wheat tortillas","id":93675},{"name":"whole-grain mustard","id":1012046},{"name":"wine","id":14084},{"name":"wine vinegar","id":2068},{"name":"winter squash","id":10111485},{"name":"won ton wraps","id":10018368},{"name":"worcestershire sauce","id":6971},{"name":"wraps","id":10018364},{"name":"xanthan gum","id":93626},{"name":"yeast","id":18375},{"name":"yellow bell pepper","id":11951},{"name":"yellow cake mix","id":18144},{"name":"yellow onion","id":10511282},{"name":"yogurt","id":1116},{"name":"yukon gold potato","id":10211362}]');

/***/ }),

/***/ "./src/assets/popular-ingredients.json":
/*!*********************************************!*\
  !*** ./src/assets/popular-ingredients.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"olive oil","id":4053},{"name":"flour","id":20081},{"name":"butter","id":1001},{"name":"chicken breasts","id":5062},{"name":"egg whites","id":1124},{"name":"egg yolk","id":1125},{"name":"rice","id":20444},{"name":"pork","id":10010219},{"name":"beef","id":23572},{"name":"cheese","id":1041009},{"name":"garlic","id":11215},{"name":"orange","id":9200},{"name":"turkey","id":5165},{"name":"onion","id":11282},{"name":"corn","id":11168},{"name":"milk","id":1077},{"name":"mayonnaise","id":4025},{"name":"almonds","id":12061},{"name":"bacon","id":10123},{"name":"mushroom","id":11260},{"name":"beets","id":11080},{"name":"lamb","id":10017224},{"name":"apple","id":9003},{"name":"raw shrimp","id":15152}]');

/***/ }),

/***/ "./src/tmp/recipes.json":
/*!******************************!*\
  !*** ./src/tmp/recipes.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"results":[{"vegetarian":false,"vegan":false,"glutenFree":true,"dairyFree":false,"veryHealthy":false,"cheap":false,"veryPopular":false,"sustainable":false,"lowFodmap":false,"weightWatcherSmartPoints":10,"gaps":"no","preparationMinutes":5,"cookingMinutes":22,"aggregateLikes":4,"healthScore":6,"creditsText":"Jen West","sourceName":"Pink When","pricePerServing":145.45,"extendedIngredients":[{"id":1082034,"aisle":"Spices and Seasonings","image":"seasoning.jpg","consistency":"SOLID","name":"chicken seasoning","nameClean":"chicken seasoning","original":"2 Tbsp chicken seasoning","originalName":"chicken seasoning","amount":2,"unit":"Tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1017,"aisle":"Cheese","image":"cream-cheese.jpg","consistency":"SOLID","name":"cream cheese","nameClean":"cream cheese","original":"1 8oz package cream cheese","originalName":"package cream cheese","amount":8,"unit":"oz","meta":[],"measures":{"us":{"amount":8,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":226.796,"unitShort":"g","unitLong":"grams"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"green onions","nameClean":"spring onions","original":"green onions","originalName":"green onions","amount":4,"unit":"servings","meta":[],"measures":{"us":{"amount":4,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":4,"unitShort":"servings","unitLong":"servings"}}},{"id":1055062,"aisle":"Meat","image":"chicken-breasts.png","consistency":"SOLID","name":"chicken breast","nameClean":"boneless skinless chicken breast","original":"3-4 boneless skinless chicken breast","originalName":"boneless skinless chicken breast","amount":3,"unit":"","meta":["boneless","skinless"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}}],"id":1003670,"title":"Stuffed Chicken Breast","readyInMinutes":27,"servings":4,"sourceUrl":"https://www.pinkwhen.com/stuffed-chicken-breast/","image":"https://spoonacular.com/recipeImages/1003670-312x231.jpg","imageType":"jpg","cuisines":[],"dishTypes":["side dish"],"diets":["gluten free","primal","ketogenic"],"occasions":[],"analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Wash and Pat dry chicken breast.","ingredients":[{"id":5062,"name":"chicken breast","localizedName":"chicken breast","image":"chicken-breasts.png"}],"equipment":[]},{"number":2,"step":"Cut chicken lengthwise, careful not to cut all the way through.","ingredients":[{"id":0,"name":"chicken","localizedName":"chicken","image":"whole-chicken.jpg"}],"equipment":[]},{"number":3,"step":"Stuff chicken breast with cream cheese and onion.","ingredients":[{"id":5062,"name":"chicken breast","localizedName":"chicken breast","image":"chicken-breasts.png"},{"id":1017,"name":"cream cheese","localizedName":"cream cheese","image":"cream-cheese.jpg"},{"id":11282,"name":"onion","localizedName":"onion","image":"brown-onion.png"}],"equipment":[]},{"number":4,"step":"Firmly press the chicken breast closed.","ingredients":[{"id":5062,"name":"chicken breast","localizedName":"chicken breast","image":"chicken-breasts.png"}],"equipment":[]},{"number":5,"step":"Spray chicken with olive oil based cooking spray.","ingredients":[{"id":4679,"name":"cooking spray","localizedName":"cooking spray","image":"cooking-spray.png"},{"id":4053,"name":"olive oil","localizedName":"olive oil","image":"olive-oil.jpg"},{"id":0,"name":"chicken","localizedName":"chicken","image":"whole-chicken.jpg"}],"equipment":[]},{"number":6,"step":"Rib chicken breast with your favorite chicken seasonings.","ingredients":[{"id":5062,"name":"chicken breast","localizedName":"chicken breast","image":"chicken-breasts.png"},{"id":1042027,"name":"seasoning","localizedName":"seasoning","image":"seasoning.png"},{"id":0,"name":"chicken","localizedName":"chicken","image":"whole-chicken.jpg"}],"equipment":[]}]}],"spoonacularSourceUrl":"https://spoonacular.com/stuffed-chicken-breast-1003670","usedIngredientCount":2,"missedIngredientCount":2,"likes":0,"missedIngredients":[{"id":1082034,"amount":2,"unit":"Tbsp","unitLong":"Tbsps","unitShort":"Tbsp","aisle":"Spices and Seasonings","name":"chicken seasoning","original":"2 Tbsp chicken seasoning","originalName":"chicken seasoning","meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/seasoning.jpg"},{"id":1017,"amount":8,"unit":"oz","unitLong":"ounces","unitShort":"oz","aisle":"Cheese","name":"cream cheese","original":"1 8oz package cream cheese","originalName":"package cream cheese","meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg"}],"usedIngredients":[{"id":11291,"amount":4,"unit":"servings","unitLong":"servings","unitShort":"servings","aisle":"Produce","name":"green onions","original":"green onions","originalName":"green onions","meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"},{"id":1055062,"amount":3,"unit":"","unitLong":"","unitShort":"","aisle":"Meat","name":"chicken breast","original":"3-4 boneless skinless chicken breast","originalName":"boneless skinless chicken breast","meta":["boneless","skinless"],"extendedName":"skinless boneless chicken breast","image":"https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png"}],"unusedIngredients":[{"id":1056,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Milk, Eggs, Other Dairy","name":"cream","original":"sour cream","originalName":"sour cream","meta":["sour"],"extendedName":"sour cream","image":"https://spoonacular.com/cdn/ingredients_100x100/sour-cream.jpg"},{"id":11124,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Produce","name":"carrots","original":"carrots","originalName":"carrots","meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png"}]},{"vegetarian":false,"vegan":false,"glutenFree":true,"dairyFree":false,"veryHealthy":false,"cheap":true,"veryPopular":false,"sustainable":false,"lowFodmap":false,"weightWatcherSmartPoints":0,"gaps":"no","preparationMinutes":5,"cookingMinutes":60,"aggregateLikes":0,"healthScore":0,"creditsText":"maplewoodroad","license":"spoonacular\'s terms","sourceName":"Maplewood Road","pricePerServing":1.43,"extendedIngredients":[{"id":11294,"aisle":"Produce","image":"sweet-onion.png","consistency":"SOLID","name":"onion","nameClean":"maui onion","original":"1 whole onion, Vidalia or any sweet, mild type","originalName":"whole onion, Vidalia or any sweet, mild type","amount":1,"unit":"","meta":["sweet","whole","or any , mild type"],"measures":{"us":{"amount":1,"unitShort":"","unitLong":""},"metric":{"amount":1,"unitShort":"","unitLong":""}}},{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 Tbsp butter","originalName":"butter","amount":1,"unit":"Tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":6971,"aisle":"Condiments","image":"dark-sauce.jpg","consistency":"LIQUID","name":"bouillon cube","nameClean":"worcestershire sauce","original":"1/2 bouillon cube or 1 Tbsp soy sauce or Worcestershire sauce","originalName":"bouillon cube or 1 Tbsp soy sauce or Worcestershire sauce","amount":0.5,"unit":"","meta":[],"measures":{"us":{"amount":0.5,"unitShort":"","unitLong":""},"metric":{"amount":0.5,"unitShort":"","unitLong":""}}}],"id":1697653,"title":"Butter Baked Onion - Pure Hygge Food","author":"maplewoodroad","readyInMinutes":65,"servings":75,"sourceUrl":"https://maplewoodroad.com/butter-baked-onion/","image":"https://spoonacular.com/recipeImages/1697653-312x231.jpg","imageType":"jpg","cuisines":[],"dishTypes":["antipasti","starter","snack","appetizer","antipasto","hor d\'oeuvre"],"diets":["gluten free"],"occasions":[],"analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Cut the bottom off the onion and save for stock","ingredients":[{"id":11282,"name":"onion","localizedName":"onion","image":"brown-onion.png"},{"id":1006615,"name":"stock","localizedName":"stock","image":"chicken-broth.png"}],"equipment":[]},{"number":2,"step":"Peel off the papery skin and scoop out the top","ingredients":[],"equipment":[]},{"number":3,"step":"Fill the scooped-out part with butter and bouillon/soy/Worcestershire","ingredients":[{"id":6971,"name":"worcestershire sauce","localizedName":"worcestershire sauce","image":"dark-sauce.jpg"},{"id":1006008,"name":"bouillon","localizedName":"bouillon","image":""},{"id":1001,"name":"butter","localizedName":"butter","image":"butter-sliced.jpg"}],"equipment":[]},{"number":4,"step":"Wrap in aluminum foil","ingredients":[{"id":10018364,"name":"wrap","localizedName":"wrap","image":"flour-tortilla.jpg"}],"equipment":[{"id":404765,"name":"aluminum foil","localizedName":"aluminum foil","image":"aluminum-foil.png"}]},{"number":5,"step":"Bake at 350°F for about 60 minutes or until fork tender","ingredients":[],"equipment":[{"id":404784,"name":"oven","localizedName":"oven","image":"oven.jpg","temperature":{"number":350,"unit":"Fahrenheit"}}],"length":{"number":60,"unit":"minutes"}},{"number":6,"step":"Remove from the oven and serve by itself or as a side dish","ingredients":[],"equipment":[{"id":404784,"name":"oven","localizedName":"oven","image":"oven.jpg"}]}]}],"spoonacularSourceUrl":"https://spoonacular.com/butter-baked-onion-pure-hygge-food-1697653","usedIngredientCount":1,"missedIngredientCount":2,"likes":0,"missedIngredients":[{"id":1001,"amount":1,"unit":"Tbsp","unitLong":"Tbsp","unitShort":"Tbsp","aisle":"Milk, Eggs, Other Dairy","name":"butter","original":"1 Tbsp butter","originalName":"butter","meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"},{"id":6971,"amount":0.5,"unit":"","unitLong":"","unitShort":"","aisle":"Condiments","name":"bouillon cube","original":"1/2 bouillon cube or 1 Tbsp soy sauce or Worcestershire sauce","originalName":"bouillon cube or 1 Tbsp soy sauce or Worcestershire sauce","meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/dark-sauce.jpg"}],"usedIngredients":[{"id":11294,"amount":1,"unit":"","unitLong":"","unitShort":"","aisle":"Produce","name":"onion","original":"1 whole onion, Vidalia or any sweet, mild type","originalName":"whole onion, Vidalia or any sweet, mild type","meta":["sweet","whole","or any , mild type"],"extendedName":"whole sweet onion","image":"https://spoonacular.com/cdn/ingredients_100x100/sweet-onion.png"}],"unusedIngredients":[{"id":5062,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Meat","name":"chicken breasts","original":"chicken breasts","originalName":"chicken breasts","meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png"},{"id":1056,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Milk, Eggs, Other Dairy","name":"cream","original":"sour cream","originalName":"sour cream","meta":["sour"],"extendedName":"sour cream","image":"https://spoonacular.com/cdn/ingredients_100x100/sour-cream.jpg"},{"id":11124,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Produce","name":"carrots","original":"carrots","originalName":"carrots","meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png"}]}],"offset":0,"number":2,"totalResults":2139}');

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