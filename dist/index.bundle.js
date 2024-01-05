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
  --scale-X: 0.5;
  --move-X-distance: 111.78125px;
  --move-up-distance: 111.78125px;
  --move-down-distance: 111.78125px;
  --card-gap: 1rem;
  --dropdown-top: 0;
  --dropdown-left: 0;
  --button-width: 1.7rem;
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

.display-none {
  display: none !important;
}

/* -------------------------------------------------- */
/* z-index ------------------------------------------ */
/* -------------------------------------------------- */

.login-overlay {
  z-index: 20000;
}

.dropdown {
  z-index: 11001;
}

#dropdownOverlay {
  z-index: 11000;
}

.header {
  z-index: 10000;
}

.sidebar {
  z-index: 1001;
}

#sidebarOverlay {
  z-index: 1000;
}

#focusedCardOverlay {
  z-index: 800;
}

.overflow-bottom,
.overflow-top {
  z-index: 5;
}

/* -------------------------------------------------- */
/* Header ------------------------------------------- */
/* -------------------------------------------------- */

.header {
  position: fixed;
  height: var(--header-height);
  width: 100vw;
  padding: 0.25rem;
  background-color: var(--color-4);
  color: white;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
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
  position: fixed;
  left: 0;
  height: calc(100vh - var(--header-height));
  width: var(--sidebar-width);
  margin-top: var(--header-height);
  padding: 0.5rem;
  background-color: var(--color-2);
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
  user-select: none;
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
  user-select: none;
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
  height: 100vh;
  display: flex;
}

.main {
  min-width: 0;
  margin-top: var(--header-height);
  margin-left: var(--sidebar-width);
  position: relative;
  padding: 1.25rem 1rem;
  flex: 1;
  background-color: var(--color-1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-auto-rows: minmax(auto, 100%);
  gap: 2rem 0.25rem;
  justify-content: center;
  justify-items: center;
  transition: margin 0.5s;
  overflow-x: hidden;
  overflow-y: scroll;
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

.cards {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 720px;  
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cards h2,
.cards h3 {
  align-self: center;
}

.cards h3 {
  color: hsl(0, 0%, 50%);
  font-weight: 600;
}

.container.actual {
  position: relative;
  max-height: 100%;
  overflow-y: scroll; 
  padding: 0 0.65rem;
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
  padding: 0 0.65rem;
}

.overflow-bottom,
.overflow-top {
  position: relative;
  height: 0;
  background-color: var(--color-1);
  background-color: red;
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

.card.loading {
  height: 91px;
  background: linear-gradient(
    90deg,
    rgb(255, 255, 255) 0%, 
    rgb(255, 255, 255) 25%, 
    hsl(0, 0%, 97.5%) 50%, 
    rgb(255, 255, 255) 75%, 
    rgb(255, 255, 255)100%); 
  background-size: 200%;
  animation: loading 0.5s ease-in-out 0s infinite forwards alternate;
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
  justify-content: start;
}

.card .button {
  height: var(--button-width);
  width: var(--button-width);
  background-color: transparent;
  border-radius: 1.35rem;  
  opacity: 0;
  transition: 0.25s;
}

.card .button p {
  font-size: 0.75rem;
  transition: 0.25s;
}

.card .button.clicked p {
  background-color: var(--color-1-active);
  color: transparent;
}

.card.hover .button {
  opacity: 1;
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

.card .button.duedate,
.card .button.list {
  width: auto;
  min-width: var(--button-width);
  margin-right: 0.1rem;
  padding: 0.25rem;
  padding-right: 0.5rem;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

.completed .card .button.duedate p,
.completed .card .button.list p {
  text-decoration: line-through;
  color: hsl(0, 0%, 75%);
}

.card .button.duedate p,
.card .button.list p {
  margin-left: 0.1rem;
}

.card .button.priority {
  margin-left: auto;
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

.card svg {
  height: calc(var(--button-width) * 0.625);
  fill: hsl(0, 0%, 75%);
  transition: 0.25s;
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
    transform: translateX(var(--move-X-distance)) translateY(var(--move-up-distance)) scale(var(--scale-X), 0.6);
    opacity: 0;
  }

  to {
    transform: translateX(0) translateY(0) scale(1, 1);
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
  top: calc(var(--dropdown-top) + var(--button-width) - var(--header-height));
  left: calc(var(--dropdown-left) - var(--sidebar-width));
  padding: 0.125rem;
  background: var(--color-1);
  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;  
}

.sidebar-hidden .dropdown {
  left: calc(var(--dropdown-left));
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

.dropdown.list input,
.dropdown.priority input {
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

.dropdown svg{
  fill: hsl(0, 0%, 75%);
}

.dropdown svg {
  height: 1rem;
}

.dropdown p {
  color: hsl(0, 0%, 50%);
  font-size: 0.75rem;
  user-select: none;
}

.dropdown.duedate {
  display: flex;
  align-items: center;
}

.dropdown.duedate p {
  margin: 0 0.1rem;
}

.dropdown.duedate input {
  width: 6.25rem;
  padding: 0.125rem 0.25rem;
  background: var(--color-2-active);
  color: hsl(0, 0%, 25%);
  border: none;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.dropdown.duedate input:focus {
  border: none;
  outline: none;
}

#dropdownOverlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: visible;
  transition: visibility 0s ease 0s;
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
}

/* -------------------------------------------------- */
/* Login Overlay ------------------------------------- */
/* -------------------------------------------------- */

.login-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;  
}

.login-overlay.visibility-hidden {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;  
}

.login-overlay h1 {
  margin-bottom: 2rem;
  font-family: 'Pacifico', cursive;
  font-size: 4rem;
  font-weight: 200;
  transition: 
    width 0.5s ease 0s, 
    padding 0.5s ease 0s, 
    opacity 0.5s ease 0s, 
    visibility 0s ease 0s;
  visibility: visible;
  opacity: 1;
  user-select: none;
}

.login-overlay .form {
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.login-overlay .form input {
  height: 2rem;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
}

.login-overlay button {
  margin-top: 1rem;
  height: 2.5rem;
  width: 100%;
  color: white;
  background-color: var(--color-4);
  border: 1px solid white;
  border-radius: 0.5rem;
  font-size: 1rem;
  box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.250);
}

.login-overlay button:hover {
  background-color: var(--color-4-hover);
}

.login-overlay button:active {
  background-color: var(--color-4-active);
}

.login-overlay .form-error {
  align-self: start;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
}

.login-overlay-bottom {
  margin: 1rem;
  padding: 1rem;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid white;
}

.login-overlay .new-account-btn {
  width: 15rem;
}

.login-overlay button.loading,
#buttonFocusedCardSubmit.loading {
  color: rgba(0, 0, 0, 0);
  background: linear-gradient(
    90deg,
    rgb(84, 186, 185) 0%, 
    rgb(84, 186, 185) 25%, 
    hsl(179, 43%, 65%) 50%, 
    rgb(84, 186, 185) 75%, 
    rgb(84, 186, 185) 100%); 
  background-size: 200%;
  animation: loading 0.5s ease-in-out 0s infinite forwards alternate;
}

@keyframes loading {
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 100% 100%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Pacifico&display=swap');\r\n\r\n:root {\r\n  --color-1: white;\r\n  --color-1-hover: hsl(0, 0%, 97%);\r\n  --color-1-active: hsl(0, 0%, 94%);;\r\n  --color-2: hsl(0, 0%, 98%);\r\n  --color-2-hover: hsl(0, 0%, 95%);\r\n  --color-2-active: hsl(0, 0%, 92%);\r\n  --color-3: rgb(158, 210, 198);\r\n  --color-3-hover: hsl(166, 37%, 69%);\r\n  --color-3-active: hsl(166, 37%, 66%);\r\n  --color-3-selected: hsl(166, 37%, 67%);\r\n  --color-4: rgb(84, 186, 185);\r\n  --color-4-hover: hsl(179, 43%, 50%);\r\n  --color-4-active: hsl(179, 43%, 47%);\r\n  --header-height: 4rem;\r\n  --sidebar-width: 250px;\r\n  --scale-X: 0.5;\r\n  --move-X-distance: 111.78125px;\r\n  --move-up-distance: 111.78125px;\r\n  --move-down-distance: 111.78125px;\r\n  --card-gap: 1rem;\r\n  --dropdown-top: 0;\r\n  --dropdown-left: 0;\r\n  --button-width: 1.7rem;\r\n}\r\n\r\n*, *::after, *::before {\r\n  font-family: 'Open Sans', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml, body,\r\nh1, h2, h3, h4, h5, h6, \r\np, ul, ol, li, button {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nul, ol, li {\r\n  list-style: none;\r\n} \r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nsvg {\r\n  vertical-align: top;\r\n}\r\n\r\n.site-container {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.display-none {\r\n  display: none !important;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* z-index ------------------------------------------ */\r\n/* -------------------------------------------------- */\r\n\r\n.login-overlay {\r\n  z-index: 20000;\r\n}\r\n\r\n.dropdown {\r\n  z-index: 11001;\r\n}\r\n\r\n#dropdownOverlay {\r\n  z-index: 11000;\r\n}\r\n\r\n.header {\r\n  z-index: 10000;\r\n}\r\n\r\n.sidebar {\r\n  z-index: 1001;\r\n}\r\n\r\n#sidebarOverlay {\r\n  z-index: 1000;\r\n}\r\n\r\n#focusedCardOverlay {\r\n  z-index: 800;\r\n}\r\n\r\n.overflow-bottom,\r\n.overflow-top {\r\n  z-index: 5;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Header ------------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.header {\r\n  position: fixed;\r\n  height: var(--header-height);\r\n  width: 100vw;\r\n  padding: 0.25rem;\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.15);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.header * {\r\n  transition: margin 0.25s;\r\n}\r\n\r\n.header h1{\r\n  position: relative;\r\n  bottom: 0.3rem;\r\n  padding: 0 4.5rem 0 0.25rem;\r\n  font-family: 'Pacifico', cursive;\r\n  font-weight: 200;\r\n  transition: \r\n    width 0.5s ease 0s, \r\n    padding 0.5s ease 0s, \r\n    opacity 0.5s ease 0s, \r\n    visibility 0s ease 0s;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .header h1{\r\n    width: 0;\r\n    padding: 0;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: \r\n      width 0.5s ease 0s, \r\n      padding 0.5s ease 0s, \r\n      opacity 0.5s ease 0s, \r\n      visibility 0s ease 0.5s;\r\n  }\r\n}\r\n\r\n.search-box {\r\n  position: relative;\r\n  flex: 1;\r\n  max-width: 500px;\r\n  margin-right: auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.search-box input {\r\n  height: 3rem;\r\n  width: 100%;\r\n  padding: 0 1rem 0 3rem;\r\n  background-color: var(--color-3);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  font-size: 1.15rem;\r\n  font-weight: 400;\r\n\r\n  transition: 0.1s;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .search-box input {\r\n    margin: 0.25rem\r\n  }\r\n}\r\n\r\n.search-box input::placeholder {\r\n  color: white;\r\n}\r\n\r\n.search-box input:focus::placeholder{\r\n  color: lightgrey;\r\n}\r\n\r\n.search-box input:focus {\r\n  background-color: white;\r\n  color: grey;\r\n  outline: none;\r\n}\r\n\r\n.search-box input:focus + svg {\r\n  fill: grey;\r\n}\r\n\r\n.search-box svg {\r\n  position: absolute;\r\n  left: 0.75rem;\r\n  height: 1.75rem;\r\n  fill: white;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n}\r\n\r\n.header .button {\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-color: var(--color-4);\r\n}\r\n\r\n.header .button:hover {\r\n  background-color: var(--color-4-hover);\r\n}\r\n\r\n.header .button:active {\r\n  background-color: var(--color-4-active);\r\n}\r\n\r\n.button svg {\r\n  height: 1.75rem;\r\n  fill: white;\r\n}\r\n\r\n#buttonSidebar {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n#buttonUser {\r\n  margin: 0 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .header .button,\r\n  #buttonSidebar,\r\n  #buttonUser {\r\n    margin: 0;\r\n  }\r\n\r\n  #buttonNotification.searchBox-focused,\r\n  #buttonSettings.searchBox-focused,\r\n  #buttonUser.searchBox-focused {\r\n    display: none;\r\n  }\r\n}\r\n\r\n#buttonUser img {\r\n  height: 80%;\r\n  width: 80%;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Sidebar ------------------------------------------ */\r\n/* -------------------------------------------------- */\r\n\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  left: 0;\r\n  height: calc(100vh - var(--header-height));\r\n  width: var(--sidebar-width);\r\n  margin-top: var(--header-height);\r\n  padding: 0.5rem;\r\n  background-color: var(--color-2);\r\n  transition: left 0.5s;\r\n}\r\n\r\n.sidebar.sidebar-hidden {\r\n  left: calc(-1 * var(--sidebar-width));\r\n}\r\n\r\n.sidebar h4 {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.sidebar p {\r\n  font-weight: 400;\r\n}\r\n\r\n.section-title {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0.75rem 0;\r\n  padding: 0.25rem 0.5rem 0.25rem 1rem;\r\n  border-radius: 0.5rem;\r\n  user-select: none;\r\n}\r\n\r\n.section-title:hover {\r\n  background-color: var(--color-2-hover);\r\n}\r\n\r\n.section-title:active {\r\n  background-color: var(--color-2-active);\r\n}\r\n\r\n.section-title h4 {\r\n  margin-right: auto;\r\n}\r\n\r\n.section-title .button {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  background-color: transparent;\r\n}\r\n\r\n.section-title svg {\r\n  position: relative;\r\n  top: -0.05rem;\r\n  height: 1.5rem;\r\n  fill: hsl(0, 0%, 75%);\r\n}\r\n\r\n.section-title .button:hover svg{\r\n  fill: var(--color-4-hover);\r\n}\r\n\r\n.section-title .button:active svg{\r\n  fill: var(--color-4-active);\r\n}\r\n\r\n.sidebar li {\r\n  padding: 0.25rem 1rem;\r\n  color: hsl(0, 0%, 25%);\r\n  fill: hsl(0, 0%, 25%);\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  border-radius: 0.5rem;\r\n  user-select: none;\r\n}\r\n\r\n.sidebar li:last-child {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar li:hover {\r\n  background-color: var(--color-2-hover);\r\n}\r\n\r\n.sidebar li.selected,\r\n.sidebar li:active {\r\n  background-color: var(--color-2-active);\r\n}\r\n\r\n.sidebar li > svg {\r\n  position: relative;\r\n  top: 0.1rem;\r\n  height: 1.25rem;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Main --------------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.main-container {\r\n  height: 100vh;\r\n  display: flex;\r\n}\r\n\r\n.main {\r\n  min-width: 0;\r\n  margin-top: var(--header-height);\r\n  margin-left: var(--sidebar-width);\r\n  position: relative;\r\n  padding: 1.25rem 1rem;\r\n  flex: 1;\r\n  background-color: var(--color-1);\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\r\n  grid-auto-rows: minmax(auto, 100%);\r\n  gap: 2rem 0.25rem;\r\n  justify-content: center;\r\n  justify-items: center;\r\n  transition: margin 0.5s;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main.sidebar-hidden {\r\n  margin-left: 0;\r\n}\r\n\r\n#sidebarOverlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: black;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .main {\r\n    margin-left: 0;\r\n  }\r\n\r\n  #sidebarOverlay {\r\n    visibility: visible;\r\n    opacity: 0.25;\r\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\r\n  }\r\n\r\n  #sidebarOverlay.sidebar-hidden {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\r\n  }\r\n}\r\n\r\n.cards {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  max-width: 720px;  \r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.cards h2,\r\n.cards h3 {\r\n  align-self: center;\r\n}\r\n\r\n.cards h3 {\r\n  color: hsl(0, 0%, 50%);\r\n  font-weight: 600;\r\n}\r\n\r\n.container.actual {\r\n  position: relative;\r\n  max-height: 100%;\r\n  overflow-y: scroll; \r\n  padding: 0 0.65rem;\r\n  padding-bottom: 5px;\r\n  border-radius: 1rem;\r\n  scrollbar-width: none; /* Firefox */\r\n  -ms-overflow-style: none;  /* Internet Explorer 10+ */  \r\n}\r\n\r\n.container.actual::-webkit-scrollbar { /* WebKit */\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n/* .container.ongoing,\r\n.container.completed {\r\n  display: grid;\r\n} */\r\n\r\n.container.ongoing .card .button.done svg.check {\r\n  opacity: 0;\r\n}\r\n\r\n.container.ongoing .card .button.done:hover svg.check {\r\n  opacity: 0.4;\r\n}\r\n\r\n.container.ongoing .card .button.done:active svg.check {\r\n  opacity: 0.55;\r\n}\r\n\r\n.container.completed .card .button.done svg.check {\r\n  opacity: 1;\r\n}\r\n\r\n.container.completed .card .button.done:hover svg.check {\r\n  opacity: 0.4;\r\n}\r\n\r\n.container.completed .card .button.done:active svg.check {\r\n  opacity: 0.25;\r\n}\r\n\r\n.container.add {\r\n  max-height: 100%;\r\n  margin-top: -5px;\r\n  padding: 0 0.65rem;\r\n}\r\n\r\n.overflow-bottom,\r\n.overflow-top {\r\n  position: relative;\r\n  height: 0;\r\n  background-color: var(--color-1);\r\n  background-color: red;\r\n}\r\n\r\n.overflow-bottom > div,\r\n.overflow-top > div{\r\n  position: absolute;\r\n  height: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.overflow-top > div {\r\n  top: calc(1rem - 1px);\r\n  border-top-left-radius: 1rem;\r\n  border-top-right-radius: 1rem;\r\n  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\r\n}\r\n\r\n.overflow-top.overflowing > div {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\r\n}\r\n\r\n.overflow-bottom > div {\r\n  bottom: 0;\r\n  border-bottom-left-radius: 1rem;\r\n  border-bottom-right-radius: 1rem;\r\n  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\r\n}\r\n\r\n.overflow-bottom.overflowing > div {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Card --------------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.card.add h4 {\r\n  color: hsl(0, 0%, 50%);\r\n  font-weight: 500;\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  margin-top: var(--card-gap);\r\n  padding: 0.5rem 0.75rem 0.15rem 0.75rem;\r\n  background: var(--color-1);\r\n  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n  border-radius: 0.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  user-select: none;  \r\n  transition: box-shadow 0.25s ease 0s;\r\n}\r\n\r\n.card.loading {\r\n  height: 91px;\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgb(255, 255, 255) 0%, \r\n    rgb(255, 255, 255) 25%, \r\n    hsl(0, 0%, 97.5%) 50%, \r\n    rgb(255, 255, 255) 75%, \r\n    rgb(255, 255, 255)100%); \r\n  background-size: 200%;\r\n  animation: loading 0.5s ease-in-out 0s infinite forwards alternate;\r\n}\r\n\r\n.card[data-priority=high] {\r\n  box-shadow: 0 0 2px 2px hsl(0, 100%, 75%), 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card[data-priority=high].focused,\r\n.card[data-priority=high].hover {\r\n  box-shadow: 0 0 2px 2px red, 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card[data-priority=medium] {\r\n  box-shadow: 0 0 2px 2px hsl(39, 100%, 75%), 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card[data-priority=medium].focused,\r\n.card[data-priority=medium].hover {\r\n  box-shadow: 0 0 2px 2px orange, 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card[data-priority=low] {\r\n  box-shadow: 0 0 2px 2px hsl(120, 50%, 65%), 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card[data-priority=low].focused,\r\n.card[data-priority=low].hover {\r\n  box-shadow: 0 0 2px 2px green, 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card.hover {\r\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card h4 {\r\n  margin-bottom: 0.4rem;\r\n  font-size: 1.1rem;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;  \r\n}\r\n\r\n.card p {\r\n  flex: 1;\r\n  color: hsl(0, 0%, 50%);\r\n  font-size: 0.9rem;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.card h4.completed,\r\n.card p.completed {\r\n  text-decoration: line-through;\r\n  color: hsl(0, 0%, 75%);\r\n}\r\n\r\n.card .buttons-container {\r\n  margin-top: auto;\r\n  padding-top: 0.25rem;\r\n  display: flex;\r\n  justify-content: start;\r\n}\r\n\r\n.card .button {\r\n  height: var(--button-width);\r\n  width: var(--button-width);\r\n  background-color: transparent;\r\n  border-radius: 1.35rem;  \r\n  opacity: 0;\r\n  transition: 0.25s;\r\n}\r\n\r\n.card .button p {\r\n  font-size: 0.75rem;\r\n  transition: 0.25s;\r\n}\r\n\r\n.card .button.clicked p {\r\n  background-color: var(--color-1-active);\r\n  color: transparent;\r\n}\r\n\r\n.card.hover .button {\r\n  opacity: 1;\r\n  color: hsl(0, 0%, 50%);\r\n  white-space: nowrap;\r\n}\r\n\r\n.card.hover .button.hover,\r\n.card.hover .button:hover {\r\n  background-color: var(--color-1-hover);\r\n}\r\n\r\n.card.hover .button:active {\r\n  background-color: var(--color-1-active);\r\n}\r\n\r\n.card .button.duedate,\r\n.card .button.list {\r\n  width: auto;\r\n  min-width: var(--button-width);\r\n  margin-right: 0.1rem;\r\n  padding: 0.25rem;\r\n  padding-right: 0.5rem;\r\n  border: 1px solid lightgrey;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 1;\r\n}\r\n\r\n.completed .card .button.duedate p,\r\n.completed .card .button.list p {\r\n  text-decoration: line-through;\r\n  color: hsl(0, 0%, 75%);\r\n}\r\n\r\n.card .button.duedate p,\r\n.card .button.list p {\r\n  margin-left: 0.1rem;\r\n}\r\n\r\n.card .button.priority {\r\n  margin-left: auto;\r\n}\r\n\r\n.card .button.done {\r\n  position: absolute;\r\n  top: -0.65rem;\r\n  left: -0.65rem;\r\n  height: 1.35rem;\r\n  width: 1.35rem;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card .button.done:hover {\r\n  width: 1.35rem;\r\n  padding: 0;  \r\n  background: white;\r\n}\r\n\r\n.card svg {\r\n  height: calc(var(--button-width) * 0.625);\r\n  fill: hsl(0, 0%, 75%);\r\n  transition: 0.25s;\r\n}\r\n\r\n.card .button.done svg {\r\n  position: absolute;\r\n  height: 1.5rem;\r\n}\r\n\r\n.card .button.done svg,\r\n.card.hover .button.done:hover svg {\r\n  fill: var(--color-4);\r\n}\r\n\r\n.card[data-priority=high] .button.done svg,\r\n.card.hover[data-priority=high] .button.done svg,\r\n.card[data-priority=high] .button.priority svg,\r\n.card[data-priority=high] .button.priority:hover svg {\r\n  fill: red;\r\n}\r\n\r\n.card[data-priority=medium] .button.done svg,\r\n.card.hover[data-priority=medium] .button.done svg,\r\n.card[data-priority=medium] .button.priority svg,\r\n.card[data-priority=medium] .button.priority:hover svg   {\r\n  fill: orange;\r\n}\r\n\r\n.card[data-priority=low] .button.done svg,\r\n.card.hover[data-priority=low] .button.done svg,\r\n.card[data-priority=low] .button.priority svg,\r\n.card[data-priority=low] .button.priority:hover svg   {\r\n  fill: green;\r\n}\r\n\r\n.card.hover .button:hover svg {\r\n  fill: hsl(0, 0%, 50%);\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Card Animation ----------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.moving-down {\r\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-move-down;\r\n}\r\n\r\n.moving-up {\r\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-move-up;\r\n}\r\n\r\n.focus-in {\r\n  animation: 0.25s ease-in-out 0s 1 forwards card-focus;\r\n}\r\n\r\n.focus-out {\r\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-focus;\r\n}\r\n\r\n.fade-in {\r\n  animation: 0.25s ease-in-out 0s 1 forwards card-fade-in;\r\n}\r\n\r\n.fade-out {\r\n  animation: 0.25s ease-in-out 0s 1 forwards card-fade-out;\r\n}\r\n\r\n.container-shrinking {\r\n  animation: 0.25s ease-in-out 0s 1 forwards shrink-container;  \r\n}\r\n\r\n@keyframes card-move-down {\r\n  from {\r\n    transform: translateX(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  50% {\r\n    transform: translateX(0.5rem);\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0);\r\n    transform: translateY(var(--move-down-distance));\r\n  }\r\n}\r\n\r\n@keyframes card-move-up {\r\n  from {\r\n    transform: translateY(0);\r\n  }\r\n  to {\r\n    transform: translateY(var(--move-up-distance));\r\n  }\r\n}\r\n\r\n@keyframes card-focus {\r\n  from {\r\n    transform: translateX(var(--move-X-distance)) translateY(var(--move-up-distance)) scale(var(--scale-X), 0.6);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0) translateY(0) scale(1, 1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes card-fade-in {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes card-fade-out {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes shrink-container {\r\n  from {\r\n    padding-bottom: calc(var(--move-up-distance) + 5px);\r\n  }\r\n\r\n  to {\r\n    padding-bottom: 5px;\r\n  }\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Card Dropdowns ----------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.dropdown {\r\n  position: absolute;\r\n  top: calc(var(--dropdown-top) + var(--button-width) - var(--header-height));\r\n  left: calc(var(--dropdown-left) - var(--sidebar-width));\r\n  padding: 0.125rem;\r\n  background: var(--color-1);\r\n  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n  border-radius: 0.5rem;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;  \r\n}\r\n\r\n.sidebar-hidden .dropdown {\r\n  left: calc(var(--dropdown-left));\r\n}\r\n\r\n.dropdown.visibility-hidden {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;  \r\n}\r\n\r\n.dropdown ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.1rem;\r\n}\r\n\r\n.dropdown label {\r\n  padding: 0.125rem 0.25rem;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.dropdown label:hover,\r\n.dropdown input:checked + label:hover  {\r\n  background: var(--color-2-hover);\r\n}\r\n\r\n.dropdown label:active,\r\n.dropdown input:checked + label,\r\n.dropdown input:checked + label:active  {\r\n  background: var(--color-2-active);\r\n}\r\n\r\n.dropdown.list input,\r\n.dropdown.priority input {\r\n  display: none;\r\n}\r\n\r\n.dropdown label {\r\n  display: flex;\r\n  gap: 0.1rem;\r\n}\r\n\r\n.dropdown label[for=priorityHigh] svg{\r\n  fill: red;\r\n}\r\n\r\n.dropdown label[for=priorityMedium] svg{\r\n  fill: orange;\r\n}\r\n\r\n.dropdown label[for=priorityLow] svg{\r\n  fill: green;\r\n}\r\n\r\n.dropdown svg{\r\n  fill: hsl(0, 0%, 75%);\r\n}\r\n\r\n.dropdown svg {\r\n  height: 1rem;\r\n}\r\n\r\n.dropdown p {\r\n  color: hsl(0, 0%, 50%);\r\n  font-size: 0.75rem;\r\n  user-select: none;\r\n}\r\n\r\n.dropdown.duedate {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.dropdown.duedate p {\r\n  margin: 0 0.1rem;\r\n}\r\n\r\n.dropdown.duedate input {\r\n  width: 6.25rem;\r\n  padding: 0.125rem 0.25rem;\r\n  background: var(--color-2-active);\r\n  color: hsl(0, 0%, 25%);\r\n  border: none;\r\n  border-radius: 0.25rem;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.dropdown.duedate input:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#dropdownOverlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  visibility: visible;\r\n  transition: visibility 0s ease 0s;\r\n}\r\n\r\n#dropdownOverlay.visibility-hidden {\r\n  visibility: hidden;\r\n  transition: visibility 0s ease 0s;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Card Overlay ------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n#focusedCardOverlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgb(0, 0, 0, 0.25);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\r\n}\r\n\r\n#focusedCardOverlay.visibility-hidden {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\r\n}\r\n\r\n#focusedCardOverlay .wrapper {\r\n  width: 100%;\r\n  max-width: 900px;\r\n  margin: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card.focused {\r\n  background-color: white;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n  user-select: auto;\r\n}\r\n\r\n#focusedCardOverlay .card .button {\r\n  opacity: 1;\r\n}\r\n\r\n#focusedCardOverlay .submit-container {\r\n  align-self: end;\r\n  margin-top: 0.5rem;\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n\r\n#focusedCardOverlay .submit-container .button {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 0.5rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n#buttonFocusedCardCancel {\r\n  background-color: var(--color-2);\r\n  color: dimgrey;\r\n}\r\n\r\n#buttonFocusedCardCancel:hover {\r\n  background-color: var(--color-2-hover);\r\n}\r\n\r\n#buttonFocusedCardCancel:active {\r\n  background-color: var(--color-2-active);\r\n}\r\n\r\n#buttonFocusedCardSubmit {\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n#buttonFocusedCardSubmit:hover {\r\n  background-color: var(--color-4-hover);\r\n}\r\n\r\n#buttonFocusedCardSubmit:active {\r\n  background-color: var(--color-4-active);\r\n}\r\n\r\n#inputTaskTitle,\r\n#inputTaskDescription {\r\n  padding: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n#inputTaskTitle:focus,\r\n#inputTaskDescription:focus {\r\n  background-color: var(--color-1-hover);\r\n}\r\n\r\n#inputTaskTitle {\r\n  font-size: 1.1rem;\r\n  font-weight: 700;\r\n}\r\n\r\n#inputTaskDescription {\r\n  font-size: 0.9rem;\r\n  resize: none;  \r\n  overflow: hidden;\r\n  height: 75px;\r\n  max-height: calc((100vh - var(--header-height)) * 0.5);\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Load Overlay ------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n#loadOverlay {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.1s ease 0.25s, visibility 0s ease 0.35s;\r\n}\r\n\r\n.preload * {\r\n  -webkit-transition: none !important;\r\n  -moz-transition: none !important;\r\n  -ms-transition: none !important;\r\n  -o-transition: none !important;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Login Overlay ------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.login-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: var(--color-4);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;  \r\n}\r\n\r\n.login-overlay.visibility-hidden {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;  \r\n}\r\n\r\n.login-overlay h1 {\r\n  margin-bottom: 2rem;\r\n  font-family: 'Pacifico', cursive;\r\n  font-size: 4rem;\r\n  font-weight: 200;\r\n  transition: \r\n    width 0.5s ease 0s, \r\n    padding 0.5s ease 0s, \r\n    opacity 0.5s ease 0s, \r\n    visibility 0s ease 0s;\r\n  visibility: visible;\r\n  opacity: 1;\r\n  user-select: none;\r\n}\r\n\r\n.login-overlay .form {\r\n  width: 20rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.login-overlay .form input {\r\n  height: 2rem;\r\n  width: 100%;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  border-radius: 0.25rem;\r\n  border: none;\r\n}\r\n\r\n.login-overlay button {\r\n  margin-top: 1rem;\r\n  height: 2.5rem;\r\n  width: 100%;\r\n  color: white;\r\n  background-color: var(--color-4);\r\n  border: 1px solid white;\r\n  border-radius: 0.5rem;\r\n  font-size: 1rem;\r\n  box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.250);\r\n}\r\n\r\n.login-overlay button:hover {\r\n  background-color: var(--color-4-hover);\r\n}\r\n\r\n.login-overlay button:active {\r\n  background-color: var(--color-4-active);\r\n}\r\n\r\n.login-overlay .form-error {\r\n  align-self: start;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  color: white;\r\n}\r\n\r\n.login-overlay-bottom {\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n  width: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-top: 1px solid white;\r\n}\r\n\r\n.login-overlay .new-account-btn {\r\n  width: 15rem;\r\n}\r\n\r\n.login-overlay button.loading,\r\n#buttonFocusedCardSubmit.loading {\r\n  color: rgba(0, 0, 0, 0);\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgb(84, 186, 185) 0%, \r\n    rgb(84, 186, 185) 25%, \r\n    hsl(179, 43%, 65%) 50%, \r\n    rgb(84, 186, 185) 75%, \r\n    rgb(84, 186, 185) 100%); \r\n  background-size: 200%;\r\n  animation: loading 0.5s ease-in-out 0s infinite forwards alternate;\r\n}\r\n\r\n@keyframes loading {\r\n  0% {\r\n    background-position: 0% 0%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 100% 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTomorrow/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTomorrow/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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
/* harmony export */   getLists: () => (/* binding */ getLists),
/* harmony export */   getTask: () => (/* binding */ getTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   updateTask: () => (/* binding */ updateTask)
/* harmony export */ });


class Task {
  constructor(
    id,
    userId,
    email,
    title, 
    description, 
    isCompleted,
    index,
    priority,
    list,
    dueDate,
  ) {
    this.id = id;
    this.userId = userId;
    this.email = email;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.index = index;
    this.priority = priority;
    this.list = list;
    this.dueDate = new Date(dueDate);
  }

  toggleTaskCompletion() {
    this.isCompleted = this.isCompleted ? false : true;
  }

  setTaskPriority(priority) {
    this.priority = priority;
  }

  setTaskList(list) {
    this.list = list;
  }

  setTaskDueDate(date) {
    this.dueDate = date;
  }
}

const tasks = [
  // new Task("Buy groceries", "Get milk, eggs, bread, and vegetables from the supermarket.", Date.now() - 86400000),
  // new Task("Finish report for work", "Compile the sales data and write a summary for the quarterly report.", Date.now() + 123),
  // new Task("Call Mom", "Catch up with Mom and check how she's doing.", Date.now() + 1102),
  // new Task("Go for a jog", "Run for 30 minutes around the park to stay active.", Date.now() + 2323),
  // new Task("Read a book", "Start reading 'The Great Gatsby' by F. Scott Fitzgerald.", Date.now() + 4242),
  // new Task("Clean the garage", "Organize and declutter the garage space.", Date.now() + 12512),
  // new Task("Pay utility bills", "Settle electricity, water, and internet bills for the month.", Date.now() + 40000),
  // new Task("Plan weekend trip", "Research destinations and create an itinerary for the weekend getaway.", Date.now() + 51243),
  // new Task("Update resume", "Add recent work experiences and skills to the resume.", Date.now() + 86400000),
  // new Task("Practice guitar", "Spend 1 hour practicing chords and scales on the guitar.", Date.now() + 86400000 * 2+ 5125),
  // new Task("Organize digital files", "Sort and arrange documents and photos on the computer.", Date.now() + 86400000 * 3 + 120512),
  // new Task("Water the plants", "Give the indoor and outdoor plants a good watering.", Date.now() + 86400000 * 4 + 120524),
  // new Task("Attend yoga class", "Join the evening yoga session at the local studio.", Date.now() + 86400000 * 4 + 120536),
  // new Task("Fix leaking faucet", "Call the plumber or attempt to repair the faucet yourself.", Date.now() + 86400000 * 5 + 120738),
  // new Task("Watch a documentary", "Pick an interesting documentary and learn something new.", Date.now() + 86400000 * 5  + 122626),
  // new Task("Start learning a language", "Download language learning app and begin with basic phrases.", Date.now() + 86400000 * 6),
];

const getTasks = async (token) => {
  return new Promise((resolve) => {
    fetch('https://todo-list-backend.azurewebsites.net/api', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + token,
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response);
        tasks.length = 0;
        response.forEach(entry => {
          tasks.push(
            new Task(
              entry.id,
              entry.userId,
              entry.email,
              entry.title, 
              entry.description, 
              entry.isCompleted,
              entry.index,
              entry.priority,
              entry.list,
              entry.dueDate,
            )
          )
        })
        resolve(tasks);
      });
  })
};

const getTask = (index) => {
  return tasks.filter(task => task.index == index)[0];
}

const addTask = async (title, description, index, priority, list, email, dueDate, isCompleted, token) => {
  const body = {
    userId: 'string',
    title: title,
    description: description,
    isCompleted: isCompleted,
    index: index,
    priority: priority,
    list: list,
    email: email,
    dueDate: dueDate,
  }

  return new Promise((resolve) => {
    fetch('https://todo-list-backend.azurewebsites.net/api', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'authorization': 'Bearer ' + token,
        'content-type': 'application/json',
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response);
        resolve();
      });
  })
}

const updateTask = async (title, description, index, priority, list, email, dueDate, isComplete=false, token) => {
  const id = getTask(index).id;

  const body = {
    userId: 'string',
    title: title,
    description: description,
    isCompleted: isComplete,
    index: index,
    priority: priority,
    list: list,
    email: email,
    dueDate: dueDate,
  }

  return new Promise((resolve) => {
    fetch(`https://todo-list-backend.azurewebsites.net/api/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'authorization': 'Bearer ' + token,
        'content-type': 'application/json',
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response);
        resolve();
      });
  })
}

const deleteTask = async (index, token) => {
  const id = getTask(index).id;

  return new Promise((resolve) => {
    fetch(`https://todo-list-backend.azurewebsites.net/api/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': 'Bearer ' + token,
        'content-type': 'application/json',
      }
    })
      .then(response => {
        console.log(response);
        resolve();
      });
  })
}

const doesTaskExist = (index) => {
  return tasks.some(task => task.index == index);
}

const lists = [
  'Home',
  'Work',
];

const getLists = () => lists;

// API Tests


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_isTomorrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isTomorrow */ "./node_modules/date-fns/esm/isTomorrow/index.js");






const root = document.documentElement;

// Header Elements 
const buttonSidebar = document.querySelector('#buttonSidebar');
const searchBox = document.querySelector('#searchBox');
const buttonNotification = document.querySelector('#buttonNotification');
const buttonSettings = document.querySelector('#buttonSettings');
const buttonUser = document.querySelector('#buttonUser');

// Card Elements
const main = document.querySelector('.main');
const focusedCardOverlay = document.querySelector('#focusedCardOverlay');
const focusedCardWrapper = document.querySelector('#focusedCardOverlay > .wrapper');
const dropdownOverlay = document.querySelector('#dropdownOverlay');
const dropdownDueDate = document.querySelector('.dropdown.duedate');
const dropdownDueDateInput = document.querySelector('#dueDateInput');
const dropdownList = document.querySelector('.dropdown.list');
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
const todosToday = document.querySelector('#todosToday');
const todosNext7Days = document.querySelector('#todosNext7Days');
const todosCalendar = document.querySelector('#todosCalendar');

// Login Screen
const loginScreen = document.querySelector('.login-overlay')
const buttonLogin = document.querySelector('#buttonLogin');
const buttonSignup = document.querySelector('#buttonSignup');
const buttonExistingAccount = document.querySelector('#buttonExistingAccount');
const buttonNewAccount = document.querySelector('#buttonNewAccount');
const formLogIn = document.querySelector('.form.login');
const formSignUp = document.querySelector('.form.signup');
const formLogInError = document.querySelector('form.login .form-error');
const formSignUpError = document.querySelector('form.signup .form-error');
const inputLogInEmail = document.querySelector('#loginEmail');
const inputLogInPassword = document.querySelector('#loginPassword');
const inputSignUpEmail = document.querySelector('#signupEmail');
const inputSignUpPassword = document.querySelector('#signupPassword');
let authToken = null;
let currentLoggedUserEmail = null;

// Other Variables
let todosShowMode = "today";

// -------------------------------------------------------------------------- //
// Cards -------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

const generateTodoList = () => {
  removeCardsContainer();

  if (todosShowMode === "today") {
    const date = new Date();
    generateCardsContainer(date);
  } 

  else if (todosShowMode === "7 days") {
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      generateCardsContainer(date);
    }
    
  }
  
  // else if (todosShowMode === "calendar") {
  //   console.log('Calendar Mode!')
  // }

  fillCardsContainer();
  document.querySelectorAll('.container.actual').forEach(container => {
    container.addEventListener('scroll', toggleCardsContainerOverflowGradient);
    toggleCardsContainerOverflowGradient(container);
  })
}

const generateCardsContainer = (date) => {
  const cards = document.createElement('div');
  cards.classList.add('cards');
  
  const h2 = document.createElement('h2');
  if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__["default"])(date)) {
    h2.textContent = 'Today';
  } 
  else if ((0,date_fns_isTomorrow__WEBPACK_IMPORTED_MODULE_3__["default"])(date)) {
    h2.textContent = 'Tomorrow';
  }
  else {
    h2.textContent = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 'EEEE');
  }

  const h3 = document.createElement('h3');
  h3.textContent = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 'MMMM d, y');

  const overflowTop = document.createElement('div');
  const overflowTopInner = document.createElement('div');
  overflowTop.classList.add('overflow-top');
  overflowTop.dataset.date = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 'yyyy/MM/dd');
  overflowTop.appendChild(overflowTopInner);

  const containerActual = document.createElement('div');
  const containerOngoing = document.createElement('div');
  const containerCompleted = document.createElement('div');
  containerOngoing.classList.add('container');
  containerOngoing.classList.add('ongoing');
  containerOngoing.dataset.date = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 'yyyy/MM/dd');
  containerCompleted.classList.add('container');
  containerCompleted.classList.add('completed');
  containerCompleted.dataset.date = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 'yyyy/MM/dd');
  containerActual.classList.add('container');
  containerActual.classList.add('actual');
  containerActual.dataset.date = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 'yyyy/MM/dd');
  containerActual.appendChild(containerOngoing);
  containerActual.appendChild(containerCompleted);

  const overflowBottom = document.createElement('div');
  const overflowBottomInner = document.createElement('div');
  overflowBottom.classList.add('overflow-bottom');
  overflowBottom.dataset.date = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 'yyyy/MM/dd');
  overflowBottom.appendChild(overflowBottomInner);

  const containerAdd = document.createElement('div');
  containerAdd.classList.add('container');
  containerAdd.classList.add('add');
  containerAdd.dataset.date = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 'yyyy/MM/dd');

  const cardAdd = document.createElement('div');
  cardAdd.classList.add('card');
  cardAdd.classList.add('add');
  cardAdd.dataset.date = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 'yyyy/MM/dd');

  const buttonDone = document.createElement('button');
  buttonDone.classList.add('button');
  buttonDone.classList.add('done');

  const dummy = document.createElement('div');
  buttonDone.appendChild(dummy);

  const h4 = document.createElement('h4');
  h4.textContent = 'Add task...';

  cardAdd.appendChild(buttonDone);
  cardAdd.appendChild(h4);
  cardAdd.addEventListener('click', showFocusedCard);
  cardAdd.addEventListener('mouseenter', hoverCard);
  
  containerAdd.appendChild(cardAdd);
  
  cards.appendChild(h2);
  cards.appendChild(h3);
  cards.appendChild(overflowTop);
  cards.appendChild(containerActual);
  cards.appendChild(overflowBottom);
  cards.appendChild(containerAdd);

  main.appendChild(cards);
  
  dummy.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle-outline</title><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" /></svg>`
}

const removeCardsContainer = () => {
  const cardsContainers = document.querySelectorAll('.cards')
  cardsContainers.forEach(cardsContainer => cardsContainer.remove());
}

const fillCardsContainer = async () => {
  showLoadingCard();
  const tasks = await _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks(authToken);
  tasks.forEach(generateCard);
  hideLoadingCard();
}

const clearCardsContainer = () => {
  const cardsActualContainers = document.querySelectorAll(`.cards .container.actual`);

  cardsActualContainers.forEach(cardsActualContainer => {
    cardsActualContainer.childNodes.forEach(child => {
      while (child.firstChild) {
        child.removeChild(child.firstChild);
      }
    });
  })
}

const regenerateCardsContainer = () => {
  clearCardsContainer();
  fillCardsContainer();
  initializeCardsContainerOverflowGradient();
}

const initializeCardsContainerOverflowGradient = () => {
  document.querySelectorAll('.container.actual').forEach(container => {
    toggleCardsContainerOverflowGradient(container)
  });
}

const toggleCardsContainerOverflowGradient = (e) => {
  // Use e if container is passed instead of scroll event
  const containerActual = e.currentTarget ? e.currentTarget : e;

  const overflowTop = document.querySelector(`.overflow-top[data-date="${containerActual.dataset.date}"]`);
  const overflowBottom = document.querySelector(`.overflow-bottom[data-date="${containerActual.dataset.date}"]`);
  let scrollTop = containerActual.scrollTop;
  let scrollBottom = containerActual.scrollHeight - 
                     containerActual.scrollTop - 
                     containerActual.clientHeight;

  if (scrollTop > 0) {
    scrollTop =  scrollTop > 16 ? 16 : scrollTop;
    containerActual.style.marginTop = `${scrollTop}px`;
    overflowTop.classList.add('overflowing');
  }
  else if (scrollTop === 0) {
    overflowTop.classList.remove('overflowing');
    containerActual.style.marginTop = `0px`;
  }

  if (scrollBottom >= 1) {
    overflowBottom.classList.add('overflowing');
  }
  else if (scrollBottom < 1) {
    overflowBottom.classList.remove('overflowing');
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

const completeCard = async(e) => {
  e.stopPropagation();
  const index = getCardIndex(e);
  const task = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(index);

  cardCoordinates.setBefore();

  const title = task.title;
  const description = task.description;
  const priority = task.priority;
  const list = task.list;
  const dueDate = task.dueDate;
  const email = task.email;

  task.toggleTaskCompletion();

  await _todolist_js__WEBPACK_IMPORTED_MODULE_1__.updateTask(title, description, index, priority, list, email, dueDate, task.isCompleted, authToken);

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
  const today = new Date(Date.now());
  let dueDate = task.dueDate;

  // For overdue tasks
  if (dueDate < today) {
    dueDate = today;
  }

  const cardsOngoingContainer = document.querySelector(`.cards .container.ongoing[data-date="${(0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(dueDate, 'yyyy/MM/dd')}"]`);
  const cardsCompletedContainer = document.querySelector(`.cards .container.completed[data-date="${(0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(dueDate, 'yyyy/MM/dd')}"]`);

  // Check if there is a container for the current task with the corresponding due date
  if (!cardsOngoingContainer) return;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = task.index;
  card.dataset.priority = task.priority;
  card.dataset.list = task.list;
  card.dataset.dueDate = task.dueDate;
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

    const dummy = document.createElement('div');

    button.appendChild(dummy)
    buttonsContainer.appendChild(button);
    
    dummy.outerHTML = buttonEtc.svg;

    if (buttonEtc.class === 'duedate') {
      button.addEventListener('click', clickDueDateDropdown);
      const p = document.createElement('p');
      p.textContent = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(task.dueDate, 'd LLL');
      button.appendChild(p);
    }
    else if (buttonEtc.class === 'list') {
      button.addEventListener('click', clickListDropdown);
      const p = document.createElement('p');
      p.textContent = task.list;
      button.appendChild(p);
    }
    else if (buttonEtc.class === 'priority') {
      button.addEventListener('click', clickPriorityDropdown);
    }
    else if (buttonEtc.class === 'delete') {
      button.addEventListener('click', deleteCard);
    }
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

const showLoadingCard = () => {
  const cardsOngoingContainer = document.querySelector(`.cards .container.ongoing`);
  const card = document.createElement('div');
  card.classList.add('card', 'loading');
  cardsOngoingContainer.appendChild(card);  
}

const hideLoadingCard = () => {
  const loadingCard = document.querySelector('.card.loading');
  loadingCard.remove();
}

const hoverCard = (e) => {
  e.currentTarget.classList.add('hover');
  e.currentTarget.addEventListener('mouseleave', (e) => {
    if (dropdownOverlay.classList.contains('visibility-hidden')) {
      e.currentTarget.classList.remove('hover');      
    }
  }, {once: true});
}

// -------------------------------------------------------------------------- //
// Card Dropdowns ----------------------------------------------------------- //
// -------------------------------------------------------------------------- //

const positionDropdown = (currentButton) => {
  const dropdownTop = currentButton.getBoundingClientRect().top;
  const dropdownLeft = currentButton.getBoundingClientRect().left;
  root.style.setProperty('--dropdown-top', `${dropdownTop}px`);
  root.style.setProperty('--dropdown-left', `${dropdownLeft}px`);
}

const positionDropdownReset = (currentButton) => {
  root.style.setProperty('--dropdown-top', `0px`);
  root.style.setProperty('--dropdown-left', `0px`);
}

// Due Date ----------------------------------------------------------------- //

const clickDueDateDropdown = (e) => {
  e.stopPropagation();
  const currentButton = e.currentTarget;
  const currentCardIndex = getCardIndex(e);
  const currentTask = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(currentCardIndex);    
  positionDropdown(currentButton);
  setDropdownDueDateIndex(currentCardIndex);
  showDropdownDueDate(currentButton);

  displayCurrentCardDate(currentTask);
}

const showDropdownDueDate = (currentButton) => {
  currentButton.classList.add('hover');
  currentButton.classList.add('clicked');
  dropdownOverlay.addEventListener('click', hideDropdownDueDate);
  dropdownOverlay.classList.remove('visibility-hidden');
  dropdownDueDate.classList.remove('visibility-hidden');
}

const hideDropdownDueDate = (e) => {
  const selectedCard = document.querySelector(`.card[data-index="${e.currentTarget.dataset.index}"`);
  const currentButton = document.querySelector(`.button.clicked`);
  selectedCard.classList.remove('hover');
  currentButton.classList.remove('hover');
  currentButton.classList.remove('clicked');
  dropdownOverlay.removeEventListener('click', hideDropdownDueDate);
  dropdownOverlay.removeAttribute('data-index');
  dropdownOverlay.classList.add('visibility-hidden');
  dropdownDueDate.classList.add('visibility-hidden');
  positionDropdownReset();
}

const setDropdownDueDateIndex = (index) => {
  dropdownDueDateInput.dataset.index = index;
  dropdownOverlay.dataset.index = index;
}

const setDueDate = (e) => {
  const currentCardIndex = e.currentTarget.dataset.index;
  const currentCard = document.querySelector(`.card[data-index="${currentCardIndex}"]`);
  const dueDate = new Date(Date.parse(dropdownDueDateInput.value));

  if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.doesTaskExist(currentCardIndex)) {
    const currentTask = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(currentCardIndex);
    currentTask.setTaskDueDate(dueDate);
  }

  currentCard.dataset.dueDate = dueDate;  
  if (!focusedCardOverlay.classList.contains('visibility-hidden')) {
    focusedCard.dataset.dueDate = dueDate;
  }

  document.querySelector('.button.duedate.clicked > p').textContent = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(dueDate, 'd LLL');
  hideDropdownDueDate(e);

  regenerateCardsContainer();
}

const displayCurrentCardDate = (task) => {
  if (task) {
    dropdownDueDateInput.value = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(task.dueDate, 'yyyy-MM-dd');
  }
  else {
    const date = new Date(document.querySelector('.button.clicked').closest('.card.focused').dataset.dueDate);
    dropdownDueDateInput.value = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 'yyyy-MM-dd');
  }
}

// List --------------------------------------------------------------------- //

const clickListDropdown = (e) => {
  e.stopPropagation();
  const currentButton = e.currentTarget;
  const currentCardIndex = getCardIndex(e);
  const currentTask = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(currentCardIndex);      
  positionDropdown(currentButton);
  clearDropdownList();
  generateDropdownList(currentCardIndex);
  showDropdownList(currentButton);
  if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.doesTaskExist(currentCardIndex)) {
    displayCurrentCardList(currentTask);
  }
}

const clearDropdownList = () => {
  while(dropdownList.firstChild) {
    dropdownList.removeChild(dropdownList.firstChild);
  }
}

const generateDropdownList = (currentCardIndex) => {
  const ul = document.createElement('ul');

  _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getLists().forEach((list, index) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = `dropdownList${index + 1}`;
    input.name = 'list';
    input.value = list;
    input.dataset.index = currentCardIndex;
    input.addEventListener('click', selectList);
    if (index === 0) {input.checked = true}

    const label = document.createElement('label');
    label.setAttribute('for', input.id);

    const dummy = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = list;

    label.appendChild(dummy);
    label.appendChild(p);
    li.appendChild(input);
    li.appendChild(label);
    ul.appendChild(li);

    dummy.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>folder-outline</title><path d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" /></svg>`;
  });
  dropdownList.appendChild(ul);
  dropdownOverlay.dataset.index = currentCardIndex;
}

const showDropdownList = (currentListButton) => {
  currentListButton.classList.add('hover');
  currentListButton.classList.add('clicked');
  dropdownOverlay.addEventListener('click', hideDropdownList);
  dropdownOverlay.classList.remove('visibility-hidden');
  dropdownList.classList.remove('visibility-hidden');
}

const hideDropdownList = (e) => {
  const selectedCard = document.querySelector(`.card[data-index="${e.currentTarget.dataset.index}"`);
  const currentButton = document.querySelector(`.button.clicked`);
  selectedCard.classList.remove('hover');
  currentButton.classList.remove('hover');
  currentButton.classList.remove('clicked');
  dropdownOverlay.removeEventListener('click', hideDropdownList);
  dropdownOverlay.removeAttribute('data-index');
  dropdownOverlay.classList.add('visibility-hidden');
  dropdownList.classList.add('visibility-hidden');
  positionDropdownReset();
}

const displayCurrentCardList = (task) => {
  const dropdownLists = document.querySelectorAll('[id^="dropdownList"]');

  dropdownLists.forEach(dropdownList => {
    if (dropdownList.value === task.list) {
      dropdownList.checked = true;
    }
  });
}

const selectList = (e) => {
  const selectedList = document.querySelector('.dropdown input[name="list"]:checked').value;
  const currentCardIndex = e.currentTarget.dataset.index;
  const currentCard = document.querySelector(`.card[data-index="${currentCardIndex}"]`);

  if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.doesTaskExist(currentCardIndex)) {
    const currentTask = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(currentCardIndex);
    currentTask.setTaskList(selectedList);
  }

  currentCard.dataset.list = selectedList;
  if (!focusedCardOverlay.classList.contains('visibility-hidden')) {
    focusedCard.dataset.list = selectedList;
  }

  document.querySelector('.button.list.clicked > p').textContent = selectedList;
  hideDropdownList(e);
}

// Priority ----------------------------------------------------------------- //

const clickPriorityDropdown = (e) => {
  e.stopPropagation();
  const currentButton = e.currentTarget;
  const currentCardIndex = getCardIndex(e);
  const currentTask = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(currentCardIndex);      
  positionDropdown(currentButton);
  showDropdownPriority(currentButton);
  setDropdownPriorityIndex(currentCardIndex);
  if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.doesTaskExist(currentCardIndex)) {
    displayCurrentCardPriority(currentTask);
  }
}

const showDropdownPriority = (currentButton) => {
  currentButton.classList.add('hover');
  currentButton.classList.add('clicked');
  dropdownOverlay.addEventListener('click', hideDropdownPriority);
  dropdownOverlay.classList.remove('visibility-hidden');
  dropdownPriority.classList.remove('visibility-hidden');
}

const hideDropdownPriority = (e) => {
  const selectedCard = document.querySelector(`.card[data-index="${e.currentTarget.dataset.index}"`);
  const currentButton = document.querySelector(`.button.clicked`);
  selectedCard.classList.remove('hover');
  currentButton.classList.remove('hover');
  currentButton.classList.remove('clicked');
  dropdownOverlay.removeEventListener('click', hideDropdownPriority);
  dropdownOverlay.removeAttribute('data-index');
  dropdownOverlay.classList.add('visibility-hidden');
  dropdownPriority.classList.add('visibility-hidden');
  positionDropdownReset();
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
  if (!focusedCardOverlay.classList.contains('visibility-hidden')) {
    focusedCard.dataset.priority = selectedPriority;
  }
  hideDropdownPriority(e);
}

// Delete ------------------------------------------------------------------- //

const deleteCard = async (e) => {
  e.stopPropagation();
  const currentCardIndex = getCardIndex(e);
  const currentCard = document.querySelector(`.card:not(.focused)[data-index="${currentCardIndex}"]`);
  const currentCardActualContainer = currentCard.closest('.container.actual');

  if (!_todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(currentCardIndex)) return;

  cardCoordinates.setBefore();

  await _todolist_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask(currentCardIndex, authToken);
  regenerateCardsContainer();

  cardCoordinates.setAfter();
  animateDeleteCard(currentCardIndex, currentCardActualContainer);
  cardCoordinates.clearCards();
}

const animateDeleteCard = (cardIndex, cardContainer ) => {
  const selectedCardHeight = cardCoordinates.getCard(cardIndex).before.height;
  const upDistance = `calc(var(--card-gap) + ${selectedCardHeight}px)`;

  root.style.setProperty('--move-up-distance', `${upDistance}`);
  cardContainer.classList.add('container-shrinking');
  cardContainer.addEventListener('animationend', (e) => {
    cardContainer.classList.remove('container-shrinking')      
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

const clickFocusedCardOverlay = async (e) => {
  const tasks = await _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks(authToken);  

  if (e.target === e.currentTarget) {
    if (tasks.some(task => task.index == focusedCard.dataset.index)) {    
      submitFocusedCard(e);
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

  document.querySelectorAll('.card.add').forEach(addTaskCard => {
    addTaskCard.removeAttribute('data-index');
    addTaskCard.removeAttribute('data-priority');
    addTaskCard.removeAttribute('data-list');
  })

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

  const xDistance = 
    (selectedCard.getBoundingClientRect().left + selectedCard.getBoundingClientRect().width / 2) - 
    (focusedCard.getBoundingClientRect().left + focusedCard.getBoundingClientRect().width / 2) ;
  root.style.setProperty('--move-X-distance', `${xDistance}px`);  

  const xScale = 
    (selectedCard.getBoundingClientRect().width) / (focusedCard.getBoundingClientRect().width) ;
  root.style.setProperty('--scale-X', `${xScale}`);  
    
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
  focusedCard.removeAttribute('data-list');
  focusedCard.removeAttribute('data-due-date');
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
    document.querySelector('#buttonFocusedCardDueDate > p').textContent = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(task.dueDate, 'd LLL');
    document.querySelector('#buttonFocusedCardList > p').textContent = task.list;
    focusedCard.dataset.index = task.index;
    focusedCard.dataset.priority = task.priority;
    focusedCard.dataset.list = task.list;
    focusedCard.dataset.dueDate = task.dueDate;
    inputTaskTitle.value = task.title;
    inputTaskDescription.value = task.description;
    autoSizeTextArea();
  }
  else {
    const index = Date.now();
    const dueDate = new Date(selectedCard.dataset.date);
    buttonFocusedCardSubmit.textContent = 'Add';
    buttonFocusedCardDueDate.dataset.index = index;
    buttonFocusedCardList.dataset.index = index;
    buttonFocusedCardPriority.dataset.index = index;
    buttonFocusedCardDelete.dataset.index = index;
    document.querySelector('#buttonFocusedCardDueDate > p').textContent = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(dueDate, 'd LLL');
    document.querySelector('#buttonFocusedCardList > p').textContent = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getLists()[0];
    focusedCard.dataset.index = index;
    focusedCard.dataset.priority = 'none';
    focusedCard.dataset.list = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getLists()[0];
    focusedCard.dataset.dueDate = dueDate;
    selectedCard.dataset.index = index;
  }
}

const submitFocusedCard = async (e) => {
  const title = inputTaskTitle.value;
  const description = inputTaskDescription.value;
  const index = focusedCard.dataset.index;
  const priority = focusedCard.dataset.priority;
  const list = focusedCard.dataset.list;
  const dueDate = new Date(focusedCard.dataset.dueDate);
  const email = currentLoggedUserEmail;
  const tasks = await _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks(authToken);  
  let isCompleted = false;

  disableButton(buttonFocusedCardSubmit);

  if (tasks.some(task => task.index == index)) {        
    const task = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(index); 
    isCompleted = task.isCompleted;
    await _todolist_js__WEBPACK_IMPORTED_MODULE_1__.updateTask(title, description, index, priority, list, email, dueDate, isCompleted, authToken);
  }
  else {
    await _todolist_js__WEBPACK_IMPORTED_MODULE_1__.addTask(title, description, index, priority, list, email, dueDate, isCompleted, authToken);
  }

  enableButton(buttonFocusedCardSubmit);

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

const switchTodosShowMode = (e) => {
  todosToday.classList.remove('selected');
  todosNext7Days.classList.remove('selected');
  todosCalendar.classList.remove('selected');
  e.currentTarget.classList.add('selected');
  todosShowMode = e.currentTarget.dataset.showMode;
  generateTodoList();
}

// -------------------------------------------------------------------------- //
// Others ------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

window.addEventListener('resize', hideFocusedCardOnResize);
window.addEventListener('resize', autoSizeTextArea);
// window.addEventListener('resize', positionDropdown);

// Header 
searchBox.addEventListener('focus', expandSearchBoxOnMobile, {once: true});

//Cards
dropdownDueDateInput.addEventListener('change', setDueDate);
dropdownPriorityHigh.addEventListener('click', selectPriority);
dropdownPriorityMedium.addEventListener('click', selectPriority);
dropdownPriorityLow.addEventListener('click', selectPriority);
dropdownPriorityNone.addEventListener('click', selectPriority);

// Focused Card
inputTaskDescription.addEventListener('input', autoSizeTextArea);
focusedCardOverlay.addEventListener('click', clickFocusedCardOverlay);
focusedCardWrapper.addEventListener('click', clickFocusedCardOverlay);
buttonFocusedCardDueDate.addEventListener('click', clickDueDateDropdown);
buttonFocusedCardList.addEventListener('click', clickListDropdown);
buttonFocusedCardPriority.addEventListener('click', clickPriorityDropdown);
buttonFocusedCardDelete.addEventListener('click', deleteCard);
buttonFocusedCardDelete.addEventListener('click', hideFocusedCard);
buttonFocusedCardCancel.addEventListener('click', hideFocusedCard);
buttonFocusedCardSubmit.addEventListener('click', submitFocusedCard);

// Sidebar
buttonSidebar.addEventListener('click', toggleSidebarVisibility);
sidebarOverlay.addEventListener('click', toggleSidebarVisibility, {once: true});
todosToday.addEventListener('click', switchTodosShowMode);
todosNext7Days.addEventListener('click', switchTodosShowMode);
todosCalendar.addEventListener('click', switchTodosShowMode);

// Initial generation of cards container
// generateTodoList();
setTimeout(() => {document.body.classList.remove('preload')}, 0);


// Login Screen

function hide(element) {
    element.classList.add('display-none');
}

function show(element) {
    element.classList.remove('display-none');
}

function disableButton(button) {
    button.classList.add('loading');
    button.disabled = true;
}

function enableButton(button) {
    button.classList.remove('loading');
    button.disabled = false;
}

function resetForms() {
    formLogIn.reset();
    formSignUp.reset();
}

function showSignUpForm() {
    hide(buttonNewAccount);
    hide(formLogIn);
    show(buttonExistingAccount);
    show(formSignUp);
    resetForms();
}

function showLoginForm() {
    hide(buttonExistingAccount);
    hide(formSignUp);
    show(buttonNewAccount);
    show(formLogIn);
    resetForms();
}

function logIn(e) {
    if (
        !inputLogInEmail.checkValidity() ||
        !inputLogInPassword.checkValidity()
    ) {
        return false;
    }

    const button = e.currentTarget;
    const body = {
        email: inputLogInEmail.value,
        password: inputLogInPassword.value,
    }    

    disableButton(button);

    fetch('https://todo-list-backend.azurewebsites.net/identity/login',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(data => data.json())
    .then(response => {
        // console.log(response);
        enableButton(button);
        if (response.status) {
            show(formLogInError);
            formLogInError.textContent="❌ Incorrect login credentials."
            return;
        }
        resetForms();
        authToken = response.accessToken;
        currentLoggedUserEmail = body.email;
        loginScreen.classList.add('visibility-hidden');
        loginScreen.addEventListener('transitionend', () => {
          loginScreen.classList.add('display-none');
        })
        generateTodoList();
    })
}

function signUp(e) {
    if (
        !inputSignUpEmail.checkValidity() ||
        !inputSignUpPassword.checkValidity()
    ) {
        return false;
    }

    const button = e.currentTarget;
    const body = {
        email: inputSignUpEmail.value,
        password: inputSignUpPassword.value,
    }    

    disableButton(button);

    fetch('https://todo-list-backend.azurewebsites.net/identity/register',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(data => {
        if (!data.ok) {
            data.json().then(response => {
                console.log(response);
                if (response.status) {
                    show(formSignUpError);
                    formSignUpError.textContent="❌ Invalid registration."
                    return;
                }
            })
        } else {
            show(formSignUpError);
            formSignUpError.textContent="✔ Successfully registered. You may now login."
        }
        enableButton(button);
        resetForms();
    })    
}

inputLogInEmail.addEventListener('click', () => {hide(formLogInError)});
inputLogInPassword.addEventListener('click', () => {hide(formLogInError)});
inputSignUpEmail.addEventListener('click', () => {hide(formSignUpError)});
inputSignUpPassword.addEventListener('click', () => {hide(formSignUpError)});

buttonSignup.addEventListener('click', signUp);
buttonLogin.addEventListener('click', logIn);
buttonNewAccount.addEventListener('click', showSignUpForm);
buttonExistingAccount.addEventListener('click', showLoginForm);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DO0FBQ3pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxTQUFTLE9BQU8sYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsTUFBTSxPQUFPLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxlQUFlLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLHVCQUF1Qix5QkFBeUIsT0FBTyxpQkFBaUIsV0FBVyxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxRQUFRLFVBQVUsTUFBTSxRQUFRLFVBQVUsTUFBTSxRQUFRLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcs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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQjs7QUFFdkM7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxR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QUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELEdBQUc7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsR0FBRztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0xlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7QUFDTDtBQUNDO0FBQ007QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBTztBQUNiO0FBQ0E7QUFDQSxXQUFXLCtEQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkRBQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMkRBQU07QUFDeEM7QUFDQTtBQUNBLG9DQUFvQywyREFBTTtBQUMxQztBQUNBO0FBQ0EsaUNBQWlDLDJEQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyREFBTTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtEQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLDZCQUE2QjtBQUN0RywrRUFBK0UsNkJBQTZCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxVQUFVO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxhQUFhO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDhGQUE4RixVQUFVO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsV0FBVztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0YsMkRBQU0sd0JBQXdCO0FBQzdILG1HQUFtRywyREFBTSx3QkFBd0I7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRpQkFBNGlCO0FBQ2pqQixLQUFLLDZPQUE2TztBQUNsUCxLQUFLLHlLQUF5SztBQUM5SyxLQUFLLHdPQUF3TztBQUM3TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRyxXQUFXO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxZQUFZO0FBQzFELCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSw4QkFBOEI7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGlCQUFpQjtBQUNuRjtBQUNBO0FBQ0EsTUFBTSx1REFBc0I7QUFDNUIsd0JBQXdCLGlEQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDJEQUFNO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDJEQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyREFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBc0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsOEJBQThCO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGlCQUFpQjtBQUNuRjtBQUNBLE1BQU0sdURBQXNCO0FBQzVCLHdCQUF3QixpREFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFzQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSw4QkFBOEI7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxpQkFBaUI7QUFDbkY7QUFDQSxNQUFNLHVEQUFzQjtBQUM1Qix3QkFBd0IsaURBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixpQkFBaUI7QUFDakc7QUFDQTtBQUNBLE9BQU8saURBQWdCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxtQkFBbUI7QUFDbEU7QUFDQSxrREFBa0QsV0FBVztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RkFBOEYsVUFBVTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsV0FBVztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrREFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGLDBCQUEwQjtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsV0FBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxXQUFXO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFVBQVU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsV0FBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaURBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsMkRBQU07QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSwyREFBTTtBQUNoRix1RUFBdUUsa0RBQWlCO0FBQ3hGO0FBQ0E7QUFDQSwrQkFBK0Isa0RBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtEQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFnQjtBQUNqQztBQUNBLFVBQVUsb0RBQW1CO0FBQzdCO0FBQ0E7QUFDQSxVQUFVLGlEQUFnQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxXQUFXO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsV0FBVztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLFdBQVc7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELFdBQVc7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsV0FBVztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMENBQTBDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlEQUFpRCxxQkFBcUI7QUFDdEUsb0RBQW9ELHFCQUFxQjtBQUN6RSxrREFBa0Qsc0JBQXNCO0FBQ3hFLHFEQUFxRCxzQkFBc0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9tb3Jyb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLWNvbG9yLTE6IHdoaXRlO1xyXG4gIC0tY29sb3ItMS1ob3ZlcjogaHNsKDAsIDAlLCA5NyUpO1xyXG4gIC0tY29sb3ItMS1hY3RpdmU6IGhzbCgwLCAwJSwgOTQlKTs7XHJcbiAgLS1jb2xvci0yOiBoc2woMCwgMCUsIDk4JSk7XHJcbiAgLS1jb2xvci0yLWhvdmVyOiBoc2woMCwgMCUsIDk1JSk7XHJcbiAgLS1jb2xvci0yLWFjdGl2ZTogaHNsKDAsIDAlLCA5MiUpO1xyXG4gIC0tY29sb3ItMzogcmdiKDE1OCwgMjEwLCAxOTgpO1xyXG4gIC0tY29sb3ItMy1ob3ZlcjogaHNsKDE2NiwgMzclLCA2OSUpO1xyXG4gIC0tY29sb3ItMy1hY3RpdmU6IGhzbCgxNjYsIDM3JSwgNjYlKTtcclxuICAtLWNvbG9yLTMtc2VsZWN0ZWQ6IGhzbCgxNjYsIDM3JSwgNjclKTtcclxuICAtLWNvbG9yLTQ6IHJnYig4NCwgMTg2LCAxODUpO1xyXG4gIC0tY29sb3ItNC1ob3ZlcjogaHNsKDE3OSwgNDMlLCA1MCUpO1xyXG4gIC0tY29sb3ItNC1hY3RpdmU6IGhzbCgxNzksIDQzJSwgNDclKTtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDRyZW07XHJcbiAgLS1zaWRlYmFyLXdpZHRoOiAyNTBweDtcclxuICAtLXNjYWxlLVg6IDAuNTtcclxuICAtLW1vdmUtWC1kaXN0YW5jZTogMTExLjc4MTI1cHg7XHJcbiAgLS1tb3ZlLXVwLWRpc3RhbmNlOiAxMTEuNzgxMjVweDtcclxuICAtLW1vdmUtZG93bi1kaXN0YW5jZTogMTExLjc4MTI1cHg7XHJcbiAgLS1jYXJkLWdhcDogMXJlbTtcclxuICAtLWRyb3Bkb3duLXRvcDogMDtcclxuICAtLWRyb3Bkb3duLWxlZnQ6IDA7XHJcbiAgLS1idXR0b24td2lkdGg6IDEuN3JlbTtcclxufVxyXG5cclxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHksXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIFxyXG5wLCB1bCwgb2wsIGxpLCBidXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG51bCwgb2wsIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59IFxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5zdmcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5zaXRlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGlzcGxheS1ub25lIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIHotaW5kZXggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4ubG9naW4tb3ZlcmxheSB7XHJcbiAgei1pbmRleDogMjAwMDA7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgei1pbmRleDogMTEwMDE7XHJcbn1cclxuXHJcbiNkcm9wZG93bk92ZXJsYXkge1xyXG4gIHotaW5kZXg6IDExMDAwO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICB6LWluZGV4OiAxMDAwMDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHotaW5kZXg6IDEwMDE7XHJcbn1cclxuXHJcbiNzaWRlYmFyT3ZlcmxheSB7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuI2ZvY3VzZWRDYXJkT3ZlcmxheSB7XHJcbiAgei1pbmRleDogODAwO1xyXG59XHJcblxyXG4ub3ZlcmZsb3ctYm90dG9tLFxyXG4ub3ZlcmZsb3ctdG9wIHtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBIZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyICoge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cztcclxufVxyXG5cclxuLmhlYWRlciBoMXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAwLjNyZW07XHJcbiAgcGFkZGluZzogMCA0LjVyZW0gMCAwLjI1cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgdHJhbnNpdGlvbjogXHJcbiAgICB3aWR0aCAwLjVzIGVhc2UgMHMsIFxyXG4gICAgcGFkZGluZyAwLjVzIGVhc2UgMHMsIFxyXG4gICAgb3BhY2l0eSAwLjVzIGVhc2UgMHMsIFxyXG4gICAgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmhlYWRlciBoMXtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgd2lkdGggMC41cyBlYXNlIDBzLCBcclxuICAgICAgcGFkZGluZyAwLjVzIGVhc2UgMHMsIFxyXG4gICAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXHJcbiAgICAgIHZpc2liaWxpdHkgMHMgZWFzZSAwLjVzO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiAxO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQge1xyXG4gIGhlaWdodDogM3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDFyZW0gMCAzcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuc2VhcmNoLWJveCBpbnB1dCB7XHJcbiAgICBtYXJnaW46IDAuMjVyZW1cclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXJ7XHJcbiAgY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzICsgc3ZnIHtcclxuICBmaWxsOiBncmV5O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBzdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwLjc1cmVtO1xyXG4gIGhlaWdodDogMS43NXJlbTtcclxuICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaGVhZGVyIC5idXR0b24ge1xyXG4gIGhlaWdodDogM3JlbTtcclxuICB3aWR0aDogM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcclxufVxyXG5cclxuLmhlYWRlciAuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcclxufVxyXG5cclxuLmhlYWRlciAuYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xyXG59XHJcblxyXG4uYnV0dG9uIHN2ZyB7XHJcbiAgaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4jYnV0dG9uU2lkZWJhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuI2J1dHRvblVzZXIge1xyXG4gIG1hcmdpbjogMCAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmhlYWRlciAuYnV0dG9uLFxyXG4gICNidXR0b25TaWRlYmFyLFxyXG4gICNidXR0b25Vc2VyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gICNidXR0b25Ob3RpZmljYXRpb24uc2VhcmNoQm94LWZvY3VzZWQsXHJcbiAgI2J1dHRvblNldHRpbmdzLnNlYXJjaEJveC1mb2N1c2VkLFxyXG4gICNidXR0b25Vc2VyLnNlYXJjaEJveC1mb2N1c2VkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4jYnV0dG9uVXNlciBpbWcge1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBTaWRlYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XHJcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcclxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XHJcbn1cclxuXHJcbi5zaWRlYmFyLnNpZGViYXItaGlkZGVuIHtcclxuICBsZWZ0OiBjYWxjKC0xICogdmFyKC0tc2lkZWJhci13aWR0aCkpO1xyXG59XHJcblxyXG4uc2lkZWJhciBoNCB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uc2lkZWJhciBwIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMC43NXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtIDAuMjVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGU6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWFjdGl2ZSk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIGg0IHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIC5idXR0b24ge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgc3ZnIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMC4wNXJlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIC5idXR0b246aG92ZXIgc3Zne1xyXG4gIGZpbGw6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSAuYnV0dG9uOmFjdGl2ZSBzdmd7XHJcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xyXG59XHJcblxyXG4uc2lkZWJhciBsaSB7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xyXG4gIGNvbG9yOiBoc2woMCwgMCUsIDI1JSk7XHJcbiAgZmlsbDogaHNsKDAsIDAlLCAyNSUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uc2lkZWJhciBsaTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uc2lkZWJhciBsaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1ob3Zlcik7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGxpLnNlbGVjdGVkLFxyXG4uc2lkZWJhciBsaTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcclxufVxyXG5cclxuLnNpZGViYXIgbGkgPiBzdmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDAuMXJlbTtcclxuICBoZWlnaHQ6IDEuMjVyZW07XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIE1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIG1pbi13aWR0aDogMDtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEuMjVyZW0gMXJlbTtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMTBweCwgMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heChhdXRvLCAxMDAlKTtcclxuICBnYXA6IDJyZW0gMC4yNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXM7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLm1haW4uc2lkZWJhci1oaWRkZW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4jc2lkZWJhck92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYWluIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgI3NpZGViYXJPdmVybGF5IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAwLjI1O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XHJcbiAgfVxyXG5cclxuICAjc2lkZWJhck92ZXJsYXkuc2lkZWJhci1oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNzIwcHg7ICBcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNhcmRzIGgyLFxyXG4uY2FyZHMgaDMge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRzIGgzIHtcclxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIuYWN0dWFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7IFxyXG4gIHBhZGRpbmc6IDAgMC42NXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovICBcclxufVxyXG5cclxuLmNvbnRhaW5lci5hY3R1YWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgLyogV2ViS2l0ICovXHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4vKiAuY29udGFpbmVyLm9uZ29pbmcsXHJcbi5jb250YWluZXIuY29tcGxldGVkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59ICovXHJcblxyXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lIHN2Zy5jaGVjayB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5vbmdvaW5nIC5jYXJkIC5idXR0b24uZG9uZTpob3ZlciBzdmcuY2hlY2sge1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5vbmdvaW5nIC5jYXJkIC5idXR0b24uZG9uZTphY3RpdmUgc3ZnLmNoZWNrIHtcclxuICBvcGFjaXR5OiAwLjU1O1xyXG59XHJcblxyXG4uY29udGFpbmVyLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmRvbmUgc3ZnLmNoZWNrIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmRvbmU6aG92ZXIgc3ZnLmNoZWNrIHtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIuY29tcGxldGVkIC5jYXJkIC5idXR0b24uZG9uZTphY3RpdmUgc3ZnLmNoZWNrIHtcclxuICBvcGFjaXR5OiAwLjI1O1xyXG59XHJcblxyXG4uY29udGFpbmVyLmFkZCB7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIHBhZGRpbmc6IDAgMC42NXJlbTtcclxufVxyXG5cclxuLm92ZXJmbG93LWJvdHRvbSxcclxuLm92ZXJmbG93LXRvcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5vdmVyZmxvdy1ib3R0b20gPiBkaXYsXHJcbi5vdmVyZmxvdy10b3AgPiBkaXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm92ZXJmbG93LXRvcCA+IGRpdiB7XHJcbiAgdG9wOiBjYWxjKDFyZW0gLSAxcHgpO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMC4xNSkgMTAwJSk7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XHJcbn1cclxuXHJcbi5vdmVyZmxvdy10b3Aub3ZlcmZsb3dpbmcgPiBkaXYge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcclxufVxyXG5cclxuLm92ZXJmbG93LWJvdHRvbSA+IGRpdiB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjE1KSAxMDAlKTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcclxufVxyXG5cclxuLm92ZXJmbG93LWJvdHRvbS5vdmVyZmxvd2luZyA+IGRpdiB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBDYXJkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmNhcmQuYWRkIGg0IHtcclxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0tY2FyZC1nYXApO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtIDAuMTVyZW0gMC43NXJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggbGlnaHRncmV5LCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHVzZXItc2VsZWN0OiBub25lOyAgXHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyBlYXNlIDBzO1xyXG59XHJcblxyXG4uY2FyZC5sb2FkaW5nIHtcclxuICBoZWlnaHQ6IDkxcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgOTBkZWcsXHJcbiAgICByZ2IoMjU1LCAyNTUsIDI1NSkgMCUsIFxyXG4gICAgcmdiKDI1NSwgMjU1LCAyNTUpIDI1JSwgXHJcbiAgICBoc2woMCwgMCUsIDk3LjUlKSA1MCUsIFxyXG4gICAgcmdiKDI1NSwgMjU1LCAyNTUpIDc1JSwgXHJcbiAgICByZ2IoMjU1LCAyNTUsIDI1NSkxMDAlKTsgXHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG4gIGFuaW1hdGlvbjogbG9hZGluZyAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXSB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggaHNsKDAsIDEwMCUsIDc1JSksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdLmZvY3VzZWQsXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9aGlnaF0uaG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IHJlZCwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggaHNsKDM5LCAxMDAlLCA3NSUpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dLmZvY3VzZWQsXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXS5ob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggb3JhbmdlLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddIHtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBoc2woMTIwLCA1MCUsIDY1JSksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10uZm9jdXNlZCxcclxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddLmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBncmVlbiwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jYXJkLmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tY29sb3ItNCksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZCBoNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgIFxyXG59XHJcblxyXG4uY2FyZCBwIHtcclxuICBmbGV4OiAxO1xyXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uY2FyZCBoNC5jb21wbGV0ZWQsXHJcbi5jYXJkIHAuY29tcGxldGVkIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICBjb2xvcjogaHNsKDAsIDAlLCA3NSUpO1xyXG59XHJcblxyXG4uY2FyZCAuYnV0dG9ucy1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4uY2FyZCAuYnV0dG9uIHtcclxuICBoZWlnaHQ6IHZhcigtLWJ1dHRvbi13aWR0aCk7XHJcbiAgd2lkdGg6IHZhcigtLWJ1dHRvbi13aWR0aCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMS4zNXJlbTsgIFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbn1cclxuXHJcbi5jYXJkIC5idXR0b24gcCB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHRyYW5zaXRpb246IDAuMjVzO1xyXG59XHJcblxyXG4uY2FyZCAuYnV0dG9uLmNsaWNrZWQgcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1hY3RpdmUpO1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNhcmQuaG92ZXIgLmJ1dHRvbiB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5jYXJkLmhvdmVyIC5idXR0b24uaG92ZXIsXHJcbi5jYXJkLmhvdmVyIC5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEtaG92ZXIpO1xyXG59XHJcblxyXG4uY2FyZC5ob3ZlciAuYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1hY3RpdmUpO1xyXG59XHJcblxyXG4uY2FyZCAuYnV0dG9uLmR1ZWRhdGUsXHJcbi5jYXJkIC5idXR0b24ubGlzdCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xyXG4gIG1hcmdpbi1yaWdodDogMC4xcmVtO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmR1ZWRhdGUgcCxcclxuLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmxpc3QgcCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgY29sb3I6IGhzbCgwLCAwJSwgNzUlKTtcclxufVxyXG5cclxuLmNhcmQgLmJ1dHRvbi5kdWVkYXRlIHAsXHJcbi5jYXJkIC5idXR0b24ubGlzdCBwIHtcclxuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xyXG59XHJcblxyXG4uY2FyZCAuYnV0dG9uLnByaW9yaXR5IHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmNhcmQgLmJ1dHRvbi5kb25lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMC42NXJlbTtcclxuICBsZWZ0OiAtMC42NXJlbTtcclxuICBoZWlnaHQ6IDEuMzVyZW07XHJcbiAgd2lkdGg6IDEuMzVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHtcclxuICB3aWR0aDogMS4zNXJlbTtcclxuICBwYWRkaW5nOiAwOyAgXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkIHN2ZyB7XHJcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJ1dHRvbi13aWR0aCkgKiAwLjYyNSk7XHJcbiAgZmlsbDogaHNsKDAsIDAlLCA3NSUpO1xyXG4gIHRyYW5zaXRpb246IDAuMjVzO1xyXG59XHJcblxyXG4uY2FyZCAuYnV0dG9uLmRvbmUgc3ZnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkIC5idXR0b24uZG9uZSBzdmcsXHJcbi5jYXJkLmhvdmVyIC5idXR0b24uZG9uZTpob3ZlciBzdmcge1xyXG4gIGZpbGw6IHZhcigtLWNvbG9yLTQpO1xyXG59XHJcblxyXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdIC5idXR0b24uZG9uZSBzdmcsXHJcbi5jYXJkLmhvdmVyW2RhdGEtcHJpb3JpdHk9aGlnaF0gLmJ1dHRvbi5kb25lIHN2ZyxcclxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXSAuYnV0dG9uLnByaW9yaXR5IHN2ZyxcclxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXSAuYnV0dG9uLnByaW9yaXR5OmhvdmVyIHN2ZyB7XHJcbiAgZmlsbDogcmVkO1xyXG59XHJcblxyXG4uY2FyZFtkYXRhLXByaW9yaXR5PW1lZGl1bV0gLmJ1dHRvbi5kb25lIHN2ZyxcclxuLmNhcmQuaG92ZXJbZGF0YS1wcmlvcml0eT1tZWRpdW1dIC5idXR0b24uZG9uZSBzdmcsXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSAuYnV0dG9uLnByaW9yaXR5IHN2ZyxcclxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dIC5idXR0b24ucHJpb3JpdHk6aG92ZXIgc3ZnICAge1xyXG4gIGZpbGw6IG9yYW5nZTtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddIC5idXR0b24uZG9uZSBzdmcsXHJcbi5jYXJkLmhvdmVyW2RhdGEtcHJpb3JpdHk9bG93XSAuYnV0dG9uLmRvbmUgc3ZnLFxyXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10gLmJ1dHRvbi5wcmlvcml0eSBzdmcsXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bG93XSAuYnV0dG9uLnByaW9yaXR5OmhvdmVyIHN2ZyAgIHtcclxuICBmaWxsOiBncmVlbjtcclxufVxyXG5cclxuLmNhcmQuaG92ZXIgLmJ1dHRvbjpob3ZlciBzdmcge1xyXG4gIGZpbGw6IGhzbCgwLCAwJSwgNTAlKTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogQ2FyZCBBbmltYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5tb3ZpbmctZG93biB7XHJcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIHJldmVyc2UgZm9yd2FyZHMgY2FyZC1tb3ZlLWRvd247XHJcbn1cclxuXHJcbi5tb3ZpbmctdXAge1xyXG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSByZXZlcnNlIGZvcndhcmRzIGNhcmQtbW92ZS11cDtcclxufVxyXG5cclxuLmZvY3VzLWluIHtcclxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgY2FyZC1mb2N1cztcclxufVxyXG5cclxuLmZvY3VzLW91dCB7XHJcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIHJldmVyc2UgZm9yd2FyZHMgY2FyZC1mb2N1cztcclxufVxyXG5cclxuLmZhZGUtaW4ge1xyXG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBjYXJkLWZhZGUtaW47XHJcbn1cclxuXHJcbi5mYWRlLW91dCB7XHJcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIGNhcmQtZmFkZS1vdXQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItc2hyaW5raW5nIHtcclxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgc2hyaW5rLWNvbnRhaW5lcjsgIFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcmQtbW92ZS1kb3duIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC41cmVtKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS1tb3ZlLWRvd24tZGlzdGFuY2UpKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2FyZC1tb3ZlLXVwIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLW1vdmUtdXAtZGlzdGFuY2UpKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2FyZC1mb2N1cyB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tbW92ZS1YLWRpc3RhbmNlKSkgdHJhbnNsYXRlWSh2YXIoLS1tb3ZlLXVwLWRpc3RhbmNlKSkgc2NhbGUodmFyKC0tc2NhbGUtWCksIDAuNik7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSwgMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjYXJkLWZhZGUtaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcmQtZmFkZS1vdXQge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNocmluay1jb250YWluZXIge1xyXG4gIGZyb20ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tbW92ZS11cC1kaXN0YW5jZSkgKyA1cHgpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIENhcmQgRHJvcGRvd25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGModmFyKC0tZHJvcGRvd24tdG9wKSArIHZhcigtLWJ1dHRvbi13aWR0aCkgLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XHJcbiAgbGVmdDogY2FsYyh2YXIoLS1kcm9wZG93bi1sZWZ0KSAtIHZhcigtLXNpZGViYXItd2lkdGgpKTtcclxuICBwYWRkaW5nOiAwLjEyNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggbGlnaHRncmV5LCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzOyAgXHJcbn1cclxuXHJcbi5zaWRlYmFyLWhpZGRlbiAuZHJvcGRvd24ge1xyXG4gIGxlZnQ6IGNhbGModmFyKC0tZHJvcGRvd24tbGVmdCkpO1xyXG59XHJcblxyXG4uZHJvcGRvd24udmlzaWJpbGl0eS1oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzOyAgXHJcbn1cclxuXHJcbi5kcm9wZG93biB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC4xcmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24gbGFiZWwge1xyXG4gIHBhZGRpbmc6IDAuMTI1cmVtIDAuMjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxuLmRyb3Bkb3duIGxhYmVsOmhvdmVyLFxyXG4uZHJvcGRvd24gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyICB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMi1ob3Zlcik7XHJcbn1cclxuXHJcbi5kcm9wZG93biBsYWJlbDphY3RpdmUsXHJcbi5kcm9wZG93biBpbnB1dDpjaGVja2VkICsgbGFiZWwsXHJcbi5kcm9wZG93biBpbnB1dDpjaGVja2VkICsgbGFiZWw6YWN0aXZlICB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xyXG59XHJcblxyXG4uZHJvcGRvd24ubGlzdCBpbnB1dCxcclxuLmRyb3Bkb3duLnByaW9yaXR5IGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24gbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjFyZW07XHJcbn1cclxuXHJcbi5kcm9wZG93biBsYWJlbFtmb3I9cHJpb3JpdHlIaWdoXSBzdmd7XHJcbiAgZmlsbDogcmVkO1xyXG59XHJcblxyXG4uZHJvcGRvd24gbGFiZWxbZm9yPXByaW9yaXR5TWVkaXVtXSBzdmd7XHJcbiAgZmlsbDogb3JhbmdlO1xyXG59XHJcblxyXG4uZHJvcGRvd24gbGFiZWxbZm9yPXByaW9yaXR5TG93XSBzdmd7XHJcbiAgZmlsbDogZ3JlZW47XHJcbn1cclxuXHJcbi5kcm9wZG93biBzdmd7XHJcbiAgZmlsbDogaHNsKDAsIDAlLCA3NSUpO1xyXG59XHJcblxyXG4uZHJvcGRvd24gc3ZnIHtcclxuICBoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5kcm9wZG93biBwIHtcclxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLmR1ZWRhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLmR1ZWRhdGUgcCB7XHJcbiAgbWFyZ2luOiAwIDAuMXJlbTtcclxufVxyXG5cclxuLmRyb3Bkb3duLmR1ZWRhdGUgaW5wdXQge1xyXG4gIHdpZHRoOiA2LjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuMTI1cmVtIDAuMjVyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xyXG4gIGNvbG9yOiBoc2woMCwgMCUsIDI1JSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24uZHVlZGF0ZSBpbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNkcm9wZG93bk92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XHJcbn1cclxuXHJcbiNkcm9wZG93bk92ZXJsYXkudmlzaWJpbGl0eS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIENhcmQgT3ZlcmxheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4jZm9jdXNlZENhcmRPdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjI1KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xyXG59XHJcblxyXG4jZm9jdXNlZENhcmRPdmVybGF5LnZpc2liaWxpdHktaGlkZGVuIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcclxufVxyXG5cclxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY2FyZC5mb2N1c2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcclxuICB1c2VyLXNlbGVjdDogYXV0bztcclxufVxyXG5cclxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAuY2FyZCAuYnV0dG9uIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jZm9jdXNlZENhcmRPdmVybGF5IC5zdWJtaXQtY29udGFpbmVyIHtcclxuICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLnN1Ym1pdC1jb250YWluZXIgLmJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xyXG4gIGNvbG9yOiBkaW1ncmV5O1xyXG59XHJcblxyXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xyXG59XHJcblxyXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWw6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWFjdGl2ZSk7XHJcbn1cclxuXHJcbiNidXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbiNidXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1ob3Zlcik7XHJcbn1cclxuXHJcbiNidXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdDphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcclxufVxyXG5cclxuI2lucHV0VGFza1RpdGxlLFxyXG4jaW5wdXRUYXNrRGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbiNpbnB1dFRhc2tUaXRsZTpmb2N1cyxcclxuI2lucHV0VGFza0Rlc2NyaXB0aW9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWhvdmVyKTtcclxufVxyXG5cclxuI2lucHV0VGFza1RpdGxlIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4jaW5wdXRUYXNrRGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHJlc2l6ZTogbm9uZTsgIFxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpICogMC41KTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogTG9hZCBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiNsb2FkT3ZlcmxheSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4yNXMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjM1cztcclxufVxyXG5cclxuLnByZWxvYWQgKiB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtby10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIExvZ2luIE92ZXJsYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmxvZ2luLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzOyAgXHJcbn1cclxuXHJcbi5sb2dpbi1vdmVybGF5LnZpc2liaWxpdHktaGlkZGVuIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1czsgIFxyXG59XHJcblxyXG4ubG9naW4tb3ZlcmxheSBoMSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB0cmFuc2l0aW9uOiBcclxuICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXHJcbiAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXHJcbiAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXHJcbiAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ubG9naW4tb3ZlcmxheSAuZm9ybSB7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4ubG9naW4tb3ZlcmxheSAuZm9ybSBpbnB1dCB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luLW92ZXJsYXkgYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGhzbGEoMCwgMCUsIDAlLCAwLjI1MCk7XHJcbn1cclxuXHJcbi5sb2dpbi1vdmVybGF5IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1ob3Zlcik7XHJcbn1cclxuXHJcbi5sb2dpbi1vdmVybGF5IGJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcclxufVxyXG5cclxuLmxvZ2luLW92ZXJsYXkgLmZvcm0tZXJyb3Ige1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ2luLW92ZXJsYXktYm90dG9tIHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ubG9naW4tb3ZlcmxheSAubmV3LWFjY291bnQtYnRuIHtcclxuICB3aWR0aDogMTVyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1vdmVybGF5IGJ1dHRvbi5sb2FkaW5nLFxyXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQubG9hZGluZyB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgOTBkZWcsXHJcbiAgICByZ2IoODQsIDE4NiwgMTg1KSAwJSwgXHJcbiAgICByZ2IoODQsIDE4NiwgMTg1KSAyNSUsIFxyXG4gICAgaHNsKDE3OSwgNDMlLCA2NSUpIDUwJSwgXHJcbiAgICByZ2IoODQsIDE4NiwgMTg1KSA3NSUsIFxyXG4gICAgcmdiKDg0LCAxODYsIDE4NSkgMTAwJSk7IFxyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcclxuICBhbmltYXRpb246IGxvYWRpbmcgMC41cyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcyBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZyB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsMEJBQTBCO0VBQzFCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLHVEQUF1RDtBQUN2RCx1REFBdUQ7QUFDdkQsdURBQXVEOztBQUV2RDtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBLHVEQUF1RDtB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QUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkI7Ozs7OzsyQkFNeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtFQUFrRTtBQUNwRTs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZmYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jb2xvci0xOiB3aGl0ZTtcXHJcXG4gIC0tY29sb3ItMS1ob3ZlcjogaHNsKDAsIDAlLCA5NyUpO1xcclxcbiAgLS1jb2xvci0xLWFjdGl2ZTogaHNsKDAsIDAlLCA5NCUpOztcXHJcXG4gIC0tY29sb3ItMjogaHNsKDAsIDAlLCA5OCUpO1xcclxcbiAgLS1jb2xvci0yLWhvdmVyOiBoc2woMCwgMCUsIDk1JSk7XFxyXFxuICAtLWNvbG9yLTItYWN0aXZlOiBoc2woMCwgMCUsIDkyJSk7XFxyXFxuICAtLWNvbG9yLTM6IHJnYigxNTgsIDIxMCwgMTk4KTtcXHJcXG4gIC0tY29sb3ItMy1ob3ZlcjogaHNsKDE2NiwgMzclLCA2OSUpO1xcclxcbiAgLS1jb2xvci0zLWFjdGl2ZTogaHNsKDE2NiwgMzclLCA2NiUpO1xcclxcbiAgLS1jb2xvci0zLXNlbGVjdGVkOiBoc2woMTY2LCAzNyUsIDY3JSk7XFxyXFxuICAtLWNvbG9yLTQ6IHJnYig4NCwgMTg2LCAxODUpO1xcclxcbiAgLS1jb2xvci00LWhvdmVyOiBoc2woMTc5LCA0MyUsIDUwJSk7XFxyXFxuICAtLWNvbG9yLTQtYWN0aXZlOiBoc2woMTc5LCA0MyUsIDQ3JSk7XFxyXFxuICAtLWhlYWRlci1oZWlnaHQ6IDRyZW07XFxyXFxuICAtLXNpZGViYXItd2lkdGg6IDI1MHB4O1xcclxcbiAgLS1zY2FsZS1YOiAwLjU7XFxyXFxuICAtLW1vdmUtWC1kaXN0YW5jZTogMTExLjc4MTI1cHg7XFxyXFxuICAtLW1vdmUtdXAtZGlzdGFuY2U6IDExMS43ODEyNXB4O1xcclxcbiAgLS1tb3ZlLWRvd24tZGlzdGFuY2U6IDExMS43ODEyNXB4O1xcclxcbiAgLS1jYXJkLWdhcDogMXJlbTtcXHJcXG4gIC0tZHJvcGRvd24tdG9wOiAwO1xcclxcbiAgLS1kcm9wZG93bi1sZWZ0OiAwO1xcclxcbiAgLS1idXR0b24td2lkdGg6IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5LFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIFxcclxcbnAsIHVsLCBvbCwgbGksIGJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG51bCwgb2wsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcblxcclxcbi5zaXRlLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktbm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogei1pbmRleCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5sb2dpbi1vdmVybGF5IHtcXHJcXG4gIHotaW5kZXg6IDIwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24ge1xcclxcbiAgei1pbmRleDogMTEwMDE7XFxyXFxufVxcclxcblxcclxcbiNkcm9wZG93bk92ZXJsYXkge1xcclxcbiAgei1pbmRleDogMTEwMDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgei1pbmRleDogMTAwMDA7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIHotaW5kZXg6IDEwMDE7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyT3ZlcmxheSB7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9jdXNlZENhcmRPdmVybGF5IHtcXHJcXG4gIHotaW5kZXg6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJmbG93LWJvdHRvbSxcXHJcXG4ub3ZlcmZsb3ctdG9wIHtcXHJcXG4gIHotaW5kZXg6IDU7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogSGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAqIHtcXHJcXG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBoMXtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMC4zcmVtO1xcclxcbiAgcGFkZGluZzogMCA0LjVyZW0gMCAwLjI1cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgdHJhbnNpdGlvbjogXFxyXFxuICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXFxyXFxuICAgIHBhZGRpbmcgMC41cyBlYXNlIDBzLCBcXHJcXG4gICAgb3BhY2l0eSAwLjVzIGVhc2UgMHMsIFxcclxcbiAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAuaGVhZGVyIGgxe1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBcXHJcXG4gICAgICB3aWR0aCAwLjVzIGVhc2UgMHMsIFxcclxcbiAgICAgIHBhZGRpbmcgMC41cyBlYXNlIDBzLCBcXHJcXG4gICAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXFxyXFxuICAgICAgdmlzaWJpbGl0eSAwcyBlYXNlIDAuNXM7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYm94IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYm94IGlucHV0IHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxcmVtIDAgM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLnNlYXJjaC1ib3ggaW5wdXQge1xcclxcbiAgICBtYXJnaW46IDAuMjVyZW1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVye1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogZ3JleTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzICsgc3ZnIHtcXHJcXG4gIGZpbGw6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYm94IHN2ZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwLjc1cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjc1cmVtO1xcclxcbiAgZmlsbDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWFjdGl2ZSk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24gc3ZnIHtcXHJcXG4gIGhlaWdodDogMS43NXJlbTtcXHJcXG4gIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uU2lkZWJhciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uVXNlciB7XFxyXFxuICBtYXJnaW46IDAgMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmhlYWRlciAuYnV0dG9uLFxcclxcbiAgI2J1dHRvblNpZGViYXIsXFxyXFxuICAjYnV0dG9uVXNlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNidXR0b25Ob3RpZmljYXRpb24uc2VhcmNoQm94LWZvY3VzZWQsXFxyXFxuICAjYnV0dG9uU2V0dGluZ3Muc2VhcmNoQm94LWZvY3VzZWQsXFxyXFxuICAjYnV0dG9uVXNlci5zZWFyY2hCb3gtZm9jdXNlZCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNidXR0b25Vc2VyIGltZyB7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiBTaWRlYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG4gIG1hcmdpbi10b3A6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxyXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLnNpZGViYXItaGlkZGVuIHtcXHJcXG4gIGxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgcCB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMC43NXJlbSAwO1xcclxcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW0gMC4yNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXRpdGxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZTphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZSBoNCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXRpdGxlIC5idXR0b24ge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUgc3ZnIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogLTAuMDVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjpob3ZlciBzdmd7XFxyXFxuICBmaWxsOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjphY3RpdmUgc3Zne1xcclxcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBsaSB7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxyXFxuICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xcclxcbiAgZmlsbDogaHNsKDAsIDAlLCAyNSUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGxpOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgbGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1ob3Zlcik7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGxpLnNlbGVjdGVkLFxcclxcbi5zaWRlYmFyIGxpOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWFjdGl2ZSk7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGxpID4gc3ZnIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMC4xcmVtO1xcclxcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIE1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIG1pbi13aWR0aDogMDtcXHJcXG4gIG1hcmdpbi10b3A6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcclxcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMS4yNXJlbSAxcmVtO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjEwcHgsIDFmcikpO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heChhdXRvLCAxMDAlKTtcXHJcXG4gIGdhcDogMnJlbSAwLjI1cmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4uc2lkZWJhci1oaWRkZW4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyT3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAubWFpbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3NpZGViYXJPdmVybGF5IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgb3BhY2l0eTogMC4yNTtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2lkZWJhck92ZXJsYXkuc2lkZWJhci1oaWRkZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDcyMHB4OyAgXFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jYXJkcyBoMixcXHJcXG4uY2FyZHMgaDMge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMgaDMge1xcclxcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIuYWN0dWFsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IFxcclxcbiAgcGFkZGluZzogMCAwLjY1cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXHJcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqLyAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIuYWN0dWFsOjotd2Via2l0LXNjcm9sbGJhciB7IC8qIFdlYktpdCAqL1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIC5jb250YWluZXIub25nb2luZyxcXHJcXG4uY29udGFpbmVyLmNvbXBsZXRlZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lIHN2Zy5jaGVjayB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHN2Zy5jaGVjayB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIub25nb2luZyAuY2FyZCAuYnV0dG9uLmRvbmU6YWN0aXZlIHN2Zy5jaGVjayB7XFxyXFxuICBvcGFjaXR5OiAwLjU1O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmRvbmUgc3ZnLmNoZWNrIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIuY29tcGxldGVkIC5jYXJkIC5idXR0b24uZG9uZTpob3ZlciBzdmcuY2hlY2sge1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmRvbmU6YWN0aXZlIHN2Zy5jaGVjayB7XFxyXFxuICBvcGFjaXR5OiAwLjI1O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLmFkZCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogLTVweDtcXHJcXG4gIHBhZGRpbmc6IDAgMC42NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJmbG93LWJvdHRvbSxcXHJcXG4ub3ZlcmZsb3ctdG9wIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmZsb3ctYm90dG9tID4gZGl2LFxcclxcbi5vdmVyZmxvdy10b3AgPiBkaXZ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJmbG93LXRvcCA+IGRpdiB7XFxyXFxuICB0b3A6IGNhbGMoMXJlbSAtIDFweCk7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjE1KSAxMDAlKTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJmbG93LXRvcC5vdmVyZmxvd2luZyA+IGRpdiB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmZsb3ctYm90dG9tID4gZGl2IHtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMC4xNSkgMTAwJSk7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi5vdmVyZmxvdy1ib3R0b20ub3ZlcmZsb3dpbmcgPiBkaXYge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiBDYXJkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLmNhcmQuYWRkIGg0IHtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tdG9wOiB2YXIoLS1jYXJkLWdhcCk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbSAwLjE1cmVtIDAuNzVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyZXksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTsgIFxcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyBlYXNlIDBzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC5sb2FkaW5nIHtcXHJcXG4gIGhlaWdodDogOTFweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgOTBkZWcsXFxyXFxuICAgIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgXFxyXFxuICAgIHJnYigyNTUsIDI1NSwgMjU1KSAyNSUsIFxcclxcbiAgICBoc2woMCwgMCUsIDk3LjUlKSA1MCUsIFxcclxcbiAgICByZ2IoMjU1LCAyNTUsIDI1NSkgNzUlLCBcXHJcXG4gICAgcmdiKDI1NSwgMjU1LCAyNTUpMTAwJSk7IFxcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDAuNXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGhzbCgwLCAxMDAlLCA3NSUpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXS5mb2N1c2VkLFxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9aGlnaF0uaG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggcmVkLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGhzbCgzOSwgMTAwJSwgNzUlKSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXS5mb2N1c2VkLFxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXS5ob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBvcmFuZ2UsIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10ge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggaHNsKDEyMCwgNTAlLCA2NSUpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddLmZvY3VzZWQsXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddLmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGdyZWVuLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQuaG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaDQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAgXFxyXFxufVxcclxcblxcclxcbi5jYXJkIHAge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGg0LmNvbXBsZXRlZCxcXHJcXG4uY2FyZCBwLmNvbXBsZXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDc1JSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWJ1dHRvbi13aWR0aCk7XFxyXFxuICB3aWR0aDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMS4zNXJlbTsgIFxcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuYnV0dG9uIHAge1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5idXR0b24uY2xpY2tlZCBwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEtYWN0aXZlKTtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQuaG92ZXIgLmJ1dHRvbiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLmhvdmVyIC5idXR0b24uaG92ZXIsXFxyXFxuLmNhcmQuaG92ZXIgLmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQuaG92ZXIgLmJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1hY3RpdmUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuYnV0dG9uLmR1ZWRhdGUsXFxyXFxuLmNhcmQgLmJ1dHRvbi5saXN0IHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWluLXdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kdWVkYXRlIHAsXFxyXFxuLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmxpc3QgcCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDc1JSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5idXR0b24uZHVlZGF0ZSBwLFxcclxcbi5jYXJkIC5idXR0b24ubGlzdCBwIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5idXR0b24ucHJpb3JpdHkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5idXR0b24uZG9uZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC0wLjY1cmVtO1xcclxcbiAgbGVmdDogLTAuNjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuMzVyZW07XFxyXFxuICB3aWR0aDogMS4zNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHtcXHJcXG4gIHdpZHRoOiAxLjM1cmVtO1xcclxcbiAgcGFkZGluZzogMDsgIFxcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHN2ZyB7XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYnV0dG9uLXdpZHRoKSAqIDAuNjI1KTtcXHJcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuYnV0dG9uLmRvbmUgc3ZnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuYnV0dG9uLmRvbmUgc3ZnLFxcclxcbi5jYXJkLmhvdmVyIC5idXR0b24uZG9uZTpob3ZlciBzdmcge1xcclxcbiAgZmlsbDogdmFyKC0tY29sb3ItNCk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9aGlnaF0gLmJ1dHRvbi5kb25lIHN2ZyxcXHJcXG4uY2FyZC5ob3ZlcltkYXRhLXByaW9yaXR5PWhpZ2hdIC5idXR0b24uZG9uZSBzdmcsXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXSAuYnV0dG9uLnByaW9yaXR5IHN2ZyxcXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdIC5idXR0b24ucHJpb3JpdHk6aG92ZXIgc3ZnIHtcXHJcXG4gIGZpbGw6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dIC5idXR0b24uZG9uZSBzdmcsXFxyXFxuLmNhcmQuaG92ZXJbZGF0YS1wcmlvcml0eT1tZWRpdW1dIC5idXR0b24uZG9uZSBzdmcsXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dIC5idXR0b24ucHJpb3JpdHkgc3ZnLFxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSAuYnV0dG9uLnByaW9yaXR5OmhvdmVyIHN2ZyAgIHtcXHJcXG4gIGZpbGw6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddIC5idXR0b24uZG9uZSBzdmcsXFxyXFxuLmNhcmQuaG92ZXJbZGF0YS1wcmlvcml0eT1sb3ddIC5idXR0b24uZG9uZSBzdmcsXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddIC5idXR0b24ucHJpb3JpdHkgc3ZnLFxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bG93XSAuYnV0dG9uLnByaW9yaXR5OmhvdmVyIHN2ZyAgIHtcXHJcXG4gIGZpbGw6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC5ob3ZlciAuYnV0dG9uOmhvdmVyIHN2ZyB7XFxyXFxuICBmaWxsOiBoc2woMCwgMCUsIDUwJSk7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogQ2FyZCBBbmltYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5tb3ZpbmctZG93biB7XFxyXFxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgcmV2ZXJzZSBmb3J3YXJkcyBjYXJkLW1vdmUtZG93bjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmluZy11cCB7XFxyXFxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgcmV2ZXJzZSBmb3J3YXJkcyBjYXJkLW1vdmUtdXA7XFxyXFxufVxcclxcblxcclxcbi5mb2N1cy1pbiB7XFxyXFxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgY2FyZC1mb2N1cztcXHJcXG59XFxyXFxuXFxyXFxuLmZvY3VzLW91dCB7XFxyXFxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgcmV2ZXJzZSBmb3J3YXJkcyBjYXJkLWZvY3VzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZS1pbiB7XFxyXFxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgY2FyZC1mYWRlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZS1vdXQge1xcclxcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIGNhcmQtZmFkZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItc2hyaW5raW5nIHtcXHJcXG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBzaHJpbmstY29udGFpbmVyOyAgXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2FyZC1tb3ZlLWRvd24ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuNXJlbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLW1vdmUtZG93bi1kaXN0YW5jZSkpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNhcmQtbW92ZS11cCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tbW92ZS11cC1kaXN0YW5jZSkpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNhcmQtZm9jdXMge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS1tb3ZlLVgtZGlzdGFuY2UpKSB0cmFuc2xhdGVZKHZhcigtLW1vdmUtdXAtZGlzdGFuY2UpKSBzY2FsZSh2YXIoLS1zY2FsZS1YKSwgMC42KTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSwgMSk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2FyZC1mYWRlLWluIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNhcmQtZmFkZS1vdXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hyaW5rLWNvbnRhaW5lciB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tbW92ZS11cC1kaXN0YW5jZSkgKyA1cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIENhcmQgRHJvcGRvd25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uZHJvcGRvd24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiBjYWxjKHZhcigtLWRyb3Bkb3duLXRvcCkgKyB2YXIoLS1idXR0b24td2lkdGgpIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcclxcbiAgbGVmdDogY2FsYyh2YXIoLS1kcm9wZG93bi1sZWZ0KSAtIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXHJcXG4gIHBhZGRpbmc6IDAuMTI1cmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggbGlnaHRncmV5LCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7ICBcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaGlkZGVuIC5kcm9wZG93biB7XFxyXFxuICBsZWZ0OiBjYWxjKHZhcigtLWRyb3Bkb3duLWxlZnQpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLnZpc2liaWxpdHktaGlkZGVuIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1czsgIFxcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24gdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIGxhYmVsIHtcXHJcXG4gIHBhZGRpbmc6IDAuMTI1cmVtIDAuMjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24gbGFiZWw6aG92ZXIsXFxyXFxuLmRyb3Bkb3duIGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3ZlciAge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMi1ob3Zlcik7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biBsYWJlbDphY3RpdmUsXFxyXFxuLmRyb3Bkb3duIGlucHV0OmNoZWNrZWQgKyBsYWJlbCxcXHJcXG4uZHJvcGRvd24gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFjdGl2ZSAge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24ubGlzdCBpbnB1dCxcXHJcXG4uZHJvcGRvd24ucHJpb3JpdHkgaW5wdXQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIGxhYmVsW2Zvcj1wcmlvcml0eUhpZ2hdIHN2Z3tcXHJcXG4gIGZpbGw6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIGxhYmVsW2Zvcj1wcmlvcml0eU1lZGl1bV0gc3Zne1xcclxcbiAgZmlsbDogb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24gbGFiZWxbZm9yPXByaW9yaXR5TG93XSBzdmd7XFxyXFxuICBmaWxsOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIHN2Z3tcXHJcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIHN2ZyB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biBwIHtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLmR1ZWRhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi5kdWVkYXRlIHAge1xcclxcbiAgbWFyZ2luOiAwIDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLmR1ZWRhdGUgaW5wdXQge1xcclxcbiAgd2lkdGg6IDYuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjI1cmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcclxcbiAgY29sb3I6IGhzbCgwLCAwJSwgMjUlKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi5kdWVkYXRlIGlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNkcm9wZG93bk92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgZWFzZSAwcztcXHJcXG59XFxyXFxuXFxyXFxuI2Ryb3Bkb3duT3ZlcmxheS52aXNpYmlsaXR5LWhpZGRlbiB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogQ2FyZCBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNmb2N1c2VkQ2FyZE92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxyXFxufVxcclxcblxcclxcbiNmb2N1c2VkQ2FyZE92ZXJsYXkudmlzaWJpbGl0eS1oaWRkZW4ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9jdXNlZENhcmRPdmVybGF5IC53cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA5MDBweDtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC5mb2N1c2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tY29sb3ItNCksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbiAgdXNlci1zZWxlY3Q6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLmNhcmQgLmJ1dHRvbiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9jdXNlZENhcmRPdmVybGF5IC5zdWJtaXQtY29udGFpbmVyIHtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAuc3VibWl0LWNvbnRhaW5lciAuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbiNidXR0b25Gb2N1c2VkQ2FyZENhbmNlbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXHJcXG4gIGNvbG9yOiBkaW1ncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWw6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1ob3Zlcik7XFxyXFxufVxcclxcblxcclxcbiNidXR0b25Gb2N1c2VkQ2FyZENhbmNlbDphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1ob3Zlcik7XFxyXFxufVxcclxcblxcclxcbiNidXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdDphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXRUYXNrVGl0bGUsXFxyXFxuI2lucHV0VGFza0Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNpbnB1dFRhc2tUaXRsZTpmb2N1cyxcXHJcXG4jaW5wdXRUYXNrRGVzY3JpcHRpb246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1ob3Zlcik7XFxyXFxufVxcclxcblxcclxcbiNpbnB1dFRhc2tUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiNpbnB1dFRhc2tEZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIHJlc2l6ZTogbm9uZTsgIFxcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGhlaWdodDogNzVweDtcXHJcXG4gIG1heC1oZWlnaHQ6IGNhbGMoKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpICogMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiBMb2FkIE92ZXJsYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuI2xvYWRPdmVybGF5IHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZSAwLjI1cywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMzVzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlbG9hZCAqIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgLW8tdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIExvZ2luIE92ZXJsYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLmxvZ2luLW92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwczsgIFxcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tb3ZlcmxheS52aXNpYmlsaXR5LWhpZGRlbiB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7ICBcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLW92ZXJsYXkgaDEge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHRyYW5zaXRpb246IFxcclxcbiAgICB3aWR0aCAwLjVzIGVhc2UgMHMsIFxcclxcbiAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXFxyXFxuICAgIG9wYWNpdHkgMC41cyBlYXNlIDBzLCBcXHJcXG4gICAgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLW92ZXJsYXkgLmZvcm0ge1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1vdmVybGF5IC5mb3JtIGlucHV0IHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tb3ZlcmxheSBidXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggaHNsYSgwLCAwJSwgMCUsIDAuMjUwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLW92ZXJsYXkgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tb3ZlcmxheSBidXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLW92ZXJsYXkgLmZvcm0tZXJyb3Ige1xcclxcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tb3ZlcmxheS1ib3R0b20ge1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLW92ZXJsYXkgLm5ldy1hY2NvdW50LWJ0biB7XFxyXFxuICB3aWR0aDogMTVyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1vdmVybGF5IGJ1dHRvbi5sb2FkaW5nLFxcclxcbiNidXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdC5sb2FkaW5nIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICA5MGRlZyxcXHJcXG4gICAgcmdiKDg0LCAxODYsIDE4NSkgMCUsIFxcclxcbiAgICByZ2IoODQsIDE4NiwgMTg1KSAyNSUsIFxcclxcbiAgICBoc2woMTc5LCA0MyUsIDY1JSkgNTAlLCBcXHJcXG4gICAgcmdiKDg0LCAxODYsIDE4NSkgNzUlLCBcXHJcXG4gICAgcmdiKDg0LCAxODYsIDE4NSkgMTAwJSk7IFxcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDAuNXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHMgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xcclxcbiAgMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG4gIHZhciBkYXRlVGltZUZvcm1hdDtcbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvbW9ycm93XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvbW9ycm93P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvbW9ycm93P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b21vcnJvd1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA3IE9jdG9iZXIgMTQ6MDA6MDAgdG9tb3Jyb3c/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvbW9ycm93KG5ldyBEYXRlKDIwMTQsIDksIDcsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvbW9ycm93KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIGFkZERheXMoRGF0ZS5ub3coKSwgMSkpO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcclxuXHJcbmNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaWQsXHJcbiAgICB1c2VySWQsXHJcbiAgICBlbWFpbCxcclxuICAgIHRpdGxlLCBcclxuICAgIGRlc2NyaXB0aW9uLCBcclxuICAgIGlzQ29tcGxldGVkLFxyXG4gICAgaW5kZXgsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIGxpc3QsXHJcbiAgICBkdWVEYXRlLFxyXG4gICkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XHJcbiAgICB0aGlzLmVtYWlsID0gZW1haWw7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgdGhpcy5kdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUYXNrQ29tcGxldGlvbigpIHtcclxuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0aGlzLmlzQ29tcGxldGVkID8gZmFsc2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0VGFza1ByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzZXRUYXNrTGlzdChsaXN0KSB7XHJcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gIH1cclxuXHJcbiAgc2V0VGFza0R1ZURhdGUoZGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHRhc2tzID0gW1xyXG4gIC8vIG5ldyBUYXNrKFwiQnV5IGdyb2Nlcmllc1wiLCBcIkdldCBtaWxrLCBlZ2dzLCBicmVhZCwgYW5kIHZlZ2V0YWJsZXMgZnJvbSB0aGUgc3VwZXJtYXJrZXQuXCIsIERhdGUubm93KCkgLSA4NjQwMDAwMCksXHJcbiAgLy8gbmV3IFRhc2soXCJGaW5pc2ggcmVwb3J0IGZvciB3b3JrXCIsIFwiQ29tcGlsZSB0aGUgc2FsZXMgZGF0YSBhbmQgd3JpdGUgYSBzdW1tYXJ5IGZvciB0aGUgcXVhcnRlcmx5IHJlcG9ydC5cIiwgRGF0ZS5ub3coKSArIDEyMyksXHJcbiAgLy8gbmV3IFRhc2soXCJDYWxsIE1vbVwiLCBcIkNhdGNoIHVwIHdpdGggTW9tIGFuZCBjaGVjayBob3cgc2hlJ3MgZG9pbmcuXCIsIERhdGUubm93KCkgKyAxMTAyKSxcclxuICAvLyBuZXcgVGFzayhcIkdvIGZvciBhIGpvZ1wiLCBcIlJ1biBmb3IgMzAgbWludXRlcyBhcm91bmQgdGhlIHBhcmsgdG8gc3RheSBhY3RpdmUuXCIsIERhdGUubm93KCkgKyAyMzIzKSxcclxuICAvLyBuZXcgVGFzayhcIlJlYWQgYSBib29rXCIsIFwiU3RhcnQgcmVhZGluZyAnVGhlIEdyZWF0IEdhdHNieScgYnkgRi4gU2NvdHQgRml0emdlcmFsZC5cIiwgRGF0ZS5ub3coKSArIDQyNDIpLFxyXG4gIC8vIG5ldyBUYXNrKFwiQ2xlYW4gdGhlIGdhcmFnZVwiLCBcIk9yZ2FuaXplIGFuZCBkZWNsdXR0ZXIgdGhlIGdhcmFnZSBzcGFjZS5cIiwgRGF0ZS5ub3coKSArIDEyNTEyKSxcclxuICAvLyBuZXcgVGFzayhcIlBheSB1dGlsaXR5IGJpbGxzXCIsIFwiU2V0dGxlIGVsZWN0cmljaXR5LCB3YXRlciwgYW5kIGludGVybmV0IGJpbGxzIGZvciB0aGUgbW9udGguXCIsIERhdGUubm93KCkgKyA0MDAwMCksXHJcbiAgLy8gbmV3IFRhc2soXCJQbGFuIHdlZWtlbmQgdHJpcFwiLCBcIlJlc2VhcmNoIGRlc3RpbmF0aW9ucyBhbmQgY3JlYXRlIGFuIGl0aW5lcmFyeSBmb3IgdGhlIHdlZWtlbmQgZ2V0YXdheS5cIiwgRGF0ZS5ub3coKSArIDUxMjQzKSxcclxuICAvLyBuZXcgVGFzayhcIlVwZGF0ZSByZXN1bWVcIiwgXCJBZGQgcmVjZW50IHdvcmsgZXhwZXJpZW5jZXMgYW5kIHNraWxscyB0byB0aGUgcmVzdW1lLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDApLFxyXG4gIC8vIG5ldyBUYXNrKFwiUHJhY3RpY2UgZ3VpdGFyXCIsIFwiU3BlbmQgMSBob3VyIHByYWN0aWNpbmcgY2hvcmRzIGFuZCBzY2FsZXMgb24gdGhlIGd1aXRhci5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogMisgNTEyNSksXHJcbiAgLy8gbmV3IFRhc2soXCJPcmdhbml6ZSBkaWdpdGFsIGZpbGVzXCIsIFwiU29ydCBhbmQgYXJyYW5nZSBkb2N1bWVudHMgYW5kIHBob3RvcyBvbiB0aGUgY29tcHV0ZXIuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCAqIDMgKyAxMjA1MTIpLFxyXG4gIC8vIG5ldyBUYXNrKFwiV2F0ZXIgdGhlIHBsYW50c1wiLCBcIkdpdmUgdGhlIGluZG9vciBhbmQgb3V0ZG9vciBwbGFudHMgYSBnb29kIHdhdGVyaW5nLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiA0ICsgMTIwNTI0KSxcclxuICAvLyBuZXcgVGFzayhcIkF0dGVuZCB5b2dhIGNsYXNzXCIsIFwiSm9pbiB0aGUgZXZlbmluZyB5b2dhIHNlc3Npb24gYXQgdGhlIGxvY2FsIHN0dWRpby5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNCArIDEyMDUzNiksXHJcbiAgLy8gbmV3IFRhc2soXCJGaXggbGVha2luZyBmYXVjZXRcIiwgXCJDYWxsIHRoZSBwbHVtYmVyIG9yIGF0dGVtcHQgdG8gcmVwYWlyIHRoZSBmYXVjZXQgeW91cnNlbGYuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCAqIDUgKyAxMjA3MzgpLFxyXG4gIC8vIG5ldyBUYXNrKFwiV2F0Y2ggYSBkb2N1bWVudGFyeVwiLCBcIlBpY2sgYW4gaW50ZXJlc3RpbmcgZG9jdW1lbnRhcnkgYW5kIGxlYXJuIHNvbWV0aGluZyBuZXcuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCAqIDUgICsgMTIyNjI2KSxcclxuICAvLyBuZXcgVGFzayhcIlN0YXJ0IGxlYXJuaW5nIGEgbGFuZ3VhZ2VcIiwgXCJEb3dubG9hZCBsYW5ndWFnZSBsZWFybmluZyBhcHAgYW5kIGJlZ2luIHdpdGggYmFzaWMgcGhyYXNlcy5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNiksXHJcbl07XHJcblxyXG5jb25zdCBnZXRUYXNrcyA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgZmV0Y2goJ2h0dHBzOi8vdG9kby1saXN0LWJhY2tlbmQuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpJywge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ2F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbixcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0YXNrcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHJlc3BvbnNlLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgdGFza3MucHVzaChcclxuICAgICAgICAgICAgbmV3IFRhc2soXHJcbiAgICAgICAgICAgICAgZW50cnkuaWQsXHJcbiAgICAgICAgICAgICAgZW50cnkudXNlcklkLFxyXG4gICAgICAgICAgICAgIGVudHJ5LmVtYWlsLFxyXG4gICAgICAgICAgICAgIGVudHJ5LnRpdGxlLCBcclxuICAgICAgICAgICAgICBlbnRyeS5kZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgICAgICAgZW50cnkuaXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgICAgZW50cnkuaW5kZXgsXHJcbiAgICAgICAgICAgICAgZW50cnkucHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgZW50cnkubGlzdCxcclxuICAgICAgICAgICAgICBlbnRyeS5kdWVEYXRlLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXNvbHZlKHRhc2tzKTtcclxuICAgICAgfSk7XHJcbiAgfSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRhc2sgPSAoaW5kZXgpID0+IHtcclxuICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pbmRleCA9PSBpbmRleClbMF07XHJcbn1cclxuXHJcbmNvbnN0IGFkZFRhc2sgPSBhc3luYyAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCwgcHJpb3JpdHksIGxpc3QsIGVtYWlsLCBkdWVEYXRlLCBpc0NvbXBsZXRlZCwgdG9rZW4pID0+IHtcclxuICBjb25zdCBib2R5ID0ge1xyXG4gICAgdXNlcklkOiAnc3RyaW5nJyxcclxuICAgIHRpdGxlOiB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgIGlzQ29tcGxldGVkOiBpc0NvbXBsZXRlZCxcclxuICAgIGluZGV4OiBpbmRleCxcclxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcclxuICAgIGxpc3Q6IGxpc3QsXHJcbiAgICBlbWFpbDogZW1haWwsXHJcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly90b2RvLWxpc3QtYmFja2VuZC5henVyZXdlYnNpdGVzLm5ldC9hcGknLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdhdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW4sXHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZVRhc2sgPSBhc3luYyAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCwgcHJpb3JpdHksIGxpc3QsIGVtYWlsLCBkdWVEYXRlLCBpc0NvbXBsZXRlPWZhbHNlLCB0b2tlbikgPT4ge1xyXG4gIGNvbnN0IGlkID0gZ2V0VGFzayhpbmRleCkuaWQ7XHJcblxyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICB1c2VySWQ6ICdzdHJpbmcnLFxyXG4gICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgaXNDb21wbGV0ZWQ6IGlzQ29tcGxldGUsXHJcbiAgICBpbmRleDogaW5kZXgsXHJcbiAgICBwcmlvcml0eTogcHJpb3JpdHksXHJcbiAgICBsaXN0OiBsaXN0LFxyXG4gICAgZW1haWw6IGVtYWlsLFxyXG4gICAgZHVlRGF0ZTogZHVlRGF0ZSxcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vdG9kby1saXN0LWJhY2tlbmQuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdhdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW4sXHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVRhc2sgPSBhc3luYyAoaW5kZXgsIHRva2VuKSA9PiB7XHJcbiAgY29uc3QgaWQgPSBnZXRUYXNrKGluZGV4KS5pZDtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly90b2RvLWxpc3QtYmFja2VuZC5henVyZXdlYnNpdGVzLm5ldC9hcGkvJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnYXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuLFxyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KTtcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBkb2VzVGFza0V4aXN0ID0gKGluZGV4KSA9PiB7XHJcbiAgcmV0dXJuIHRhc2tzLnNvbWUodGFzayA9PiB0YXNrLmluZGV4ID09IGluZGV4KTtcclxufVxyXG5cclxuY29uc3QgbGlzdHMgPSBbXHJcbiAgJ0hvbWUnLFxyXG4gICdXb3JrJyxcclxuXTtcclxuXHJcbmNvbnN0IGdldExpc3RzID0gKCkgPT4gbGlzdHM7XHJcblxyXG4vLyBBUEkgVGVzdHNcclxuZXhwb3J0IHtcclxuICBnZXRUYXNrLFxyXG4gIGdldFRhc2tzLFxyXG4gIGFkZFRhc2ssXHJcbiAgdXBkYXRlVGFzayxcclxuICBkZWxldGVUYXNrLFxyXG4gIGRvZXNUYXNrRXhpc3QsXHJcbiAgZ2V0TGlzdHMsXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgKiBhcyB0b2RvbGlzdCBmcm9tICcuL3RvZG9saXN0LmpzJztcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5pbXBvcnQgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc1RvZGF5J1xyXG5pbXBvcnQgaXNUb21vcnJvdyBmcm9tICdkYXRlLWZucy9pc1RvbW9ycm93J1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbi8vIEhlYWRlciBFbGVtZW50cyBcclxuY29uc3QgYnV0dG9uU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25TaWRlYmFyJyk7XHJcbmNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCb3gnKTtcclxuY29uc3QgYnV0dG9uTm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbk5vdGlmaWNhdGlvbicpO1xyXG5jb25zdCBidXR0b25TZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25TZXR0aW5ncycpO1xyXG5jb25zdCBidXR0b25Vc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvblVzZXInKTtcclxuXHJcbi8vIENhcmQgRWxlbWVudHNcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbmNvbnN0IGZvY3VzZWRDYXJkT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb2N1c2VkQ2FyZE92ZXJsYXknKTtcclxuY29uc3QgZm9jdXNlZENhcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvY3VzZWRDYXJkT3ZlcmxheSA+IC53cmFwcGVyJyk7XHJcbmNvbnN0IGRyb3Bkb3duT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bk92ZXJsYXknKTtcclxuY29uc3QgZHJvcGRvd25EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLmR1ZWRhdGUnKTtcclxuY29uc3QgZHJvcGRvd25EdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZUlucHV0Jyk7XHJcbmNvbnN0IGRyb3Bkb3duTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi5saXN0Jyk7XHJcbmNvbnN0IGRyb3Bkb3duUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24ucHJpb3JpdHknKTtcclxuY29uc3QgZHJvcGRvd25Qcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlIaWdoJyk7XHJcbmNvbnN0IGRyb3Bkb3duUHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlNZWRpdW0nKTtcclxuY29uc3QgZHJvcGRvd25Qcmlvcml0eUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUxvdycpO1xyXG5jb25zdCBkcm9wZG93blByaW9yaXR5Tm9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eU5vbmUnKTtcclxuXHJcbi8vIEZvY3VzZWQgQ2FyZCBFbGVtZW50c1xyXG5jb25zdCBpbnB1dFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tUaXRsZScpO1xyXG5jb25zdCBpbnB1dFRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tEZXNjcmlwdGlvbicpO1xyXG5jb25zdCBidXR0b25Gb2N1c2VkQ2FyZER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uRm9jdXNlZENhcmREdWVEYXRlJyk7XHJcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Gb2N1c2VkQ2FyZExpc3QnKTtcclxuY29uc3QgYnV0dG9uRm9jdXNlZENhcmRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Gb2N1c2VkQ2FyZFByaW9yaXR5Jyk7XHJcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkRGVsZXRlJyk7XHJcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkU3VibWl0Jyk7XHJcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsJyk7XHJcbmNvbnN0IGZvY3VzZWRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvY3VzZWRDYXJkJyk7XHJcblxyXG4vLyBTaWRlIEJhciBFbGVtZW50c1xyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuY29uc3Qgc2lkZWJhck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhck92ZXJsYXknKTtcclxuY29uc3QgdG9kb3NUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2Rvc1RvZGF5Jyk7XHJcbmNvbnN0IHRvZG9zTmV4dDdEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9zTmV4dDdEYXlzJyk7XHJcbmNvbnN0IHRvZG9zQ2FsZW5kYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb3NDYWxlbmRhcicpO1xyXG5cclxuLy8gTG9naW4gU2NyZWVuXHJcbmNvbnN0IGxvZ2luU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLW92ZXJsYXknKVxyXG5jb25zdCBidXR0b25Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Mb2dpbicpO1xyXG5jb25zdCBidXR0b25TaWdudXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uU2lnbnVwJyk7XHJcbmNvbnN0IGJ1dHRvbkV4aXN0aW5nQWNjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25FeGlzdGluZ0FjY291bnQnKTtcclxuY29uc3QgYnV0dG9uTmV3QWNjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25OZXdBY2NvdW50Jyk7XHJcbmNvbnN0IGZvcm1Mb2dJbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLmxvZ2luJyk7XHJcbmNvbnN0IGZvcm1TaWduVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS5zaWdudXAnKTtcclxuY29uc3QgZm9ybUxvZ0luRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLmxvZ2luIC5mb3JtLWVycm9yJyk7XHJcbmNvbnN0IGZvcm1TaWduVXBFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uc2lnbnVwIC5mb3JtLWVycm9yJyk7XHJcbmNvbnN0IGlucHV0TG9nSW5FbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbkVtYWlsJyk7XHJcbmNvbnN0IGlucHV0TG9nSW5QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpblBhc3N3b3JkJyk7XHJcbmNvbnN0IGlucHV0U2lnblVwRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lnbnVwRW1haWwnKTtcclxuY29uc3QgaW5wdXRTaWduVXBQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWdudXBQYXNzd29yZCcpO1xyXG5sZXQgYXV0aFRva2VuID0gbnVsbDtcclxubGV0IGN1cnJlbnRMb2dnZWRVc2VyRW1haWwgPSBudWxsO1xyXG5cclxuLy8gT3RoZXIgVmFyaWFibGVzXHJcbmxldCB0b2Rvc1Nob3dNb2RlID0gXCJ0b2RheVwiO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLy8gQ2FyZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmNvbnN0IGdlbmVyYXRlVG9kb0xpc3QgPSAoKSA9PiB7XHJcbiAgcmVtb3ZlQ2FyZHNDb250YWluZXIoKTtcclxuXHJcbiAgaWYgKHRvZG9zU2hvd01vZGUgPT09IFwidG9kYXlcIikge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKGRhdGUpO1xyXG4gIH0gXHJcblxyXG4gIGVsc2UgaWYgKHRvZG9zU2hvd01vZGUgPT09IFwiNyBkYXlzXCIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBpKTtcclxuICAgICAgZ2VuZXJhdGVDYXJkc0NvbnRhaW5lcihkYXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICBcclxuICAvLyBlbHNlIGlmICh0b2Rvc1Nob3dNb2RlID09PSBcImNhbGVuZGFyXCIpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdDYWxlbmRhciBNb2RlIScpXHJcbiAgLy8gfVxyXG5cclxuICBmaWxsQ2FyZHNDb250YWluZXIoKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLmFjdHVhbCcpLmZvckVhY2goY29udGFpbmVyID0+IHtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVDYXJkc0NvbnRhaW5lck92ZXJmbG93R3JhZGllbnQpO1xyXG4gICAgdG9nZ2xlQ2FyZHNDb250YWluZXJPdmVyZmxvd0dyYWRpZW50KGNvbnRhaW5lcik7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVDYXJkc0NvbnRhaW5lciA9IChkYXRlKSA9PiB7XHJcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xyXG4gIFxyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBpZiAoaXNUb2RheShkYXRlKSkge1xyXG4gICAgaDIudGV4dENvbnRlbnQgPSAnVG9kYXknO1xyXG4gIH0gXHJcbiAgZWxzZSBpZiAoaXNUb21vcnJvdyhkYXRlKSkge1xyXG4gICAgaDIudGV4dENvbnRlbnQgPSAnVG9tb3Jyb3cnO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGgyLnRleHRDb250ZW50ID0gZm9ybWF0KGRhdGUsICdFRUVFJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaDMudGV4dENvbnRlbnQgPSBmb3JtYXQoZGF0ZSwgJ01NTU0gZCwgeScpO1xyXG5cclxuICBjb25zdCBvdmVyZmxvd1RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IG92ZXJmbG93VG9wSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvdmVyZmxvd1RvcC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy10b3AnKTtcclxuICBvdmVyZmxvd1RvcC5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuICBvdmVyZmxvd1RvcC5hcHBlbmRDaGlsZChvdmVyZmxvd1RvcElubmVyKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyQWN0dWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29udGFpbmVyT25nb2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvbnRhaW5lckNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lck9uZ29pbmcuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgY29udGFpbmVyT25nb2luZy5jbGFzc0xpc3QuYWRkKCdvbmdvaW5nJyk7XHJcbiAgY29udGFpbmVyT25nb2luZy5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuICBjb250YWluZXJDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgY29udGFpbmVyQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gIGNvbnRhaW5lckNvbXBsZXRlZC5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuICBjb250YWluZXJBY3R1YWwuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgY29udGFpbmVyQWN0dWFsLmNsYXNzTGlzdC5hZGQoJ2FjdHVhbCcpO1xyXG4gIGNvbnRhaW5lckFjdHVhbC5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuICBjb250YWluZXJBY3R1YWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyT25nb2luZyk7XHJcbiAgY29udGFpbmVyQWN0dWFsLmFwcGVuZENoaWxkKGNvbnRhaW5lckNvbXBsZXRlZCk7XHJcblxyXG4gIGNvbnN0IG92ZXJmbG93Qm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgb3ZlcmZsb3dCb3R0b21Jbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJmbG93Qm90dG9tLmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWJvdHRvbScpO1xyXG4gIG92ZXJmbG93Qm90dG9tLmRhdGFzZXQuZGF0ZSA9IGZvcm1hdChkYXRlLCAneXl5eS9NTS9kZCcpO1xyXG4gIG92ZXJmbG93Qm90dG9tLmFwcGVuZENoaWxkKG92ZXJmbG93Qm90dG9tSW5uZXIpO1xyXG5cclxuICBjb25zdCBjb250YWluZXJBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXJBZGQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgY29udGFpbmVyQWRkLmNsYXNzTGlzdC5hZGQoJ2FkZCcpO1xyXG4gIGNvbnRhaW5lckFkZC5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuXHJcbiAgY29uc3QgY2FyZEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRBZGQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gIGNhcmRBZGQuY2xhc3NMaXN0LmFkZCgnYWRkJyk7XHJcbiAgY2FyZEFkZC5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkRvbmUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uRG9uZS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcblxyXG4gIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uRG9uZS5hcHBlbmRDaGlsZChkdW1teSk7XHJcblxyXG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICBoNC50ZXh0Q29udGVudCA9ICdBZGQgdGFzay4uLic7XHJcblxyXG4gIGNhcmRBZGQuYXBwZW5kQ2hpbGQoYnV0dG9uRG9uZSk7XHJcbiAgY2FyZEFkZC5hcHBlbmRDaGlsZChoNCk7XHJcbiAgY2FyZEFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dGb2N1c2VkQ2FyZCk7XHJcbiAgY2FyZEFkZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJDYXJkKTtcclxuICBcclxuICBjb250YWluZXJBZGQuYXBwZW5kQ2hpbGQoY2FyZEFkZCk7XHJcbiAgXHJcbiAgY2FyZHMuYXBwZW5kQ2hpbGQoaDIpO1xyXG4gIGNhcmRzLmFwcGVuZENoaWxkKGgzKTtcclxuICBjYXJkcy5hcHBlbmRDaGlsZChvdmVyZmxvd1RvcCk7XHJcbiAgY2FyZHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyQWN0dWFsKTtcclxuICBjYXJkcy5hcHBlbmRDaGlsZChvdmVyZmxvd0JvdHRvbSk7XHJcbiAgY2FyZHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyQWRkKTtcclxuXHJcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkcyk7XHJcbiAgXHJcbiAgZHVtbXkub3V0ZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+cGx1cy1jaXJjbGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEzLDdIMTFWMTFIN1YxM0gxMVYxN0gxM1YxM0gxN1YxMUgxM1Y3WlwiIC8+PC9zdmc+YFxyXG59XHJcblxyXG5jb25zdCByZW1vdmVDYXJkc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBjYXJkc0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHMnKVxyXG4gIGNhcmRzQ29udGFpbmVycy5mb3JFYWNoKGNhcmRzQ29udGFpbmVyID0+IGNhcmRzQ29udGFpbmVyLnJlbW92ZSgpKTtcclxufVxyXG5cclxuY29uc3QgZmlsbENhcmRzQ29udGFpbmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIHNob3dMb2FkaW5nQ2FyZCgpO1xyXG4gIGNvbnN0IHRhc2tzID0gYXdhaXQgdG9kb2xpc3QuZ2V0VGFza3MoYXV0aFRva2VuKTtcclxuICB0YXNrcy5mb3JFYWNoKGdlbmVyYXRlQ2FyZCk7XHJcbiAgaGlkZUxvYWRpbmdDYXJkKCk7XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFyQ2FyZHNDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FyZHNBY3R1YWxDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNhcmRzIC5jb250YWluZXIuYWN0dWFsYCk7XHJcblxyXG4gIGNhcmRzQWN0dWFsQ29udGFpbmVycy5mb3JFYWNoKGNhcmRzQWN0dWFsQ29udGFpbmVyID0+IHtcclxuICAgIGNhcmRzQWN0dWFsQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgIHdoaWxlIChjaGlsZC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQucmVtb3ZlQ2hpbGQoY2hpbGQuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHJlZ2VuZXJhdGVDYXJkc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICBjbGVhckNhcmRzQ29udGFpbmVyKCk7XHJcbiAgZmlsbENhcmRzQ29udGFpbmVyKCk7XHJcbiAgaW5pdGlhbGl6ZUNhcmRzQ29udGFpbmVyT3ZlcmZsb3dHcmFkaWVudCgpO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsaXplQ2FyZHNDb250YWluZXJPdmVyZmxvd0dyYWRpZW50ID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXIuYWN0dWFsJykuZm9yRWFjaChjb250YWluZXIgPT4ge1xyXG4gICAgdG9nZ2xlQ2FyZHNDb250YWluZXJPdmVyZmxvd0dyYWRpZW50KGNvbnRhaW5lcilcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQ2FyZHNDb250YWluZXJPdmVyZmxvd0dyYWRpZW50ID0gKGUpID0+IHtcclxuICAvLyBVc2UgZSBpZiBjb250YWluZXIgaXMgcGFzc2VkIGluc3RlYWQgb2Ygc2Nyb2xsIGV2ZW50XHJcbiAgY29uc3QgY29udGFpbmVyQWN0dWFsID0gZS5jdXJyZW50VGFyZ2V0ID8gZS5jdXJyZW50VGFyZ2V0IDogZTtcclxuXHJcbiAgY29uc3Qgb3ZlcmZsb3dUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAub3ZlcmZsb3ctdG9wW2RhdGEtZGF0ZT1cIiR7Y29udGFpbmVyQWN0dWFsLmRhdGFzZXQuZGF0ZX1cIl1gKTtcclxuICBjb25zdCBvdmVyZmxvd0JvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5vdmVyZmxvdy1ib3R0b21bZGF0YS1kYXRlPVwiJHtjb250YWluZXJBY3R1YWwuZGF0YXNldC5kYXRlfVwiXWApO1xyXG4gIGxldCBzY3JvbGxUb3AgPSBjb250YWluZXJBY3R1YWwuc2Nyb2xsVG9wO1xyXG4gIGxldCBzY3JvbGxCb3R0b20gPSBjb250YWluZXJBY3R1YWwuc2Nyb2xsSGVpZ2h0IC0gXHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFjdHVhbC5zY3JvbGxUb3AgLSBcclxuICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWN0dWFsLmNsaWVudEhlaWdodDtcclxuXHJcbiAgaWYgKHNjcm9sbFRvcCA+IDApIHtcclxuICAgIHNjcm9sbFRvcCA9ICBzY3JvbGxUb3AgPiAxNiA/IDE2IDogc2Nyb2xsVG9wO1xyXG4gICAgY29udGFpbmVyQWN0dWFsLnN0eWxlLm1hcmdpblRvcCA9IGAke3Njcm9sbFRvcH1weGA7XHJcbiAgICBvdmVyZmxvd1RvcC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvd2luZycpO1xyXG4gIH1cclxuICBlbHNlIGlmIChzY3JvbGxUb3AgPT09IDApIHtcclxuICAgIG92ZXJmbG93VG9wLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93aW5nJyk7XHJcbiAgICBjb250YWluZXJBY3R1YWwuc3R5bGUubWFyZ2luVG9wID0gYDBweGA7XHJcbiAgfVxyXG5cclxuICBpZiAoc2Nyb2xsQm90dG9tID49IDEpIHtcclxuICAgIG92ZXJmbG93Qm90dG9tLmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93aW5nJyk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHNjcm9sbEJvdHRvbSA8IDEpIHtcclxuICAgIG92ZXJmbG93Qm90dG9tLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93aW5nJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDYXJkSW5kZXgoZSkge1xyXG4gIGxldCBjYXJkSW5kZXg7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpXHJcbiAgICAuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgaWYgKGNhcmQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgY2FyZEluZGV4ID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIHJldHVybiBjYXJkSW5kZXg7XHJcbn1cclxuXHJcbmNvbnN0IGNhcmRDb29yZGluYXRlcyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgY2FyZHMgPSBbXTtcclxuXHJcbiAgY29uc3Qgc2V0QmVmb3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudENhcmRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXI6bm90KC5hZGQpIC5jYXJkJyldO1xyXG4gICAgY2FyZHMucHVzaCguLi5jdXJyZW50Q2FyZHMubWFwKGNhcmQgPT4gKHtcclxuICAgICAgaW5kZXg6IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyksXHJcbiAgICAgIGJlZm9yZTogY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgIH0pKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRBZnRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRDYXJkcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyOm5vdCguYWRkKSAuY2FyZCcpXTtcclxuICAgIGN1cnJlbnRDYXJkcy5mb3JFYWNoKGN1cnJlbnRDYXJkID0+IHtcclxuICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudENhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykgPT09IGNhcmQuaW5kZXgpIHtcclxuICAgICAgICAgIGNhcmQuYWZ0ZXIgPSBjdXJyZW50Q2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENhcmQgPSAoY2FyZEluZGV4KSA9PiB7XHJcbiAgICBsZXQgbWF0Y2hpbmdDYXJkO1xyXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgaWYgKGNhcmQuaW5kZXggPT09IGNhcmRJbmRleCkge1xyXG4gICAgICAgIG1hdGNoaW5nQ2FyZCA9IGNhcmQ7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWF0Y2hpbmdDYXJkO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJDYXJkcyA9ICgpID0+IHtcclxuICAgIGNhcmRzLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2V0QmVmb3JlLFxyXG4gICAgc2V0QWZ0ZXIsXHJcbiAgICBnZXRDYXJkLFxyXG4gICAgY2xlYXJDYXJkcyxcclxuICB9XHJcbn0pKClcclxuXHJcbmNvbnN0IGNvbXBsZXRlQ2FyZCA9IGFzeW5jKGUpID0+IHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNvbnN0IGluZGV4ID0gZ2V0Q2FyZEluZGV4KGUpO1xyXG4gIGNvbnN0IHRhc2sgPSB0b2RvbGlzdC5nZXRUYXNrKGluZGV4KTtcclxuXHJcbiAgY2FyZENvb3JkaW5hdGVzLnNldEJlZm9yZSgpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IHRhc2sudGl0bGU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcclxuICBjb25zdCBsaXN0ID0gdGFzay5saXN0O1xyXG4gIGNvbnN0IGR1ZURhdGUgPSB0YXNrLmR1ZURhdGU7XHJcbiAgY29uc3QgZW1haWwgPSB0YXNrLmVtYWlsO1xyXG5cclxuICB0YXNrLnRvZ2dsZVRhc2tDb21wbGV0aW9uKCk7XHJcblxyXG4gIGF3YWl0IHRvZG9saXN0LnVwZGF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCwgcHJpb3JpdHksIGxpc3QsIGVtYWlsLCBkdWVEYXRlLCB0YXNrLmlzQ29tcGxldGVkLCBhdXRoVG9rZW4pO1xyXG5cclxuICByZWdlbmVyYXRlQ2FyZHNDb250YWluZXIoKTtcclxuXHJcbiAgY2FyZENvb3JkaW5hdGVzLnNldEFmdGVyKCk7XHJcbiAgYW5pbWF0ZUNvbXBsZXRlQ2FyZChpbmRleCk7XHJcbiAgY2FyZENvb3JkaW5hdGVzLmNsZWFyQ2FyZHMoKTtcclxufVxyXG5cclxuY29uc3QgYW5pbWF0ZUNvbXBsZXRlQ2FyZCA9IChjYXJkSW5kZXgpID0+IHtcclxuICBjb25zdCBtb3ZpbmdDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7Y2FyZEluZGV4fVwiXWApOyBcclxuICBjb25zdCBkb3duRGlzdGFuY2UgPSBcclxuICAgIGNhcmRDb29yZGluYXRlcy5nZXRDYXJkKGNhcmRJbmRleCkuYmVmb3JlLnRvcCAtIFxyXG4gICAgY2FyZENvb3JkaW5hdGVzLmdldENhcmQoY2FyZEluZGV4KS5hZnRlci50b3A7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLWRvd24tZGlzdGFuY2UnLCBgJHtkb3duRGlzdGFuY2V9cHhgKTsgIFxyXG4gIG1vdmluZ0NhcmQuY2xhc3NMaXN0LmFkZCgnbW92aW5nLWRvd24nKTtcclxuICBtb3ZpbmdDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PiB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbW92aW5nLWRvd24nKSAgICAgIFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvdGhlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNvbnRhaW5lcjpub3QoLmFkZCkgLmNhcmQ6bm90KFtkYXRhLWluZGV4PVwiJHtjYXJkSW5kZXh9XCJdKWApO1xyXG4gIG90aGVyQ2FyZHMuZm9yRWFjaChvdGhlckNhcmQgPT4ge1xyXG4gICAgY29uc3QgdXBEaXN0YW5jZSA9IFxyXG4gICAgICBjYXJkQ29vcmRpbmF0ZXMuZ2V0Q2FyZChvdGhlckNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpLmJlZm9yZS50b3AgLSBcclxuICAgICAgY2FyZENvb3JkaW5hdGVzLmdldENhcmQob3RoZXJDYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKS5hZnRlci50b3A7XHJcbiAgICBpZiAodXBEaXN0YW5jZSA9PT0gMCkgcmV0dXJuO1xyXG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLXVwLWRpc3RhbmNlJywgYCR7dXBEaXN0YW5jZX1weGApO1xyXG4gICAgb3RoZXJDYXJkLmNsYXNzTGlzdC5hZGQoJ21vdmluZy11cCcpO1xyXG4gICAgb3RoZXJDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PiB7XHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZpbmctdXAnKSAgICAgIFxyXG4gICAgfSk7XHJcbiAgfSk7ICBcclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVDYXJkID0gKHRhc2spID0+IHtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xyXG4gIGxldCBkdWVEYXRlID0gdGFzay5kdWVEYXRlO1xyXG5cclxuICAvLyBGb3Igb3ZlcmR1ZSB0YXNrc1xyXG4gIGlmIChkdWVEYXRlIDwgdG9kYXkpIHtcclxuICAgIGR1ZURhdGUgPSB0b2RheTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhcmRzT25nb2luZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkcyAuY29udGFpbmVyLm9uZ29pbmdbZGF0YS1kYXRlPVwiJHtmb3JtYXQoZHVlRGF0ZSwgJ3l5eXkvTU0vZGQnKX1cIl1gKTtcclxuICBjb25zdCBjYXJkc0NvbXBsZXRlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkcyAuY29udGFpbmVyLmNvbXBsZXRlZFtkYXRhLWRhdGU9XCIke2Zvcm1hdChkdWVEYXRlLCAneXl5eS9NTS9kZCcpfVwiXWApO1xyXG5cclxuICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIGNvbnRhaW5lciBmb3IgdGhlIGN1cnJlbnQgdGFzayB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIGR1ZSBkYXRlXHJcbiAgaWYgKCFjYXJkc09uZ29pbmdDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gIGNhcmQuZGF0YXNldC5pbmRleCA9IHRhc2suaW5kZXg7XHJcbiAgY2FyZC5kYXRhc2V0LnByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcclxuICBjYXJkLmRhdGFzZXQubGlzdCA9IHRhc2subGlzdDtcclxuICBjYXJkLmRhdGFzZXQuZHVlRGF0ZSA9IHRhc2suZHVlRGF0ZTtcclxuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0ZvY3VzZWRDYXJkKTtcclxuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlckNhcmQpO1xyXG5cclxuICBjb25zdCBidXR0b25Eb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uRG9uZS5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICBidXR0b25Eb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuICBidXR0b25Eb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tcGxldGVDYXJkKTsgXHJcblxyXG4gIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZHVtbXkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uRG9uZS5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgYnV0dG9uRG9uZS5hcHBlbmRDaGlsZChkdW1teTIpO1xyXG4gIFxyXG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICBoNC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuXHJcbiAgaWYgKHRhc2suaXNDb21wbGV0ZWQpIHtcclxuICAgIGg0LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpOyAgXHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpOyAgICBcclxuICAgIGR1bW15Lm91dGVySFRNTCA9IGA8c3ZnIHN0eWxlPVwiXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2lyY2xlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMjBBOCw4IDAgMCwxIDQsMTJBOCw4IDAgMCwxIDEyLDRBOCw4IDAgMCwxIDIwLDEyQTgsOCAwIDAsMSAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPmA7XHJcbiAgICBkdW1teTIub3V0ZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJjaGVja1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNoZWNrLWNpcmNsZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMiAyMEM3LjU5IDIwIDQgMTYuNDEgNCAxMlM3LjU5IDQgMTIgNCAyMCA3LjU5IDIwIDEyIDE2LjQxIDIwIDEyIDIwTTE2LjU5IDcuNThMMTAgMTQuMTdMNy40MSAxMS41OUw2IDEzTDEwIDE3TDE4IDlMMTYuNTkgNy41OFpcIiAvPjwvc3ZnPmA7XHJcbiAgfVxyXG4gIGVsc2UgeyAgIFxyXG4gICAgaDQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7ICBcclxuICAgIHAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7ICAgIFxyXG4gICAgZHVtbXkub3V0ZXJIVE1MID0gYDxzdmcgc3R5bGU9XCJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jaXJjbGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMiwyMEE4LDggMCAwLDEgNCwxMkE4LDggMCAwLDEgMTIsNEE4LDggMCAwLDEgMjAsMTJBOCw4IDAgMCwxIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+YDtcclxuICAgIGR1bW15Mi5vdXRlckhUTUwgPSBgPHN2ZyBjbGFzcz1cImNoZWNrXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2hlY2stY2lyY2xlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEyIDIwQzcuNTkgMjAgNCAxNi40MSA0IDEyUzcuNTkgNCAxMiA0IDIwIDcuNTkgMjAgMTIgMTYuNDEgMjAgMTIgMjBNMTYuNTkgNy41OEwxMCAxNC4xN0w3LjQxIDExLjU5TDYgMTNMMTAgMTdMMTggOUwxNi41OSA3LjU4WlwiIC8+PC9zdmc+YDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbnNFdGMgPSBbXHJcbiAgICB7Y2xhc3M6ICdkdWVkYXRlJywgc3ZnOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci1jbG9jazwvdGl0bGU+PHBhdGggZD1cIk0xNSwxM0gxNi41VjE1LjgyTDE4Ljk0LDE3LjIzTDE4LjE5LDE4LjUzTDE1LDE2LjY5VjEzTTE5LDhINVYxOUg5LjY3QzkuMjQsMTguMDkgOSwxNy4wNyA5LDE2QTcsNyAwIDAsMSAxNiw5QzE3LjA3LDkgMTguMDksOS4yNCAxOSw5LjY3VjhNNSwyMUMzLjg5LDIxIDMsMjAuMSAzLDE5VjVDMywzLjg5IDMuODksMyA1LDNINlYxSDhWM0gxNlYxSDE4VjNIMTlBMiwyIDAgMCwxIDIxLDVWMTEuMUMyMi4yNCwxMi4zNiAyMywxNC4wOSAyMywxNkE3LDcgMCAwLDEgMTYsMjNDMTQuMDksMjMgMTIuMzYsMjIuMjQgMTEuMSwyMUg1TTE2LDExLjE1QTQuODUsNC44NSAwIDAsMCAxMS4xNSwxNkMxMS4xNSwxOC42OCAxMy4zMiwyMC44NSAxNiwyMC44NUE0Ljg1LDQuODUgMCAwLDAgMjAuODUsMTZDMjAuODUsMTMuMzIgMTguNjgsMTEuMTUgMTYsMTEuMTVaXCIgLz48L3N2Zz5gfSxcclxuICAgIHtjbGFzczogJ2xpc3QnLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmZvbGRlci1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTIwLDE4SDRWOEgyME0yMCw2SDEyTDEwLDRINEMyLjg5LDQgMiw0Ljg5IDIsNlYxOEEyLDIgMCAwLDAgNCwyMEgyMEEyLDIgMCAwLDAgMjIsMThWOEMyMiw2Ljg5IDIxLjEsNiAyMCw2WlwiIC8+PC9zdmc+YH0sXHJcbiAgICB7Y2xhc3M6ICdwcmlvcml0eScsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZmxhZzwvdGl0bGU+PHBhdGggZD1cIk0xNC40LDZMMTQsNEg1VjIxSDdWMTRIMTIuNkwxMywxNkgyMFY2SDE0LjRaXCIgLz48L3N2Zz5gfSxcclxuICAgIHtjbGFzczogJ2RlbGV0ZScsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZGVsZXRlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNVpcIiAvPjwvc3ZnPmB9LFxyXG4gIF1cclxuXHJcbiAgZm9yIChsZXQgYnV0dG9uRXRjIG9mIGJ1dHRvbnNFdGMpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoYnV0dG9uRXRjLmNsYXNzKTtcclxuICAgIGJ1dHRvbi5kYXRhc2V0LmluZGV4ID0gdGFzay5pbmRleDtcclxuXHJcbiAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChkdW1teSlcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIFxyXG4gICAgZHVtbXkub3V0ZXJIVE1MID0gYnV0dG9uRXRjLnN2ZztcclxuXHJcbiAgICBpZiAoYnV0dG9uRXRjLmNsYXNzID09PSAnZHVlZGF0ZScpIHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tEdWVEYXRlRHJvcGRvd24pO1xyXG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBwLnRleHRDb250ZW50ID0gZm9ybWF0KHRhc2suZHVlRGF0ZSwgJ2QgTExMJyk7XHJcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGJ1dHRvbkV0Yy5jbGFzcyA9PT0gJ2xpc3QnKSB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrTGlzdERyb3Bkb3duKTtcclxuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgcC50ZXh0Q29udGVudCA9IHRhc2subGlzdDtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYnV0dG9uRXRjLmNsYXNzID09PSAncHJpb3JpdHknKSB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrUHJpb3JpdHlEcm9wZG93bik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChidXR0b25FdGMuY2xhc3MgPT09ICdkZWxldGUnKSB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUNhcmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25Eb25lKTtcclxuICBjYXJkLmFwcGVuZENoaWxkKGg0KTtcclxuICBjYXJkLmFwcGVuZENoaWxkKHApO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gIGlmICh0YXNrLmlzQ29tcGxldGVkKSB7XHJcbiAgICBjYXJkc0NvbXBsZXRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2FyZHNPbmdvaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2hvd0xvYWRpbmdDYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhcmRzT25nb2luZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkcyAuY29udGFpbmVyLm9uZ29pbmdgKTtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ2xvYWRpbmcnKTtcclxuICBjYXJkc09uZ29pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7ICBcclxufVxyXG5cclxuY29uc3QgaGlkZUxvYWRpbmdDYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxvYWRpbmdDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQubG9hZGluZycpO1xyXG4gIGxvYWRpbmdDYXJkLnJlbW92ZSgpO1xyXG59XHJcblxyXG5jb25zdCBob3ZlckNhcmQgPSAoZSkgPT4ge1xyXG4gIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xyXG4gIGUuY3VycmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcclxuICAgIGlmIChkcm9wZG93bk92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmlsaXR5LWhpZGRlbicpKSB7XHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpOyAgICAgIFxyXG4gICAgfVxyXG4gIH0sIHtvbmNlOiB0cnVlfSk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbi8vIENhcmQgRHJvcGRvd25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG5jb25zdCBwb3NpdGlvbkRyb3Bkb3duID0gKGN1cnJlbnRCdXR0b24pID0+IHtcclxuICBjb25zdCBkcm9wZG93blRvcCA9IGN1cnJlbnRCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gIGNvbnN0IGRyb3Bkb3duTGVmdCA9IGN1cnJlbnRCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWRyb3Bkb3duLXRvcCcsIGAke2Ryb3Bkb3duVG9wfXB4YCk7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kcm9wZG93bi1sZWZ0JywgYCR7ZHJvcGRvd25MZWZ0fXB4YCk7XHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9uRHJvcGRvd25SZXNldCA9IChjdXJyZW50QnV0dG9uKSA9PiB7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kcm9wZG93bi10b3AnLCBgMHB4YCk7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kcm9wZG93bi1sZWZ0JywgYDBweGApO1xyXG59XHJcblxyXG4vLyBEdWUgRGF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuY29uc3QgY2xpY2tEdWVEYXRlRHJvcGRvd24gPSAoZSkgPT4ge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY29uc3QgY3VycmVudEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcclxuICBjb25zdCBjdXJyZW50Q2FyZEluZGV4ID0gZ2V0Q2FyZEluZGV4KGUpO1xyXG4gIGNvbnN0IGN1cnJlbnRUYXNrID0gdG9kb2xpc3QuZ2V0VGFzayhjdXJyZW50Q2FyZEluZGV4KTsgICAgXHJcbiAgcG9zaXRpb25Ecm9wZG93bihjdXJyZW50QnV0dG9uKTtcclxuICBzZXREcm9wZG93bkR1ZURhdGVJbmRleChjdXJyZW50Q2FyZEluZGV4KTtcclxuICBzaG93RHJvcGRvd25EdWVEYXRlKGN1cnJlbnRCdXR0b24pO1xyXG5cclxuICBkaXNwbGF5Q3VycmVudENhcmREYXRlKGN1cnJlbnRUYXNrKTtcclxufVxyXG5cclxuY29uc3Qgc2hvd0Ryb3Bkb3duRHVlRGF0ZSA9IChjdXJyZW50QnV0dG9uKSA9PiB7XHJcbiAgY3VycmVudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xyXG4gIGN1cnJlbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVEcm9wZG93bkR1ZURhdGUpO1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xyXG4gIGRyb3Bkb3duRHVlRGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xyXG59XHJcblxyXG5jb25zdCBoaWRlRHJvcGRvd25EdWVEYXRlID0gKGUpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZFtkYXRhLWluZGV4PVwiJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleH1cImApO1xyXG4gIGNvbnN0IGN1cnJlbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYnV0dG9uLmNsaWNrZWRgKTtcclxuICBzZWxlY3RlZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcclxuICBjdXJyZW50QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XHJcbiAgY3VycmVudEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XHJcbiAgZHJvcGRvd25PdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZURyb3Bkb3duRHVlRGF0ZSk7XHJcbiAgZHJvcGRvd25PdmVybGF5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xyXG4gIGRyb3Bkb3duRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xyXG4gIHBvc2l0aW9uRHJvcGRvd25SZXNldCgpO1xyXG59XHJcblxyXG5jb25zdCBzZXREcm9wZG93bkR1ZURhdGVJbmRleCA9IChpbmRleCkgPT4ge1xyXG4gIGRyb3Bkb3duRHVlRGF0ZUlucHV0LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICBkcm9wZG93bk92ZXJsYXkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG59XHJcblxyXG5jb25zdCBzZXREdWVEYXRlID0gKGUpID0+IHtcclxuICBjb25zdCBjdXJyZW50Q2FyZEluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgY29uc3QgY3VycmVudENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZFtkYXRhLWluZGV4PVwiJHtjdXJyZW50Q2FyZEluZGV4fVwiXWApO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRyb3Bkb3duRHVlRGF0ZUlucHV0LnZhbHVlKSk7XHJcblxyXG4gIGlmICh0b2RvbGlzdC5kb2VzVGFza0V4aXN0KGN1cnJlbnRDYXJkSW5kZXgpKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IHRvZG9saXN0LmdldFRhc2soY3VycmVudENhcmRJbmRleCk7XHJcbiAgICBjdXJyZW50VGFzay5zZXRUYXNrRHVlRGF0ZShkdWVEYXRlKTtcclxuICB9XHJcblxyXG4gIGN1cnJlbnRDYXJkLmRhdGFzZXQuZHVlRGF0ZSA9IGR1ZURhdGU7ICBcclxuICBpZiAoIWZvY3VzZWRDYXJkT3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2liaWxpdHktaGlkZGVuJykpIHtcclxuICAgIGZvY3VzZWRDYXJkLmRhdGFzZXQuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLmR1ZWRhdGUuY2xpY2tlZCA+IHAnKS50ZXh0Q29udGVudCA9IGZvcm1hdChkdWVEYXRlLCAnZCBMTEwnKTtcclxuICBoaWRlRHJvcGRvd25EdWVEYXRlKGUpO1xyXG5cclxuICByZWdlbmVyYXRlQ2FyZHNDb250YWluZXIoKTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheUN1cnJlbnRDYXJkRGF0ZSA9ICh0YXNrKSA9PiB7XHJcbiAgaWYgKHRhc2spIHtcclxuICAgIGRyb3Bkb3duRHVlRGF0ZUlucHV0LnZhbHVlID0gZm9ybWF0KHRhc2suZHVlRGF0ZSwgJ3l5eXktTU0tZGQnKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi5jbGlja2VkJykuY2xvc2VzdCgnLmNhcmQuZm9jdXNlZCcpLmRhdGFzZXQuZHVlRGF0ZSk7XHJcbiAgICBkcm9wZG93bkR1ZURhdGVJbnB1dC52YWx1ZSA9IGZvcm1hdChkYXRlLCAneXl5eS1NTS1kZCcpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGlzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmNvbnN0IGNsaWNrTGlzdERyb3Bkb3duID0gKGUpID0+IHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNvbnN0IGN1cnJlbnRCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgY29uc3QgY3VycmVudENhcmRJbmRleCA9IGdldENhcmRJbmRleChlKTtcclxuICBjb25zdCBjdXJyZW50VGFzayA9IHRvZG9saXN0LmdldFRhc2soY3VycmVudENhcmRJbmRleCk7ICAgICAgXHJcbiAgcG9zaXRpb25Ecm9wZG93bihjdXJyZW50QnV0dG9uKTtcclxuICBjbGVhckRyb3Bkb3duTGlzdCgpO1xyXG4gIGdlbmVyYXRlRHJvcGRvd25MaXN0KGN1cnJlbnRDYXJkSW5kZXgpO1xyXG4gIHNob3dEcm9wZG93bkxpc3QoY3VycmVudEJ1dHRvbik7XHJcbiAgaWYgKHRvZG9saXN0LmRvZXNUYXNrRXhpc3QoY3VycmVudENhcmRJbmRleCkpIHtcclxuICAgIGRpc3BsYXlDdXJyZW50Q2FyZExpc3QoY3VycmVudFRhc2spO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY2xlYXJEcm9wZG93bkxpc3QgPSAoKSA9PiB7XHJcbiAgd2hpbGUoZHJvcGRvd25MaXN0LmZpcnN0Q2hpbGQpIHtcclxuICAgIGRyb3Bkb3duTGlzdC5yZW1vdmVDaGlsZChkcm9wZG93bkxpc3QuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZURyb3Bkb3duTGlzdCA9IChjdXJyZW50Q2FyZEluZGV4KSA9PiB7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICB0b2RvbGlzdC5nZXRMaXN0cygpLmZvckVhY2goKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC50eXBlID0gJ3JhZGlvJztcclxuICAgIGlucHV0LmlkID0gYGRyb3Bkb3duTGlzdCR7aW5kZXggKyAxfWA7XHJcbiAgICBpbnB1dC5uYW1lID0gJ2xpc3QnO1xyXG4gICAgaW5wdXQudmFsdWUgPSBsaXN0O1xyXG4gICAgaW5wdXQuZGF0YXNldC5pbmRleCA9IGN1cnJlbnRDYXJkSW5kZXg7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdExpc3QpO1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7aW5wdXQuY2hlY2tlZCA9IHRydWV9XHJcblxyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dC5pZCk7XHJcblxyXG4gICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLnRleHRDb250ZW50ID0gbGlzdDtcclxuXHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChwKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuXHJcbiAgICBkdW1teS5vdXRlckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5mb2xkZXItb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0yMCwxOEg0VjhIMjBNMjAsNkgxMkwxMCw0SDRDMi44OSw0IDIsNC44OSAyLDZWMThBMiwyIDAgMCwwIDQsMjBIMjBBMiwyIDAgMCwwIDIyLDE4VjhDMjIsNi44OSAyMS4xLDYgMjAsNlpcIiAvPjwvc3ZnPmA7XHJcbiAgfSk7XHJcbiAgZHJvcGRvd25MaXN0LmFwcGVuZENoaWxkKHVsKTtcclxuICBkcm9wZG93bk92ZXJsYXkuZGF0YXNldC5pbmRleCA9IGN1cnJlbnRDYXJkSW5kZXg7XHJcbn1cclxuXHJcbmNvbnN0IHNob3dEcm9wZG93bkxpc3QgPSAoY3VycmVudExpc3RCdXR0b24pID0+IHtcclxuICBjdXJyZW50TGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xyXG4gIGN1cnJlbnRMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcclxuICBkcm9wZG93bk92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRHJvcGRvd25MaXN0KTtcclxuICBkcm9wZG93bk92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxuICBkcm9wZG93bkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxufVxyXG5cclxuY29uc3QgaGlkZURyb3Bkb3duTGlzdCA9IChlKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXh9XCJgKTtcclxuICBjb25zdCBjdXJyZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJ1dHRvbi5jbGlja2VkYCk7XHJcbiAgc2VsZWN0ZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XHJcbiAgY3VycmVudEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xyXG4gIGN1cnJlbnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVEcm9wZG93bkxpc3QpO1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcclxuICBkcm9wZG93bk92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxuICBkcm9wZG93bkxpc3QuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxuICBwb3NpdGlvbkRyb3Bkb3duUmVzZXQoKTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheUN1cnJlbnRDYXJkTGlzdCA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgZHJvcGRvd25MaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJkcm9wZG93bkxpc3RcIl0nKTtcclxuXHJcbiAgZHJvcGRvd25MaXN0cy5mb3JFYWNoKGRyb3Bkb3duTGlzdCA9PiB7XHJcbiAgICBpZiAoZHJvcGRvd25MaXN0LnZhbHVlID09PSB0YXNrLmxpc3QpIHtcclxuICAgICAgZHJvcGRvd25MaXN0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBzZWxlY3RMaXN0ID0gKGUpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24gaW5wdXRbbmFtZT1cImxpc3RcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gIGNvbnN0IGN1cnJlbnRDYXJkSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICBjb25zdCBjdXJyZW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkW2RhdGEtaW5kZXg9XCIke2N1cnJlbnRDYXJkSW5kZXh9XCJdYCk7XHJcblxyXG4gIGlmICh0b2RvbGlzdC5kb2VzVGFza0V4aXN0KGN1cnJlbnRDYXJkSW5kZXgpKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IHRvZG9saXN0LmdldFRhc2soY3VycmVudENhcmRJbmRleCk7XHJcbiAgICBjdXJyZW50VGFzay5zZXRUYXNrTGlzdChzZWxlY3RlZExpc3QpO1xyXG4gIH1cclxuXHJcbiAgY3VycmVudENhcmQuZGF0YXNldC5saXN0ID0gc2VsZWN0ZWRMaXN0O1xyXG4gIGlmICghZm9jdXNlZENhcmRPdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygndmlzaWJpbGl0eS1oaWRkZW4nKSkge1xyXG4gICAgZm9jdXNlZENhcmQuZGF0YXNldC5saXN0ID0gc2VsZWN0ZWRMaXN0O1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi5saXN0LmNsaWNrZWQgPiBwJykudGV4dENvbnRlbnQgPSBzZWxlY3RlZExpc3Q7XHJcbiAgaGlkZURyb3Bkb3duTGlzdChlKTtcclxufVxyXG5cclxuLy8gUHJpb3JpdHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmNvbnN0IGNsaWNrUHJpb3JpdHlEcm9wZG93biA9IChlKSA9PiB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBjb25zdCBjdXJyZW50QnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gIGNvbnN0IGN1cnJlbnRDYXJkSW5kZXggPSBnZXRDYXJkSW5kZXgoZSk7XHJcbiAgY29uc3QgY3VycmVudFRhc2sgPSB0b2RvbGlzdC5nZXRUYXNrKGN1cnJlbnRDYXJkSW5kZXgpOyAgICAgIFxyXG4gIHBvc2l0aW9uRHJvcGRvd24oY3VycmVudEJ1dHRvbik7XHJcbiAgc2hvd0Ryb3Bkb3duUHJpb3JpdHkoY3VycmVudEJ1dHRvbik7XHJcbiAgc2V0RHJvcGRvd25Qcmlvcml0eUluZGV4KGN1cnJlbnRDYXJkSW5kZXgpO1xyXG4gIGlmICh0b2RvbGlzdC5kb2VzVGFza0V4aXN0KGN1cnJlbnRDYXJkSW5kZXgpKSB7XHJcbiAgICBkaXNwbGF5Q3VycmVudENhcmRQcmlvcml0eShjdXJyZW50VGFzayk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzaG93RHJvcGRvd25Qcmlvcml0eSA9IChjdXJyZW50QnV0dG9uKSA9PiB7XHJcbiAgY3VycmVudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xyXG4gIGN1cnJlbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVEcm9wZG93blByaW9yaXR5KTtcclxuICBkcm9wZG93bk92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxuICBkcm9wZG93blByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHktaGlkZGVuJyk7XHJcbn1cclxuXHJcbmNvbnN0IGhpZGVEcm9wZG93blByaW9yaXR5ID0gKGUpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZFtkYXRhLWluZGV4PVwiJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleH1cImApO1xyXG4gIGNvbnN0IGN1cnJlbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYnV0dG9uLmNsaWNrZWRgKTtcclxuICBzZWxlY3RlZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcclxuICBjdXJyZW50QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XHJcbiAgY3VycmVudEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XHJcbiAgZHJvcGRvd25PdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZURyb3Bkb3duUHJpb3JpdHkpO1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcclxuICBkcm9wZG93bk92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxuICBkcm9wZG93blByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdHktaGlkZGVuJyk7XHJcbiAgcG9zaXRpb25Ecm9wZG93blJlc2V0KCk7XHJcbn1cclxuXHJcbmNvbnN0IHNldERyb3Bkb3duUHJpb3JpdHlJbmRleCA9IChpbmRleCkgPT4ge1xyXG4gIGRyb3Bkb3duUHJpb3JpdHlIaWdoLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICBkcm9wZG93blByaW9yaXR5TWVkaXVtLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICBkcm9wZG93blByaW9yaXR5TG93LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICBkcm9wZG93blByaW9yaXR5Tm9uZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgZHJvcGRvd25PdmVybGF5LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheUN1cnJlbnRDYXJkUHJpb3JpdHkgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGRyb3Bkb3duUHJpb3JpdHlMaXN0ID0gW1xyXG4gICAgZHJvcGRvd25Qcmlvcml0eUhpZ2gsXHJcbiAgICBkcm9wZG93blByaW9yaXR5TWVkaXVtLFxyXG4gICAgZHJvcGRvd25Qcmlvcml0eUxvdyxcclxuICAgIGRyb3Bkb3duUHJpb3JpdHlOb25lLFxyXG4gIF1cclxuXHJcbiAgZHJvcGRvd25Qcmlvcml0eUxpc3QuZm9yRWFjaChwcmlvcml0eSA9PiB7XHJcbiAgICBpZiAocHJpb3JpdHkudmFsdWUgPT09IHRhc2sucHJpb3JpdHkpIHtcclxuICAgICAgcHJpb3JpdHkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHNlbGVjdFByaW9yaXR5ID0gKGUpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duIGlucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XHJcbiAgY29uc3QgY3VycmVudENhcmRJbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gIGNvbnN0IGN1cnJlbnRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7Y3VycmVudENhcmRJbmRleH1cIl1gKTtcclxuXHJcbiAgaWYgKHRvZG9saXN0LmRvZXNUYXNrRXhpc3QoY3VycmVudENhcmRJbmRleCkpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gdG9kb2xpc3QuZ2V0VGFzayhjdXJyZW50Q2FyZEluZGV4KTtcclxuICAgIGN1cnJlbnRUYXNrLnNldFRhc2tQcmlvcml0eShzZWxlY3RlZFByaW9yaXR5KTtcclxuICB9XHJcblxyXG4gIGN1cnJlbnRDYXJkLmRhdGFzZXQucHJpb3JpdHkgPSBzZWxlY3RlZFByaW9yaXR5O1xyXG4gIGlmICghZm9jdXNlZENhcmRPdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygndmlzaWJpbGl0eS1oaWRkZW4nKSkge1xyXG4gICAgZm9jdXNlZENhcmQuZGF0YXNldC5wcmlvcml0eSA9IHNlbGVjdGVkUHJpb3JpdHk7XHJcbiAgfVxyXG4gIGhpZGVEcm9wZG93blByaW9yaXR5KGUpO1xyXG59XHJcblxyXG4vLyBEZWxldGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuY29uc3QgZGVsZXRlQ2FyZCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBjb25zdCBjdXJyZW50Q2FyZEluZGV4ID0gZ2V0Q2FyZEluZGV4KGUpO1xyXG4gIGNvbnN0IGN1cnJlbnRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmQ6bm90KC5mb2N1c2VkKVtkYXRhLWluZGV4PVwiJHtjdXJyZW50Q2FyZEluZGV4fVwiXWApO1xyXG4gIGNvbnN0IGN1cnJlbnRDYXJkQWN0dWFsQ29udGFpbmVyID0gY3VycmVudENhcmQuY2xvc2VzdCgnLmNvbnRhaW5lci5hY3R1YWwnKTtcclxuXHJcbiAgaWYgKCF0b2RvbGlzdC5nZXRUYXNrKGN1cnJlbnRDYXJkSW5kZXgpKSByZXR1cm47XHJcblxyXG4gIGNhcmRDb29yZGluYXRlcy5zZXRCZWZvcmUoKTtcclxuXHJcbiAgYXdhaXQgdG9kb2xpc3QuZGVsZXRlVGFzayhjdXJyZW50Q2FyZEluZGV4LCBhdXRoVG9rZW4pO1xyXG4gIHJlZ2VuZXJhdGVDYXJkc0NvbnRhaW5lcigpO1xyXG5cclxuICBjYXJkQ29vcmRpbmF0ZXMuc2V0QWZ0ZXIoKTtcclxuICBhbmltYXRlRGVsZXRlQ2FyZChjdXJyZW50Q2FyZEluZGV4LCBjdXJyZW50Q2FyZEFjdHVhbENvbnRhaW5lcik7XHJcbiAgY2FyZENvb3JkaW5hdGVzLmNsZWFyQ2FyZHMoKTtcclxufVxyXG5cclxuY29uc3QgYW5pbWF0ZURlbGV0ZUNhcmQgPSAoY2FyZEluZGV4LCBjYXJkQ29udGFpbmVyICkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkQ2FyZEhlaWdodCA9IGNhcmRDb29yZGluYXRlcy5nZXRDYXJkKGNhcmRJbmRleCkuYmVmb3JlLmhlaWdodDtcclxuICBjb25zdCB1cERpc3RhbmNlID0gYGNhbGModmFyKC0tY2FyZC1nYXApICsgJHtzZWxlY3RlZENhcmRIZWlnaHR9cHgpYDtcclxuXHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLXVwLWRpc3RhbmNlJywgYCR7dXBEaXN0YW5jZX1gKTtcclxuICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1zaHJpbmtpbmcnKTtcclxuICBjYXJkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PiB7XHJcbiAgICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci1zaHJpbmtpbmcnKSAgICAgIFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvdGhlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNvbnRhaW5lcjpub3QoLmFkZCkgLmNhcmQ6bm90KFtkYXRhLWluZGV4PVwiJHtjYXJkSW5kZXh9XCJdKWApO1xyXG4gIG90aGVyQ2FyZHMuZm9yRWFjaChvdGhlckNhcmQgPT4ge1xyXG4gICAgY29uc3QgdXBEaXN0YW5jZSA9IFxyXG4gICAgICBjYXJkQ29vcmRpbmF0ZXMuZ2V0Q2FyZChvdGhlckNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpLmJlZm9yZS50b3AgLSBcclxuICAgICAgY2FyZENvb3JkaW5hdGVzLmdldENhcmQob3RoZXJDYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKS5hZnRlci50b3A7XHJcbiAgICBpZiAodXBEaXN0YW5jZSA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tbW92ZS11cC1kaXN0YW5jZScsIGAke3VwRGlzdGFuY2V9cHhgKTtcclxuICAgIG90aGVyQ2FyZC5jbGFzc0xpc3QuYWRkKCdtb3ZpbmctdXAnKTtcclxuICAgIG90aGVyQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoZSkgPT4ge1xyXG4gICAgICBvdGhlckNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnbW92aW5nLXVwJykgICAgICBcclxuICAgIH0pO1xyXG4gIH0pOyAgXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbi8vIEFkZCBUYXNrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG5jb25zdCBhdXRvU2l6ZVRleHRBcmVhID0gKCkgPT4ge1xyXG4gIGlucHV0VGFza0Rlc2NyaXB0aW9uLnN0eWxlLmhlaWdodCA9IFwiNzVweFwiO1xyXG4gIGlucHV0VGFza0Rlc2NyaXB0aW9uLnN0eWxlLmhlaWdodCA9IChpbnB1dFRhc2tEZXNjcmlwdGlvbi5zY3JvbGxIZWlnaHQpICsgXCJweFwiO1xyXG59XHJcblxyXG5jb25zdCBjbGlja0ZvY3VzZWRDYXJkT3ZlcmxheSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgY29uc3QgdGFza3MgPSBhd2FpdCB0b2RvbGlzdC5nZXRUYXNrcyhhdXRoVG9rZW4pOyAgXHJcblxyXG4gIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSB7XHJcbiAgICBpZiAodGFza3Muc29tZSh0YXNrID0+IHRhc2suaW5kZXggPT0gZm9jdXNlZENhcmQuZGF0YXNldC5pbmRleCkpIHsgICAgXHJcbiAgICAgIHN1Ym1pdEZvY3VzZWRDYXJkKGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGhpZGVGb2N1c2VkQ2FyZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGlkZUZvY3VzZWRDYXJkT25SZXNpemUgPSAoKSA9PiB7XHJcbiAgaWYgKCh3aW5kb3cuaW5uZXJXaWR0aCA8PSA2MDApICYmIFxyXG4gICAgICAoIXNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLWhpZGRlbicpKSAmJlxyXG4gICAgICAoZm9jdXNlZENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1c2VkJykpKSB7XHJcbiAgICBoaWRlRm9jdXNlZENhcmQoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhpZGVGb2N1c2VkQ2FyZCA9IChlKSA9PiB7XHJcbiAgLy8gU2VsZWN0IGNhcmQocykgdGhhdCB3ZXJlIHNlbGVjdGVkXHJcbiAgLy8gRm9yIGV4aXN0aW5nIGNhcmQsIGV4cGVjdGVkIG5vZGUgaW4gbm9kZWxpc3QgaXMgMVxyXG4gIC8vIEZvciBhZGRpbmcgYSBuZXcgY2FyZCwgZXhwZWN0ZWQgbm9kZXMgaW4gbm9kZWxpc3QgaXMgMlxyXG4gIC8vIEZvciBkZWxldGluZyBhIGNhcmQsIGV4cGVjdGVkIG5vZGUgaW4gbm9kZWxpc3QgaXMgMCwgdGh1cyBudWxsXHJcbiAgY29uc3Qgc2VsZWN0ZWRDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jYXJkOm5vdCguZm9jdXNlZClbZGF0YS1pbmRleD1cIiR7Zm9jdXNlZENhcmQuZGF0YXNldC5pbmRleH1cIl1gKTtcclxuICBzZWxlY3RlZENhcmRzLmZvckVhY2goc2VsZWN0ZWRDYXJkID0+IHtcclxuICAgIGlmIChzZWxlY3RlZENhcmQgIT09IG51bGwpIHtcclxuICAgICAgc2VsZWN0ZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XHJcbiAgICAgIHNlbGVjdGVkQ2FyZC5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XHJcbiAgICAgIHNlbGVjdGVkQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgc2VsZWN0ZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLmFkZCcpLmZvckVhY2goYWRkVGFza0NhcmQgPT4ge1xyXG4gICAgYWRkVGFza0NhcmQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgICBhZGRUYXNrQ2FyZC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknKTtcclxuICAgIGFkZFRhc2tDYXJkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1saXN0Jyk7XHJcbiAgfSlcclxuXHJcbiAgZm9jdXNlZENhcmQuY2xhc3NMaXN0LmFkZCgnZm9jdXMtb3V0Jyk7XHJcbiAgZm9jdXNlZENhcmQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgZm9jdXNlZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgZm9jdXNlZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMtb3V0Jyk7XHJcbiAgICByZXNldEZvY3VzZWRDYXJkRGF0YSgpOyAgICBcclxuICB9LCB7b25jZTogdHJ1ZX0pO1xyXG4gIGZvY3VzZWRDYXJkT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xyXG59XHJcblxyXG5jb25zdCBzaG93Rm9jdXNlZENhcmQgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkQ2FyZCA9IGUuY3VycmVudFRhcmdldDsgIFxyXG4gIGluaXRpYWxpemVGb2N1c2VkQ2FyZERhdGEoc2VsZWN0ZWRDYXJkKTtcclxuXHJcbiAgY29uc3QgdXBEaXN0YW5jZSA9IFxyXG4gICAgKHNlbGVjdGVkQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzZWxlY3RlZENhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMikgLSBcclxuICAgIChmb2N1c2VkQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBmb2N1c2VkQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyKSA7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLXVwLWRpc3RhbmNlJywgYCR7dXBEaXN0YW5jZX1weGApOyAgXHJcblxyXG4gIGNvbnN0IHhEaXN0YW5jZSA9IFxyXG4gICAgKHNlbGVjdGVkQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgc2VsZWN0ZWRDYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gMikgLSBcclxuICAgIChmb2N1c2VkQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgZm9jdXNlZENhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyKSA7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLVgtZGlzdGFuY2UnLCBgJHt4RGlzdGFuY2V9cHhgKTsgIFxyXG5cclxuICBjb25zdCB4U2NhbGUgPSBcclxuICAgIChzZWxlY3RlZENhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpIC8gKGZvY3VzZWRDYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSA7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zY2FsZS1YJywgYCR7eFNjYWxlfWApOyAgXHJcbiAgICBcclxuICBzZWxlY3RlZENhcmQuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcclxuICBmb2N1c2VkQ2FyZC5jbGFzc0xpc3QuYWRkKCdmb2N1cy1pbicpO1xyXG4gIGZvY3VzZWRDYXJkLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcclxuICBmb2N1c2VkQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJDYXJkKTtcclxuICBmb2N1c2VkQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICBmb2N1c2VkQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cy1pbicpO1xyXG4gIH0sIHtvbmNlOiB0cnVlfSk7XHJcbiAgZm9jdXNlZENhcmRPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHktaGlkZGVuJyk7ICBcclxufVxyXG5cclxuY29uc3QgcmVzZXRGb2N1c2VkQ2FyZERhdGEgPSAoKSA9PiB7XHJcbiAgYnV0dG9uRm9jdXNlZENhcmREdWVEYXRlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIGJ1dHRvbkZvY3VzZWRDYXJkTGlzdC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcclxuICBidXR0b25Gb2N1c2VkQ2FyZFByaW9yaXR5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIGJ1dHRvbkZvY3VzZWRDYXJkRGVsZXRlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIGZvY3VzZWRDYXJkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIGZvY3VzZWRDYXJkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eScpO1xyXG4gIGZvY3VzZWRDYXJkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1saXN0Jyk7XHJcbiAgZm9jdXNlZENhcmQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWR1ZS1kYXRlJyk7XHJcbiAgaW5wdXRUYXNrVGl0bGUudmFsdWUgPSAnJztcclxuICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsaXplRm9jdXNlZENhcmREYXRhID0gKHNlbGVjdGVkQ2FyZCkgPT4ge1xyXG4gIGlmIChzZWxlY3RlZENhcmQuaGFzQXR0cmlidXRlKCdkYXRhLWluZGV4JykpIHtcclxuICAgIGNvbnN0IHRhc2sgPSB0b2RvbGlzdC5nZXRUYXNrKHNlbGVjdGVkQ2FyZC5kYXRhc2V0LmluZGV4KTtcclxuICAgIGJ1dHRvbkZvY3VzZWRDYXJkU3VibWl0LnRleHRDb250ZW50ID0gJ1NhdmUnO1xyXG4gICAgYnV0dG9uRm9jdXNlZENhcmREdWVEYXRlLmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xyXG4gICAgYnV0dG9uRm9jdXNlZENhcmRMaXN0LmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xyXG4gICAgYnV0dG9uRm9jdXNlZENhcmRQcmlvcml0eS5kYXRhc2V0LmluZGV4ID0gdGFzay5pbmRleDtcclxuICAgIGJ1dHRvbkZvY3VzZWRDYXJkRGVsZXRlLmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkRHVlRGF0ZSA+IHAnKS50ZXh0Q29udGVudCA9IGZvcm1hdCh0YXNrLmR1ZURhdGUsICdkIExMTCcpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkTGlzdCA+IHAnKS50ZXh0Q29udGVudCA9IHRhc2subGlzdDtcclxuICAgIGZvY3VzZWRDYXJkLmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xyXG4gICAgZm9jdXNlZENhcmQuZGF0YXNldC5wcmlvcml0eSA9IHRhc2sucHJpb3JpdHk7XHJcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0Lmxpc3QgPSB0YXNrLmxpc3Q7XHJcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0LmR1ZURhdGUgPSB0YXNrLmR1ZURhdGU7XHJcbiAgICBpbnB1dFRhc2tUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XHJcbiAgICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBhdXRvU2l6ZVRleHRBcmVhKCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgY29uc3QgaW5kZXggPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHNlbGVjdGVkQ2FyZC5kYXRhc2V0LmRhdGUpO1xyXG4gICAgYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkJztcclxuICAgIGJ1dHRvbkZvY3VzZWRDYXJkRHVlRGF0ZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICBidXR0b25Gb2N1c2VkQ2FyZExpc3QuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gICAgYnV0dG9uRm9jdXNlZENhcmRQcmlvcml0eS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICBidXR0b25Gb2N1c2VkQ2FyZERlbGV0ZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uRm9jdXNlZENhcmREdWVEYXRlID4gcCcpLnRleHRDb250ZW50ID0gZm9ybWF0KGR1ZURhdGUsICdkIExMTCcpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkTGlzdCA+IHAnKS50ZXh0Q29udGVudCA9IHRvZG9saXN0LmdldExpc3RzKClbMF07XHJcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0LnByaW9yaXR5ID0gJ25vbmUnO1xyXG4gICAgZm9jdXNlZENhcmQuZGF0YXNldC5saXN0ID0gdG9kb2xpc3QuZ2V0TGlzdHMoKVswXTtcclxuICAgIGZvY3VzZWRDYXJkLmRhdGFzZXQuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICBzZWxlY3RlZENhcmQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0Rm9jdXNlZENhcmQgPSBhc3luYyAoZSkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gaW5wdXRUYXNrVGl0bGUudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcclxuICBjb25zdCBpbmRleCA9IGZvY3VzZWRDYXJkLmRhdGFzZXQuaW5kZXg7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBmb2N1c2VkQ2FyZC5kYXRhc2V0LnByaW9yaXR5O1xyXG4gIGNvbnN0IGxpc3QgPSBmb2N1c2VkQ2FyZC5kYXRhc2V0Lmxpc3Q7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKGZvY3VzZWRDYXJkLmRhdGFzZXQuZHVlRGF0ZSk7XHJcbiAgY29uc3QgZW1haWwgPSBjdXJyZW50TG9nZ2VkVXNlckVtYWlsO1xyXG4gIGNvbnN0IHRhc2tzID0gYXdhaXQgdG9kb2xpc3QuZ2V0VGFza3MoYXV0aFRva2VuKTsgIFxyXG4gIGxldCBpc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG5cclxuICBkaXNhYmxlQnV0dG9uKGJ1dHRvbkZvY3VzZWRDYXJkU3VibWl0KTtcclxuXHJcbiAgaWYgKHRhc2tzLnNvbWUodGFzayA9PiB0YXNrLmluZGV4ID09IGluZGV4KSkgeyAgICAgICAgXHJcbiAgICBjb25zdCB0YXNrID0gdG9kb2xpc3QuZ2V0VGFzayhpbmRleCk7IFxyXG4gICAgaXNDb21wbGV0ZWQgPSB0YXNrLmlzQ29tcGxldGVkO1xyXG4gICAgYXdhaXQgdG9kb2xpc3QudXBkYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4LCBwcmlvcml0eSwgbGlzdCwgZW1haWwsIGR1ZURhdGUsIGlzQ29tcGxldGVkLCBhdXRoVG9rZW4pO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGF3YWl0IHRvZG9saXN0LmFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCwgcHJpb3JpdHksIGxpc3QsIGVtYWlsLCBkdWVEYXRlLCBpc0NvbXBsZXRlZCwgYXV0aFRva2VuKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZUJ1dHRvbihidXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdCk7XHJcblxyXG4gIHJlZ2VuZXJhdGVDYXJkc0NvbnRhaW5lcigpO1xyXG4gIGhpZGVGb2N1c2VkQ2FyZCgpO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4vLyBTaWRlYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuY29uc3QgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgaWYgKCFzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1oaWRkZW4nKSkge1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhpZGRlbicpO1xyXG4gICAgc2lkZWJhck92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oaWRkZW4nKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oaWRkZW4nKTsgXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWhpZGRlbicpO1xyXG4gICAgc2lkZWJhck92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1oaWRkZW4nKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1oaWRkZW4nKTtcclxuICAgIHNpZGViYXJPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHksIHtvbmNlOiB0cnVlfSk7ICAgXHJcbiAgfVxyXG4gIGlmICgod2luZG93LmlubmVyV2lkdGggPD0gNjAwKSAmJiAoZm9jdXNlZENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1c2VkJykpKSB7XHJcbiAgICBoaWRlRm9jdXNlZENhcmQoKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLy8gU2VhcmNoYm94IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmNvbnN0IGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlID0gKCkgPT4ge1xyXG4gIGlmICghYnV0dG9uTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoQm94LWZvY3VzZWQnKSkge1xyXG4gICAgYnV0dG9uTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XHJcbiAgICBidXR0b25TZXR0aW5ncy5jbGFzc0xpc3QuYWRkKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xyXG4gICAgYnV0dG9uVXNlci5jbGFzc0xpc3QuYWRkKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xyXG4gICAgc2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBleHBhbmRTZWFyY2hCb3hPbk1vYmlsZSwge29uY2U6IHRydWV9KTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBidXR0b25Ob3RpZmljYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoQm94LWZvY3VzZWQnKTtcclxuICAgIGJ1dHRvblNldHRpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XHJcbiAgICBidXR0b25Vc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XHJcbiAgICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBleHBhbmRTZWFyY2hCb3hPbk1vYmlsZSwge29uY2U6IHRydWV9KTsgICAgXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzd2l0Y2hUb2Rvc1Nob3dNb2RlID0gKGUpID0+IHtcclxuICB0b2Rvc1RvZGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgdG9kb3NOZXh0N0RheXMuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICB0b2Rvc0NhbGVuZGFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgdG9kb3NTaG93TW9kZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNob3dNb2RlO1xyXG4gIGdlbmVyYXRlVG9kb0xpc3QoKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLy8gT3RoZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoaWRlRm9jdXNlZENhcmRPblJlc2l6ZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhdXRvU2l6ZVRleHRBcmVhKTtcclxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHBvc2l0aW9uRHJvcGRvd24pO1xyXG5cclxuLy8gSGVhZGVyIFxyXG5zZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBleHBhbmRTZWFyY2hCb3hPbk1vYmlsZSwge29uY2U6IHRydWV9KTtcclxuXHJcbi8vQ2FyZHNcclxuZHJvcGRvd25EdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RHVlRGF0ZSk7XHJcbmRyb3Bkb3duUHJpb3JpdHlIaWdoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UHJpb3JpdHkpO1xyXG5kcm9wZG93blByaW9yaXR5TWVkaXVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UHJpb3JpdHkpO1xyXG5kcm9wZG93blByaW9yaXR5TG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UHJpb3JpdHkpO1xyXG5kcm9wZG93blByaW9yaXR5Tm9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFByaW9yaXR5KTtcclxuXHJcbi8vIEZvY3VzZWQgQ2FyZFxyXG5pbnB1dFRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGF1dG9TaXplVGV4dEFyZWEpO1xyXG5mb2N1c2VkQ2FyZE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0ZvY3VzZWRDYXJkT3ZlcmxheSk7XHJcbmZvY3VzZWRDYXJkV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRm9jdXNlZENhcmRPdmVybGF5KTtcclxuYnV0dG9uRm9jdXNlZENhcmREdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tEdWVEYXRlRHJvcGRvd24pO1xyXG5idXR0b25Gb2N1c2VkQ2FyZExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0xpc3REcm9wZG93bik7XHJcbmJ1dHRvbkZvY3VzZWRDYXJkUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1ByaW9yaXR5RHJvcGRvd24pO1xyXG5idXR0b25Gb2N1c2VkQ2FyZERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUNhcmQpO1xyXG5idXR0b25Gb2N1c2VkQ2FyZERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVGb2N1c2VkQ2FyZCk7XHJcbmJ1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUZvY3VzZWRDYXJkKTtcclxuYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRGb2N1c2VkQ2FyZCk7XHJcblxyXG4vLyBTaWRlYmFyXHJcbmJ1dHRvblNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaWRlYmFyVmlzaWJpbGl0eSk7XHJcbnNpZGViYXJPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHksIHtvbmNlOiB0cnVlfSk7XHJcbnRvZG9zVG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUb2Rvc1Nob3dNb2RlKTtcclxudG9kb3NOZXh0N0RheXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUb2Rvc1Nob3dNb2RlKTtcclxudG9kb3NDYWxlbmRhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvZG9zU2hvd01vZGUpO1xyXG5cclxuLy8gSW5pdGlhbCBnZW5lcmF0aW9uIG9mIGNhcmRzIGNvbnRhaW5lclxyXG4vLyBnZW5lcmF0ZVRvZG9MaXN0KCk7XHJcbnNldFRpbWVvdXQoKCkgPT4ge2RvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncHJlbG9hZCcpfSwgMCk7XHJcblxyXG5cclxuLy8gTG9naW4gU2NyZWVuXHJcblxyXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbihidXR0b24pIHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XHJcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVCdXR0b24oYnV0dG9uKSB7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xyXG4gICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybXMoKSB7XHJcbiAgICBmb3JtTG9nSW4ucmVzZXQoKTtcclxuICAgIGZvcm1TaWduVXAucmVzZXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NpZ25VcEZvcm0oKSB7XHJcbiAgICBoaWRlKGJ1dHRvbk5ld0FjY291bnQpO1xyXG4gICAgaGlkZShmb3JtTG9nSW4pO1xyXG4gICAgc2hvdyhidXR0b25FeGlzdGluZ0FjY291bnQpO1xyXG4gICAgc2hvdyhmb3JtU2lnblVwKTtcclxuICAgIHJlc2V0Rm9ybXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvZ2luRm9ybSgpIHtcclxuICAgIGhpZGUoYnV0dG9uRXhpc3RpbmdBY2NvdW50KTtcclxuICAgIGhpZGUoZm9ybVNpZ25VcCk7XHJcbiAgICBzaG93KGJ1dHRvbk5ld0FjY291bnQpO1xyXG4gICAgc2hvdyhmb3JtTG9nSW4pO1xyXG4gICAgcmVzZXRGb3JtcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbihlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgIWlucHV0TG9nSW5FbWFpbC5jaGVja1ZhbGlkaXR5KCkgfHxcclxuICAgICAgICAhaW5wdXRMb2dJblBhc3N3b3JkLmNoZWNrVmFsaWRpdHkoKVxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgZW1haWw6IGlucHV0TG9nSW5FbWFpbC52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogaW5wdXRMb2dJblBhc3N3b3JkLnZhbHVlLFxyXG4gICAgfSAgICBcclxuXHJcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbik7XHJcblxyXG4gICAgZmV0Y2goJ2h0dHBzOi8vdG9kby1saXN0LWJhY2tlbmQuYXp1cmV3ZWJzaXRlcy5uZXQvaWRlbnRpdHkvbG9naW4nLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGVuYWJsZUJ1dHRvbihidXR0b24pO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgc2hvdyhmb3JtTG9nSW5FcnJvcik7XHJcbiAgICAgICAgICAgIGZvcm1Mb2dJbkVycm9yLnRleHRDb250ZW50PVwi4p2MIEluY29ycmVjdCBsb2dpbiBjcmVkZW50aWFscy5cIlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc2V0Rm9ybXMoKTtcclxuICAgICAgICBhdXRoVG9rZW4gPSByZXNwb25zZS5hY2Nlc3NUb2tlbjtcclxuICAgICAgICBjdXJyZW50TG9nZ2VkVXNlckVtYWlsID0gYm9keS5lbWFpbDtcclxuICAgICAgICBsb2dpblNjcmVlbi5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xyXG4gICAgICAgIGxvZ2luU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICBsb2dpblNjcmVlbi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGdlbmVyYXRlVG9kb0xpc3QoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcChlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgIWlucHV0U2lnblVwRW1haWwuY2hlY2tWYWxpZGl0eSgpIHx8XHJcbiAgICAgICAgIWlucHV0U2lnblVwUGFzc3dvcmQuY2hlY2tWYWxpZGl0eSgpXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBlbWFpbDogaW5wdXRTaWduVXBFbWFpbC52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogaW5wdXRTaWduVXBQYXNzd29yZC52YWx1ZSxcclxuICAgIH0gICAgXHJcblxyXG4gICAgZGlzYWJsZUJ1dHRvbihidXR0b24pO1xyXG5cclxuICAgIGZldGNoKCdodHRwczovL3RvZG8tbGlzdC1iYWNrZW5kLmF6dXJld2Vic2l0ZXMubmV0L2lkZW50aXR5L3JlZ2lzdGVyJyx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICAgICAgZGF0YS5qc29uKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdyhmb3JtU2lnblVwRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TaWduVXBFcnJvci50ZXh0Q29udGVudD1cIuKdjCBJbnZhbGlkIHJlZ2lzdHJhdGlvbi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93KGZvcm1TaWduVXBFcnJvcik7XHJcbiAgICAgICAgICAgIGZvcm1TaWduVXBFcnJvci50ZXh0Q29udGVudD1cIuKclCBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZC4gWW91IG1heSBub3cgbG9naW4uXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZW5hYmxlQnV0dG9uKGJ1dHRvbik7XHJcbiAgICAgICAgcmVzZXRGb3JtcygpO1xyXG4gICAgfSkgICAgXHJcbn1cclxuXHJcbmlucHV0TG9nSW5FbWFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtoaWRlKGZvcm1Mb2dJbkVycm9yKX0pO1xyXG5pbnB1dExvZ0luUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7aGlkZShmb3JtTG9nSW5FcnJvcil9KTtcclxuaW5wdXRTaWduVXBFbWFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtoaWRlKGZvcm1TaWduVXBFcnJvcil9KTtcclxuaW5wdXRTaWduVXBQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtoaWRlKGZvcm1TaWduVXBFcnJvcil9KTtcclxuXHJcbmJ1dHRvblNpZ251cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZ25VcCk7XHJcbmJ1dHRvbkxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nSW4pO1xyXG5idXR0b25OZXdBY2NvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1NpZ25VcEZvcm0pO1xyXG5idXR0b25FeGlzdGluZ0FjY291bnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TG9naW5Gb3JtKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=