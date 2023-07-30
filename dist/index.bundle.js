/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Pacifico&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --color-1: white;
  --color-1-hover: hsl(0, 0%, 97%);
  --color-1-active: hsl(0, 0%, 94%);;
  --color-2: hsl(0, 0%, 98%);
  --color-2-hover: hsl(0, 0%, 95%);
  --color-2-active: hsl(0, 0%, 92%);
  --color-3: rgb(158, 210, 198);
  --color-3-hover: hsl(166, 37%, 69%);
  --color-3-active: hsl(166, 37%, 66%);
  --color-3-selected: hsl(166, 37%, 67%);
  --color-4: rgb(84, 186, 185);
  --color-4-hover: hsl(179, 43%, 50%);
  --color-4-active: hsl(179, 43%, 47%);
  --header-height: 4rem;
  --sidebar-width: 250px;
  --move-up-distance: 111.78125px;
  --move-down-distance: 111.78125px;
  --card-gap: 1rem;
  --card-top-overflow-margin: 0;
  --dropdown-top: 0;
  --dropdown-left: 0;
  --button-width: 2rem;
}

*, *::after, *::before {
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}

html, body,
h1, h2, h3, h4, h5, h6, 
p, ul, ol, li, button {
  margin: 0;
  padding: 0;
}

ul, ol, li {
  list-style: none;
} 

a {
  text-decoration: none;
}

svg {
  vertical-align: top;
}

.site-container {
  height: 100%;
  width: 100%;
}

/* -------------------------------------------------- */
/* Header ------------------------------------------- */
/* -------------------------------------------------- */

.header {
  position: relative;
  height: var(--header-height);
  padding: 0.25rem;
  background-color: var(--color-4);
  color: white;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  z-index: 100;
}

.header * {
  transition: margin 0.25s;
}

.header h1{
  position: relative;
  bottom: 0.3rem;
  padding: 0 4.5rem 0 0.25rem;
  font-family: 'Pacifico', cursive;
  font-weight: 200;
  transition: 
    width 0.5s ease 0s, 
    padding 0.5s ease 0s, 
    opacity 0.5s ease 0s, 
    visibility 0s ease 0s;
  visibility: visible;
  opacity: 1;
}

@media (max-width: 600px) {
  .header h1{
    width: 0;
    padding: 0;
    visibility: hidden;
    opacity: 0;
    transition: 
      width 0.5s ease 0s, 
      padding 0.5s ease 0s, 
      opacity 0.5s ease 0s, 
      visibility 0s ease 0.5s;
  }
}

.search-box {
  position: relative;
  flex: 1;
  max-width: 500px;
  margin-right: auto;
  display: flex;
  align-items: center;
}

.search-box input {
  height: 3rem;
  width: 100%;
  padding: 0 1rem 0 3rem;
  background-color: var(--color-3);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.15rem;
  font-weight: 400;

  transition: 0.1s;
}

@media (max-width: 600px) {
  .search-box input {
    margin: 0.25rem
  }
}

.search-box input::placeholder {
  color: white;
}

.search-box input:focus::placeholder{
  color: lightgrey;
}

.search-box input:focus {
  background-color: white;
  color: grey;
  outline: none;
}

.search-box input:focus + svg {
  fill: grey;
}

.search-box svg {
  position: absolute;
  left: 0.75rem;
  height: 1.75rem;
  fill: white;
}

.button {
  border: none;
  border-radius: 50%;
  overflow: hidden;
}

.header .button {
  height: 3rem;
  width: 3rem;
  background-color: var(--color-4);
}

.header .button:hover {
  background-color: var(--color-4-hover);
}

.header .button:active {
  background-color: var(--color-4-active);
}

.button svg {
  height: 1.75rem;
  fill: white;
}

#buttonSidebar {
  margin-left: 0.5rem;
}

#buttonUser {
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  .header .button,
  #buttonSidebar,
  #buttonUser {
    margin: 0;
  }

  #buttonNotification.searchBox-focused,
  #buttonSettings.searchBox-focused,
  #buttonUser.searchBox-focused {
    display: none;
  }
}

#buttonUser img {
  height: 80%;
  width: 80%;
  object-fit: cover;
  border-radius: 50%;
}

/* -------------------------------------------------- */
/* Sidebar ------------------------------------------ */
/* -------------------------------------------------- */


.sidebar {
  position: absolute;
  left: 0;
  height: calc(100vh - var(--header-height));
  width: var(--sidebar-width);
  padding: 0.5rem;
  background-color: var(--color-2);
  z-index: 10;
  transition: left 0.5s;
}

.sidebar.sidebar-hidden {
  left: calc(-1 * var(--sidebar-width));
}

.sidebar h4 {
  font-size: 1.25rem;
}

.sidebar p {
  font-weight: 400;
}

.section-title {
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  border-radius: 0.5rem;
}

.section-title:hover {
  background-color: var(--color-2-hover);
}

.section-title:active {
  background-color: var(--color-2-active);
}

.section-title h4 {
  margin-right: auto;
}

.section-title .button {
  height: 2rem;
  width: 2rem;
  background-color: transparent;
}

.section-title svg {
  position: relative;
  top: -0.05rem;
  height: 1.5rem;
  fill: hsl(0, 0%, 75%);
}

.section-title .button:hover svg{
  fill: var(--color-4-hover);
}

.section-title .button:active svg{
  fill: var(--color-4-active);
}

.sidebar li {
  padding: 0.25rem 1rem;
  color: hsl(0, 0%, 25%);
  fill: hsl(0, 0%, 25%);
  display: flex;
  gap: 0.5rem;
  border-radius: 0.5rem;
}

.sidebar li:last-child {
  margin-bottom: 2rem;
}

.sidebar li:hover {
  background-color: var(--color-2-hover);
}

.sidebar li.selected,
.sidebar li:active {
  background-color: var(--color-2-active);
}

.sidebar li > svg {
  position: relative;
  top: 0.1rem;
  height: 1.25rem;
}

/* -------------------------------------------------- */
/* Main --------------------------------------------- */
/* -------------------------------------------------- */

.main-container {
  height: calc(100vh - var(--header-height));
  display: flex;
  overflow: hidden;
}

.main {
  min-width: 0;
  margin-left: var(--sidebar-width);
  position: relative;
  padding: 1.25rem 1rem;
  flex: 1;
  background-color: var(--color-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: margin 0.5s;
}

.main.sidebar-hidden {
  margin-left: 0;
}

#sidebarOverlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;
  z-index: 9;
}

@media (max-width: 600px) {
  .main {
    margin-left: 0;
  }

  #sidebarOverlay {
    visibility: visible;
    opacity: 0.25;
    transition: opacity 0.25s ease 0s, visibility 0s ease 0s;
  }

  #sidebarOverlay.sidebar-hidden {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;
  }
}

.main h3 {
  color: hsl(0, 0%, 50%);
  font-weight: 600;
}

#mainToday .cards {
  position: relative;
  height: 0;
  width: 100%;
  max-width: 720px;  
  flex: 1;
  display: flex;
  flex-direction: column;
}

.container.actual {
  position: relative;
  max-height: 100%;
  overflow-y: scroll; 
  margin-top: var(--card-top-overflow-margin);
  padding: 0 1rem;
  padding-bottom: 5px;
  border-radius: 1rem;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */  
}

.container.actual::-webkit-scrollbar { /* WebKit */
  height: 0;
  width: 0;
}

/* .container.ongoing,
.container.completed {
  display: grid;
} */

.container.ongoing .card .button.done svg.check {
  opacity: 0;
}

.container.ongoing .card .button.done:hover svg.check {
  opacity: 0.4;
}

.container.ongoing .card .button.done:active svg.check {
  opacity: 0.55;
}

.container.completed .card .button.done svg.check {
  opacity: 1;
}

.container.completed .card .button.done:hover svg.check {
  opacity: 0.4;
}

.container.completed .card .button.done:active svg.check {
  opacity: 0.25;
}

.container.add {
  max-height: 100%;
  margin-top: -5px;
  padding: 0 1rem;
}

.overflow-bottom,
.overflow-top {
  position: relative;
  height: 0;
  background-color: var(--color-1);
  background-color: red;
  z-index: 5;
}

.overflow-bottom > div,
.overflow-top > div{
  position: absolute;
  height: 1rem;
  width: 100%;
}

.overflow-top > div {
  top: calc(1rem - 1px);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;
}

.overflow-top.overflowing > div {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;
}

.overflow-bottom > div {
  bottom: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;
}

.overflow-bottom.overflowing > div {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;
}

/* -------------------------------------------------- */
/* Card --------------------------------------------- */
/* -------------------------------------------------- */

.card.add h4 {
  color: hsl(0, 0%, 50%);
  font-weight: 500;
}

.card {
  position: relative;
  margin-top: var(--card-gap);
  padding: 0.5rem 0.75rem 0.15rem 0.75rem;
  background: var(--color-1);
  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  user-select: none;  
  transition: box-shadow 0.25s ease 0s;
}

.card[data-priority=high] {
  box-shadow: 0 0 2px 2px hsl(0, 100%, 75%), 2px 2px 2px rgb(0, 0, 0, 0.1);
}

.card[data-priority=high].focused,
.card[data-priority=high].hover {
  box-shadow: 0 0 2px 2px red, 2px 2px 2px rgb(0, 0, 0, 0.1);
}

.card[data-priority=medium] {
  box-shadow: 0 0 2px 2px hsl(39, 100%, 75%), 2px 2px 2px rgb(0, 0, 0, 0.1);
}

.card[data-priority=medium].focused,
.card[data-priority=medium].hover {
  box-shadow: 0 0 2px 2px orange, 2px 2px 2px rgb(0, 0, 0, 0.1);
}

.card[data-priority=low] {
  box-shadow: 0 0 2px 2px hsl(120, 50%, 65%), 2px 2px 2px rgb(0, 0, 0, 0.1);
}

.card[data-priority=low].focused,
.card[data-priority=low].hover {
  box-shadow: 0 0 2px 2px green, 2px 2px 2px rgb(0, 0, 0, 0.1);
}

.card.hover {
  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);
}

.card h4 {
  margin-bottom: 0.4rem;
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  
}

.card p {
  flex: 1;
  color: hsl(0, 0%, 50%);
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card h4.completed,
.card p.completed {
  text-decoration: line-through;
  color: hsl(0, 0%, 75%);
}

.card .buttons-container {
  margin-top: auto;
  padding-top: 0.25rem;
  display: flex;
  justify-content: end;
}

.card .button {
  height: var(--button-width);
  width: var(--button-width);
  background-color: transparent;
  border-radius: 1.35rem;  
  opacity: 0;
  transition: 0.25s;
}

.card.hover .button {
  opacity: 1;
  width: 2rem;
  color: hsl(0, 0%, 50%);
  white-space: nowrap;
}

.card.hover .button.hover,
.card.hover .button:hover {
  background-color: var(--color-1-hover);
}

.card.hover .button:active {
  background-color: var(--color-1-active);
}

.card .button.done {
  position: absolute;
  top: -0.65rem;
  left: -0.65rem;
  height: 1.35rem;
  width: 1.35rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card .button.done:hover {
  width: 1.35rem;
  padding: 0;  
  background: white;
}

.card .button.done svg {
  position: absolute;
  height: 1.5rem;
}

.card .button.done svg,
.card.hover .button.done:hover svg {
  fill: var(--color-4);
}

.card[data-priority=high] .button.done svg,
.card.hover[data-priority=high] .button.done svg,
.card[data-priority=high] .button.priority svg,
.card[data-priority=high] .button.priority:hover svg {
  fill: red;
}

.card[data-priority=medium] .button.done svg,
.card.hover[data-priority=medium] .button.done svg,
.card[data-priority=medium] .button.priority svg,
.card[data-priority=medium] .button.priority:hover svg   {
  fill: orange;
}

.card[data-priority=low] .button.done svg,
.card.hover[data-priority=low] .button.done svg,
.card[data-priority=low] .button.priority svg,
.card[data-priority=low] .button.priority:hover svg   {
  fill: green;
}

.card svg {
  height: 1.25rem;
  fill: hsl(0, 0%, 75%);
  transition: 0.25s;
}

.card.hover .button:hover svg {
  fill: hsl(0, 0%, 50%);
}

/* -------------------------------------------------- */
/* Card Animation ----------------------------------- */
/* -------------------------------------------------- */

.moving-down {
  animation: 0.25s ease-in-out 0s 1 reverse forwards card-move-down;
}

.moving-up {
  animation: 0.25s ease-in-out 0s 1 reverse forwards card-move-up;
}

.focus-in {
  animation: 0.25s ease-in-out 0s 1 forwards card-focus;
}

.focus-out {
  animation: 0.25s ease-in-out 0s 1 reverse forwards card-focus;
}

.fade-in {
  animation: 0.25s ease-in-out 0s 1 forwards card-fade-in;
}

.fade-out {
  animation: 0.25s ease-in-out 0s 1 forwards card-fade-out;
}

.container-shrinking {
  animation: 0.25s ease-in-out 0s 1 forwards shrink-container;  
}

@keyframes card-move-down {
  from {
    transform: translateX(0);
    transform: translateY(0);
    z-index: 1;
  }

  50% {
    transform: translateX(0.5rem);
  }

  to {
    transform: translateX(0);
    transform: translateY(var(--move-down-distance));
  }
}

@keyframes card-move-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(var(--move-up-distance));
  }
}

@keyframes card-focus {
  from {
    transform: translateY(var(--move-up-distance)) scale(0.8, 0.6);
    opacity: 0;
  }

  to {
    transform: translateY(0) scale(1, 1);
    opacity: 1;
  }
}

@keyframes card-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes card-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes shrink-container {
  from {
    padding-bottom: calc(var(--move-up-distance) + 5px);
  }

  to {
    padding-bottom: 5px;
  }
}

/* -------------------------------------------------- */
/* Card Dropdowns ----------------------------------- */
/* -------------------------------------------------- */

.dropdown {
  position: absolute;
  top: var(--dropdown-top);
  left: var(--dropdown-left);
  padding: 0.125rem;
  background: var(--color-1);
  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  z-index: 1001;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;  
}

.dropdown.visibility-hidden {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;  
}

.dropdown ul {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.dropdown label {
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}

.dropdown label:hover,
.dropdown input:checked + label:hover  {
  background: var(--color-2-hover);
}

.dropdown label:active,
.dropdown input:checked + label,
.dropdown input:checked + label:active  {
  background: var(--color-2-active);
}

.dropdown input {
  display: none;
}

.dropdown label {
  display: flex;
  gap: 0.1rem;
}

.dropdown label[for=priorityHigh] svg{
  fill: red;
}

.dropdown label[for=priorityMedium] svg{
  fill: orange;
}

.dropdown label[for=priorityLow] svg{
  fill: green;
}

.dropdown label[for=priorityNone] svg{
  fill: hsl(0, 0%, 75%);
}

.dropdown svg {
  height: 1rem;
}

.dropdown p {
  color: hsl(0, 0%, 50%);
  font-size: 0.8rem;
  user-select: none;
}

#dropdownOverlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: visible;
  transition: visibility 0s ease 0s;
  z-index: 1000;
}

#dropdownOverlay.visibility-hidden {
  visibility: hidden;
  transition: visibility 0s ease 0s;
}

/* -------------------------------------------------- */
/* Card Overlay ------------------------------------- */
/* -------------------------------------------------- */

#focusedCardOverlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;
}

#focusedCardOverlay.visibility-hidden {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;
}

#focusedCardOverlay .wrapper {
  width: 100%;
  max-width: 900px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
}

.card.focused {
  background-color: white;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);
  user-select: auto;
}

#focusedCardOverlay .card .button {
  opacity: 1;
}

#focusedCardOverlay .submit-container {
  align-self: end;
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

#focusedCardOverlay .submit-container .button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

#buttonFocusedCardCancel {
  background-color: var(--color-2);
  color: dimgrey;
}

#buttonFocusedCardCancel:hover {
  background-color: var(--color-2-hover);
}

#buttonFocusedCardCancel:active {
  background-color: var(--color-2-active);
}

#buttonFocusedCardSubmit {
  background-color: var(--color-4);
  color: white;
  font-weight: 600;
}

#buttonFocusedCardSubmit:hover {
  background-color: var(--color-4-hover);
}

#buttonFocusedCardSubmit:active {
  background-color: var(--color-4-active);
}

#inputTaskTitle,
#inputTaskDescription {
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
}

#inputTaskTitle:focus,
#inputTaskDescription:focus {
  background-color: var(--color-1-hover);
}

#inputTaskTitle {
  font-size: 1.1rem;
  font-weight: 700;
}

#inputTaskDescription {
  font-size: 0.9rem;
  resize: none;  
  overflow: hidden;
  height: 75px;
  max-height: calc((100vh - var(--header-height)) * 0.5);
}

/* -------------------------------------------------- */
/* Load Overlay ------------------------------------- */
/* -------------------------------------------------- */

#loadOverlay {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.1s ease 0.25s, visibility 0s ease 0.35s;
}

.preload * {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -ms-transition: none !important;
  -o-transition: none !important;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Pacifico&display=swap');\n\n:root {\n  --color-1: white;\n  --color-1-hover: hsl(0, 0%, 97%);\n  --color-1-active: hsl(0, 0%, 94%);;\n  --color-2: hsl(0, 0%, 98%);\n  --color-2-hover: hsl(0, 0%, 95%);\n  --color-2-active: hsl(0, 0%, 92%);\n  --color-3: rgb(158, 210, 198);\n  --color-3-hover: hsl(166, 37%, 69%);\n  --color-3-active: hsl(166, 37%, 66%);\n  --color-3-selected: hsl(166, 37%, 67%);\n  --color-4: rgb(84, 186, 185);\n  --color-4-hover: hsl(179, 43%, 50%);\n  --color-4-active: hsl(179, 43%, 47%);\n  --header-height: 4rem;\n  --sidebar-width: 250px;\n  --move-up-distance: 111.78125px;\n  --move-down-distance: 111.78125px;\n  --card-gap: 1rem;\n  --card-top-overflow-margin: 0;\n  --dropdown-top: 0;\n  --dropdown-left: 0;\n  --button-width: 2rem;\n}\n\n*, *::after, *::before {\n  font-family: 'Open Sans', sans-serif;\n  box-sizing: border-box;\n}\n\nhtml, body,\nh1, h2, h3, h4, h5, h6, \np, ul, ol, li, button {\n  margin: 0;\n  padding: 0;\n}\n\nul, ol, li {\n  list-style: none;\n} \n\na {\n  text-decoration: none;\n}\n\nsvg {\n  vertical-align: top;\n}\n\n.site-container {\n  height: 100%;\n  width: 100%;\n}\n\n/* -------------------------------------------------- */\n/* Header ------------------------------------------- */\n/* -------------------------------------------------- */\n\n.header {\n  position: relative;\n  height: var(--header-height);\n  padding: 0.25rem;\n  background-color: var(--color-4);\n  color: white;\n  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  z-index: 100;\n}\n\n.header * {\n  transition: margin 0.25s;\n}\n\n.header h1{\n  position: relative;\n  bottom: 0.3rem;\n  padding: 0 4.5rem 0 0.25rem;\n  font-family: 'Pacifico', cursive;\n  font-weight: 200;\n  transition: \n    width 0.5s ease 0s, \n    padding 0.5s ease 0s, \n    opacity 0.5s ease 0s, \n    visibility 0s ease 0s;\n  visibility: visible;\n  opacity: 1;\n}\n\n@media (max-width: 600px) {\n  .header h1{\n    width: 0;\n    padding: 0;\n    visibility: hidden;\n    opacity: 0;\n    transition: \n      width 0.5s ease 0s, \n      padding 0.5s ease 0s, \n      opacity 0.5s ease 0s, \n      visibility 0s ease 0.5s;\n  }\n}\n\n.search-box {\n  position: relative;\n  flex: 1;\n  max-width: 500px;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n}\n\n.search-box input {\n  height: 3rem;\n  width: 100%;\n  padding: 0 1rem 0 3rem;\n  background-color: var(--color-3);\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 1.15rem;\n  font-weight: 400;\n\n  transition: 0.1s;\n}\n\n@media (max-width: 600px) {\n  .search-box input {\n    margin: 0.25rem\n  }\n}\n\n.search-box input::placeholder {\n  color: white;\n}\n\n.search-box input:focus::placeholder{\n  color: lightgrey;\n}\n\n.search-box input:focus {\n  background-color: white;\n  color: grey;\n  outline: none;\n}\n\n.search-box input:focus + svg {\n  fill: grey;\n}\n\n.search-box svg {\n  position: absolute;\n  left: 0.75rem;\n  height: 1.75rem;\n  fill: white;\n}\n\n.button {\n  border: none;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.header .button {\n  height: 3rem;\n  width: 3rem;\n  background-color: var(--color-4);\n}\n\n.header .button:hover {\n  background-color: var(--color-4-hover);\n}\n\n.header .button:active {\n  background-color: var(--color-4-active);\n}\n\n.button svg {\n  height: 1.75rem;\n  fill: white;\n}\n\n#buttonSidebar {\n  margin-left: 0.5rem;\n}\n\n#buttonUser {\n  margin: 0 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (max-width: 600px) {\n  .header .button,\n  #buttonSidebar,\n  #buttonUser {\n    margin: 0;\n  }\n\n  #buttonNotification.searchBox-focused,\n  #buttonSettings.searchBox-focused,\n  #buttonUser.searchBox-focused {\n    display: none;\n  }\n}\n\n#buttonUser img {\n  height: 80%;\n  width: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n/* -------------------------------------------------- */\n/* Sidebar ------------------------------------------ */\n/* -------------------------------------------------- */\n\n\n.sidebar {\n  position: absolute;\n  left: 0;\n  height: calc(100vh - var(--header-height));\n  width: var(--sidebar-width);\n  padding: 0.5rem;\n  background-color: var(--color-2);\n  z-index: 10;\n  transition: left 0.5s;\n}\n\n.sidebar.sidebar-hidden {\n  left: calc(-1 * var(--sidebar-width));\n}\n\n.sidebar h4 {\n  font-size: 1.25rem;\n}\n\n.sidebar p {\n  font-weight: 400;\n}\n\n.section-title {\n  display: flex;\n  align-items: center;\n  margin: 0.75rem 0;\n  padding: 0.25rem 0.5rem 0.25rem 1rem;\n  border-radius: 0.5rem;\n}\n\n.section-title:hover {\n  background-color: var(--color-2-hover);\n}\n\n.section-title:active {\n  background-color: var(--color-2-active);\n}\n\n.section-title h4 {\n  margin-right: auto;\n}\n\n.section-title .button {\n  height: 2rem;\n  width: 2rem;\n  background-color: transparent;\n}\n\n.section-title svg {\n  position: relative;\n  top: -0.05rem;\n  height: 1.5rem;\n  fill: hsl(0, 0%, 75%);\n}\n\n.section-title .button:hover svg{\n  fill: var(--color-4-hover);\n}\n\n.section-title .button:active svg{\n  fill: var(--color-4-active);\n}\n\n.sidebar li {\n  padding: 0.25rem 1rem;\n  color: hsl(0, 0%, 25%);\n  fill: hsl(0, 0%, 25%);\n  display: flex;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.sidebar li:last-child {\n  margin-bottom: 2rem;\n}\n\n.sidebar li:hover {\n  background-color: var(--color-2-hover);\n}\n\n.sidebar li.selected,\n.sidebar li:active {\n  background-color: var(--color-2-active);\n}\n\n.sidebar li > svg {\n  position: relative;\n  top: 0.1rem;\n  height: 1.25rem;\n}\n\n/* -------------------------------------------------- */\n/* Main --------------------------------------------- */\n/* -------------------------------------------------- */\n\n.main-container {\n  height: calc(100vh - var(--header-height));\n  display: flex;\n  overflow: hidden;\n}\n\n.main {\n  min-width: 0;\n  margin-left: var(--sidebar-width);\n  position: relative;\n  padding: 1.25rem 1rem;\n  flex: 1;\n  background-color: var(--color-1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: margin 0.5s;\n}\n\n.main.sidebar-hidden {\n  margin-left: 0;\n}\n\n#sidebarOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n  z-index: 9;\n}\n\n@media (max-width: 600px) {\n  .main {\n    margin-left: 0;\n  }\n\n  #sidebarOverlay {\n    visibility: visible;\n    opacity: 0.25;\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n  }\n\n  #sidebarOverlay.sidebar-hidden {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n  }\n}\n\n.main h3 {\n  color: hsl(0, 0%, 50%);\n  font-weight: 600;\n}\n\n#mainToday .cards {\n  position: relative;\n  height: 0;\n  width: 100%;\n  max-width: 720px;  \n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.container.actual {\n  position: relative;\n  max-height: 100%;\n  overflow-y: scroll; \n  margin-top: var(--card-top-overflow-margin);\n  padding: 0 1rem;\n  padding-bottom: 5px;\n  border-radius: 1rem;\n  scrollbar-width: none; /* Firefox */\n  -ms-overflow-style: none;  /* Internet Explorer 10+ */  \n}\n\n.container.actual::-webkit-scrollbar { /* WebKit */\n  height: 0;\n  width: 0;\n}\n\n/* .container.ongoing,\n.container.completed {\n  display: grid;\n} */\n\n.container.ongoing .card .button.done svg.check {\n  opacity: 0;\n}\n\n.container.ongoing .card .button.done:hover svg.check {\n  opacity: 0.4;\n}\n\n.container.ongoing .card .button.done:active svg.check {\n  opacity: 0.55;\n}\n\n.container.completed .card .button.done svg.check {\n  opacity: 1;\n}\n\n.container.completed .card .button.done:hover svg.check {\n  opacity: 0.4;\n}\n\n.container.completed .card .button.done:active svg.check {\n  opacity: 0.25;\n}\n\n.container.add {\n  max-height: 100%;\n  margin-top: -5px;\n  padding: 0 1rem;\n}\n\n.overflow-bottom,\n.overflow-top {\n  position: relative;\n  height: 0;\n  background-color: var(--color-1);\n  background-color: red;\n  z-index: 5;\n}\n\n.overflow-bottom > div,\n.overflow-top > div{\n  position: absolute;\n  height: 1rem;\n  width: 100%;\n}\n\n.overflow-top > div {\n  top: calc(1rem - 1px);\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n}\n\n.overflow-top.overflowing > div {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n}\n\n.overflow-bottom > div {\n  bottom: 0;\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n}\n\n.overflow-bottom.overflowing > div {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n}\n\n/* -------------------------------------------------- */\n/* Card --------------------------------------------- */\n/* -------------------------------------------------- */\n\n.card.add h4 {\n  color: hsl(0, 0%, 50%);\n  font-weight: 500;\n}\n\n.card {\n  position: relative;\n  margin-top: var(--card-gap);\n  padding: 0.5rem 0.75rem 0.15rem 0.75rem;\n  background: var(--color-1);\n  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  user-select: none;  \n  transition: box-shadow 0.25s ease 0s;\n}\n\n.card[data-priority=high] {\n  box-shadow: 0 0 2px 2px hsl(0, 100%, 75%), 2px 2px 2px rgb(0, 0, 0, 0.1);\n}\n\n.card[data-priority=high].focused,\n.card[data-priority=high].hover {\n  box-shadow: 0 0 2px 2px red, 2px 2px 2px rgb(0, 0, 0, 0.1);\n}\n\n.card[data-priority=medium] {\n  box-shadow: 0 0 2px 2px hsl(39, 100%, 75%), 2px 2px 2px rgb(0, 0, 0, 0.1);\n}\n\n.card[data-priority=medium].focused,\n.card[data-priority=medium].hover {\n  box-shadow: 0 0 2px 2px orange, 2px 2px 2px rgb(0, 0, 0, 0.1);\n}\n\n.card[data-priority=low] {\n  box-shadow: 0 0 2px 2px hsl(120, 50%, 65%), 2px 2px 2px rgb(0, 0, 0, 0.1);\n}\n\n.card[data-priority=low].focused,\n.card[data-priority=low].hover {\n  box-shadow: 0 0 2px 2px green, 2px 2px 2px rgb(0, 0, 0, 0.1);\n}\n\n.card.hover {\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\n}\n\n.card h4 {\n  margin-bottom: 0.4rem;\n  font-size: 1.1rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;  \n}\n\n.card p {\n  flex: 1;\n  color: hsl(0, 0%, 50%);\n  font-size: 0.9rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card h4.completed,\n.card p.completed {\n  text-decoration: line-through;\n  color: hsl(0, 0%, 75%);\n}\n\n.card .buttons-container {\n  margin-top: auto;\n  padding-top: 0.25rem;\n  display: flex;\n  justify-content: end;\n}\n\n.card .button {\n  height: var(--button-width);\n  width: var(--button-width);\n  background-color: transparent;\n  border-radius: 1.35rem;  \n  opacity: 0;\n  transition: 0.25s;\n}\n\n.card.hover .button {\n  opacity: 1;\n  width: 2rem;\n  color: hsl(0, 0%, 50%);\n  white-space: nowrap;\n}\n\n.card.hover .button.hover,\n.card.hover .button:hover {\n  background-color: var(--color-1-hover);\n}\n\n.card.hover .button:active {\n  background-color: var(--color-1-active);\n}\n\n.card .button.done {\n  position: absolute;\n  top: -0.65rem;\n  left: -0.65rem;\n  height: 1.35rem;\n  width: 1.35rem;\n  background-color: white;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card .button.done:hover {\n  width: 1.35rem;\n  padding: 0;  \n  background: white;\n}\n\n.card .button.done svg {\n  position: absolute;\n  height: 1.5rem;\n}\n\n.card .button.done svg,\n.card.hover .button.done:hover svg {\n  fill: var(--color-4);\n}\n\n.card[data-priority=high] .button.done svg,\n.card.hover[data-priority=high] .button.done svg,\n.card[data-priority=high] .button.priority svg,\n.card[data-priority=high] .button.priority:hover svg {\n  fill: red;\n}\n\n.card[data-priority=medium] .button.done svg,\n.card.hover[data-priority=medium] .button.done svg,\n.card[data-priority=medium] .button.priority svg,\n.card[data-priority=medium] .button.priority:hover svg   {\n  fill: orange;\n}\n\n.card[data-priority=low] .button.done svg,\n.card.hover[data-priority=low] .button.done svg,\n.card[data-priority=low] .button.priority svg,\n.card[data-priority=low] .button.priority:hover svg   {\n  fill: green;\n}\n\n.card svg {\n  height: 1.25rem;\n  fill: hsl(0, 0%, 75%);\n  transition: 0.25s;\n}\n\n.card.hover .button:hover svg {\n  fill: hsl(0, 0%, 50%);\n}\n\n/* -------------------------------------------------- */\n/* Card Animation ----------------------------------- */\n/* -------------------------------------------------- */\n\n.moving-down {\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-move-down;\n}\n\n.moving-up {\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-move-up;\n}\n\n.focus-in {\n  animation: 0.25s ease-in-out 0s 1 forwards card-focus;\n}\n\n.focus-out {\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-focus;\n}\n\n.fade-in {\n  animation: 0.25s ease-in-out 0s 1 forwards card-fade-in;\n}\n\n.fade-out {\n  animation: 0.25s ease-in-out 0s 1 forwards card-fade-out;\n}\n\n.container-shrinking {\n  animation: 0.25s ease-in-out 0s 1 forwards shrink-container;  \n}\n\n@keyframes card-move-down {\n  from {\n    transform: translateX(0);\n    transform: translateY(0);\n    z-index: 1;\n  }\n\n  50% {\n    transform: translateX(0.5rem);\n  }\n\n  to {\n    transform: translateX(0);\n    transform: translateY(var(--move-down-distance));\n  }\n}\n\n@keyframes card-move-up {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(var(--move-up-distance));\n  }\n}\n\n@keyframes card-focus {\n  from {\n    transform: translateY(var(--move-up-distance)) scale(0.8, 0.6);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0) scale(1, 1);\n    opacity: 1;\n  }\n}\n\n@keyframes card-fade-in {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes card-fade-out {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes shrink-container {\n  from {\n    padding-bottom: calc(var(--move-up-distance) + 5px);\n  }\n\n  to {\n    padding-bottom: 5px;\n  }\n}\n\n/* -------------------------------------------------- */\n/* Card Dropdowns ----------------------------------- */\n/* -------------------------------------------------- */\n\n.dropdown {\n  position: absolute;\n  top: var(--dropdown-top);\n  left: var(--dropdown-left);\n  padding: 0.125rem;\n  background: var(--color-1);\n  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);\n  border-radius: 0.5rem;\n  z-index: 1001;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;  \n}\n\n.dropdown.visibility-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;  \n}\n\n.dropdown ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n\n.dropdown label {\n  padding: 0.125rem 0.25rem;\n  border-radius: 0.25rem;\n}\n\n.dropdown label:hover,\n.dropdown input:checked + label:hover  {\n  background: var(--color-2-hover);\n}\n\n.dropdown label:active,\n.dropdown input:checked + label,\n.dropdown input:checked + label:active  {\n  background: var(--color-2-active);\n}\n\n.dropdown input {\n  display: none;\n}\n\n.dropdown label {\n  display: flex;\n  gap: 0.1rem;\n}\n\n.dropdown label[for=priorityHigh] svg{\n  fill: red;\n}\n\n.dropdown label[for=priorityMedium] svg{\n  fill: orange;\n}\n\n.dropdown label[for=priorityLow] svg{\n  fill: green;\n}\n\n.dropdown label[for=priorityNone] svg{\n  fill: hsl(0, 0%, 75%);\n}\n\n.dropdown svg {\n  height: 1rem;\n}\n\n.dropdown p {\n  color: hsl(0, 0%, 50%);\n  font-size: 0.8rem;\n  user-select: none;\n}\n\n#dropdownOverlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  visibility: visible;\n  transition: visibility 0s ease 0s;\n  z-index: 1000;\n}\n\n#dropdownOverlay.visibility-hidden {\n  visibility: hidden;\n  transition: visibility 0s ease 0s;\n}\n\n/* -------------------------------------------------- */\n/* Card Overlay ------------------------------------- */\n/* -------------------------------------------------- */\n\n#focusedCardOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 8;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n}\n\n#focusedCardOverlay.visibility-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n}\n\n#focusedCardOverlay .wrapper {\n  width: 100%;\n  max-width: 900px;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.card.focused {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\n  user-select: auto;\n}\n\n#focusedCardOverlay .card .button {\n  opacity: 1;\n}\n\n#focusedCardOverlay .submit-container {\n  align-self: end;\n  margin-top: 0.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n\n#focusedCardOverlay .submit-container .button {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.9rem;\n}\n\n#buttonFocusedCardCancel {\n  background-color: var(--color-2);\n  color: dimgrey;\n}\n\n#buttonFocusedCardCancel:hover {\n  background-color: var(--color-2-hover);\n}\n\n#buttonFocusedCardCancel:active {\n  background-color: var(--color-2-active);\n}\n\n#buttonFocusedCardSubmit {\n  background-color: var(--color-4);\n  color: white;\n  font-weight: 600;\n}\n\n#buttonFocusedCardSubmit:hover {\n  background-color: var(--color-4-hover);\n}\n\n#buttonFocusedCardSubmit:active {\n  background-color: var(--color-4-active);\n}\n\n#inputTaskTitle,\n#inputTaskDescription {\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n  border-radius: 0.5rem;\n}\n\n#inputTaskTitle:focus,\n#inputTaskDescription:focus {\n  background-color: var(--color-1-hover);\n}\n\n#inputTaskTitle {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n#inputTaskDescription {\n  font-size: 0.9rem;\n  resize: none;  \n  overflow: hidden;\n  height: 75px;\n  max-height: calc((100vh - var(--header-height)) * 0.5);\n}\n\n/* -------------------------------------------------- */\n/* Load Overlay ------------------------------------- */\n/* -------------------------------------------------- */\n\n#loadOverlay {\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.1s ease 0.25s, visibility 0s ease 0.35s;\n}\n\n.preload * {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -ms-transition: none !important;\n  -o-transition: none !important;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   doesTaskExist: () => (/* binding */ doesTaskExist),
/* harmony export */   getTask: () => (/* binding */ getTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   updateTask: () => (/* binding */ updateTask)
/* harmony export */ });
class Task {
  constructor(title, description, index) {
    this.title = title;
    this.description = description;
    this.isCompleted = false;
    this.index = index;
    this.priority = 'none';
  }

  toggleTaskCompletion() {
    this.isCompleted = this.isCompleted ? false : true;
  }

  setTaskPriority(priority) {
    this.priority = priority;
  }
}

// temporarily fill tasks
const tasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a", 1690255509265),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690255517012),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 1690255521737),
  new Task("Task 4", "asdgaspsum bl aasgas dgsadgsag gsadgasagbal asfpasjpsaj sdgsd", 1690255521739),
  new Task("Task 5", "lorem ipsum blablabalbal asfpas llorem ipsum blablabalbal asfasdajpsaj fsf a", 1690255521740),
  new Task("Task 6", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690255521741),
  new Task("Task 7", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 169025552142),
  new Task("Task 8", "asdgaspsum bl aasgas dgsadgsag gsadgasagbal asfpasjpsaj sdgsd", 1690255521743),
];

// temporary values ================================================ //
tasks[0].setTaskPriority('low');
tasks[1].setTaskPriority('medium');
tasks[2].setTaskPriority('high');
tasks[3].toggleTaskCompletion();
tasks[4].toggleTaskCompletion();

// console.log(tasks);

// ================================================================= //

const getTasks = () => tasks;

const getTask = (index) => {
  return tasks.filter(task => task.index == index)[0];
}

const addTask = (title, description, index) => {
  tasks.push(new Task(title, description, index));
}

const updateTask = (title, description, index) => {
  const task = getTask(index);
  task.title = title;
  task.description = description;
}

const deleteTask = (index) => {
  tasks.splice(tasks.findIndex(task => task.index == index), 1);
}

const doesTaskExist = (index) => {
  return tasks.some(task => task.index == index);
}



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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist.js */ "./src/todolist.js");



const root = document.documentElement;

// Header Elements 
const buttonSidebar = document.querySelector('#buttonSidebar');
const searchBox = document.querySelector('#searchBox');
const buttonNotification = document.querySelector('#buttonNotification');
const buttonSettings = document.querySelector('#buttonSettings');
const buttonUser = document.querySelector('#buttonUser');

// Card Elements
const main = document.querySelector('.main');
const cardsActualContainerTopOverflow = document.querySelector('.overflow-top');
const cardsActualContainerBottomOverflow = document.querySelector('.overflow-bottom');
const cardsActualContainer = document.querySelector('.cards .container.actual');
const cardsOngoingContainer = document.querySelector('.cards .container.ongoing');
const cardsCompletedContainer = document.querySelector('.cards .container.completed');
const focusedCardOverlay = document.querySelector('#focusedCardOverlay');
const focusedCardWrapper = document.querySelector('#focusedCardOverlay > .wrapper');
const addTaskCard = document.querySelector('.card.add');
const dropdownOverlay = document.querySelector('#dropdownOverlay');
const dropdownPriority = document.querySelector('.dropdown.priority');
const dropdownPriorityHigh = document.querySelector('#priorityHigh');
const dropdownPriorityMedium = document.querySelector('#priorityMedium');
const dropdownPriorityLow = document.querySelector('#priorityLow');
const dropdownPriorityNone = document.querySelector('#priorityNone');

// Focused Card Elements
const inputTaskTitle = document.querySelector('#inputTaskTitle');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const buttonFocusedCardDueDate = document.querySelector('#buttonFocusedCardDueDate');
const buttonFocusedCardList = document.querySelector('#buttonFocusedCardList');
const buttonFocusedCardPriority = document.querySelector('#buttonFocusedCardPriority');
const buttonFocusedCardDelete = document.querySelector('#buttonFocusedCardDelete');
const buttonFocusedCardSubmit = document.querySelector('#buttonFocusedCardSubmit');
const buttonFocusedCardCancel = document.querySelector('#buttonFocusedCardCancel');
const focusedCard = document.querySelector('#focusedCard');

// Side Bar Elements
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('#sidebarOverlay');

// -------------------------------------------------------------------------- //
// Cards -------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

const fillCardsContainer = () => {
  _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks().forEach(generateCard);
}

const clearCardsContainer = () => {
  while (cardsOngoingContainer.firstElementChild) {
    cardsOngoingContainer.removeChild(cardsOngoingContainer.firstElementChild);
  }
  while (cardsCompletedContainer.firstElementChild) {
    cardsCompletedContainer.removeChild(cardsCompletedContainer.firstElementChild);
  }
}

const regenerateCardsContainer = () => {
  clearCardsContainer();
  fillCardsContainer();
  toggleCardsContainerOverflowGradient();  
}

const toggleCardsContainerOverflowGradient = () => {
  let scrollTop = cardsActualContainer.scrollTop;
  let scrollBottom = cardsActualContainer.scrollHeight - 
                     cardsActualContainer.scrollTop - 
                     cardsActualContainer.clientHeight;

  if (scrollTop > 0) {
    scrollTop =  scrollTop > 16 ? 16 : scrollTop;
    root.style.setProperty('--card-top-overflow-margin', `${scrollTop}px`);  
    cardsActualContainerTopOverflow.classList.add('overflowing');
  }
  else if (scrollTop === 0) {
    cardsActualContainerTopOverflow.classList.remove('overflowing');
  }

  if (scrollBottom >= 1) {
    cardsActualContainerBottomOverflow.classList.add('overflowing');
  }
  else if (scrollBottom < 1) {
    cardsActualContainerBottomOverflow.classList.remove('overflowing');
  }
}

function getCardIndex(e) {
  let cardIndex;
  document
    .querySelectorAll('.card')
    .forEach(card => {
      if (card.contains(e.target)) {
        cardIndex = card.getAttribute('data-index');
      };
    });
  return cardIndex;
}

const cardCoordinates = (() => {
  const cards = [];

  const setBefore = () => {
    const currentCards = [...document.querySelectorAll('.container:not(.add) .card')];
    cards.push(...currentCards.map(card => ({
      index: card.getAttribute('data-index'),
      before: card.getBoundingClientRect(),
    })));
  }

  const setAfter = () => {
    const currentCards = [...document.querySelectorAll('.container:not(.add) .card')];
    currentCards.forEach(currentCard => {
      cards.forEach(card => {
        if (currentCard.getAttribute('data-index') === card.index) {
          card.after = currentCard.getBoundingClientRect();
        }
      })
    });
  }

  const getCard = (cardIndex) => {
    let matchingCard;
    cards.forEach(card => {
      if (card.index === cardIndex) {
        matchingCard = card;
      }
    })
    return matchingCard;
  }

  const clearCards = () => {
    cards.length = 0;
  }

  return {
    setBefore,
    setAfter,
    getCard,
    clearCards,
  }
})()

const completeCard = (e) => {
  e.stopPropagation();
  const index = getCardIndex(e);
  const task = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(index);

  cardCoordinates.setBefore();

  task.toggleTaskCompletion();
  regenerateCardsContainer();

  cardCoordinates.setAfter();
  animateCompleteCard(index);
  cardCoordinates.clearCards();
}

const animateCompleteCard = (cardIndex) => {
  const movingCard = document.querySelector(`.card[data-index="${cardIndex}"]`); 
  const downDistance = 
    cardCoordinates.getCard(cardIndex).before.top - 
    cardCoordinates.getCard(cardIndex).after.top;
  root.style.setProperty('--move-down-distance', `${downDistance}px`);  
  movingCard.classList.add('moving-down');
  movingCard.addEventListener('animationend', (e) => {
    e.currentTarget.classList.remove('moving-down')      
  });

  const otherCards = document.querySelectorAll(`.container:not(.add) .card:not([data-index="${cardIndex}"])`);
  otherCards.forEach(otherCard => {
    const upDistance = 
      cardCoordinates.getCard(otherCard.getAttribute('data-index')).before.top - 
      cardCoordinates.getCard(otherCard.getAttribute('data-index')).after.top;
    if (upDistance === 0) return;
    root.style.setProperty('--move-up-distance', `${upDistance}px`);
    otherCard.classList.add('moving-up');
    otherCard.addEventListener('animationend', (e) => {
      e.currentTarget.classList.remove('moving-up')      
    });
  });  
}

const generateCard = (task) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = task.index;
  card.dataset.priority = task.priority;
  card.addEventListener('click', showFocusedCard);
  card.addEventListener('mouseenter', hoverCard);

  const buttonDone = document.createElement('button');
  buttonDone.classList.add('button');
  buttonDone.classList.add('done');
  buttonDone.addEventListener('click', completeCard); 

  const dummy = document.createElement('div');
  const dummy2 = document.createElement('div');
  buttonDone.appendChild(dummy);
  buttonDone.appendChild(dummy2);
  
  const h4 = document.createElement('h4');
  h4.textContent = task.title;
  
  const p = document.createElement('p');
  p.textContent = task.description;

  if (task.isCompleted) {
    h4.classList.add('completed');  
    p.classList.add('completed');    
    dummy.outerHTML = `<svg style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;
    dummy2.outerHTML = `<svg class="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>`;
  }
  else {   
    h4.classList.remove('completed');  
    p.classList.remove('completed');    
    dummy.outerHTML = `<svg style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;
    dummy2.outerHTML = `<svg class="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>`;
  }

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  const buttonsEtc = [
    {class: 'duedate', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-clock</title><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>`},
    {class: 'list', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>folder-outline</title><path d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" /></svg>`},
    {class: 'priority', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>flag</title><path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" /></svg>`},
    {class: 'delete', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>`},
  ]

  for (let buttonEtc of buttonsEtc) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add(buttonEtc.class);
    button.dataset.index = task.index;

    if (buttonEtc.class === 'duedate') {
      // button.addEventListener('click', setDueDate);
    }
    else if (buttonEtc.class === 'list') {
      // button.addEventListener('click', assignList);
    }
    else if (buttonEtc.class === 'priority') {
      button.addEventListener('click', clickPriorityDropdown);
    }
    else if (buttonEtc.class === 'delete') {
      button.addEventListener('click', deleteCard);
    }

    const dummy = document.createElement('div');

    button.appendChild(dummy)
    buttonsContainer.appendChild(button);
    
    dummy.outerHTML = buttonEtc.svg;
  }

  card.appendChild(buttonDone);
  card.appendChild(h4);
  card.appendChild(p);
  card.appendChild(buttonsContainer);

  if (task.isCompleted) {
    cardsCompletedContainer.appendChild(card);
  } else {
    cardsOngoingContainer.appendChild(card);
  }
}

const hoverCard = (e) => {
  e.currentTarget.classList.add('hover');
  e.currentTarget.addEventListener('mouseleave', (e) => {
    if (dropdownOverlay.classList.contains('visibility-hidden')) {
      e.currentTarget.classList.remove('hover');      
    }
  }, {once: true});
}

const clickPriorityDropdown = (e) => {
  e.stopPropagation();
  
  const currentPriorityButton = e.currentTarget;
  const currentCardIndex = getCardIndex(e);
  const currentTask = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(currentCardIndex);
  const dropdownTop = `calc(${e.currentTarget.getBoundingClientRect().top}px - 
                      ${cardsActualContainer.getBoundingClientRect().top}px +
                      ${window.getComputedStyle(root).getPropertyValue('--button-width')})`;
  const dropdownLeft = e.currentTarget.getBoundingClientRect().left - 
                       cardsActualContainer.getBoundingClientRect().left;
                      
  root.style.setProperty('--dropdown-top', dropdownTop);
  root.style.setProperty('--dropdown-left', `${dropdownLeft}px`);

  showDropdownPriority(currentPriorityButton);
  setDropdownPriorityIndex(currentCardIndex);
  if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.doesTaskExist(currentCardIndex)) {
    displayCurrentCardPriority(currentTask);
  }

}

const showDropdownPriority = (currentPriorityButton) => {
  currentPriorityButton.classList.add('hover');
  currentPriorityButton.classList.add('clicked');
  dropdownOverlay.classList.remove('visibility-hidden');
  dropdownPriority.classList.remove('visibility-hidden');
}

const hideDropdownPriority = (e) => {
  const selectedCard = document.querySelector(`.card[data-index="${e.currentTarget.dataset.index}"`);
  const currentPriorityButton = document.querySelector(`.button.priority.clicked[data-index="${e.currentTarget.dataset.index}"]`);
  selectedCard.classList.remove('hover');
  currentPriorityButton.classList.remove('hover');
  currentPriorityButton.classList.remove('clicked');
  dropdownOverlay.removeAttribute('data-index');
  dropdownOverlay.classList.add('visibility-hidden');
  dropdownPriority.classList.add('visibility-hidden');
}

const setDropdownPriorityIndex = (index) => {
  dropdownPriorityHigh.dataset.index = index;
  dropdownPriorityMedium.dataset.index = index;
  dropdownPriorityLow.dataset.index = index;
  dropdownPriorityNone.dataset.index = index;
  dropdownOverlay.dataset.index = index;
}

const displayCurrentCardPriority = (task) => {
  const dropdownPriorityList = [
    dropdownPriorityHigh,
    dropdownPriorityMedium,
    dropdownPriorityLow,
    dropdownPriorityNone,
  ]

  dropdownPriorityList.forEach(priority => {
    if (priority.value === task.priority) {
      priority.checked = true;
    }
  });
}

const selectPriority = (e) => {
  const selectedPriority = document.querySelector('.dropdown input[name="priority"]:checked').value;
  const currentCardIndex = e.currentTarget.dataset.index;
  const currentCard = document.querySelector(`.card[data-index="${currentCardIndex}"]`);

  if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.doesTaskExist(currentCardIndex)) {
    const currentTask = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(currentCardIndex);
    currentTask.setTaskPriority(selectedPriority);
  }

  currentCard.dataset.priority = selectedPriority;
  if (!focusedCardOverlay.classList.contains('visibility-hiddden')) {
    focusedCard.dataset.priority = selectedPriority;
  }
  hideDropdownPriority(e);

}

const deleteCard = (e) => {
  e.stopPropagation();
  const index = getCardIndex(e);
  if (!_todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(index)) return;

  cardCoordinates.setBefore();

  _todolist_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask(index);
  regenerateCardsContainer();

  cardCoordinates.setAfter();
  animateDeleteCard(index);
  cardCoordinates.clearCards();
}

const animateDeleteCard = (cardIndex) => {
  const selectedCardHeight = cardCoordinates.getCard(cardIndex).before.height;
  const upDistance = `calc(var(--card-gap) + ${selectedCardHeight}px)`;

  root.style.setProperty('--move-up-distance', `${upDistance}`);
  cardsActualContainer.classList.add('container-shrinking');
  cardsActualContainer.addEventListener('animationend', (e) => {
    cardsActualContainer.classList.remove('container-shrinking')      
  });

  const otherCards = document.querySelectorAll(`.container:not(.add) .card:not([data-index="${cardIndex}"])`);
  otherCards.forEach(otherCard => {
    const upDistance = 
      cardCoordinates.getCard(otherCard.getAttribute('data-index')).before.top - 
      cardCoordinates.getCard(otherCard.getAttribute('data-index')).after.top;
    if (upDistance === 0) return;

    root.style.setProperty('--move-up-distance', `${upDistance}px`);
    otherCard.classList.add('moving-up');
    otherCard.addEventListener('animationend', (e) => {
      otherCard.classList.remove('moving-up')      
    });
  });  
}

// -------------------------------------------------------------------------- //
// Add Task ----------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

const autoSizeTextArea = () => {
  inputTaskDescription.style.height = "75px";
  inputTaskDescription.style.height = (inputTaskDescription.scrollHeight) + "px";
}

const clickFocusedCardOverlay = (e) => {
  if (e.target === e.currentTarget) {
    if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks().some(task => task.index == focusedCard.dataset.index)) {    
      submitFocusedCard();
    }
    else {
      hideFocusedCard();
    }
  }
}

const hideFocusedCardOnResize = () => {
  if ((window.innerWidth <= 600) && 
      (!sidebar.classList.contains('sidebar-hidden')) &&
      (focusedCard.classList.contains('focused'))) {
    hideFocusedCard();
  }
}

const hideFocusedCard = (e) => {
  // Select card(s) that were selected
  // For existing card, expected node in nodelist is 1
  // For adding a new card, expected nodes in nodelist is 2
  // For deleting a card, expected node in nodelist is 0, thus null
  const selectedCards = document.querySelectorAll(`.card:not(.focused)[data-index="${focusedCard.dataset.index}"]`);
  selectedCards.forEach(selectedCard => {
    if (selectedCard !== null) {
      selectedCard.classList.remove('fade-out');
      selectedCard.classList.add('fade-in');
      selectedCard.addEventListener('animationend', () => {
        selectedCard.classList.remove('fade-in');
      });
    }
  });

  addTaskCard.removeAttribute('data-index');
  addTaskCard.removeAttribute('data-priority');
  focusedCard.classList.add('focus-out');
  focusedCard.addEventListener('animationend', () => {
    focusedCard.classList.remove('focused');
    focusedCard.classList.remove('focus-out');
    resetFocusedCardData();    
  }, {once: true});
  focusedCardOverlay.classList.add('visibility-hidden');
}

const showFocusedCard = (e) => {
  const selectedCard = e.currentTarget;  
  initializeFocusedCardData(selectedCard);

  const upDistance = 
    (selectedCard.getBoundingClientRect().top + selectedCard.getBoundingClientRect().height / 2) - 
    (focusedCard.getBoundingClientRect().top + focusedCard.getBoundingClientRect().height / 2) ;
  root.style.setProperty('--move-up-distance', `${upDistance}px`);  
  
  selectedCard.classList.add('fade-out');
  focusedCard.classList.add('focus-in');
  focusedCard.classList.add('focused');
  focusedCard.addEventListener('mouseenter', hoverCard);
  focusedCard.addEventListener('animationend', () => {
    focusedCard.classList.remove('focus-in');
  }, {once: true});
  focusedCardOverlay.classList.remove('visibility-hidden');  
}

const resetFocusedCardData = () => {
  buttonFocusedCardDueDate.removeAttribute('data-index');
  buttonFocusedCardList.removeAttribute('data-index');
  buttonFocusedCardPriority.removeAttribute('data-index');
  buttonFocusedCardDelete.removeAttribute('data-index');
  focusedCard.removeAttribute('data-index');
  focusedCard.removeAttribute('data-priority');
  inputTaskTitle.value = '';
  inputTaskDescription.value = '';
}

const initializeFocusedCardData = (selectedCard) => {
  if (selectedCard.hasAttribute('data-index')) {
    const task = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(selectedCard.dataset.index);
    buttonFocusedCardSubmit.textContent = 'Save';
    buttonFocusedCardDueDate.dataset.index = task.index;
    buttonFocusedCardList.dataset.index = task.index;
    buttonFocusedCardPriority.dataset.index = task.index;
    buttonFocusedCardDelete.dataset.index = task.index;
    focusedCard.dataset.index = task.index;
    focusedCard.dataset.priority = task.priority;
    inputTaskTitle.value = task.title;
    inputTaskDescription.value = task.description;
    autoSizeTextArea();
  }
  else {
    const index = Date.now();
    buttonFocusedCardSubmit.textContent = 'Add';
    buttonFocusedCardDueDate.dataset.index = index;
    buttonFocusedCardList.dataset.index = index;
    buttonFocusedCardPriority.dataset.index = index;
    buttonFocusedCardDelete.dataset.index = index;
    focusedCard.dataset.index = index;
    focusedCard.dataset.priority = 'none';
    addTaskCard.dataset.index = index;
  }
}

const submitFocusedCard = () => {
  const title = inputTaskTitle.value;
  const description = inputTaskDescription.value;
  const index = focusedCard.dataset.index;
  const priority = focusedCard.dataset.priority;

  console.log(priority)

  if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks().some(task => task.index == index)) {    
    _todolist_js__WEBPACK_IMPORTED_MODULE_1__.updateTask(title, description, index);
  }
  else {
    _todolist_js__WEBPACK_IMPORTED_MODULE_1__.addTask(title, description, index);
  }
  _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(index).setTaskPriority(priority);

  regenerateCardsContainer();
  hideFocusedCard();
}

// -------------------------------------------------------------------------- //
// Sidebar ------------------------------------------------------------------ //
// -------------------------------------------------------------------------- //

const toggleSidebarVisibility = () => {
  if (!sidebar.classList.contains('sidebar-hidden')) {
    sidebar.classList.add('sidebar-hidden');
    sidebarOverlay.classList.add('sidebar-hidden');
    main.classList.add('sidebar-hidden'); 
  }
  else {
    sidebar.classList.remove('sidebar-hidden');
    sidebarOverlay.classList.remove('sidebar-hidden');
    main.classList.remove('sidebar-hidden');
    sidebarOverlay.addEventListener('click', toggleSidebarVisibility, {once: true});   
  }
  if ((window.innerWidth <= 600) && (focusedCard.classList.contains('focused'))) {
    hideFocusedCard();
  }

}

// -------------------------------------------------------------------------- //
// Searchbox ---------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

const expandSearchBoxOnMobile = () => {
  if (!buttonNotification.classList.contains('searchBox-focused')) {
    buttonNotification.classList.add('searchBox-focused');
    buttonSettings.classList.add('searchBox-focused');
    buttonUser.classList.add('searchBox-focused');
    searchBox.addEventListener('blur', expandSearchBoxOnMobile, {once: true});
  }
  else {
    buttonNotification.classList.remove('searchBox-focused');
    buttonSettings.classList.remove('searchBox-focused');
    buttonUser.classList.remove('searchBox-focused');
    searchBox.addEventListener('focus', expandSearchBoxOnMobile, {once: true});    
  }
}

// -------------------------------------------------------------------------- //
// Others ------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

window.addEventListener('resize', hideFocusedCardOnResize);
window.addEventListener('resize', autoSizeTextArea);

// Header 
searchBox.addEventListener('focus', expandSearchBoxOnMobile, {once: true});

//Cards
cardsActualContainer.addEventListener('scroll', toggleCardsContainerOverflowGradient);
addTaskCard.addEventListener('click', showFocusedCard);
addTaskCard.addEventListener('mouseenter', hoverCard);
dropdownOverlay.addEventListener('click', hideDropdownPriority);
dropdownPriorityHigh.addEventListener('click', selectPriority);
dropdownPriorityMedium.addEventListener('click', selectPriority);
dropdownPriorityLow.addEventListener('click', selectPriority);
dropdownPriorityNone.addEventListener('click', selectPriority);

// Focused Card
inputTaskDescription.addEventListener('input', autoSizeTextArea);
focusedCardOverlay.addEventListener('click', clickFocusedCardOverlay);
focusedCardWrapper.addEventListener('click', clickFocusedCardOverlay);
buttonFocusedCardPriority.addEventListener('click', clickPriorityDropdown);
buttonFocusedCardDelete.addEventListener('click', deleteCard);
buttonFocusedCardDelete.addEventListener('click', hideFocusedCard);
buttonFocusedCardCancel.addEventListener('click', hideFocusedCard);
buttonFocusedCardSubmit.addEventListener('click', submitFocusedCard);

// Sidebar
buttonSidebar.addEventListener('click', toggleSidebarVisibility);
sidebarOverlay.addEventListener('click', toggleSidebarVisibility, {once: true});

// Initial generation of cards container
regenerateCardsContainer();
setTimeout(() => {document.body.classList.remove('preload')}, 0);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DO0FBQ3pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0I7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFNBQVMsT0FBTyxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxRQUFRLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxNQUFNLE9BQU8sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLGVBQWUsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSx1QkFBdUIseUJBQXlCLE9BQU8saUJBQWlCLFdBQVcsVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLFFBQVEsVUFBVSxNQUFNLFFBQVEsVUFBVSxNQUFNLFFBQVEsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEs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O0FBQ0EsaUJBQWlCLGlEQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTSxrREFBaUI7QUFDdkIsSUFBSSxvREFBbUI7QUFDdkI7QUFDQTtBQUNBLElBQUksaURBQWdCO0FBQ3BCO0FBQ0EsRUFBRSxpREFBZ0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsV0FBVztBQUNsRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxXQUFXO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsV0FBVztBQUM3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOERBQThELFdBQVc7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1FQUFtRSxXQUFXOztBQUU5RTtBQUNBO0FBQ0Esa0JBQWtCLDBDQUEwQyxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1jb2xvci0xOiB3aGl0ZTtcbiAgLS1jb2xvci0xLWhvdmVyOiBoc2woMCwgMCUsIDk3JSk7XG4gIC0tY29sb3ItMS1hY3RpdmU6IGhzbCgwLCAwJSwgOTQlKTs7XG4gIC0tY29sb3ItMjogaHNsKDAsIDAlLCA5OCUpO1xuICAtLWNvbG9yLTItaG92ZXI6IGhzbCgwLCAwJSwgOTUlKTtcbiAgLS1jb2xvci0yLWFjdGl2ZTogaHNsKDAsIDAlLCA5MiUpO1xuICAtLWNvbG9yLTM6IHJnYigxNTgsIDIxMCwgMTk4KTtcbiAgLS1jb2xvci0zLWhvdmVyOiBoc2woMTY2LCAzNyUsIDY5JSk7XG4gIC0tY29sb3ItMy1hY3RpdmU6IGhzbCgxNjYsIDM3JSwgNjYlKTtcbiAgLS1jb2xvci0zLXNlbGVjdGVkOiBoc2woMTY2LCAzNyUsIDY3JSk7XG4gIC0tY29sb3ItNDogcmdiKDg0LCAxODYsIDE4NSk7XG4gIC0tY29sb3ItNC1ob3ZlcjogaHNsKDE3OSwgNDMlLCA1MCUpO1xuICAtLWNvbG9yLTQtYWN0aXZlOiBoc2woMTc5LCA0MyUsIDQ3JSk7XG4gIC0taGVhZGVyLWhlaWdodDogNHJlbTtcbiAgLS1zaWRlYmFyLXdpZHRoOiAyNTBweDtcbiAgLS1tb3ZlLXVwLWRpc3RhbmNlOiAxMTEuNzgxMjVweDtcbiAgLS1tb3ZlLWRvd24tZGlzdGFuY2U6IDExMS43ODEyNXB4O1xuICAtLWNhcmQtZ2FwOiAxcmVtO1xuICAtLWNhcmQtdG9wLW92ZXJmbG93LW1hcmdpbjogMDtcbiAgLS1kcm9wZG93bi10b3A6IDA7XG4gIC0tZHJvcGRvd24tbGVmdDogMDtcbiAgLS1idXR0b24td2lkdGg6IDJyZW07XG59XG5cbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHksXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBcbnAsIHVsLCBvbCwgbGksIGJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxudWwsIG9sLCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59IFxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5zdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uc2l0ZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogSGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmhlYWRlciAqIHtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzO1xufVxuXG4uaGVhZGVyIGgxe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMC4zcmVtO1xuICBwYWRkaW5nOiAwIDQuNXJlbSAwIDAuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogMjAwO1xuICB0cmFuc2l0aW9uOiBcbiAgICB3aWR0aCAwLjVzIGVhc2UgMHMsIFxuICAgIHBhZGRpbmcgMC41cyBlYXNlIDBzLCBcbiAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXG4gICAgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRlciBoMXtcbiAgICB3aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IFxuICAgICAgd2lkdGggMC41cyBlYXNlIDBzLCBcbiAgICAgIHBhZGRpbmcgMC41cyBlYXNlIDBzLCBcbiAgICAgIG9wYWNpdHkgMC41cyBlYXNlIDBzLCBcbiAgICAgIHZpc2liaWxpdHkgMHMgZWFzZSAwLjVzO1xuICB9XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxcmVtIDAgM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIG1hcmdpbjogMC4yNXJlbVxuICB9XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogZ3JleTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMgKyBzdmcge1xuICBmaWxsOiBncmV5O1xufVxuXG4uc2VhcmNoLWJveCBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAuNzVyZW07XG4gIGhlaWdodDogMS43NXJlbTtcbiAgZmlsbDogd2hpdGU7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlYWRlciAuYnV0dG9uIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG59XG5cbi5oZWFkZXIgLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xufVxuXG4uaGVhZGVyIC5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xufVxuXG4uYnV0dG9uIHN2ZyB7XG4gIGhlaWdodDogMS43NXJlbTtcbiAgZmlsbDogd2hpdGU7XG59XG5cbiNidXR0b25TaWRlYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuI2J1dHRvblVzZXIge1xuICBtYXJnaW46IDAgMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVhZGVyIC5idXR0b24sXG4gICNidXR0b25TaWRlYmFyLFxuICAjYnV0dG9uVXNlciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2J1dHRvbk5vdGlmaWNhdGlvbi5zZWFyY2hCb3gtZm9jdXNlZCxcbiAgI2J1dHRvblNldHRpbmdzLnNlYXJjaEJveC1mb2N1c2VkLFxuICAjYnV0dG9uVXNlci5zZWFyY2hCb3gtZm9jdXNlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4jYnV0dG9uVXNlciBpbWcge1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDgwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIFNpZGViYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgei1pbmRleDogMTA7XG4gIHRyYW5zaXRpb246IGxlZnQgMC41cztcbn1cblxuLnNpZGViYXIuc2lkZWJhci1oaWRkZW4ge1xuICBsZWZ0OiBjYWxjKC0xICogdmFyKC0tc2lkZWJhci13aWR0aCkpO1xufVxuXG4uc2lkZWJhciBoNCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnNpZGViYXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtIDAuMjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4uc2VjdGlvbi10aXRsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xufVxuXG4uc2VjdGlvbi10aXRsZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWFjdGl2ZSk7XG59XG5cbi5zZWN0aW9uLXRpdGxlIGg0IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc2VjdGlvbi10aXRsZSAuYnV0dG9uIHtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHN2ZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMC4wNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcbn1cblxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjpob3ZlciBzdmd7XG4gIGZpbGw6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xufVxuXG4uc2VjdGlvbi10aXRsZSAuYnV0dG9uOmFjdGl2ZSBzdmd7XG4gIGZpbGw6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcbn1cblxuLnNpZGViYXIgbGkge1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDI1JSk7XG4gIGZpbGw6IGhzbCgwLCAwJSwgMjUlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLnNpZGViYXIgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5zaWRlYmFyIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1ob3Zlcik7XG59XG5cbi5zaWRlYmFyIGxpLnNlbGVjdGVkLFxuLnNpZGViYXIgbGk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xufVxuXG4uc2lkZWJhciBsaSA+IHN2ZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwLjFyZW07XG4gIGhlaWdodDogMS4yNXJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIE1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYWluIHtcbiAgbWluLXdpZHRoOiAwO1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMS4yNXJlbSAxcmVtO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXM7XG59XG5cbi5tYWluLnNpZGViYXItaGlkZGVuIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbiNzaWRlYmFyT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcbiAgei1pbmRleDogOTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICNzaWRlYmFyT3ZlcmxheSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xuICB9XG5cbiAgI3NpZGViYXJPdmVybGF5LnNpZGViYXItaGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcbiAgfVxufVxuXG4ubWFpbiBoMyB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNtYWluVG9kYXkgLmNhcmRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcyMHB4OyAgXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250YWluZXIuYWN0dWFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7IFxuICBtYXJnaW4tdG9wOiB2YXIoLS1jYXJkLXRvcC1vdmVyZmxvdy1tYXJnaW4pO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi8gIFxufVxuXG4uY29udGFpbmVyLmFjdHVhbDo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKiBXZWJLaXQgKi9cbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuLyogLmNvbnRhaW5lci5vbmdvaW5nLFxuLmNvbnRhaW5lci5jb21wbGV0ZWQge1xuICBkaXNwbGF5OiBncmlkO1xufSAqL1xuXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lIHN2Zy5jaGVjayB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jb250YWluZXIub25nb2luZyAuY2FyZCAuYnV0dG9uLmRvbmU6aG92ZXIgc3ZnLmNoZWNrIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lOmFjdGl2ZSBzdmcuY2hlY2sge1xuICBvcGFjaXR5OiAwLjU1O1xufVxuXG4uY29udGFpbmVyLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmRvbmUgc3ZnLmNoZWNrIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRhaW5lci5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHN2Zy5jaGVjayB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmNvbnRhaW5lci5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kb25lOmFjdGl2ZSBzdmcuY2hlY2sge1xuICBvcGFjaXR5OiAwLjI1O1xufVxuXG4uY29udGFpbmVyLmFkZCB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuLm92ZXJmbG93LWJvdHRvbSxcbi5vdmVyZmxvdy10b3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgei1pbmRleDogNTtcbn1cblxuLm92ZXJmbG93LWJvdHRvbSA+IGRpdixcbi5vdmVyZmxvdy10b3AgPiBkaXZ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm92ZXJmbG93LXRvcCA+IGRpdiB7XG4gIHRvcDogY2FsYygxcmVtIC0gMXB4KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDAuMTUpIDEwMCUpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xufVxuXG4ub3ZlcmZsb3ctdG9wLm92ZXJmbG93aW5nID4gZGl2IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XG59XG5cbi5vdmVyZmxvdy1ib3R0b20gPiBkaXYge1xuICBib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDAuMTUpIDEwMCUpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xufVxuXG4ub3ZlcmZsb3ctYm90dG9tLm92ZXJmbG93aW5nID4gZGl2IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBDYXJkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmNhcmQuYWRkIGg0IHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IHZhcigtLWNhcmQtZ2FwKTtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW0gMC4xNXJlbSAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IGxpZ2h0Z3JleSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7ICBcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyBlYXNlIDBzO1xufVxuXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdIHtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggaHNsKDAsIDEwMCUsIDc1JSksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdLmZvY3VzZWQsXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdLmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggcmVkLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dIHtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggaHNsKDM5LCAxMDAlLCA3NSUpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dLmZvY3VzZWQsXG4uY2FyZFtkYXRhLXByaW9yaXR5PW1lZGl1bV0uaG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBvcmFuZ2UsIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10ge1xuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBoc2woMTIwLCA1MCUsIDY1JSksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10uZm9jdXNlZCxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bG93XS5ob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGdyZWVuLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmQuaG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tY29sb3ItNCksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4uY2FyZCBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAgXG59XG5cbi5jYXJkIHAge1xuICBmbGV4OiAxO1xuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkIGg0LmNvbXBsZXRlZCxcbi5jYXJkIHAuY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDc1JSk7XG59XG5cbi5jYXJkIC5idXR0b25zLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmNhcmQgLmJ1dHRvbiB7XG4gIGhlaWdodDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcbiAgd2lkdGg6IHZhcigtLWJ1dHRvbi13aWR0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxLjM1cmVtOyAgXG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xufVxuXG4uY2FyZC5ob3ZlciAuYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDJyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jYXJkLmhvdmVyIC5idXR0b24uaG92ZXIsXG4uY2FyZC5ob3ZlciAuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1ob3Zlcik7XG59XG5cbi5jYXJkLmhvdmVyIC5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1hY3RpdmUpO1xufVxuXG4uY2FyZCAuYnV0dG9uLmRvbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuNjVyZW07XG4gIGxlZnQ6IC0wLjY1cmVtO1xuICBoZWlnaHQ6IDEuMzVyZW07XG4gIHdpZHRoOiAxLjM1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHtcbiAgd2lkdGg6IDEuMzVyZW07XG4gIHBhZGRpbmc6IDA7ICBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jYXJkIC5idXR0b24uZG9uZSBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMS41cmVtO1xufVxuXG4uY2FyZCAuYnV0dG9uLmRvbmUgc3ZnLFxuLmNhcmQuaG92ZXIgLmJ1dHRvbi5kb25lOmhvdmVyIHN2ZyB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLTQpO1xufVxuXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdIC5idXR0b24uZG9uZSBzdmcsXG4uY2FyZC5ob3ZlcltkYXRhLXByaW9yaXR5PWhpZ2hdIC5idXR0b24uZG9uZSBzdmcsXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdIC5idXR0b24ucHJpb3JpdHkgc3ZnLFxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXSAuYnV0dG9uLnByaW9yaXR5OmhvdmVyIHN2ZyB7XG4gIGZpbGw6IHJlZDtcbn1cblxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dIC5idXR0b24uZG9uZSBzdmcsXG4uY2FyZC5ob3ZlcltkYXRhLXByaW9yaXR5PW1lZGl1bV0gLmJ1dHRvbi5kb25lIHN2Zyxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSAuYnV0dG9uLnByaW9yaXR5IHN2Zyxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSAuYnV0dG9uLnByaW9yaXR5OmhvdmVyIHN2ZyAgIHtcbiAgZmlsbDogb3JhbmdlO1xufVxuXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10gLmJ1dHRvbi5kb25lIHN2Zyxcbi5jYXJkLmhvdmVyW2RhdGEtcHJpb3JpdHk9bG93XSAuYnV0dG9uLmRvbmUgc3ZnLFxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddIC5idXR0b24ucHJpb3JpdHkgc3ZnLFxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddIC5idXR0b24ucHJpb3JpdHk6aG92ZXIgc3ZnICAge1xuICBmaWxsOiBncmVlbjtcbn1cblxuLmNhcmQgc3ZnIHtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xufVxuXG4uY2FyZC5ob3ZlciAuYnV0dG9uOmhvdmVyIHN2ZyB7XG4gIGZpbGw6IGhzbCgwLCAwJSwgNTAlKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIENhcmQgQW5pbWF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubW92aW5nLWRvd24ge1xuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgcmV2ZXJzZSBmb3J3YXJkcyBjYXJkLW1vdmUtZG93bjtcbn1cblxuLm1vdmluZy11cCB7XG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSByZXZlcnNlIGZvcndhcmRzIGNhcmQtbW92ZS11cDtcbn1cblxuLmZvY3VzLWluIHtcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIGNhcmQtZm9jdXM7XG59XG5cbi5mb2N1cy1vdXQge1xuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgcmV2ZXJzZSBmb3J3YXJkcyBjYXJkLWZvY3VzO1xufVxuXG4uZmFkZS1pbiB7XG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBjYXJkLWZhZGUtaW47XG59XG5cbi5mYWRlLW91dCB7XG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBjYXJkLWZhZGUtb3V0O1xufVxuXG4uY29udGFpbmVyLXNocmlua2luZyB7XG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBzaHJpbmstY29udGFpbmVyOyAgXG59XG5cbkBrZXlmcmFtZXMgY2FyZC1tb3ZlLWRvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjVyZW0pO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tbW92ZS1kb3duLWRpc3RhbmNlKSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjYXJkLW1vdmUtdXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS1tb3ZlLXVwLWRpc3RhbmNlKSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjYXJkLWZvY3VzIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLW1vdmUtdXAtZGlzdGFuY2UpKSBzY2FsZSgwLjgsIDAuNik7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSwgMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNhcmQtZmFkZS1pbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNhcmQtZmFkZS1vdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaHJpbmstY29udGFpbmVyIHtcbiAgZnJvbSB7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tbW92ZS11cC1kaXN0YW5jZSkgKyA1cHgpO1xuICB9XG5cbiAgdG8ge1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIENhcmQgRHJvcGRvd25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogdmFyKC0tZHJvcGRvd24tdG9wKTtcbiAgbGVmdDogdmFyKC0tZHJvcGRvd24tbGVmdCk7XG4gIHBhZGRpbmc6IDAuMTI1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IGxpZ2h0Z3JleSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgei1pbmRleDogMTAwMTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7ICBcbn1cblxuLmRyb3Bkb3duLnZpc2liaWxpdHktaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1czsgIFxufVxuXG4uZHJvcGRvd24gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMXJlbTtcbn1cblxuLmRyb3Bkb3duIGxhYmVsIHtcbiAgcGFkZGluZzogMC4xMjVyZW0gMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmRyb3Bkb3duIGxhYmVsOmhvdmVyLFxuLmRyb3Bkb3duIGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3ZlciAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcbn1cblxuLmRyb3Bkb3duIGxhYmVsOmFjdGl2ZSxcbi5kcm9wZG93biBpbnB1dDpjaGVja2VkICsgbGFiZWwsXG4uZHJvcGRvd24gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFjdGl2ZSAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0yLWFjdGl2ZSk7XG59XG5cbi5kcm9wZG93biBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93biBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC4xcmVtO1xufVxuXG4uZHJvcGRvd24gbGFiZWxbZm9yPXByaW9yaXR5SGlnaF0gc3Zne1xuICBmaWxsOiByZWQ7XG59XG5cbi5kcm9wZG93biBsYWJlbFtmb3I9cHJpb3JpdHlNZWRpdW1dIHN2Z3tcbiAgZmlsbDogb3JhbmdlO1xufVxuXG4uZHJvcGRvd24gbGFiZWxbZm9yPXByaW9yaXR5TG93XSBzdmd7XG4gIGZpbGw6IGdyZWVuO1xufVxuXG4uZHJvcGRvd24gbGFiZWxbZm9yPXByaW9yaXR5Tm9uZV0gc3Zne1xuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XG59XG5cbi5kcm9wZG93biBzdmcge1xuICBoZWlnaHQ6IDFyZW07XG59XG5cbi5kcm9wZG93biBwIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jZHJvcGRvd25PdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgZWFzZSAwcztcbiAgei1pbmRleDogMTAwMDtcbn1cblxuI2Ryb3Bkb3duT3ZlcmxheS52aXNpYmlsaXR5LWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogQ2FyZCBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNmb2N1c2VkQ2FyZE92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogODtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XG59XG5cbiNmb2N1c2VkQ2FyZE92ZXJsYXkudmlzaWJpbGl0eS1oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xufVxuXG4jZm9jdXNlZENhcmRPdmVybGF5IC53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNhcmQuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tY29sb3ItNCksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xuICB1c2VyLXNlbGVjdDogYXV0bztcbn1cblxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAuY2FyZCAuYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAuc3VibWl0LWNvbnRhaW5lciB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbn1cblxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAuc3VibWl0LWNvbnRhaW5lciAuYnV0dG9uIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbiNidXR0b25Gb2N1c2VkQ2FyZENhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBjb2xvcjogZGltZ3JleTtcbn1cblxuI2J1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1ob3Zlcik7XG59XG5cbiNidXR0b25Gb2N1c2VkQ2FyZENhbmNlbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWFjdGl2ZSk7XG59XG5cbiNidXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNidXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xufVxuXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xufVxuXG4jaW5wdXRUYXNrVGl0bGUsXG4jaW5wdXRUYXNrRGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4jaW5wdXRUYXNrVGl0bGU6Zm9jdXMsXG4jaW5wdXRUYXNrRGVzY3JpcHRpb246Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWhvdmVyKTtcbn1cblxuI2lucHV0VGFza1RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNpbnB1dFRhc2tEZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICByZXNpemU6IG5vbmU7ICBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA3NXB4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKCgxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKSAqIDAuNSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBMb2FkIE92ZXJsYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2xvYWRPdmVybGF5IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZSAwLjI1cywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMzVzO1xufVxuXG4ucHJlbG9hZCAqIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAtby10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsMEJBQTBCO0VBQzFCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCx1REFBdUQ7O0FBRXZEO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWix3Q0FBd0M7RUFD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Q1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBOztFQUVFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNEQUFzRDtBQUN4RDs7QUFFQSx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELHVEQUF1RDs7QUFFdkQ7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLTE6IHdoaXRlO1xcbiAgLS1jb2xvci0xLWhvdmVyOiBoc2woMCwgMCUsIDk3JSk7XFxuICAtLWNvbG9yLTEtYWN0aXZlOiBoc2woMCwgMCUsIDk0JSk7O1xcbiAgLS1jb2xvci0yOiBoc2woMCwgMCUsIDk4JSk7XFxuICAtLWNvbG9yLTItaG92ZXI6IGhzbCgwLCAwJSwgOTUlKTtcXG4gIC0tY29sb3ItMi1hY3RpdmU6IGhzbCgwLCAwJSwgOTIlKTtcXG4gIC0tY29sb3ItMzogcmdiKDE1OCwgMjEwLCAxOTgpO1xcbiAgLS1jb2xvci0zLWhvdmVyOiBoc2woMTY2LCAzNyUsIDY5JSk7XFxuICAtLWNvbG9yLTMtYWN0aXZlOiBoc2woMTY2LCAzNyUsIDY2JSk7XFxuICAtLWNvbG9yLTMtc2VsZWN0ZWQ6IGhzbCgxNjYsIDM3JSwgNjclKTtcXG4gIC0tY29sb3ItNDogcmdiKDg0LCAxODYsIDE4NSk7XFxuICAtLWNvbG9yLTQtaG92ZXI6IGhzbCgxNzksIDQzJSwgNTAlKTtcXG4gIC0tY29sb3ItNC1hY3RpdmU6IGhzbCgxNzksIDQzJSwgNDclKTtcXG4gIC0taGVhZGVyLWhlaWdodDogNHJlbTtcXG4gIC0tc2lkZWJhci13aWR0aDogMjUwcHg7XFxuICAtLW1vdmUtdXAtZGlzdGFuY2U6IDExMS43ODEyNXB4O1xcbiAgLS1tb3ZlLWRvd24tZGlzdGFuY2U6IDExMS43ODEyNXB4O1xcbiAgLS1jYXJkLWdhcDogMXJlbTtcXG4gIC0tY2FyZC10b3Atb3ZlcmZsb3ctbWFyZ2luOiAwO1xcbiAgLS1kcm9wZG93bi10b3A6IDA7XFxuICAtLWRyb3Bkb3duLWxlZnQ6IDA7XFxuICAtLWJ1dHRvbi13aWR0aDogMnJlbTtcXG59XFxuXFxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIFxcbnAsIHVsLCBvbCwgbGksIGJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG51bCwgb2wsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufSBcXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuc3ZnIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5zaXRlLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBIZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjE1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uaGVhZGVyICoge1xcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzO1xcbn1cXG5cXG4uaGVhZGVyIGgxe1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwIDQuNXJlbSAwIDAuMjVyZW07XFxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICB0cmFuc2l0aW9uOiBcXG4gICAgd2lkdGggMC41cyBlYXNlIDBzLCBcXG4gICAgcGFkZGluZyAwLjVzIGVhc2UgMHMsIFxcbiAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXFxuICAgIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5oZWFkZXIgaDF7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IFxcbiAgICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXFxuICAgICAgcGFkZGluZyAwLjVzIGVhc2UgMHMsIFxcbiAgICAgIG9wYWNpdHkgMC41cyBlYXNlIDBzLCBcXG4gICAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMC41cztcXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDFyZW0gMCAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcblxcbiAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuc2VhcmNoLWJveCBpbnB1dCB7XFxuICAgIG1hcmdpbjogMC4yNXJlbVxcbiAgfVxcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXJ7XFxuICBjb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMgKyBzdmcge1xcbiAgZmlsbDogZ3JleTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDAuNzVyZW07XFxuICBoZWlnaHQ6IDEuNzVyZW07XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGVyIC5idXR0b24ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmhlYWRlciAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xcbn1cXG5cXG4uaGVhZGVyIC5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcXG59XFxuXFxuLmJ1dHRvbiBzdmcge1xcbiAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNidXR0b25TaWRlYmFyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbiNidXR0b25Vc2VyIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGVhZGVyIC5idXR0b24sXFxuICAjYnV0dG9uU2lkZWJhcixcXG4gICNidXR0b25Vc2VyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2J1dHRvbk5vdGlmaWNhdGlvbi5zZWFyY2hCb3gtZm9jdXNlZCxcXG4gICNidXR0b25TZXR0aW5ncy5zZWFyY2hCb3gtZm9jdXNlZCxcXG4gICNidXR0b25Vc2VyLnNlYXJjaEJveC1mb2N1c2VkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuI2J1dHRvblVzZXIgaW1nIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIFNpZGViYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4uc2lkZWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC41cztcXG59XFxuXFxuLnNpZGViYXIuc2lkZWJhci1oaWRkZW4ge1xcbiAgbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXG59XFxuXFxuLnNpZGViYXIgaDQge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uc2lkZWJhciBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbSAwLjI1cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSBoNCB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIC5idXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUgc3ZnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTAuMDVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjpob3ZlciBzdmd7XFxuICBmaWxsOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjphY3RpdmUgc3Zne1xcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xcbn1cXG5cXG4uc2lkZWJhciBsaSB7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xcbiAgZmlsbDogaHNsKDAsIDAlLCAyNSUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uc2lkZWJhciBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5zaWRlYmFyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcbn1cXG5cXG4uc2lkZWJhciBsaS5zZWxlY3RlZCxcXG4uc2lkZWJhciBsaTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcbn1cXG5cXG4uc2lkZWJhciBsaSA+IHN2ZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuMXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBNYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtaW4td2lkdGg6IDA7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxLjI1cmVtIDFyZW07XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cztcXG59XFxuXFxuLm1haW4uc2lkZWJhci1oaWRkZW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbiNzaWRlYmFyT3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm1haW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gICNzaWRlYmFyT3ZlcmxheSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xcbiAgfVxcblxcbiAgI3NpZGViYXJPdmVybGF5LnNpZGViYXItaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcXG4gIH1cXG59XFxuXFxuLm1haW4gaDMge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNtYWluVG9kYXkgLmNhcmRzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA3MjBweDsgIFxcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFpbmVyLmFjdHVhbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyBcXG4gIG1hcmdpbi10b3A6IHZhcigtLWNhcmQtdG9wLW92ZXJmbG93LW1hcmdpbik7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovICBcXG59XFxuXFxuLmNvbnRhaW5lci5hY3R1YWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgLyogV2ViS2l0ICovXFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLyogLmNvbnRhaW5lci5vbmdvaW5nLFxcbi5jb250YWluZXIuY29tcGxldGVkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufSAqL1xcblxcbi5jb250YWluZXIub25nb2luZyAuY2FyZCAuYnV0dG9uLmRvbmUgc3ZnLmNoZWNrIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jb250YWluZXIub25nb2luZyAuY2FyZCAuYnV0dG9uLmRvbmU6aG92ZXIgc3ZnLmNoZWNrIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmNvbnRhaW5lci5vbmdvaW5nIC5jYXJkIC5idXR0b24uZG9uZTphY3RpdmUgc3ZnLmNoZWNrIHtcXG4gIG9wYWNpdHk6IDAuNTU7XFxufVxcblxcbi5jb250YWluZXIuY29tcGxldGVkIC5jYXJkIC5idXR0b24uZG9uZSBzdmcuY2hlY2sge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNvbnRhaW5lci5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHN2Zy5jaGVjayB7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5jb250YWluZXIuY29tcGxldGVkIC5jYXJkIC5idXR0b24uZG9uZTphY3RpdmUgc3ZnLmNoZWNrIHtcXG4gIG9wYWNpdHk6IDAuMjU7XFxufVxcblxcbi5jb250YWluZXIuYWRkIHtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4ub3ZlcmZsb3ctYm90dG9tLFxcbi5vdmVyZmxvdy10b3Age1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ub3ZlcmZsb3ctYm90dG9tID4gZGl2LFxcbi5vdmVyZmxvdy10b3AgPiBkaXZ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm92ZXJmbG93LXRvcCA+IGRpdiB7XFxuICB0b3A6IGNhbGMoMXJlbSAtIDFweCk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjE1KSAxMDAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcXG59XFxuXFxuLm92ZXJmbG93LXRvcC5vdmVyZmxvd2luZyA+IGRpdiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xcbn1cXG5cXG4ub3ZlcmZsb3ctYm90dG9tID4gZGl2IHtcXG4gIGJvdHRvbTogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMC4xNSkgMTAwJSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XFxufVxcblxcbi5vdmVyZmxvdy1ib3R0b20ub3ZlcmZsb3dpbmcgPiBkaXYge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBDYXJkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmNhcmQuYWRkIGg0IHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1jYXJkLWdhcCk7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbSAwLjE1cmVtIDAuNzVyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyZXksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgIFxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyBlYXNlIDBzO1xcbn1cXG5cXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGhzbCgwLCAxMDAlLCA3NSUpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXS5mb2N1c2VkLFxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9aGlnaF0uaG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggcmVkLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGhzbCgzOSwgMTAwJSwgNzUlKSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXS5mb2N1c2VkLFxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXS5ob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBvcmFuZ2UsIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10ge1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggaHNsKDEyMCwgNTAlLCA2NSUpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddLmZvY3VzZWQsXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddLmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGdyZWVuLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNhcmQuaG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNhcmQgaDQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAgXFxufVxcblxcbi5jYXJkIHAge1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5jYXJkIGg0LmNvbXBsZXRlZCxcXG4uY2FyZCBwLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDc1JSk7XFxufVxcblxcbi5jYXJkIC5idXR0b25zLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5jYXJkIC5idXR0b24ge1xcbiAgaGVpZ2h0OiB2YXIoLS1idXR0b24td2lkdGgpO1xcbiAgd2lkdGg6IHZhcigtLWJ1dHRvbi13aWR0aCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEuMzVyZW07ICBcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmNhcmQuaG92ZXIgLmJ1dHRvbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgd2lkdGg6IDJyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNhcmQuaG92ZXIgLmJ1dHRvbi5ob3ZlcixcXG4uY2FyZC5ob3ZlciAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEtaG92ZXIpO1xcbn1cXG5cXG4uY2FyZC5ob3ZlciAuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWFjdGl2ZSk7XFxufVxcblxcbi5jYXJkIC5idXR0b24uZG9uZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0wLjY1cmVtO1xcbiAgbGVmdDogLTAuNjVyZW07XFxuICBoZWlnaHQ6IDEuMzVyZW07XFxuICB3aWR0aDogMS4zNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHtcXG4gIHdpZHRoOiAxLjM1cmVtO1xcbiAgcGFkZGluZzogMDsgIFxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5jYXJkIC5idXR0b24uZG9uZSBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5jYXJkIC5idXR0b24uZG9uZSBzdmcsXFxuLmNhcmQuaG92ZXIgLmJ1dHRvbi5kb25lOmhvdmVyIHN2ZyB7XFxuICBmaWxsOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXSAuYnV0dG9uLmRvbmUgc3ZnLFxcbi5jYXJkLmhvdmVyW2RhdGEtcHJpb3JpdHk9aGlnaF0gLmJ1dHRvbi5kb25lIHN2ZyxcXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdIC5idXR0b24ucHJpb3JpdHkgc3ZnLFxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9aGlnaF0gLmJ1dHRvbi5wcmlvcml0eTpob3ZlciBzdmcge1xcbiAgZmlsbDogcmVkO1xcbn1cXG5cXG4uY2FyZFtkYXRhLXByaW9yaXR5PW1lZGl1bV0gLmJ1dHRvbi5kb25lIHN2ZyxcXG4uY2FyZC5ob3ZlcltkYXRhLXByaW9yaXR5PW1lZGl1bV0gLmJ1dHRvbi5kb25lIHN2ZyxcXG4uY2FyZFtkYXRhLXByaW9yaXR5PW1lZGl1bV0gLmJ1dHRvbi5wcmlvcml0eSBzdmcsXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dIC5idXR0b24ucHJpb3JpdHk6aG92ZXIgc3ZnICAge1xcbiAgZmlsbDogb3JhbmdlO1xcbn1cXG5cXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10gLmJ1dHRvbi5kb25lIHN2ZyxcXG4uY2FyZC5ob3ZlcltkYXRhLXByaW9yaXR5PWxvd10gLmJ1dHRvbi5kb25lIHN2ZyxcXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10gLmJ1dHRvbi5wcmlvcml0eSBzdmcsXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddIC5idXR0b24ucHJpb3JpdHk6aG92ZXIgc3ZnICAge1xcbiAgZmlsbDogZ3JlZW47XFxufVxcblxcbi5jYXJkIHN2ZyB7XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmNhcmQuaG92ZXIgLmJ1dHRvbjpob3ZlciBzdmcge1xcbiAgZmlsbDogaHNsKDAsIDAlLCA1MCUpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIENhcmQgQW5pbWF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ubW92aW5nLWRvd24ge1xcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIHJldmVyc2UgZm9yd2FyZHMgY2FyZC1tb3ZlLWRvd247XFxufVxcblxcbi5tb3ZpbmctdXAge1xcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIHJldmVyc2UgZm9yd2FyZHMgY2FyZC1tb3ZlLXVwO1xcbn1cXG5cXG4uZm9jdXMtaW4ge1xcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIGNhcmQtZm9jdXM7XFxufVxcblxcbi5mb2N1cy1vdXQge1xcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIHJldmVyc2UgZm9yd2FyZHMgY2FyZC1mb2N1cztcXG59XFxuXFxuLmZhZGUtaW4ge1xcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIGNhcmQtZmFkZS1pbjtcXG59XFxuXFxuLmZhZGUtb3V0IHtcXG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBjYXJkLWZhZGUtb3V0O1xcbn1cXG5cXG4uY29udGFpbmVyLXNocmlua2luZyB7XFxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgc2hyaW5rLWNvbnRhaW5lcjsgIFxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNhcmQtbW92ZS1kb3duIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjVyZW0pO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS1tb3ZlLWRvd24tZGlzdGFuY2UpKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjYXJkLW1vdmUtdXAge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLW1vdmUtdXAtZGlzdGFuY2UpKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjYXJkLWZvY3VzIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tbW92ZS11cC1kaXN0YW5jZSkpIHNjYWxlKDAuOCwgMC42KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEsIDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNhcmQtZmFkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjYXJkLWZhZGUtb3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNocmluay1jb250YWluZXIge1xcbiAgZnJvbSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1vdmUtdXAtZGlzdGFuY2UpICsgNXB4KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIH1cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBDYXJkIERyb3Bkb3ducyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogdmFyKC0tZHJvcGRvd24tdG9wKTtcXG4gIGxlZnQ6IHZhcigtLWRyb3Bkb3duLWxlZnQpO1xcbiAgcGFkZGluZzogMC4xMjVyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyZXksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgei1pbmRleDogMTAwMTtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7ICBcXG59XFxuXFxuLmRyb3Bkb3duLnZpc2liaWxpdHktaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1czsgIFxcbn1cXG5cXG4uZHJvcGRvd24gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMXJlbTtcXG59XFxuXFxuLmRyb3Bkb3duIGxhYmVsIHtcXG4gIHBhZGRpbmc6IDAuMTI1cmVtIDAuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uZHJvcGRvd24gbGFiZWw6aG92ZXIsXFxuLmRyb3Bkb3duIGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3ZlciAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMi1ob3Zlcik7XFxufVxcblxcbi5kcm9wZG93biBsYWJlbDphY3RpdmUsXFxuLmRyb3Bkb3duIGlucHV0OmNoZWNrZWQgKyBsYWJlbCxcXG4uZHJvcGRvd24gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFjdGl2ZSAge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcbn1cXG5cXG4uZHJvcGRvd24gaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRyb3Bkb3duIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMXJlbTtcXG59XFxuXFxuLmRyb3Bkb3duIGxhYmVsW2Zvcj1wcmlvcml0eUhpZ2hdIHN2Z3tcXG4gIGZpbGw6IHJlZDtcXG59XFxuXFxuLmRyb3Bkb3duIGxhYmVsW2Zvcj1wcmlvcml0eU1lZGl1bV0gc3Zne1xcbiAgZmlsbDogb3JhbmdlO1xcbn1cXG5cXG4uZHJvcGRvd24gbGFiZWxbZm9yPXByaW9yaXR5TG93XSBzdmd7XFxuICBmaWxsOiBncmVlbjtcXG59XFxuXFxuLmRyb3Bkb3duIGxhYmVsW2Zvcj1wcmlvcml0eU5vbmVdIHN2Z3tcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcXG59XFxuXFxuLmRyb3Bkb3duIHN2ZyB7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5kcm9wZG93biBwIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jZHJvcGRvd25PdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4jZHJvcGRvd25PdmVybGF5LnZpc2liaWxpdHktaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgZWFzZSAwcztcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBDYXJkIE92ZXJsYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2ZvY3VzZWRDYXJkT3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4yNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogODtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxufVxcblxcbiNmb2N1c2VkQ2FyZE92ZXJsYXkudmlzaWJpbGl0eS1oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xcbn1cXG5cXG4jZm9jdXNlZENhcmRPdmVybGF5IC53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC5mb2N1c2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tY29sb3ItNCksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgdXNlci1zZWxlY3Q6IGF1dG87XFxufVxcblxcbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLmNhcmQgLmJ1dHRvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jZm9jdXNlZENhcmRPdmVybGF5IC5zdWJtaXQtY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAuc3VibWl0LWNvbnRhaW5lciAuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNidXR0b25Gb2N1c2VkQ2FyZENhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGNvbG9yOiBkaW1ncmV5O1xcbn1cXG5cXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1ob3Zlcik7XFxufVxcblxcbiNidXR0b25Gb2N1c2VkQ2FyZENhbmNlbDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcbn1cXG5cXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1ob3Zlcik7XFxufVxcblxcbiNidXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xcbn1cXG5cXG4jaW5wdXRUYXNrVGl0bGUsXFxuI2lucHV0VGFza0Rlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbiNpbnB1dFRhc2tUaXRsZTpmb2N1cyxcXG4jaW5wdXRUYXNrRGVzY3JpcHRpb246Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1ob3Zlcik7XFxufVxcblxcbiNpbnB1dFRhc2tUaXRsZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNpbnB1dFRhc2tEZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHJlc2l6ZTogbm9uZTsgIFxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGhlaWdodDogNzVweDtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpICogMC41KTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBMb2FkIE92ZXJsYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2xvYWRPdmVybGF5IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZSAwLjI1cywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMzVzO1xcbn1cXG5cXG4ucHJlbG9hZCAqIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW8tdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5wcmlvcml0eSA9ICdub25lJztcbiAgfVxuXG4gIHRvZ2dsZVRhc2tDb21wbGV0aW9uKCkge1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0aGlzLmlzQ29tcGxldGVkID8gZmFsc2UgOiB0cnVlO1xuICB9XG5cbiAgc2V0VGFza1ByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbi8vIHRlbXBvcmFyaWx5IGZpbGwgdGFza3NcbmNvbnN0IHRhc2tzID0gW1xuICBuZXcgVGFzayhcIlRhc2sgMVwiLCBcImxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2ZwYXMgbG9yZW0gaXBzdW0gYmxhYmxhYmFsYmFsIGFzZnBhcyBzYWQgYXNmYWxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2ZwYXMgc2FkIGFzZmFzYWQgYXNmYXNkYWpwc2FqIGZzZiBhXCIsIDE2OTAyNTU1MDkyNjUpLFxuICBuZXcgVGFzayhcIlRhc2sgMlwiLCBcImxvYXMgYXMgcmFzZGdhc2VtIGlwc3VtIGJsYWJsYWJhbGFzZCBhc2QgYWwgYXNmcGFzanBzYWogZnNmIGFcIiwgMTY5MDI1NTUxNzAxMiksXG4gIG5ldyBUYXNrKFwiVGFzayAzXCIsIFwibG9yYXNkZ2EgIGdlbSBpcHN1bSBibCBhc2dhcyBkZ3NhZCBnYWJsYWJhbGJhbCBhc2ZwYXNqcHNhaiBmc2YgYVwiLCAxNjkwMjU1NTIxNzM3KSxcbiAgbmV3IFRhc2soXCJUYXNrIDRcIiwgXCJhc2RnYXNwc3VtIGJsIGFhc2dhcyBkZ3NhZGdzYWcgZ3NhZGdhc2FnYmFsIGFzZnBhc2pwc2FqIHNkZ3NkXCIsIDE2OTAyNTU1MjE3MzkpLFxuICBuZXcgVGFzayhcIlRhc2sgNVwiLCBcImxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2ZwYXMgbGxvcmVtIGlwc3VtIGJsYWJsYWJhbGJhbCBhc2Zhc2RhanBzYWogZnNmIGFcIiwgMTY5MDI1NTUyMTc0MCksXG4gIG5ldyBUYXNrKFwiVGFzayA2XCIsIFwibG9hcyBhcyByYXNkZ2FzZW0gaXBzdW0gYmxhYmxhYmFsYXNkIGFzZCBhbCBhc2ZwYXNqcHNhaiBmc2YgYVwiLCAxNjkwMjU1NTIxNzQxKSxcbiAgbmV3IFRhc2soXCJUYXNrIDdcIiwgXCJsb3Jhc2RnYSAgZ2VtIGlwc3VtIGJsIGFzZ2FzIGRnc2FkIGdhYmxhYmFsYmFsIGFzZnBhc2pwc2FqIGZzZiBhXCIsIDE2OTAyNTU1MjE0MiksXG4gIG5ldyBUYXNrKFwiVGFzayA4XCIsIFwiYXNkZ2FzcHN1bSBibCBhYXNnYXMgZGdzYWRnc2FnIGdzYWRnYXNhZ2JhbCBhc2ZwYXNqcHNhaiBzZGdzZFwiLCAxNjkwMjU1NTIxNzQzKSxcbl07XG5cbi8vIHRlbXBvcmFyeSB2YWx1ZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG50YXNrc1swXS5zZXRUYXNrUHJpb3JpdHkoJ2xvdycpO1xudGFza3NbMV0uc2V0VGFza1ByaW9yaXR5KCdtZWRpdW0nKTtcbnRhc2tzWzJdLnNldFRhc2tQcmlvcml0eSgnaGlnaCcpO1xudGFza3NbM10udG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcbnRhc2tzWzRdLnRvZ2dsZVRhc2tDb21wbGV0aW9uKCk7XG5cbi8vIGNvbnNvbGUubG9nKHRhc2tzKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrcztcblxuY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4ge1xuICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pbmRleCA9PSBpbmRleClbMF07XG59XG5cbmNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xuICB0YXNrcy5wdXNoKG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpKTtcbn1cblxuY29uc3QgdXBkYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrKGluZGV4KTtcbiAgdGFzay50aXRsZSA9IHRpdGxlO1xuICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG59XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgdGFza3Muc3BsaWNlKHRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpLCAxKTtcbn1cblxuY29uc3QgZG9lc1Rhc2tFeGlzdCA9IChpbmRleCkgPT4ge1xuICByZXR1cm4gdGFza3Muc29tZSh0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpO1xufVxuXG5leHBvcnQge1xuICBnZXRUYXNrLFxuICBnZXRUYXNrcyxcbiAgYWRkVGFzayxcbiAgdXBkYXRlVGFzayxcbiAgZGVsZXRlVGFzayxcbiAgZG9lc1Rhc2tFeGlzdCxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIHRvZG9saXN0IGZyb20gJy4vdG9kb2xpc3QuanMnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4vLyBIZWFkZXIgRWxlbWVudHMgXG5jb25zdCBidXR0b25TaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvblNpZGViYXInKTtcbmNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCb3gnKTtcbmNvbnN0IGJ1dHRvbk5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Ob3RpZmljYXRpb24nKTtcbmNvbnN0IGJ1dHRvblNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvblNldHRpbmdzJyk7XG5jb25zdCBidXR0b25Vc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvblVzZXInKTtcblxuLy8gQ2FyZCBFbGVtZW50c1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5jb25zdCBjYXJkc0FjdHVhbENvbnRhaW5lclRvcE92ZXJmbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJmbG93LXRvcCcpO1xuY29uc3QgY2FyZHNBY3R1YWxDb250YWluZXJCb3R0b21PdmVyZmxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVyZmxvdy1ib3R0b20nKTtcbmNvbnN0IGNhcmRzQWN0dWFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzIC5jb250YWluZXIuYWN0dWFsJyk7XG5jb25zdCBjYXJkc09uZ29pbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMgLmNvbnRhaW5lci5vbmdvaW5nJyk7XG5jb25zdCBjYXJkc0NvbXBsZXRlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcyAuY29udGFpbmVyLmNvbXBsZXRlZCcpO1xuY29uc3QgZm9jdXNlZENhcmRPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvY3VzZWRDYXJkT3ZlcmxheScpO1xuY29uc3QgZm9jdXNlZENhcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvY3VzZWRDYXJkT3ZlcmxheSA+IC53cmFwcGVyJyk7XG5jb25zdCBhZGRUYXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLmFkZCcpO1xuY29uc3QgZHJvcGRvd25PdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duT3ZlcmxheScpO1xuY29uc3QgZHJvcGRvd25Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi5wcmlvcml0eScpO1xuY29uc3QgZHJvcGRvd25Qcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlIaWdoJyk7XG5jb25zdCBkcm9wZG93blByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5TWVkaXVtJyk7XG5jb25zdCBkcm9wZG93blByaW9yaXR5TG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5TG93Jyk7XG5jb25zdCBkcm9wZG93blByaW9yaXR5Tm9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eU5vbmUnKTtcblxuLy8gRm9jdXNlZCBDYXJkIEVsZW1lbnRzXG5jb25zdCBpbnB1dFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tUaXRsZScpO1xuY29uc3QgaW5wdXRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrRGVzY3JpcHRpb24nKTtcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Gb2N1c2VkQ2FyZER1ZURhdGUnKTtcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Gb2N1c2VkQ2FyZExpc3QnKTtcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uRm9jdXNlZENhcmRQcmlvcml0eScpO1xuY29uc3QgYnV0dG9uRm9jdXNlZENhcmREZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uRm9jdXNlZENhcmREZWxldGUnKTtcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkU3VibWl0Jyk7XG5jb25zdCBidXR0b25Gb2N1c2VkQ2FyZENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Gb2N1c2VkQ2FyZENhbmNlbCcpO1xuY29uc3QgZm9jdXNlZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9jdXNlZENhcmQnKTtcblxuLy8gU2lkZSBCYXIgRWxlbWVudHNcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3Qgc2lkZWJhck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhck92ZXJsYXknKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIENhcmRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5jb25zdCBmaWxsQ2FyZHNDb250YWluZXIgPSAoKSA9PiB7XG4gIHRvZG9saXN0LmdldFRhc2tzKCkuZm9yRWFjaChnZW5lcmF0ZUNhcmQpO1xufVxuXG5jb25zdCBjbGVhckNhcmRzQ29udGFpbmVyID0gKCkgPT4ge1xuICB3aGlsZSAoY2FyZHNPbmdvaW5nQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgY2FyZHNPbmdvaW5nQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNhcmRzT25nb2luZ0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgd2hpbGUgKGNhcmRzQ29tcGxldGVkQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgY2FyZHNDb21wbGV0ZWRDb250YWluZXIucmVtb3ZlQ2hpbGQoY2FyZHNDb21wbGV0ZWRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59XG5cbmNvbnN0IHJlZ2VuZXJhdGVDYXJkc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY2xlYXJDYXJkc0NvbnRhaW5lcigpO1xuICBmaWxsQ2FyZHNDb250YWluZXIoKTtcbiAgdG9nZ2xlQ2FyZHNDb250YWluZXJPdmVyZmxvd0dyYWRpZW50KCk7ICBcbn1cblxuY29uc3QgdG9nZ2xlQ2FyZHNDb250YWluZXJPdmVyZmxvd0dyYWRpZW50ID0gKCkgPT4ge1xuICBsZXQgc2Nyb2xsVG9wID0gY2FyZHNBY3R1YWxDb250YWluZXIuc2Nyb2xsVG9wO1xuICBsZXQgc2Nyb2xsQm90dG9tID0gY2FyZHNBY3R1YWxDb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gXG4gICAgICAgICAgICAgICAgICAgICBjYXJkc0FjdHVhbENvbnRhaW5lci5zY3JvbGxUb3AgLSBcbiAgICAgICAgICAgICAgICAgICAgIGNhcmRzQWN0dWFsQ29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICBpZiAoc2Nyb2xsVG9wID4gMCkge1xuICAgIHNjcm9sbFRvcCA9ICBzY3JvbGxUb3AgPiAxNiA/IDE2IDogc2Nyb2xsVG9wO1xuICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tY2FyZC10b3Atb3ZlcmZsb3ctbWFyZ2luJywgYCR7c2Nyb2xsVG9wfXB4YCk7ICBcbiAgICBjYXJkc0FjdHVhbENvbnRhaW5lclRvcE92ZXJmbG93LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93aW5nJyk7XG4gIH1cbiAgZWxzZSBpZiAoc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgY2FyZHNBY3R1YWxDb250YWluZXJUb3BPdmVyZmxvdy5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvd2luZycpO1xuICB9XG5cbiAgaWYgKHNjcm9sbEJvdHRvbSA+PSAxKSB7XG4gICAgY2FyZHNBY3R1YWxDb250YWluZXJCb3R0b21PdmVyZmxvdy5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvd2luZycpO1xuICB9XG4gIGVsc2UgaWYgKHNjcm9sbEJvdHRvbSA8IDEpIHtcbiAgICBjYXJkc0FjdHVhbENvbnRhaW5lckJvdHRvbU92ZXJmbG93LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93aW5nJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q2FyZEluZGV4KGUpIHtcbiAgbGV0IGNhcmRJbmRleDtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKVxuICAgIC5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgaWYgKGNhcmQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIGNhcmRJbmRleCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICB9O1xuICAgIH0pO1xuICByZXR1cm4gY2FyZEluZGV4O1xufVxuXG5jb25zdCBjYXJkQ29vcmRpbmF0ZXMgPSAoKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IFtdO1xuXG4gIGNvbnN0IHNldEJlZm9yZSA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50Q2FyZHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lcjpub3QoLmFkZCkgLmNhcmQnKV07XG4gICAgY2FyZHMucHVzaCguLi5jdXJyZW50Q2FyZHMubWFwKGNhcmQgPT4gKHtcbiAgICAgIGluZGV4OiBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpLFxuICAgICAgYmVmb3JlOiBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIH0pKSk7XG4gIH1cblxuICBjb25zdCBzZXRBZnRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50Q2FyZHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lcjpub3QoLmFkZCkgLmNhcmQnKV07XG4gICAgY3VycmVudENhcmRzLmZvckVhY2goY3VycmVudENhcmQgPT4ge1xuICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRDYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpID09PSBjYXJkLmluZGV4KSB7XG4gICAgICAgICAgY2FyZC5hZnRlciA9IGN1cnJlbnRDYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgZ2V0Q2FyZCA9IChjYXJkSW5kZXgpID0+IHtcbiAgICBsZXQgbWF0Y2hpbmdDYXJkO1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICBpZiAoY2FyZC5pbmRleCA9PT0gY2FyZEluZGV4KSB7XG4gICAgICAgIG1hdGNoaW5nQ2FyZCA9IGNhcmQ7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gbWF0Y2hpbmdDYXJkO1xuICB9XG5cbiAgY29uc3QgY2xlYXJDYXJkcyA9ICgpID0+IHtcbiAgICBjYXJkcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRCZWZvcmUsXG4gICAgc2V0QWZ0ZXIsXG4gICAgZ2V0Q2FyZCxcbiAgICBjbGVhckNhcmRzLFxuICB9XG59KSgpXG5cbmNvbnN0IGNvbXBsZXRlQ2FyZCA9IChlKSA9PiB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IGluZGV4ID0gZ2V0Q2FyZEluZGV4KGUpO1xuICBjb25zdCB0YXNrID0gdG9kb2xpc3QuZ2V0VGFzayhpbmRleCk7XG5cbiAgY2FyZENvb3JkaW5hdGVzLnNldEJlZm9yZSgpO1xuXG4gIHRhc2sudG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcbiAgcmVnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKCk7XG5cbiAgY2FyZENvb3JkaW5hdGVzLnNldEFmdGVyKCk7XG4gIGFuaW1hdGVDb21wbGV0ZUNhcmQoaW5kZXgpO1xuICBjYXJkQ29vcmRpbmF0ZXMuY2xlYXJDYXJkcygpO1xufVxuXG5jb25zdCBhbmltYXRlQ29tcGxldGVDYXJkID0gKGNhcmRJbmRleCkgPT4ge1xuICBjb25zdCBtb3ZpbmdDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7Y2FyZEluZGV4fVwiXWApOyBcbiAgY29uc3QgZG93bkRpc3RhbmNlID0gXG4gICAgY2FyZENvb3JkaW5hdGVzLmdldENhcmQoY2FyZEluZGV4KS5iZWZvcmUudG9wIC0gXG4gICAgY2FyZENvb3JkaW5hdGVzLmdldENhcmQoY2FyZEluZGV4KS5hZnRlci50b3A7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tbW92ZS1kb3duLWRpc3RhbmNlJywgYCR7ZG93bkRpc3RhbmNlfXB4YCk7ICBcbiAgbW92aW5nQ2FyZC5jbGFzc0xpc3QuYWRkKCdtb3ZpbmctZG93bicpO1xuICBtb3ZpbmdDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PiB7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ21vdmluZy1kb3duJykgICAgICBcbiAgfSk7XG5cbiAgY29uc3Qgb3RoZXJDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jb250YWluZXI6bm90KC5hZGQpIC5jYXJkOm5vdChbZGF0YS1pbmRleD1cIiR7Y2FyZEluZGV4fVwiXSlgKTtcbiAgb3RoZXJDYXJkcy5mb3JFYWNoKG90aGVyQ2FyZCA9PiB7XG4gICAgY29uc3QgdXBEaXN0YW5jZSA9IFxuICAgICAgY2FyZENvb3JkaW5hdGVzLmdldENhcmQob3RoZXJDYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKS5iZWZvcmUudG9wIC0gXG4gICAgICBjYXJkQ29vcmRpbmF0ZXMuZ2V0Q2FyZChvdGhlckNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpLmFmdGVyLnRvcDtcbiAgICBpZiAodXBEaXN0YW5jZSA9PT0gMCkgcmV0dXJuO1xuICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tbW92ZS11cC1kaXN0YW5jZScsIGAke3VwRGlzdGFuY2V9cHhgKTtcbiAgICBvdGhlckNhcmQuY2xhc3NMaXN0LmFkZCgnbW92aW5nLXVwJyk7XG4gICAgb3RoZXJDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PiB7XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbW92aW5nLXVwJykgICAgICBcbiAgICB9KTtcbiAgfSk7ICBcbn1cblxuY29uc3QgZ2VuZXJhdGVDYXJkID0gKHRhc2spID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY2FyZC5kYXRhc2V0LmluZGV4ID0gdGFzay5pbmRleDtcbiAgY2FyZC5kYXRhc2V0LnByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dGb2N1c2VkQ2FyZCk7XG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhvdmVyQ2FyZCk7XG5cbiAgY29uc3QgYnV0dG9uRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25Eb25lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidXR0b25Eb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgYnV0dG9uRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBsZXRlQ2FyZCk7IFxuXG4gIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGR1bW15MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25Eb25lLmFwcGVuZENoaWxkKGR1bW15KTtcbiAgYnV0dG9uRG9uZS5hcHBlbmRDaGlsZChkdW1teTIpO1xuICBcbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBoNC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIFxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICBpZiAodGFzay5pc0NvbXBsZXRlZCkge1xuICAgIGg0LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpOyAgXG4gICAgcC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTsgICAgXG4gICAgZHVtbXkub3V0ZXJIVE1MID0gYDxzdmcgc3R5bGU9XCJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jaXJjbGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMiwyMEE4LDggMCAwLDEgNCwxMkE4LDggMCAwLDEgMTIsNEE4LDggMCAwLDEgMjAsMTJBOCw4IDAgMCwxIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+YDtcbiAgICBkdW1teTIub3V0ZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJjaGVja1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNoZWNrLWNpcmNsZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMiAyMEM3LjU5IDIwIDQgMTYuNDEgNCAxMlM3LjU5IDQgMTIgNCAyMCA3LjU5IDIwIDEyIDE2LjQxIDIwIDEyIDIwTTE2LjU5IDcuNThMMTAgMTQuMTdMNy40MSAxMS41OUw2IDEzTDEwIDE3TDE4IDlMMTYuNTkgNy41OFpcIiAvPjwvc3ZnPmA7XG4gIH1cbiAgZWxzZSB7ICAgXG4gICAgaDQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7ICBcbiAgICBwLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpOyAgICBcbiAgICBkdW1teS5vdXRlckhUTUwgPSBgPHN2ZyBzdHlsZT1cIlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNpcmNsZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTEyLDIwQTgsOCAwIDAsMSA0LDEyQTgsOCAwIDAsMSAxMiw0QTgsOCAwIDAsMSAyMCwxMkE4LDggMCAwLDEgMTIsMjBNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz48L3N2Zz5gO1xuICAgIGR1bW15Mi5vdXRlckhUTUwgPSBgPHN2ZyBjbGFzcz1cImNoZWNrXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2hlY2stY2lyY2xlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEyIDIwQzcuNTkgMjAgNCAxNi40MSA0IDEyUzcuNTkgNCAxMiA0IDIwIDcuNTkgMjAgMTIgMTYuNDEgMjAgMTIgMjBNMTYuNTkgNy41OEwxMCAxNC4xN0w3LjQxIDExLjU5TDYgMTNMMTAgMTdMMTggOUwxNi41OSA3LjU4WlwiIC8+PC9zdmc+YDtcbiAgfVxuXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGJ1dHRvbnNFdGMgPSBbXG4gICAge2NsYXNzOiAnZHVlZGF0ZScsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItY2xvY2s8L3RpdGxlPjxwYXRoIGQ9XCJNMTUsMTNIMTYuNVYxNS44MkwxOC45NCwxNy4yM0wxOC4xOSwxOC41M0wxNSwxNi42OVYxM00xOSw4SDVWMTlIOS42N0M5LjI0LDE4LjA5IDksMTcuMDcgOSwxNkE3LDcgMCAwLDEgMTYsOUMxNy4wNyw5IDE4LjA5LDkuMjQgMTksOS42N1Y4TTUsMjFDMy44OSwyMSAzLDIwLjEgMywxOVY1QzMsMy44OSAzLjg5LDMgNSwzSDZWMUg4VjNIMTZWMUgxOFYzSDE5QTIsMiAwIDAsMSAyMSw1VjExLjFDMjIuMjQsMTIuMzYgMjMsMTQuMDkgMjMsMTZBNyw3IDAgMCwxIDE2LDIzQzE0LjA5LDIzIDEyLjM2LDIyLjI0IDExLjEsMjFINU0xNiwxMS4xNUE0Ljg1LDQuODUgMCAwLDAgMTEuMTUsMTZDMTEuMTUsMTguNjggMTMuMzIsMjAuODUgMTYsMjAuODVBNC44NSw0Ljg1IDAgMCwwIDIwLjg1LDE2QzIwLjg1LDEzLjMyIDE4LjY4LDExLjE1IDE2LDExLjE1WlwiIC8+PC9zdmc+YH0sXG4gICAge2NsYXNzOiAnbGlzdCcsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Zm9sZGVyLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMjAsMThINFY4SDIwTTIwLDZIMTJMMTAsNEg0QzIuODksNCAyLDQuODkgMiw2VjE4QTIsMiAwIDAsMCA0LDIwSDIwQTIsMiAwIDAsMCAyMiwxOFY4QzIyLDYuODkgMjEuMSw2IDIwLDZaXCIgLz48L3N2Zz5gfSxcbiAgICB7Y2xhc3M6ICdwcmlvcml0eScsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZmxhZzwvdGl0bGU+PHBhdGggZD1cIk0xNC40LDZMMTQsNEg1VjIxSDdWMTRIMTIuNkwxMywxNkgyMFY2SDE0LjRaXCIgLz48L3N2Zz5gfSxcbiAgICB7Y2xhc3M6ICdkZWxldGUnLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmRlbGV0ZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOU04LDlIMTZWMTlIOFY5TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVaXCIgLz48L3N2Zz5gfSxcbiAgXVxuXG4gIGZvciAobGV0IGJ1dHRvbkV0YyBvZiBidXR0b25zRXRjKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGJ1dHRvbkV0Yy5jbGFzcyk7XG4gICAgYnV0dG9uLmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xuXG4gICAgaWYgKGJ1dHRvbkV0Yy5jbGFzcyA9PT0gJ2R1ZWRhdGUnKSB7XG4gICAgICAvLyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXREdWVEYXRlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYnV0dG9uRXRjLmNsYXNzID09PSAnbGlzdCcpIHtcbiAgICAgIC8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzc2lnbkxpc3QpO1xuICAgIH1cbiAgICBlbHNlIGlmIChidXR0b25FdGMuY2xhc3MgPT09ICdwcmlvcml0eScpIHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrUHJpb3JpdHlEcm9wZG93bik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGJ1dHRvbkV0Yy5jbGFzcyA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUNhcmQpO1xuICAgIH1cblxuICAgIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoZHVtbXkpXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIFxuICAgIGR1bW15Lm91dGVySFRNTCA9IGJ1dHRvbkV0Yy5zdmc7XG4gIH1cblxuICBjYXJkLmFwcGVuZENoaWxkKGJ1dHRvbkRvbmUpO1xuICBjYXJkLmFwcGVuZENoaWxkKGg0KTtcbiAgY2FyZC5hcHBlbmRDaGlsZChwKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcblxuICBpZiAodGFzay5pc0NvbXBsZXRlZCkge1xuICAgIGNhcmRzQ29tcGxldGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9IGVsc2Uge1xuICAgIGNhcmRzT25nb2luZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfVxufVxuXG5jb25zdCBob3ZlckNhcmQgPSAoZSkgPT4ge1xuICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgZS5jdXJyZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgIGlmIChkcm9wZG93bk92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmlsaXR5LWhpZGRlbicpKSB7XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTsgICAgICBcbiAgICB9XG4gIH0sIHtvbmNlOiB0cnVlfSk7XG59XG5cbmNvbnN0IGNsaWNrUHJpb3JpdHlEcm9wZG93biA9IChlKSA9PiB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIFxuICBjb25zdCBjdXJyZW50UHJpb3JpdHlCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGNvbnN0IGN1cnJlbnRDYXJkSW5kZXggPSBnZXRDYXJkSW5kZXgoZSk7XG4gIGNvbnN0IGN1cnJlbnRUYXNrID0gdG9kb2xpc3QuZ2V0VGFzayhjdXJyZW50Q2FyZEluZGV4KTtcbiAgY29uc3QgZHJvcGRvd25Ub3AgPSBgY2FsYygke2UuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3B9cHggLSBcbiAgICAgICAgICAgICAgICAgICAgICAke2NhcmRzQWN0dWFsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcH1weCArXG4gICAgICAgICAgICAgICAgICAgICAgJHt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyb290KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJ1dHRvbi13aWR0aCcpfSlgO1xuICBjb25zdCBkcm9wZG93bkxlZnQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIFxuICAgICAgICAgICAgICAgICAgICAgICBjYXJkc0FjdHVhbENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgIFxuICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWRyb3Bkb3duLXRvcCcsIGRyb3Bkb3duVG9wKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kcm9wZG93bi1sZWZ0JywgYCR7ZHJvcGRvd25MZWZ0fXB4YCk7XG5cbiAgc2hvd0Ryb3Bkb3duUHJpb3JpdHkoY3VycmVudFByaW9yaXR5QnV0dG9uKTtcbiAgc2V0RHJvcGRvd25Qcmlvcml0eUluZGV4KGN1cnJlbnRDYXJkSW5kZXgpO1xuICBpZiAodG9kb2xpc3QuZG9lc1Rhc2tFeGlzdChjdXJyZW50Q2FyZEluZGV4KSkge1xuICAgIGRpc3BsYXlDdXJyZW50Q2FyZFByaW9yaXR5KGN1cnJlbnRUYXNrKTtcbiAgfVxuXG59XG5cbmNvbnN0IHNob3dEcm9wZG93blByaW9yaXR5ID0gKGN1cnJlbnRQcmlvcml0eUJ1dHRvbikgPT4ge1xuICBjdXJyZW50UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgY3VycmVudFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgZHJvcGRvd25PdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHktaGlkZGVuJyk7XG4gIGRyb3Bkb3duUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKTtcbn1cblxuY29uc3QgaGlkZURyb3Bkb3duUHJpb3JpdHkgPSAoZSkgPT4ge1xuICBjb25zdCBzZWxlY3RlZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZFtkYXRhLWluZGV4PVwiJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleH1cImApO1xuICBjb25zdCBjdXJyZW50UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYnV0dG9uLnByaW9yaXR5LmNsaWNrZWRbZGF0YS1pbmRleD1cIiR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXh9XCJdYCk7XG4gIHNlbGVjdGVkQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICBjdXJyZW50UHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgY3VycmVudFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgZHJvcGRvd25PdmVybGF5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICBkcm9wZG93bk92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eS1oaWRkZW4nKTtcbiAgZHJvcGRvd25Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xufVxuXG5jb25zdCBzZXREcm9wZG93blByaW9yaXR5SW5kZXggPSAoaW5kZXgpID0+IHtcbiAgZHJvcGRvd25Qcmlvcml0eUhpZ2guZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBkcm9wZG93blByaW9yaXR5TWVkaXVtLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgZHJvcGRvd25Qcmlvcml0eUxvdy5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIGRyb3Bkb3duUHJpb3JpdHlOb25lLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgZHJvcGRvd25PdmVybGF5LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbn1cblxuY29uc3QgZGlzcGxheUN1cnJlbnRDYXJkUHJpb3JpdHkgPSAodGFzaykgPT4ge1xuICBjb25zdCBkcm9wZG93blByaW9yaXR5TGlzdCA9IFtcbiAgICBkcm9wZG93blByaW9yaXR5SGlnaCxcbiAgICBkcm9wZG93blByaW9yaXR5TWVkaXVtLFxuICAgIGRyb3Bkb3duUHJpb3JpdHlMb3csXG4gICAgZHJvcGRvd25Qcmlvcml0eU5vbmUsXG4gIF1cblxuICBkcm9wZG93blByaW9yaXR5TGlzdC5mb3JFYWNoKHByaW9yaXR5ID0+IHtcbiAgICBpZiAocHJpb3JpdHkudmFsdWUgPT09IHRhc2sucHJpb3JpdHkpIHtcbiAgICAgIHByaW9yaXR5LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHNlbGVjdFByaW9yaXR5ID0gKGUpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93biBpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBjb25zdCBjdXJyZW50Q2FyZEluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIGNvbnN0IGN1cnJlbnRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7Y3VycmVudENhcmRJbmRleH1cIl1gKTtcblxuICBpZiAodG9kb2xpc3QuZG9lc1Rhc2tFeGlzdChjdXJyZW50Q2FyZEluZGV4KSkge1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gdG9kb2xpc3QuZ2V0VGFzayhjdXJyZW50Q2FyZEluZGV4KTtcbiAgICBjdXJyZW50VGFzay5zZXRUYXNrUHJpb3JpdHkoc2VsZWN0ZWRQcmlvcml0eSk7XG4gIH1cblxuICBjdXJyZW50Q2FyZC5kYXRhc2V0LnByaW9yaXR5ID0gc2VsZWN0ZWRQcmlvcml0eTtcbiAgaWYgKCFmb2N1c2VkQ2FyZE92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmlsaXR5LWhpZGRkZW4nKSkge1xuICAgIGZvY3VzZWRDYXJkLmRhdGFzZXQucHJpb3JpdHkgPSBzZWxlY3RlZFByaW9yaXR5O1xuICB9XG4gIGhpZGVEcm9wZG93blByaW9yaXR5KGUpO1xuXG59XG5cbmNvbnN0IGRlbGV0ZUNhcmQgPSAoZSkgPT4ge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCBpbmRleCA9IGdldENhcmRJbmRleChlKTtcbiAgaWYgKCF0b2RvbGlzdC5nZXRUYXNrKGluZGV4KSkgcmV0dXJuO1xuXG4gIGNhcmRDb29yZGluYXRlcy5zZXRCZWZvcmUoKTtcblxuICB0b2RvbGlzdC5kZWxldGVUYXNrKGluZGV4KTtcbiAgcmVnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKCk7XG5cbiAgY2FyZENvb3JkaW5hdGVzLnNldEFmdGVyKCk7XG4gIGFuaW1hdGVEZWxldGVDYXJkKGluZGV4KTtcbiAgY2FyZENvb3JkaW5hdGVzLmNsZWFyQ2FyZHMoKTtcbn1cblxuY29uc3QgYW5pbWF0ZURlbGV0ZUNhcmQgPSAoY2FyZEluZGV4KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkQ2FyZEhlaWdodCA9IGNhcmRDb29yZGluYXRlcy5nZXRDYXJkKGNhcmRJbmRleCkuYmVmb3JlLmhlaWdodDtcbiAgY29uc3QgdXBEaXN0YW5jZSA9IGBjYWxjKHZhcigtLWNhcmQtZ2FwKSArICR7c2VsZWN0ZWRDYXJkSGVpZ2h0fXB4KWA7XG5cbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLXVwLWRpc3RhbmNlJywgYCR7dXBEaXN0YW5jZX1gKTtcbiAgY2FyZHNBY3R1YWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLXNocmlua2luZycpO1xuICBjYXJkc0FjdHVhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoZSkgPT4ge1xuICAgIGNhcmRzQWN0dWFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci1zaHJpbmtpbmcnKSAgICAgIFxuICB9KTtcblxuICBjb25zdCBvdGhlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNvbnRhaW5lcjpub3QoLmFkZCkgLmNhcmQ6bm90KFtkYXRhLWluZGV4PVwiJHtjYXJkSW5kZXh9XCJdKWApO1xuICBvdGhlckNhcmRzLmZvckVhY2gob3RoZXJDYXJkID0+IHtcbiAgICBjb25zdCB1cERpc3RhbmNlID0gXG4gICAgICBjYXJkQ29vcmRpbmF0ZXMuZ2V0Q2FyZChvdGhlckNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpLmJlZm9yZS50b3AgLSBcbiAgICAgIGNhcmRDb29yZGluYXRlcy5nZXRDYXJkKG90aGVyQ2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSkuYWZ0ZXIudG9wO1xuICAgIGlmICh1cERpc3RhbmNlID09PSAwKSByZXR1cm47XG5cbiAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLW1vdmUtdXAtZGlzdGFuY2UnLCBgJHt1cERpc3RhbmNlfXB4YCk7XG4gICAgb3RoZXJDYXJkLmNsYXNzTGlzdC5hZGQoJ21vdmluZy11cCcpO1xuICAgIG90aGVyQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoZSkgPT4ge1xuICAgICAgb3RoZXJDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmluZy11cCcpICAgICAgXG4gICAgfSk7XG4gIH0pOyAgXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBBZGQgVGFzayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuY29uc3QgYXV0b1NpemVUZXh0QXJlYSA9ICgpID0+IHtcbiAgaW5wdXRUYXNrRGVzY3JpcHRpb24uc3R5bGUuaGVpZ2h0ID0gXCI3NXB4XCI7XG4gIGlucHV0VGFza0Rlc2NyaXB0aW9uLnN0eWxlLmhlaWdodCA9IChpbnB1dFRhc2tEZXNjcmlwdGlvbi5zY3JvbGxIZWlnaHQpICsgXCJweFwiO1xufVxuXG5jb25zdCBjbGlja0ZvY3VzZWRDYXJkT3ZlcmxheSA9IChlKSA9PiB7XG4gIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgaWYgKHRvZG9saXN0LmdldFRhc2tzKCkuc29tZSh0YXNrID0+IHRhc2suaW5kZXggPT0gZm9jdXNlZENhcmQuZGF0YXNldC5pbmRleCkpIHsgICAgXG4gICAgICBzdWJtaXRGb2N1c2VkQ2FyZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhpZGVGb2N1c2VkQ2FyZCgpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBoaWRlRm9jdXNlZENhcmRPblJlc2l6ZSA9ICgpID0+IHtcbiAgaWYgKCh3aW5kb3cuaW5uZXJXaWR0aCA8PSA2MDApICYmIFxuICAgICAgKCFzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1oaWRkZW4nKSkgJiZcbiAgICAgIChmb2N1c2VkQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzZWQnKSkpIHtcbiAgICBoaWRlRm9jdXNlZENhcmQoKTtcbiAgfVxufVxuXG5jb25zdCBoaWRlRm9jdXNlZENhcmQgPSAoZSkgPT4ge1xuICAvLyBTZWxlY3QgY2FyZChzKSB0aGF0IHdlcmUgc2VsZWN0ZWRcbiAgLy8gRm9yIGV4aXN0aW5nIGNhcmQsIGV4cGVjdGVkIG5vZGUgaW4gbm9kZWxpc3QgaXMgMVxuICAvLyBGb3IgYWRkaW5nIGEgbmV3IGNhcmQsIGV4cGVjdGVkIG5vZGVzIGluIG5vZGVsaXN0IGlzIDJcbiAgLy8gRm9yIGRlbGV0aW5nIGEgY2FyZCwgZXhwZWN0ZWQgbm9kZSBpbiBub2RlbGlzdCBpcyAwLCB0aHVzIG51bGxcbiAgY29uc3Qgc2VsZWN0ZWRDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jYXJkOm5vdCguZm9jdXNlZClbZGF0YS1pbmRleD1cIiR7Zm9jdXNlZENhcmQuZGF0YXNldC5pbmRleH1cIl1gKTtcbiAgc2VsZWN0ZWRDYXJkcy5mb3JFYWNoKHNlbGVjdGVkQ2FyZCA9PiB7XG4gICAgaWYgKHNlbGVjdGVkQ2FyZCAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gICAgICBzZWxlY3RlZENhcmQuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgICAgc2VsZWN0ZWRDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgc2VsZWN0ZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRkVGFza0NhcmQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gIGFkZFRhc2tDYXJkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eScpO1xuICBmb2N1c2VkQ2FyZC5jbGFzc0xpc3QuYWRkKCdmb2N1cy1vdXQnKTtcbiAgZm9jdXNlZENhcmQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgIGZvY3VzZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICBmb2N1c2VkQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cy1vdXQnKTtcbiAgICByZXNldEZvY3VzZWRDYXJkRGF0YSgpOyAgICBcbiAgfSwge29uY2U6IHRydWV9KTtcbiAgZm9jdXNlZENhcmRPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdHktaGlkZGVuJyk7XG59XG5cbmNvbnN0IHNob3dGb2N1c2VkQ2FyZCA9IChlKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkQ2FyZCA9IGUuY3VycmVudFRhcmdldDsgIFxuICBpbml0aWFsaXplRm9jdXNlZENhcmREYXRhKHNlbGVjdGVkQ2FyZCk7XG5cbiAgY29uc3QgdXBEaXN0YW5jZSA9IFxuICAgIChzZWxlY3RlZENhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgc2VsZWN0ZWRDYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDIpIC0gXG4gICAgKGZvY3VzZWRDYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGZvY3VzZWRDYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDIpIDtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLXVwLWRpc3RhbmNlJywgYCR7dXBEaXN0YW5jZX1weGApOyAgXG4gIFxuICBzZWxlY3RlZENhcmQuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgZm9jdXNlZENhcmQuY2xhc3NMaXN0LmFkZCgnZm9jdXMtaW4nKTtcbiAgZm9jdXNlZENhcmQuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICBmb2N1c2VkQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJDYXJkKTtcbiAgZm9jdXNlZENhcmQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgIGZvY3VzZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzLWluJyk7XG4gIH0sIHtvbmNlOiB0cnVlfSk7XG4gIGZvY3VzZWRDYXJkT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5LWhpZGRlbicpOyAgXG59XG5cbmNvbnN0IHJlc2V0Rm9jdXNlZENhcmREYXRhID0gKCkgPT4ge1xuICBidXR0b25Gb2N1c2VkQ2FyZER1ZURhdGUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gIGJ1dHRvbkZvY3VzZWRDYXJkTGlzdC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgYnV0dG9uRm9jdXNlZENhcmRQcmlvcml0eS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgYnV0dG9uRm9jdXNlZENhcmREZWxldGUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gIGZvY3VzZWRDYXJkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICBmb2N1c2VkQ2FyZC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknKTtcbiAgaW5wdXRUYXNrVGl0bGUudmFsdWUgPSAnJztcbiAgaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbn1cblxuY29uc3QgaW5pdGlhbGl6ZUZvY3VzZWRDYXJkRGF0YSA9IChzZWxlY3RlZENhcmQpID0+IHtcbiAgaWYgKHNlbGVjdGVkQ2FyZC5oYXNBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSkge1xuICAgIGNvbnN0IHRhc2sgPSB0b2RvbGlzdC5nZXRUYXNrKHNlbGVjdGVkQ2FyZC5kYXRhc2V0LmluZGV4KTtcbiAgICBidXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICBidXR0b25Gb2N1c2VkQ2FyZER1ZURhdGUuZGF0YXNldC5pbmRleCA9IHRhc2suaW5kZXg7XG4gICAgYnV0dG9uRm9jdXNlZENhcmRMaXN0LmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xuICAgIGJ1dHRvbkZvY3VzZWRDYXJkUHJpb3JpdHkuZGF0YXNldC5pbmRleCA9IHRhc2suaW5kZXg7XG4gICAgYnV0dG9uRm9jdXNlZENhcmREZWxldGUuZGF0YXNldC5pbmRleCA9IHRhc2suaW5kZXg7XG4gICAgZm9jdXNlZENhcmQuZGF0YXNldC5pbmRleCA9IHRhc2suaW5kZXg7XG4gICAgZm9jdXNlZENhcmQuZGF0YXNldC5wcmlvcml0eSA9IHRhc2sucHJpb3JpdHk7XG4gICAgaW5wdXRUYXNrVGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBhdXRvU2l6ZVRleHRBcmVhKCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgaW5kZXggPSBEYXRlLm5vdygpO1xuICAgIGJ1dHRvbkZvY3VzZWRDYXJkU3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgYnV0dG9uRm9jdXNlZENhcmREdWVEYXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICBidXR0b25Gb2N1c2VkQ2FyZExpc3QuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIGJ1dHRvbkZvY3VzZWRDYXJkUHJpb3JpdHkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIGJ1dHRvbkZvY3VzZWRDYXJkRGVsZXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgZm9jdXNlZENhcmQuZGF0YXNldC5wcmlvcml0eSA9ICdub25lJztcbiAgICBhZGRUYXNrQ2FyZC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIH1cbn1cblxuY29uc3Qgc3VibWl0Rm9jdXNlZENhcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gaW5wdXRUYXNrVGl0bGUudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWU7XG4gIGNvbnN0IGluZGV4ID0gZm9jdXNlZENhcmQuZGF0YXNldC5pbmRleDtcbiAgY29uc3QgcHJpb3JpdHkgPSBmb2N1c2VkQ2FyZC5kYXRhc2V0LnByaW9yaXR5O1xuXG4gIGNvbnNvbGUubG9nKHByaW9yaXR5KVxuXG4gIGlmICh0b2RvbGlzdC5nZXRUYXNrcygpLnNvbWUodGFzayA9PiB0YXNrLmluZGV4ID09IGluZGV4KSkgeyAgICBcbiAgICB0b2RvbGlzdC51cGRhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpO1xuICB9XG4gIGVsc2Uge1xuICAgIHRvZG9saXN0LmFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCk7XG4gIH1cbiAgdG9kb2xpc3QuZ2V0VGFzayhpbmRleCkuc2V0VGFza1ByaW9yaXR5KHByaW9yaXR5KTtcblxuICByZWdlbmVyYXRlQ2FyZHNDb250YWluZXIoKTtcbiAgaGlkZUZvY3VzZWRDYXJkKCk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBTaWRlYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuY29uc3QgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHkgPSAoKSA9PiB7XG4gIGlmICghc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItaGlkZGVuJykpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGlkZGVuJyk7XG4gICAgc2lkZWJhck92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGlkZGVuJyk7IFxuICB9XG4gIGVsc2Uge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBzaWRlYmFyT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWhpZGRlbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBzaWRlYmFyT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXJWaXNpYmlsaXR5LCB7b25jZTogdHJ1ZX0pOyAgIFxuICB9XG4gIGlmICgod2luZG93LmlubmVyV2lkdGggPD0gNjAwKSAmJiAoZm9jdXNlZENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1c2VkJykpKSB7XG4gICAgaGlkZUZvY3VzZWRDYXJkKCk7XG4gIH1cblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gU2VhcmNoYm94IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmNvbnN0IGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlID0gKCkgPT4ge1xuICBpZiAoIWJ1dHRvbk5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaEJveC1mb2N1c2VkJykpIHtcbiAgICBidXR0b25Ob3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoQm94LWZvY3VzZWQnKTtcbiAgICBidXR0b25TZXR0aW5ncy5jbGFzc0xpc3QuYWRkKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIGJ1dHRvblVzZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoQm94LWZvY3VzZWQnKTtcbiAgICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlLCB7b25jZTogdHJ1ZX0pO1xuICB9XG4gIGVsc2Uge1xuICAgIGJ1dHRvbk5vdGlmaWNhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIGJ1dHRvblNldHRpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XG4gICAgYnV0dG9uVXNlci5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIHNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlLCB7b25jZTogdHJ1ZX0pOyAgICBcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gT3RoZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoaWRlRm9jdXNlZENhcmRPblJlc2l6ZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXV0b1NpemVUZXh0QXJlYSk7XG5cbi8vIEhlYWRlciBcbnNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlLCB7b25jZTogdHJ1ZX0pO1xuXG4vL0NhcmRzXG5jYXJkc0FjdHVhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVDYXJkc0NvbnRhaW5lck92ZXJmbG93R3JhZGllbnQpO1xuYWRkVGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Rm9jdXNlZENhcmQpO1xuYWRkVGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhvdmVyQ2FyZCk7XG5kcm9wZG93bk92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRHJvcGRvd25Qcmlvcml0eSk7XG5kcm9wZG93blByaW9yaXR5SGlnaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFByaW9yaXR5KTtcbmRyb3Bkb3duUHJpb3JpdHlNZWRpdW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcmlvcml0eSk7XG5kcm9wZG93blByaW9yaXR5TG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UHJpb3JpdHkpO1xuZHJvcGRvd25Qcmlvcml0eU5vbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcmlvcml0eSk7XG5cbi8vIEZvY3VzZWQgQ2FyZFxuaW5wdXRUYXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhdXRvU2l6ZVRleHRBcmVhKTtcbmZvY3VzZWRDYXJkT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRm9jdXNlZENhcmRPdmVybGF5KTtcbmZvY3VzZWRDYXJkV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRm9jdXNlZENhcmRPdmVybGF5KTtcbmJ1dHRvbkZvY3VzZWRDYXJkUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1ByaW9yaXR5RHJvcGRvd24pO1xuYnV0dG9uRm9jdXNlZENhcmREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVDYXJkKTtcbmJ1dHRvbkZvY3VzZWRDYXJkRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUZvY3VzZWRDYXJkKTtcbmJ1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUZvY3VzZWRDYXJkKTtcbmJ1dHRvbkZvY3VzZWRDYXJkU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Rm9jdXNlZENhcmQpO1xuXG4vLyBTaWRlYmFyXG5idXR0b25TaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHkpO1xuc2lkZWJhck92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaWRlYmFyVmlzaWJpbGl0eSwge29uY2U6IHRydWV9KTtcblxuLy8gSW5pdGlhbCBnZW5lcmF0aW9uIG9mIGNhcmRzIGNvbnRhaW5lclxucmVnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKCk7XG5zZXRUaW1lb3V0KCgpID0+IHtkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3ByZWxvYWQnKX0sIDApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==