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

.login-overlay button.loading {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Pacifico&display=swap');\r\n\r\n:root {\r\n  --color-1: white;\r\n  --color-1-hover: hsl(0, 0%, 97%);\r\n  --color-1-active: hsl(0, 0%, 94%);;\r\n  --color-2: hsl(0, 0%, 98%);\r\n  --color-2-hover: hsl(0, 0%, 95%);\r\n  --color-2-active: hsl(0, 0%, 92%);\r\n  --color-3: rgb(158, 210, 198);\r\n  --color-3-hover: hsl(166, 37%, 69%);\r\n  --color-3-active: hsl(166, 37%, 66%);\r\n  --color-3-selected: hsl(166, 37%, 67%);\r\n  --color-4: rgb(84, 186, 185);\r\n  --color-4-hover: hsl(179, 43%, 50%);\r\n  --color-4-active: hsl(179, 43%, 47%);\r\n  --header-height: 4rem;\r\n  --sidebar-width: 250px;\r\n  --scale-X: 0.5;\r\n  --move-X-distance: 111.78125px;\r\n  --move-up-distance: 111.78125px;\r\n  --move-down-distance: 111.78125px;\r\n  --card-gap: 1rem;\r\n  --dropdown-top: 0;\r\n  --dropdown-left: 0;\r\n  --button-width: 1.7rem;\r\n}\r\n\r\n*, *::after, *::before {\r\n  font-family: 'Open Sans', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml, body,\r\nh1, h2, h3, h4, h5, h6, \r\np, ul, ol, li, button {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nul, ol, li {\r\n  list-style: none;\r\n} \r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nsvg {\r\n  vertical-align: top;\r\n}\r\n\r\n.site-container {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.display-none {\r\n  display: none !important;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* z-index ------------------------------------------ */\r\n/* -------------------------------------------------- */\r\n\r\n.login-overlay {\r\n  z-index: 20000;\r\n}\r\n\r\n.dropdown {\r\n  z-index: 11001;\r\n}\r\n\r\n#dropdownOverlay {\r\n  z-index: 11000;\r\n}\r\n\r\n.header {\r\n  z-index: 10000;\r\n}\r\n\r\n.sidebar {\r\n  z-index: 1001;\r\n}\r\n\r\n#sidebarOverlay {\r\n  z-index: 1000;\r\n}\r\n\r\n#focusedCardOverlay {\r\n  z-index: 800;\r\n}\r\n\r\n.overflow-bottom,\r\n.overflow-top {\r\n  z-index: 5;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Header ------------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.header {\r\n  position: fixed;\r\n  height: var(--header-height);\r\n  width: 100vw;\r\n  padding: 0.25rem;\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.15);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.header * {\r\n  transition: margin 0.25s;\r\n}\r\n\r\n.header h1{\r\n  position: relative;\r\n  bottom: 0.3rem;\r\n  padding: 0 4.5rem 0 0.25rem;\r\n  font-family: 'Pacifico', cursive;\r\n  font-weight: 200;\r\n  transition: \r\n    width 0.5s ease 0s, \r\n    padding 0.5s ease 0s, \r\n    opacity 0.5s ease 0s, \r\n    visibility 0s ease 0s;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .header h1{\r\n    width: 0;\r\n    padding: 0;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: \r\n      width 0.5s ease 0s, \r\n      padding 0.5s ease 0s, \r\n      opacity 0.5s ease 0s, \r\n      visibility 0s ease 0.5s;\r\n  }\r\n}\r\n\r\n.search-box {\r\n  position: relative;\r\n  flex: 1;\r\n  max-width: 500px;\r\n  margin-right: auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.search-box input {\r\n  height: 3rem;\r\n  width: 100%;\r\n  padding: 0 1rem 0 3rem;\r\n  background-color: var(--color-3);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  font-size: 1.15rem;\r\n  font-weight: 400;\r\n\r\n  transition: 0.1s;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .search-box input {\r\n    margin: 0.25rem\r\n  }\r\n}\r\n\r\n.search-box input::placeholder {\r\n  color: white;\r\n}\r\n\r\n.search-box input:focus::placeholder{\r\n  color: lightgrey;\r\n}\r\n\r\n.search-box input:focus {\r\n  background-color: white;\r\n  color: grey;\r\n  outline: none;\r\n}\r\n\r\n.search-box input:focus + svg {\r\n  fill: grey;\r\n}\r\n\r\n.search-box svg {\r\n  position: absolute;\r\n  left: 0.75rem;\r\n  height: 1.75rem;\r\n  fill: white;\r\n}\r\n\r\n.button {\r\n  border: none;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n}\r\n\r\n.header .button {\r\n  height: 3rem;\r\n  width: 3rem;\r\n  background-color: var(--color-4);\r\n}\r\n\r\n.header .button:hover {\r\n  background-color: var(--color-4-hover);\r\n}\r\n\r\n.header .button:active {\r\n  background-color: var(--color-4-active);\r\n}\r\n\r\n.button svg {\r\n  height: 1.75rem;\r\n  fill: white;\r\n}\r\n\r\n#buttonSidebar {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n#buttonUser {\r\n  margin: 0 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .header .button,\r\n  #buttonSidebar,\r\n  #buttonUser {\r\n    margin: 0;\r\n  }\r\n\r\n  #buttonNotification.searchBox-focused,\r\n  #buttonSettings.searchBox-focused,\r\n  #buttonUser.searchBox-focused {\r\n    display: none;\r\n  }\r\n}\r\n\r\n#buttonUser img {\r\n  height: 80%;\r\n  width: 80%;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Sidebar ------------------------------------------ */\r\n/* -------------------------------------------------- */\r\n\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  left: 0;\r\n  height: calc(100vh - var(--header-height));\r\n  width: var(--sidebar-width);\r\n  margin-top: var(--header-height);\r\n  padding: 0.5rem;\r\n  background-color: var(--color-2);\r\n  transition: left 0.5s;\r\n}\r\n\r\n.sidebar.sidebar-hidden {\r\n  left: calc(-1 * var(--sidebar-width));\r\n}\r\n\r\n.sidebar h4 {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.sidebar p {\r\n  font-weight: 400;\r\n}\r\n\r\n.section-title {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0.75rem 0;\r\n  padding: 0.25rem 0.5rem 0.25rem 1rem;\r\n  border-radius: 0.5rem;\r\n  user-select: none;\r\n}\r\n\r\n.section-title:hover {\r\n  background-color: var(--color-2-hover);\r\n}\r\n\r\n.section-title:active {\r\n  background-color: var(--color-2-active);\r\n}\r\n\r\n.section-title h4 {\r\n  margin-right: auto;\r\n}\r\n\r\n.section-title .button {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  background-color: transparent;\r\n}\r\n\r\n.section-title svg {\r\n  position: relative;\r\n  top: -0.05rem;\r\n  height: 1.5rem;\r\n  fill: hsl(0, 0%, 75%);\r\n}\r\n\r\n.section-title .button:hover svg{\r\n  fill: var(--color-4-hover);\r\n}\r\n\r\n.section-title .button:active svg{\r\n  fill: var(--color-4-active);\r\n}\r\n\r\n.sidebar li {\r\n  padding: 0.25rem 1rem;\r\n  color: hsl(0, 0%, 25%);\r\n  fill: hsl(0, 0%, 25%);\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  border-radius: 0.5rem;\r\n  user-select: none;\r\n}\r\n\r\n.sidebar li:last-child {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar li:hover {\r\n  background-color: var(--color-2-hover);\r\n}\r\n\r\n.sidebar li.selected,\r\n.sidebar li:active {\r\n  background-color: var(--color-2-active);\r\n}\r\n\r\n.sidebar li > svg {\r\n  position: relative;\r\n  top: 0.1rem;\r\n  height: 1.25rem;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Main --------------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.main-container {\r\n  height: 100vh;\r\n  display: flex;\r\n}\r\n\r\n.main {\r\n  min-width: 0;\r\n  margin-top: var(--header-height);\r\n  margin-left: var(--sidebar-width);\r\n  position: relative;\r\n  padding: 1.25rem 1rem;\r\n  flex: 1;\r\n  background-color: var(--color-1);\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\r\n  grid-auto-rows: minmax(auto, 100%);\r\n  gap: 2rem 0.25rem;\r\n  justify-content: center;\r\n  justify-items: center;\r\n  transition: margin 0.5s;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main.sidebar-hidden {\r\n  margin-left: 0;\r\n}\r\n\r\n#sidebarOverlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: black;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .main {\r\n    margin-left: 0;\r\n  }\r\n\r\n  #sidebarOverlay {\r\n    visibility: visible;\r\n    opacity: 0.25;\r\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\r\n  }\r\n\r\n  #sidebarOverlay.sidebar-hidden {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\r\n  }\r\n}\r\n\r\n.cards {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  max-width: 720px;  \r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.cards h2,\r\n.cards h3 {\r\n  align-self: center;\r\n}\r\n\r\n.cards h3 {\r\n  color: hsl(0, 0%, 50%);\r\n  font-weight: 600;\r\n}\r\n\r\n.container.actual {\r\n  position: relative;\r\n  max-height: 100%;\r\n  overflow-y: scroll; \r\n  padding: 0 0.65rem;\r\n  padding-bottom: 5px;\r\n  border-radius: 1rem;\r\n  scrollbar-width: none; /* Firefox */\r\n  -ms-overflow-style: none;  /* Internet Explorer 10+ */  \r\n}\r\n\r\n.container.actual::-webkit-scrollbar { /* WebKit */\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n/* .container.ongoing,\r\n.container.completed {\r\n  display: grid;\r\n} */\r\n\r\n.container.ongoing .card .button.done svg.check {\r\n  opacity: 0;\r\n}\r\n\r\n.container.ongoing .card .button.done:hover svg.check {\r\n  opacity: 0.4;\r\n}\r\n\r\n.container.ongoing .card .button.done:active svg.check {\r\n  opacity: 0.55;\r\n}\r\n\r\n.container.completed .card .button.done svg.check {\r\n  opacity: 1;\r\n}\r\n\r\n.container.completed .card .button.done:hover svg.check {\r\n  opacity: 0.4;\r\n}\r\n\r\n.container.completed .card .button.done:active svg.check {\r\n  opacity: 0.25;\r\n}\r\n\r\n.container.add {\r\n  max-height: 100%;\r\n  margin-top: -5px;\r\n  padding: 0 0.65rem;\r\n}\r\n\r\n.overflow-bottom,\r\n.overflow-top {\r\n  position: relative;\r\n  height: 0;\r\n  background-color: var(--color-1);\r\n  background-color: red;\r\n}\r\n\r\n.overflow-bottom > div,\r\n.overflow-top > div{\r\n  position: absolute;\r\n  height: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.overflow-top > div {\r\n  top: calc(1rem - 1px);\r\n  border-top-left-radius: 1rem;\r\n  border-top-right-radius: 1rem;\r\n  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\r\n}\r\n\r\n.overflow-top.overflowing > div {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\r\n}\r\n\r\n.overflow-bottom > div {\r\n  bottom: 0;\r\n  border-bottom-left-radius: 1rem;\r\n  border-bottom-right-radius: 1rem;\r\n  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%);\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\r\n}\r\n\r\n.overflow-bottom.overflowing > div {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Card --------------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.card.add h4 {\r\n  color: hsl(0, 0%, 50%);\r\n  font-weight: 500;\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  margin-top: var(--card-gap);\r\n  padding: 0.5rem 0.75rem 0.15rem 0.75rem;\r\n  background: var(--color-1);\r\n  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n  border-radius: 0.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  user-select: none;  \r\n  transition: box-shadow 0.25s ease 0s;\r\n}\r\n\r\n.card[data-priority=high] {\r\n  box-shadow: 0 0 2px 2px hsl(0, 100%, 75%), 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card[data-priority=high].focused,\r\n.card[data-priority=high].hover {\r\n  box-shadow: 0 0 2px 2px red, 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card[data-priority=medium] {\r\n  box-shadow: 0 0 2px 2px hsl(39, 100%, 75%), 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card[data-priority=medium].focused,\r\n.card[data-priority=medium].hover {\r\n  box-shadow: 0 0 2px 2px orange, 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card[data-priority=low] {\r\n  box-shadow: 0 0 2px 2px hsl(120, 50%, 65%), 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card[data-priority=low].focused,\r\n.card[data-priority=low].hover {\r\n  box-shadow: 0 0 2px 2px green, 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card.hover {\r\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n}\r\n\r\n.card h4 {\r\n  margin-bottom: 0.4rem;\r\n  font-size: 1.1rem;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;  \r\n}\r\n\r\n.card p {\r\n  flex: 1;\r\n  color: hsl(0, 0%, 50%);\r\n  font-size: 0.9rem;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.card h4.completed,\r\n.card p.completed {\r\n  text-decoration: line-through;\r\n  color: hsl(0, 0%, 75%);\r\n}\r\n\r\n.card .buttons-container {\r\n  margin-top: auto;\r\n  padding-top: 0.25rem;\r\n  display: flex;\r\n  justify-content: start;\r\n}\r\n\r\n.card .button {\r\n  height: var(--button-width);\r\n  width: var(--button-width);\r\n  background-color: transparent;\r\n  border-radius: 1.35rem;  \r\n  opacity: 0;\r\n  transition: 0.25s;\r\n}\r\n\r\n.card .button p {\r\n  font-size: 0.75rem;\r\n  transition: 0.25s;\r\n}\r\n\r\n.card .button.clicked p {\r\n  background-color: var(--color-1-active);\r\n  color: transparent;\r\n}\r\n\r\n.card.hover .button {\r\n  opacity: 1;\r\n  color: hsl(0, 0%, 50%);\r\n  white-space: nowrap;\r\n}\r\n\r\n.card.hover .button.hover,\r\n.card.hover .button:hover {\r\n  background-color: var(--color-1-hover);\r\n}\r\n\r\n.card.hover .button:active {\r\n  background-color: var(--color-1-active);\r\n}\r\n\r\n.card .button.duedate,\r\n.card .button.list {\r\n  width: auto;\r\n  min-width: var(--button-width);\r\n  margin-right: 0.1rem;\r\n  padding: 0.25rem;\r\n  padding-right: 0.5rem;\r\n  border: 1px solid lightgrey;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 1;\r\n}\r\n\r\n.completed .card .button.duedate p,\r\n.completed .card .button.list p {\r\n  text-decoration: line-through;\r\n  color: hsl(0, 0%, 75%);\r\n}\r\n\r\n.card .button.duedate p,\r\n.card .button.list p {\r\n  margin-left: 0.1rem;\r\n}\r\n\r\n.card .button.priority {\r\n  margin-left: auto;\r\n}\r\n\r\n.card .button.done {\r\n  position: absolute;\r\n  top: -0.65rem;\r\n  left: -0.65rem;\r\n  height: 1.35rem;\r\n  width: 1.35rem;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card .button.done:hover {\r\n  width: 1.35rem;\r\n  padding: 0;  \r\n  background: white;\r\n}\r\n\r\n.card svg {\r\n  height: calc(var(--button-width) * 0.625);\r\n  fill: hsl(0, 0%, 75%);\r\n  transition: 0.25s;\r\n}\r\n\r\n.card .button.done svg {\r\n  position: absolute;\r\n  height: 1.5rem;\r\n}\r\n\r\n.card .button.done svg,\r\n.card.hover .button.done:hover svg {\r\n  fill: var(--color-4);\r\n}\r\n\r\n.card[data-priority=high] .button.done svg,\r\n.card.hover[data-priority=high] .button.done svg,\r\n.card[data-priority=high] .button.priority svg,\r\n.card[data-priority=high] .button.priority:hover svg {\r\n  fill: red;\r\n}\r\n\r\n.card[data-priority=medium] .button.done svg,\r\n.card.hover[data-priority=medium] .button.done svg,\r\n.card[data-priority=medium] .button.priority svg,\r\n.card[data-priority=medium] .button.priority:hover svg   {\r\n  fill: orange;\r\n}\r\n\r\n.card[data-priority=low] .button.done svg,\r\n.card.hover[data-priority=low] .button.done svg,\r\n.card[data-priority=low] .button.priority svg,\r\n.card[data-priority=low] .button.priority:hover svg   {\r\n  fill: green;\r\n}\r\n\r\n.card.hover .button:hover svg {\r\n  fill: hsl(0, 0%, 50%);\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Card Animation ----------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.moving-down {\r\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-move-down;\r\n}\r\n\r\n.moving-up {\r\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-move-up;\r\n}\r\n\r\n.focus-in {\r\n  animation: 0.25s ease-in-out 0s 1 forwards card-focus;\r\n}\r\n\r\n.focus-out {\r\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-focus;\r\n}\r\n\r\n.fade-in {\r\n  animation: 0.25s ease-in-out 0s 1 forwards card-fade-in;\r\n}\r\n\r\n.fade-out {\r\n  animation: 0.25s ease-in-out 0s 1 forwards card-fade-out;\r\n}\r\n\r\n.container-shrinking {\r\n  animation: 0.25s ease-in-out 0s 1 forwards shrink-container;  \r\n}\r\n\r\n@keyframes card-move-down {\r\n  from {\r\n    transform: translateX(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  50% {\r\n    transform: translateX(0.5rem);\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0);\r\n    transform: translateY(var(--move-down-distance));\r\n  }\r\n}\r\n\r\n@keyframes card-move-up {\r\n  from {\r\n    transform: translateY(0);\r\n  }\r\n  to {\r\n    transform: translateY(var(--move-up-distance));\r\n  }\r\n}\r\n\r\n@keyframes card-focus {\r\n  from {\r\n    transform: translateX(var(--move-X-distance)) translateY(var(--move-up-distance)) scale(var(--scale-X), 0.6);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    transform: translateX(0) translateY(0) scale(1, 1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes card-fade-in {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes card-fade-out {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes shrink-container {\r\n  from {\r\n    padding-bottom: calc(var(--move-up-distance) + 5px);\r\n  }\r\n\r\n  to {\r\n    padding-bottom: 5px;\r\n  }\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Card Dropdowns ----------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.dropdown {\r\n  position: absolute;\r\n  top: calc(var(--dropdown-top) + var(--button-width) - var(--header-height));\r\n  left: calc(var(--dropdown-left) - var(--sidebar-width));\r\n  padding: 0.125rem;\r\n  background: var(--color-1);\r\n  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n  border-radius: 0.5rem;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;  \r\n}\r\n\r\n.sidebar-hidden .dropdown {\r\n  left: calc(var(--dropdown-left));\r\n}\r\n\r\n.dropdown.visibility-hidden {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;  \r\n}\r\n\r\n.dropdown ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.1rem;\r\n}\r\n\r\n.dropdown label {\r\n  padding: 0.125rem 0.25rem;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.dropdown label:hover,\r\n.dropdown input:checked + label:hover  {\r\n  background: var(--color-2-hover);\r\n}\r\n\r\n.dropdown label:active,\r\n.dropdown input:checked + label,\r\n.dropdown input:checked + label:active  {\r\n  background: var(--color-2-active);\r\n}\r\n\r\n.dropdown.list input,\r\n.dropdown.priority input {\r\n  display: none;\r\n}\r\n\r\n.dropdown label {\r\n  display: flex;\r\n  gap: 0.1rem;\r\n}\r\n\r\n.dropdown label[for=priorityHigh] svg{\r\n  fill: red;\r\n}\r\n\r\n.dropdown label[for=priorityMedium] svg{\r\n  fill: orange;\r\n}\r\n\r\n.dropdown label[for=priorityLow] svg{\r\n  fill: green;\r\n}\r\n\r\n.dropdown svg{\r\n  fill: hsl(0, 0%, 75%);\r\n}\r\n\r\n.dropdown svg {\r\n  height: 1rem;\r\n}\r\n\r\n.dropdown p {\r\n  color: hsl(0, 0%, 50%);\r\n  font-size: 0.75rem;\r\n  user-select: none;\r\n}\r\n\r\n.dropdown.duedate {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.dropdown.duedate p {\r\n  margin: 0 0.1rem;\r\n}\r\n\r\n.dropdown.duedate input {\r\n  width: 6.25rem;\r\n  padding: 0.125rem 0.25rem;\r\n  background: var(--color-2-active);\r\n  color: hsl(0, 0%, 25%);\r\n  border: none;\r\n  border-radius: 0.25rem;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.dropdown.duedate input:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#dropdownOverlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  visibility: visible;\r\n  transition: visibility 0s ease 0s;\r\n}\r\n\r\n#dropdownOverlay.visibility-hidden {\r\n  visibility: hidden;\r\n  transition: visibility 0s ease 0s;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Card Overlay ------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n#focusedCardOverlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgb(0, 0, 0, 0.25);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\r\n}\r\n\r\n#focusedCardOverlay.visibility-hidden {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\r\n}\r\n\r\n#focusedCardOverlay .wrapper {\r\n  width: 100%;\r\n  max-width: 900px;\r\n  margin: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card.focused {\r\n  background-color: white;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\r\n  user-select: auto;\r\n}\r\n\r\n#focusedCardOverlay .card .button {\r\n  opacity: 1;\r\n}\r\n\r\n#focusedCardOverlay .submit-container {\r\n  align-self: end;\r\n  margin-top: 0.5rem;\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n\r\n#focusedCardOverlay .submit-container .button {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 0.5rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n#buttonFocusedCardCancel {\r\n  background-color: var(--color-2);\r\n  color: dimgrey;\r\n}\r\n\r\n#buttonFocusedCardCancel:hover {\r\n  background-color: var(--color-2-hover);\r\n}\r\n\r\n#buttonFocusedCardCancel:active {\r\n  background-color: var(--color-2-active);\r\n}\r\n\r\n#buttonFocusedCardSubmit {\r\n  background-color: var(--color-4);\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n#buttonFocusedCardSubmit:hover {\r\n  background-color: var(--color-4-hover);\r\n}\r\n\r\n#buttonFocusedCardSubmit:active {\r\n  background-color: var(--color-4-active);\r\n}\r\n\r\n#inputTaskTitle,\r\n#inputTaskDescription {\r\n  padding: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n#inputTaskTitle:focus,\r\n#inputTaskDescription:focus {\r\n  background-color: var(--color-1-hover);\r\n}\r\n\r\n#inputTaskTitle {\r\n  font-size: 1.1rem;\r\n  font-weight: 700;\r\n}\r\n\r\n#inputTaskDescription {\r\n  font-size: 0.9rem;\r\n  resize: none;  \r\n  overflow: hidden;\r\n  height: 75px;\r\n  max-height: calc((100vh - var(--header-height)) * 0.5);\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Load Overlay ------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n#loadOverlay {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: opacity 0.1s ease 0.25s, visibility 0s ease 0.35s;\r\n}\r\n\r\n.preload * {\r\n  -webkit-transition: none !important;\r\n  -moz-transition: none !important;\r\n  -ms-transition: none !important;\r\n  -o-transition: none !important;\r\n}\r\n\r\n/* -------------------------------------------------- */\r\n/* Login Overlay ------------------------------------- */\r\n/* -------------------------------------------------- */\r\n\r\n.login-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: var(--color-4);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n}\r\n\r\n.login-overlay h1 {\r\n  margin-bottom: 2rem;\r\n  font-family: 'Pacifico', cursive;\r\n  font-size: 4rem;\r\n  font-weight: 200;\r\n  transition: \r\n    width 0.5s ease 0s, \r\n    padding 0.5s ease 0s, \r\n    opacity 0.5s ease 0s, \r\n    visibility 0s ease 0s;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.login-overlay .form {\r\n  width: 20rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.login-overlay .form input {\r\n  height: 2rem;\r\n  width: 100%;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  border-radius: 0.25rem;\r\n  border: none;\r\n}\r\n\r\n.login-overlay button {\r\n  margin-top: 1rem;\r\n  height: 2.5rem;\r\n  width: 100%;\r\n  color: white;\r\n  background-color: var(--color-4);\r\n  border: 1px solid white;\r\n  border-radius: 0.5rem;\r\n  font-size: 1rem;\r\n  box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.250);\r\n}\r\n\r\n.login-overlay button:hover {\r\n  background-color: var(--color-4-hover);\r\n}\r\n\r\n.login-overlay button:active {\r\n  background-color: var(--color-4-active);\r\n}\r\n\r\n.login-overlay .form-error {\r\n  align-self: start;\r\n  font-size: 0.75rem;\r\n  font-weight: 700;\r\n  color: white;\r\n}\r\n\r\n.login-overlay-bottom {\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n  width: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-top: 1px solid white;\r\n}\r\n\r\n.login-overlay .new-account-btn {\r\n  width: 15rem;\r\n}\r\n\r\n.login-overlay button.loading {\r\n  color: rgba(0, 0, 0, 0);\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgb(84, 186, 185) 0%, \r\n    rgb(84, 186, 185) 25%, \r\n    hsl(179, 43%, 65%) 50%, \r\n    rgb(84, 186, 185) 75%, \r\n    rgb(84, 186, 185) 100%); \r\n  background-size: 200%;\r\n  animation: loading 0.5s ease-in-out 0s infinite forwards alternate;\r\n}\r\n\r\n@keyframes loading {\r\n  0% {\r\n    background-position: 0% 0%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 100% 100%;\r\n  }\r\n}"],"sourceRoot":""}]);
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
  constructor(title, description, index) {
    this.title = title;
    this.description = description;
    this.isCompleted = false;
    this.index = index;
    this.priority = 'none';
    this.list = 'Home';
    this.dueDate = '';
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

// temporarily fill tasks
const tasks = [
  new Task("Buy groceries", "Get milk, eggs, bread, and vegetables from the supermarket.", Date.now() - 86400000),
  new Task("Finish report for work", "Compile the sales data and write a summary for the quarterly report.", Date.now() + 123),
  new Task("Call Mom", "Catch up with Mom and check how she's doing.", Date.now() + 1102),
  new Task("Go for a jog", "Run for 30 minutes around the park to stay active.", Date.now() + 2323),
  new Task("Read a book", "Start reading 'The Great Gatsby' by F. Scott Fitzgerald.", Date.now() + 4242),
  new Task("Clean the garage", "Organize and declutter the garage space.", Date.now() + 12512),
  new Task("Pay utility bills", "Settle electricity, water, and internet bills for the month.", Date.now() + 40000),
  new Task("Plan weekend trip", "Research destinations and create an itinerary for the weekend getaway.", Date.now() + 51243),
  new Task("Update resume", "Add recent work experiences and skills to the resume.", Date.now() + 86400000),
  new Task("Practice guitar", "Spend 1 hour practicing chords and scales on the guitar.", Date.now() + 86400000 * 2+ 5125),
  new Task("Organize digital files", "Sort and arrange documents and photos on the computer.", Date.now() + 86400000 * 3 + 120512),
  new Task("Water the plants", "Give the indoor and outdoor plants a good watering.", Date.now() + 86400000 * 4 + 120524),
  new Task("Attend yoga class", "Join the evening yoga session at the local studio.", Date.now() + 86400000 * 4 + 120536),
  new Task("Fix leaking faucet", "Call the plumber or attempt to repair the faucet yourself.", Date.now() + 86400000 * 5 + 120738),
  new Task("Watch a documentary", "Pick an interesting documentary and learn something new.", Date.now() + 86400000 * 5  + 122626),
  new Task("Start learning a language", "Download language learning app and begin with basic phrases.", Date.now() + 86400000 * 6),
];

// temporary values ================================================ //
tasks[0].setTaskPriority('high');
tasks[1].setTaskPriority('high');
tasks[2].setTaskPriority('medium');
tasks[3].toggleTaskCompletion();
tasks[4].toggleTaskCompletion();
tasks.forEach(task => task.dueDate = new Date(task.index));

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

const lists = [
  'Home',
  'Work',
];

const getLists = () => lists;



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

const fillCardsContainer = () => {
  _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks().forEach(generateCard);
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

const deleteCard = (e) => {
  e.stopPropagation();
  const currentCardIndex = getCardIndex(e);
  const currentCard = document.querySelector(`.card:not(.focused)[data-index="${currentCardIndex}"]`);
  const currentCardActualContainer = currentCard.closest('.container.actual');

  if (!_todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(currentCardIndex)) return;

  cardCoordinates.setBefore();

  _todolist_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask(currentCardIndex);
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

const clickFocusedCardOverlay = (e) => {
  if (e.target === e.currentTarget) {
    if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks().some(task => task.index == focusedCard.dataset.index)) {    
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

const submitFocusedCard = (e) => {
  const title = inputTaskTitle.value;
  const description = inputTaskDescription.value;
  const index = focusedCard.dataset.index;
  const priority = focusedCard.dataset.priority;
  const list = focusedCard.dataset.list;
  const dueDate = new Date(focusedCard.dataset.dueDate);

  if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks().some(task => task.index == index)) {    
    _todolist_js__WEBPACK_IMPORTED_MODULE_1__.updateTask(title, description, index);
  }
  else {
    _todolist_js__WEBPACK_IMPORTED_MODULE_1__.addTask(title, description, index);
  }
  _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(index).setTaskPriority(priority);
  _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(index).setTaskList(list);
  _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(index).setTaskDueDate(dueDate);

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




// API Tests
const fetchTask = (async () => {
  // const body = {
  //   title: 'test title',
  //   description: 'test description',
  //   isCompleted: false,
  //   index: 99,
  //   priority: 'High',
  //   list: 'Home',
  // }

  // fetch('https://localhost:7115/api/TodoTasks', {
  //   method: 'POST',
  //   body: JSON.stringify(body),
  //   headers: {
  //     "content-type": "application/json"
  //   }
  // })

  // fetch('https://todo-list-backend.azurewebsites.net/api')
  //   .then(data => data.json())
  //   .then(response => console.log(response));
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DO0FBQ3pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxTQUFTLE9BQU8sYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsTUFBTSxPQUFPLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxlQUFlLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLHVCQUF1Qix5QkFBeUIsT0FBTyxpQkFBaUIsV0FBVyxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sUUFBUSxVQUFVLE1BQU0sUUFBUSxVQUFVLE1BQU0sUUFBUSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksU0FBUyxPQUFPLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUss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QTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdB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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCMEM7QUFDZ0I7QUFDbEI7QUFDb0I7QUFDUTtBQUMyQjtBQUM2QjtBQUN6RTtBQUNNO0FBQ1c7QUFDVCxDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLFdBQVc7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxXQUFXO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsV0FBVztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsV0FBVztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxXQUFXO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwQ0FBMEM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb21vcnJvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tY29sb3ItMTogd2hpdGU7XHJcbiAgLS1jb2xvci0xLWhvdmVyOiBoc2woMCwgMCUsIDk3JSk7XHJcbiAgLS1jb2xvci0xLWFjdGl2ZTogaHNsKDAsIDAlLCA5NCUpOztcclxuICAtLWNvbG9yLTI6IGhzbCgwLCAwJSwgOTglKTtcclxuICAtLWNvbG9yLTItaG92ZXI6IGhzbCgwLCAwJSwgOTUlKTtcclxuICAtLWNvbG9yLTItYWN0aXZlOiBoc2woMCwgMCUsIDkyJSk7XHJcbiAgLS1jb2xvci0zOiByZ2IoMTU4LCAyMTAsIDE5OCk7XHJcbiAgLS1jb2xvci0zLWhvdmVyOiBoc2woMTY2LCAzNyUsIDY5JSk7XHJcbiAgLS1jb2xvci0zLWFjdGl2ZTogaHNsKDE2NiwgMzclLCA2NiUpO1xyXG4gIC0tY29sb3ItMy1zZWxlY3RlZDogaHNsKDE2NiwgMzclLCA2NyUpO1xyXG4gIC0tY29sb3ItNDogcmdiKDg0LCAxODYsIDE4NSk7XHJcbiAgLS1jb2xvci00LWhvdmVyOiBoc2woMTc5LCA0MyUsIDUwJSk7XHJcbiAgLS1jb2xvci00LWFjdGl2ZTogaHNsKDE3OSwgNDMlLCA0NyUpO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNHJlbTtcclxuICAtLXNpZGViYXItd2lkdGg6IDI1MHB4O1xyXG4gIC0tc2NhbGUtWDogMC41O1xyXG4gIC0tbW92ZS1YLWRpc3RhbmNlOiAxMTEuNzgxMjVweDtcclxuICAtLW1vdmUtdXAtZGlzdGFuY2U6IDExMS43ODEyNXB4O1xyXG4gIC0tbW92ZS1kb3duLWRpc3RhbmNlOiAxMTEuNzgxMjVweDtcclxuICAtLWNhcmQtZ2FwOiAxcmVtO1xyXG4gIC0tZHJvcGRvd24tdG9wOiAwO1xyXG4gIC0tZHJvcGRvd24tbGVmdDogMDtcclxuICAtLWJ1dHRvbi13aWR0aDogMS43cmVtO1xyXG59XHJcblxyXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCwgYm9keSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgXHJcbnAsIHVsLCBvbCwgbGksIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnVsLCBvbCwgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn0gXHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLnNpdGUtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kaXNwbGF5LW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogei1pbmRleCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5sb2dpbi1vdmVybGF5IHtcclxuICB6LWluZGV4OiAyMDAwMDtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICB6LWluZGV4OiAxMTAwMTtcclxufVxyXG5cclxuI2Ryb3Bkb3duT3ZlcmxheSB7XHJcbiAgei1pbmRleDogMTEwMDA7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgei1pbmRleDogMTAwMTtcclxufVxyXG5cclxuI3NpZGViYXJPdmVybGF5IHtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4jZm9jdXNlZENhcmRPdmVybGF5IHtcclxuICB6LWluZGV4OiA4MDA7XHJcbn1cclxuXHJcbi5vdmVyZmxvdy1ib3R0b20sXHJcbi5vdmVyZmxvdy10b3Age1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIEhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4uaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjE1KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXIgKiB7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzO1xyXG59XHJcblxyXG4uaGVhZGVyIGgxe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDAuM3JlbTtcclxuICBwYWRkaW5nOiAwIDQuNXJlbSAwIDAuMjVyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB0cmFuc2l0aW9uOiBcclxuICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXHJcbiAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXHJcbiAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXHJcbiAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuaGVhZGVyIGgxe1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IFxyXG4gICAgICB3aWR0aCAwLjVzIGVhc2UgMHMsIFxyXG4gICAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXHJcbiAgICAgIG9wYWNpdHkgMC41cyBlYXNlIDBzLCBcclxuICAgICAgdmlzaWJpbGl0eSAwcyBlYXNlIDAuNXM7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXg6IDE7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpbnB1dCB7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAwIDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zZWFyY2gtYm94IGlucHV0IHtcclxuICAgIG1hcmdpbjogMC4yNXJlbVxyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcntcclxuICBjb2xvcjogbGlnaHRncmV5O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMgKyBzdmcge1xyXG4gIGZpbGw6IGdyZXk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHN2ZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDAuNzVyZW07XHJcbiAgaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkZXIgLmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xyXG59XHJcblxyXG4uaGVhZGVyIC5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xyXG59XHJcblxyXG4uaGVhZGVyIC5idXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWFjdGl2ZSk7XHJcbn1cclxuXHJcbi5idXR0b24gc3ZnIHtcclxuICBoZWlnaHQ6IDEuNzVyZW07XHJcbiAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbiNidXR0b25TaWRlYmFyIHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4jYnV0dG9uVXNlciB7XHJcbiAgbWFyZ2luOiAwIDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuaGVhZGVyIC5idXR0b24sXHJcbiAgI2J1dHRvblNpZGViYXIsXHJcbiAgI2J1dHRvblVzZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgI2J1dHRvbk5vdGlmaWNhdGlvbi5zZWFyY2hCb3gtZm9jdXNlZCxcclxuICAjYnV0dG9uU2V0dGluZ3Muc2VhcmNoQm94LWZvY3VzZWQsXHJcbiAgI2J1dHRvblVzZXIuc2VhcmNoQm94LWZvY3VzZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbiNidXR0b25Vc2VyIGltZyB7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIFNpZGViYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcclxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMC41cztcclxufVxyXG5cclxuLnNpZGViYXIuc2lkZWJhci1oaWRkZW4ge1xyXG4gIGxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGg0IHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyIHAge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW0gMC4yNXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgaDQge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBzdmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0wLjA1cmVtO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjpob3ZlciBzdmd7XHJcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1ob3Zlcik7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIC5idXR0b246YWN0aXZlIHN2Z3tcclxuICBmaWxsOiB2YXIoLS1jb2xvci00LWFjdGl2ZSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGxpIHtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XHJcbiAgY29sb3I6IGhzbCgwLCAwJSwgMjUlKTtcclxuICBmaWxsOiBoc2woMCwgMCUsIDI1JSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGxpOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyIGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcclxufVxyXG5cclxuLnNpZGViYXIgbGkuc2VsZWN0ZWQsXHJcbi5zaWRlYmFyIGxpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xyXG59XHJcblxyXG4uc2lkZWJhciBsaSA+IHN2ZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMC4xcmVtO1xyXG4gIGhlaWdodDogMS4yNXJlbTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogTWFpbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMS4yNXJlbSAxcmVtO1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMSk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIxMHB4LCAxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KGF1dG8sIDEwMCUpO1xyXG4gIGdhcDogMnJlbSAwLjI1cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ubWFpbi5zaWRlYmFyLWhpZGRlbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiNzaWRlYmFyT3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1haW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAjc2lkZWJhck92ZXJsYXkge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcclxuICB9XHJcblxyXG4gICNzaWRlYmFyT3ZlcmxheS5zaWRlYmFyLWhpZGRlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA3MjBweDsgIFxyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY2FyZHMgaDIsXHJcbi5jYXJkcyBoMyB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZHMgaDMge1xyXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5hY3R1YWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgXHJcbiAgcGFkZGluZzogMCAwLjY1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi8gIFxyXG59XHJcblxyXG4uY29udGFpbmVyLmFjdHVhbDo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKiBXZWJLaXQgKi9cclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi8qIC5jb250YWluZXIub25nb2luZyxcclxuLmNvbnRhaW5lci5jb21wbGV0ZWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbn0gKi9cclxuXHJcbi5jb250YWluZXIub25nb2luZyAuY2FyZCAuYnV0dG9uLmRvbmUgc3ZnLmNoZWNrIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHN2Zy5jaGVjayB7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lOmFjdGl2ZSBzdmcuY2hlY2sge1xyXG4gIG9wYWNpdHk6IDAuNTU7XHJcbn1cclxuXHJcbi5jb250YWluZXIuY29tcGxldGVkIC5jYXJkIC5idXR0b24uZG9uZSBzdmcuY2hlY2sge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb250YWluZXIuY29tcGxldGVkIC5jYXJkIC5idXR0b24uZG9uZTpob3ZlciBzdmcuY2hlY2sge1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kb25lOmFjdGl2ZSBzdmcuY2hlY2sge1xyXG4gIG9wYWNpdHk6IDAuMjU7XHJcbn1cclxuXHJcbi5jb250YWluZXIuYWRkIHtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgcGFkZGluZzogMCAwLjY1cmVtO1xyXG59XHJcblxyXG4ub3ZlcmZsb3ctYm90dG9tLFxyXG4ub3ZlcmZsb3ctdG9wIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm92ZXJmbG93LWJvdHRvbSA+IGRpdixcclxuLm92ZXJmbG93LXRvcCA+IGRpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub3ZlcmZsb3ctdG9wID4gZGl2IHtcclxuICB0b3A6IGNhbGMoMXJlbSAtIDFweCk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjE1KSAxMDAlKTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcclxufVxyXG5cclxuLm92ZXJmbG93LXRvcC5vdmVyZmxvd2luZyA+IGRpdiB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xyXG59XHJcblxyXG4ub3ZlcmZsb3ctYm90dG9tID4gZGl2IHtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDAuMTUpIDEwMCUpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xyXG59XHJcblxyXG4ub3ZlcmZsb3ctYm90dG9tLm92ZXJmbG93aW5nID4gZGl2IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIENhcmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4uY2FyZC5hZGQgaDQge1xyXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1jYXJkLWdhcCk7XHJcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW0gMC4xNXJlbSAwLjc1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyZXksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7ICBcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9aGlnaF0ge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGhzbCgwLCAxMDAlLCA3NSUpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXS5mb2N1c2VkLFxyXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdLmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCByZWQsIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZFtkYXRhLXByaW9yaXR5PW1lZGl1bV0ge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGhzbCgzOSwgMTAwJSwgNzUlKSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXS5mb2N1c2VkLFxyXG4uY2FyZFtkYXRhLXByaW9yaXR5PW1lZGl1bV0uaG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IG9yYW5nZSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bG93XSB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggaHNsKDEyMCwgNTAlLCA2NSUpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddLmZvY3VzZWQsXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bG93XS5ob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggZ3JlZW4sIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZC5ob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQgaDQge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7ICBcclxufVxyXG5cclxuLmNhcmQgcCB7XHJcbiAgZmxleDogMTtcclxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmNhcmQgaDQuY29tcGxldGVkLFxyXG4uY2FyZCBwLmNvbXBsZXRlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgY29sb3I6IGhzbCgwLCAwJSwgNzUlKTtcclxufVxyXG5cclxuLmNhcmQgLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxufVxyXG5cclxuLmNhcmQgLmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiB2YXIoLS1idXR0b24td2lkdGgpO1xyXG4gIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuMzVyZW07ICBcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDAuMjVzO1xyXG59XHJcblxyXG4uY2FyZCAuYnV0dG9uIHAge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjI1cztcclxufVxyXG5cclxuLmNhcmQgLmJ1dHRvbi5jbGlja2VkIHAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEtYWN0aXZlKTtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jYXJkLmhvdmVyIC5idXR0b24ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uY2FyZC5ob3ZlciAuYnV0dG9uLmhvdmVyLFxyXG4uY2FyZC5ob3ZlciAuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWhvdmVyKTtcclxufVxyXG5cclxuLmNhcmQuaG92ZXIgLmJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEtYWN0aXZlKTtcclxufVxyXG5cclxuLmNhcmQgLmJ1dHRvbi5kdWVkYXRlLFxyXG4uY2FyZCAuYnV0dG9uLmxpc3Qge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMXJlbTtcclxuICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kdWVkYXRlIHAsXHJcbi5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5saXN0IHAge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIGNvbG9yOiBoc2woMCwgMCUsIDc1JSk7XHJcbn1cclxuXHJcbi5jYXJkIC5idXR0b24uZHVlZGF0ZSBwLFxyXG4uY2FyZCAuYnV0dG9uLmxpc3QgcCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcclxufVxyXG5cclxuLmNhcmQgLmJ1dHRvbi5wcmlvcml0eSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkIC5idXR0b24uZG9uZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTAuNjVyZW07XHJcbiAgbGVmdDogLTAuNjVyZW07XHJcbiAgaGVpZ2h0OiAxLjM1cmVtO1xyXG4gIHdpZHRoOiAxLjM1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIC5idXR0b24uZG9uZTpob3ZlciB7XHJcbiAgd2lkdGg6IDEuMzVyZW07XHJcbiAgcGFkZGluZzogMDsgIFxyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCBzdmcge1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS1idXR0b24td2lkdGgpICogMC42MjUpO1xyXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcclxuICB0cmFuc2l0aW9uOiAwLjI1cztcclxufVxyXG5cclxuLmNhcmQgLmJ1dHRvbi5kb25lIHN2ZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuYnV0dG9uLmRvbmUgc3ZnLFxyXG4uY2FyZC5ob3ZlciAuYnV0dG9uLmRvbmU6aG92ZXIgc3ZnIHtcclxuICBmaWxsOiB2YXIoLS1jb2xvci00KTtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXSAuYnV0dG9uLmRvbmUgc3ZnLFxyXG4uY2FyZC5ob3ZlcltkYXRhLXByaW9yaXR5PWhpZ2hdIC5idXR0b24uZG9uZSBzdmcsXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9aGlnaF0gLmJ1dHRvbi5wcmlvcml0eSBzdmcsXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9aGlnaF0gLmJ1dHRvbi5wcmlvcml0eTpob3ZlciBzdmcge1xyXG4gIGZpbGw6IHJlZDtcclxufVxyXG5cclxuLmNhcmRbZGF0YS1wcmlvcml0eT1tZWRpdW1dIC5idXR0b24uZG9uZSBzdmcsXHJcbi5jYXJkLmhvdmVyW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSAuYnV0dG9uLmRvbmUgc3ZnLFxyXG4uY2FyZFtkYXRhLXByaW9yaXR5PW1lZGl1bV0gLmJ1dHRvbi5wcmlvcml0eSBzdmcsXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSAuYnV0dG9uLnByaW9yaXR5OmhvdmVyIHN2ZyAgIHtcclxuICBmaWxsOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bG93XSAuYnV0dG9uLmRvbmUgc3ZnLFxyXG4uY2FyZC5ob3ZlcltkYXRhLXByaW9yaXR5PWxvd10gLmJ1dHRvbi5kb25lIHN2ZyxcclxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddIC5idXR0b24ucHJpb3JpdHkgc3ZnLFxyXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10gLmJ1dHRvbi5wcmlvcml0eTpob3ZlciBzdmcgICB7XHJcbiAgZmlsbDogZ3JlZW47XHJcbn1cclxuXHJcbi5jYXJkLmhvdmVyIC5idXR0b246aG92ZXIgc3ZnIHtcclxuICBmaWxsOiBoc2woMCwgMCUsIDUwJSk7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIENhcmQgQW5pbWF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4ubW92aW5nLWRvd24ge1xyXG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSByZXZlcnNlIGZvcndhcmRzIGNhcmQtbW92ZS1kb3duO1xyXG59XHJcblxyXG4ubW92aW5nLXVwIHtcclxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgcmV2ZXJzZSBmb3J3YXJkcyBjYXJkLW1vdmUtdXA7XHJcbn1cclxuXHJcbi5mb2N1cy1pbiB7XHJcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIGNhcmQtZm9jdXM7XHJcbn1cclxuXHJcbi5mb2N1cy1vdXQge1xyXG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSByZXZlcnNlIGZvcndhcmRzIGNhcmQtZm9jdXM7XHJcbn1cclxuXHJcbi5mYWRlLWluIHtcclxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgY2FyZC1mYWRlLWluO1xyXG59XHJcblxyXG4uZmFkZS1vdXQge1xyXG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBjYXJkLWZhZGUtb3V0O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXNocmlua2luZyB7XHJcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIHNocmluay1jb250YWluZXI7ICBcclxufVxyXG5cclxuQGtleWZyYW1lcyBjYXJkLW1vdmUtZG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuNXJlbSk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tbW92ZS1kb3duLWRpc3RhbmNlKSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcmQtbW92ZS11cCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS1tb3ZlLXVwLWRpc3RhbmNlKSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcmQtZm9jdXMge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLW1vdmUtWC1kaXN0YW5jZSkpIHRyYW5zbGF0ZVkodmFyKC0tbW92ZS11cC1kaXN0YW5jZSkpIHNjYWxlKHZhcigtLXNjYWxlLVgpLCAwLjYpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApIHNjYWxlKDEsIDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2FyZC1mYWRlLWluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjYXJkLWZhZGUtb3V0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaHJpbmstY29udGFpbmVyIHtcclxuICBmcm9tIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1vdmUtdXAtZGlzdGFuY2UpICsgNXB4KTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBDYXJkIERyb3Bkb3ducyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKHZhcigtLWRyb3Bkb3duLXRvcCkgKyB2YXIoLS1idXR0b24td2lkdGgpIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xyXG4gIGxlZnQ6IGNhbGModmFyKC0tZHJvcGRvd24tbGVmdCkgLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XHJcbiAgcGFkZGluZzogMC4xMjVyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IGxpZ2h0Z3JleSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwczsgIFxyXG59XHJcblxyXG4uc2lkZWJhci1oaWRkZW4gLmRyb3Bkb3duIHtcclxuICBsZWZ0OiBjYWxjKHZhcigtLWRyb3Bkb3duLWxlZnQpKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLnZpc2liaWxpdHktaGlkZGVuIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1czsgIFxyXG59XHJcblxyXG4uZHJvcGRvd24gdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuMXJlbTtcclxufVxyXG5cclxuLmRyb3Bkb3duIGxhYmVsIHtcclxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjI1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5kcm9wZG93biBsYWJlbDpob3ZlcixcclxuLmRyb3Bkb3duIGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3ZlciAge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xyXG59XHJcblxyXG4uZHJvcGRvd24gbGFiZWw6YWN0aXZlLFxyXG4uZHJvcGRvd24gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsLFxyXG4uZHJvcGRvd24gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFjdGl2ZSAge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLmxpc3QgaW5wdXQsXHJcbi5kcm9wZG93bi5wcmlvcml0eSBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duIGxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC4xcmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24gbGFiZWxbZm9yPXByaW9yaXR5SGlnaF0gc3Zne1xyXG4gIGZpbGw6IHJlZDtcclxufVxyXG5cclxuLmRyb3Bkb3duIGxhYmVsW2Zvcj1wcmlvcml0eU1lZGl1bV0gc3Zne1xyXG4gIGZpbGw6IG9yYW5nZTtcclxufVxyXG5cclxuLmRyb3Bkb3duIGxhYmVsW2Zvcj1wcmlvcml0eUxvd10gc3Zne1xyXG4gIGZpbGw6IGdyZWVuO1xyXG59XHJcblxyXG4uZHJvcGRvd24gc3Zne1xyXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcclxufVxyXG5cclxuLmRyb3Bkb3duIHN2ZyB7XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24gcCB7XHJcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi5kdWVkYXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93bi5kdWVkYXRlIHAge1xyXG4gIG1hcmdpbjogMCAwLjFyZW07XHJcbn1cclxuXHJcbi5kcm9wZG93bi5kdWVkYXRlIGlucHV0IHtcclxuICB3aWR0aDogNi4yNXJlbTtcclxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjI1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcclxuICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxufVxyXG5cclxuLmRyb3Bkb3duLmR1ZWRhdGUgaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jZHJvcGRvd25PdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xyXG59XHJcblxyXG4jZHJvcGRvd25PdmVybGF5LnZpc2liaWxpdHktaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBDYXJkIE92ZXJsYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI2ZvY3VzZWRDYXJkT3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4yNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcclxufVxyXG5cclxuI2ZvY3VzZWRDYXJkT3ZlcmxheS52aXNpYmlsaXR5LWhpZGRlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XHJcbn1cclxuXHJcbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNhcmQuZm9jdXNlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1jb2xvci00KSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XHJcbiAgdXNlci1zZWxlY3Q6IGF1dG87XHJcbn1cclxuXHJcbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLmNhcmQgLmJ1dHRvbiB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAuc3VibWl0LWNvbnRhaW5lciB7XHJcbiAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4jZm9jdXNlZENhcmRPdmVybGF5IC5zdWJtaXQtY29udGFpbmVyIC5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuI2J1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcclxuICBjb2xvcjogZGltZ3JleTtcclxufVxyXG5cclxuI2J1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcclxufVxyXG5cclxuI2J1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xyXG59XHJcblxyXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xyXG59XHJcblxyXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQ6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWFjdGl2ZSk7XHJcbn1cclxuXHJcbiNpbnB1dFRhc2tUaXRsZSxcclxuI2lucHV0VGFza0Rlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4jaW5wdXRUYXNrVGl0bGU6Zm9jdXMsXHJcbiNpbnB1dFRhc2tEZXNjcmlwdGlvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1ob3Zlcik7XHJcbn1cclxuXHJcbiNpbnB1dFRhc2tUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuI2lucHV0VGFza0Rlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICByZXNpemU6IG5vbmU7ICBcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogNzVweDtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKCgxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKSAqIDAuNSk7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIExvYWQgT3ZlcmxheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4jbG9hZE92ZXJsYXkge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlIDAuMjVzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4zNXM7XHJcbn1cclxuXHJcbi5wcmVsb2FkICoge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBMb2dpbiBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5sb2dpbi1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9naW4tb3ZlcmxheSBoMSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB0cmFuc2l0aW9uOiBcclxuICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXHJcbiAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXHJcbiAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXHJcbiAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubG9naW4tb3ZlcmxheSAuZm9ybSB7XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4ubG9naW4tb3ZlcmxheSAuZm9ybSBpbnB1dCB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luLW92ZXJsYXkgYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGhzbGEoMCwgMCUsIDAlLCAwLjI1MCk7XHJcbn1cclxuXHJcbi5sb2dpbi1vdmVybGF5IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1ob3Zlcik7XHJcbn1cclxuXHJcbi5sb2dpbi1vdmVybGF5IGJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcclxufVxyXG5cclxuLmxvZ2luLW92ZXJsYXkgLmZvcm0tZXJyb3Ige1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ2luLW92ZXJsYXktYm90dG9tIHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ubG9naW4tb3ZlcmxheSAubmV3LWFjY291bnQtYnRuIHtcclxuICB3aWR0aDogMTVyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1vdmVybGF5IGJ1dHRvbi5sb2FkaW5nIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICA5MGRlZyxcclxuICAgIHJnYig4NCwgMTg2LCAxODUpIDAlLCBcclxuICAgIHJnYig4NCwgMTg2LCAxODUpIDI1JSwgXHJcbiAgICBoc2woMTc5LCA0MyUsIDY1JSkgNTAlLCBcclxuICAgIHJnYig4NCwgMTg2LCAxODUpIDc1JSwgXHJcbiAgICByZ2IoODQsIDE4NiwgMTg1KSAxMDAlKTsgXHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG4gIGFuaW1hdGlvbjogbG9hZGluZyAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkaW5nIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFF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QjtFQUNyQixlQUFlO0VBQ2YsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCOzs7Ozs7MkJBTXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItMTogd2hpdGU7XFxyXFxuICAtLWNvbG9yLTEtaG92ZXI6IGhzbCgwLCAwJSwgOTclKTtcXHJcXG4gIC0tY29sb3ItMS1hY3RpdmU6IGhzbCgwLCAwJSwgOTQlKTs7XFxyXFxuICAtLWNvbG9yLTI6IGhzbCgwLCAwJSwgOTglKTtcXHJcXG4gIC0tY29sb3ItMi1ob3ZlcjogaHNsKDAsIDAlLCA5NSUpO1xcclxcbiAgLS1jb2xvci0yLWFjdGl2ZTogaHNsKDAsIDAlLCA5MiUpO1xcclxcbiAgLS1jb2xvci0zOiByZ2IoMTU4LCAyMTAsIDE5OCk7XFxyXFxuICAtLWNvbG9yLTMtaG92ZXI6IGhzbCgxNjYsIDM3JSwgNjklKTtcXHJcXG4gIC0tY29sb3ItMy1hY3RpdmU6IGhzbCgxNjYsIDM3JSwgNjYlKTtcXHJcXG4gIC0tY29sb3ItMy1zZWxlY3RlZDogaHNsKDE2NiwgMzclLCA2NyUpO1xcclxcbiAgLS1jb2xvci00OiByZ2IoODQsIDE4NiwgMTg1KTtcXHJcXG4gIC0tY29sb3ItNC1ob3ZlcjogaHNsKDE3OSwgNDMlLCA1MCUpO1xcclxcbiAgLS1jb2xvci00LWFjdGl2ZTogaHNsKDE3OSwgNDMlLCA0NyUpO1xcclxcbiAgLS1oZWFkZXItaGVpZ2h0OiA0cmVtO1xcclxcbiAgLS1zaWRlYmFyLXdpZHRoOiAyNTBweDtcXHJcXG4gIC0tc2NhbGUtWDogMC41O1xcclxcbiAgLS1tb3ZlLVgtZGlzdGFuY2U6IDExMS43ODEyNXB4O1xcclxcbiAgLS1tb3ZlLXVwLWRpc3RhbmNlOiAxMTEuNzgxMjVweDtcXHJcXG4gIC0tbW92ZS1kb3duLWRpc3RhbmNlOiAxMTEuNzgxMjVweDtcXHJcXG4gIC0tY2FyZC1nYXA6IDFyZW07XFxyXFxuICAtLWRyb3Bkb3duLXRvcDogMDtcXHJcXG4gIC0tZHJvcGRvd24tbGVmdDogMDtcXHJcXG4gIC0tYnV0dG9uLXdpZHRoOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBcXHJcXG5wLCB1bCwgb2wsIGxpLCBidXR0b24ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwsIG9sLCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn0gXFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnN2ZyB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LW5vbmUge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIHotaW5kZXggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ubG9naW4tb3ZlcmxheSB7XFxyXFxuICB6LWluZGV4OiAyMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIHtcXHJcXG4gIHotaW5kZXg6IDExMDAxO1xcclxcbn1cXHJcXG5cXHJcXG4jZHJvcGRvd25PdmVybGF5IHtcXHJcXG4gIHotaW5kZXg6IDExMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHotaW5kZXg6IDEwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICB6LWluZGV4OiAxMDAxO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhck92ZXJsYXkge1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZvY3VzZWRDYXJkT3ZlcmxheSB7XFxyXFxuICB6LWluZGV4OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5vdmVyZmxvdy1ib3R0b20sXFxyXFxuLm92ZXJmbG93LXRvcCB7XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIEhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgKiB7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaDF7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDAuM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAgNC41cmVtIDAgMC4yNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHRyYW5zaXRpb246IFxcclxcbiAgICB3aWR0aCAwLjVzIGVhc2UgMHMsIFxcclxcbiAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXFxyXFxuICAgIG9wYWNpdHkgMC41cyBlYXNlIDBzLCBcXHJcXG4gICAgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmhlYWRlciBoMXtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogXFxyXFxuICAgICAgd2lkdGggMC41cyBlYXNlIDBzLCBcXHJcXG4gICAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXFxyXFxuICAgICAgb3BhY2l0eSAwLjVzIGVhc2UgMHMsIFxcclxcbiAgICAgIHZpc2liaWxpdHkgMHMgZWFzZSAwLjVzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJveCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJveCBpbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbSAwIDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5zZWFyY2gtYm94IGlucHV0IHtcXHJcXG4gICAgbWFyZ2luOiAwLjI1cmVtXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcntcXHJcXG4gIGNvbG9yOiBsaWdodGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGdyZXk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyArIHN2ZyB7XFxyXFxuICBmaWxsOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJveCBzdmcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMC43NXJlbTtcXHJcXG4gIGhlaWdodDogMS43NXJlbTtcXHJcXG4gIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1ob3Zlcik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHN2ZyB7XFxyXFxuICBoZWlnaHQ6IDEuNzVyZW07XFxyXFxuICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvblNpZGViYXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvblVzZXIge1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5oZWFkZXIgLmJ1dHRvbixcXHJcXG4gICNidXR0b25TaWRlYmFyLFxcclxcbiAgI2J1dHRvblVzZXIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYnV0dG9uTm90aWZpY2F0aW9uLnNlYXJjaEJveC1mb2N1c2VkLFxcclxcbiAgI2J1dHRvblNldHRpbmdzLnNlYXJjaEJveC1mb2N1c2VkLFxcclxcbiAgI2J1dHRvblVzZXIuc2VhcmNoQm94LWZvY3VzZWQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uVXNlciBpbWcge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogU2lkZWJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XFxyXFxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxyXFxuICBtYXJnaW4tdG9wOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcclxcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci5zaWRlYmFyLWhpZGRlbiB7XFxyXFxuICBsZWZ0OiBjYWxjKC0xICogdmFyKC0tc2lkZWJhci13aWR0aCkpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBoNCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHAge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAuNzVyZW0gMDtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtIDAuMjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGU6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUgaDQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZSAuYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXRpdGxlIHN2ZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IC0wLjA1cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXRpdGxlIC5idXR0b246aG92ZXIgc3Zne1xcclxcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1ob3Zlcik7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXRpdGxlIC5idXR0b246YWN0aXZlIHN2Z3tcXHJcXG4gIGZpbGw6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgbGkge1xcclxcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcclxcbiAgY29sb3I6IGhzbCgwLCAwJSwgMjUlKTtcXHJcXG4gIGZpbGw6IGhzbCgwLCAwJSwgMjUlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBsaTpsYXN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGxpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBsaS5zZWxlY3RlZCxcXHJcXG4uc2lkZWJhciBsaTphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBsaSA+IHN2ZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDAuMXJlbTtcXHJcXG4gIGhlaWdodDogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiBNYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBtaW4td2lkdGg6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmc6IDEuMjVyZW0gMXJlbTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIxMHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoYXV0bywgMTAwJSk7XFxyXFxuICBnYXA6IDJyZW0gMC4yNXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXM7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5tYWluLnNpZGViYXItaGlkZGVuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhck92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLm1haW4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzaWRlYmFyT3ZlcmxheSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjU7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3NpZGViYXJPdmVybGF5LnNpZGViYXItaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA3MjBweDsgIFxcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMgaDIsXFxyXFxuLmNhcmRzIGgzIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIGgzIHtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLmFjdHVhbCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyBcXHJcXG4gIHBhZGRpbmc6IDAgMC42NXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxyXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi8gIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLmFjdHVhbDo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKiBXZWJLaXQgKi9cXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuY29udGFpbmVyLm9uZ29pbmcsXFxyXFxuLmNvbnRhaW5lci5jb21wbGV0ZWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci5vbmdvaW5nIC5jYXJkIC5idXR0b24uZG9uZSBzdmcuY2hlY2sge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5vbmdvaW5nIC5jYXJkIC5idXR0b24uZG9uZTpob3ZlciBzdmcuY2hlY2sge1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lOmFjdGl2ZSBzdmcuY2hlY2sge1xcclxcbiAgb3BhY2l0eTogMC41NTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kb25lIHN2Zy5jaGVjayB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmRvbmU6aG92ZXIgc3ZnLmNoZWNrIHtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kb25lOmFjdGl2ZSBzdmcuY2hlY2sge1xcclxcbiAgb3BhY2l0eTogMC4yNTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5hZGQge1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxyXFxuICBwYWRkaW5nOiAwIDAuNjVyZW07XFxyXFxufVxcclxcblxcclxcbi5vdmVyZmxvdy1ib3R0b20sXFxyXFxuLm92ZXJmbG93LXRvcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJmbG93LWJvdHRvbSA+IGRpdixcXHJcXG4ub3ZlcmZsb3ctdG9wID4gZGl2e1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5vdmVyZmxvdy10b3AgPiBkaXYge1xcclxcbiAgdG9wOiBjYWxjKDFyZW0gLSAxcHgpO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoMCwwLDAsMC4xNSkgMTAwJSk7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi5vdmVyZmxvdy10b3Aub3ZlcmZsb3dpbmcgPiBkaXYge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJmbG93LWJvdHRvbSA+IGRpdiB7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDAuMTUpIDEwMCUpO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmZsb3ctYm90dG9tLm92ZXJmbG93aW5nID4gZGl2IHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogQ2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5jYXJkLmFkZCBoNCB7XFxyXFxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luLXRvcDogdmFyKC0tY2FyZC1nYXApO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW0gMC4xNXJlbSAwLjc1cmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggbGlnaHRncmV5LCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7ICBcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgZWFzZSAwcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXSB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBoc2woMCwgMTAwJSwgNzUlKSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9aGlnaF0uZm9jdXNlZCxcXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdLmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IHJlZCwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBoc2woMzksIDEwMCUsIDc1JSksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PW1lZGl1bV0uZm9jdXNlZCxcXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PW1lZGl1bV0uaG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggb3JhbmdlLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1sb3ddIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGhzbCgxMjAsIDUwJSwgNjUlKSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bG93XS5mb2N1c2VkLFxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bG93XS5ob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCBncmVlbiwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1jb2xvci00KSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGg0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgIFxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBwIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBoNC5jb21wbGV0ZWQsXFxyXFxuLmNhcmQgcC5jb21wbGV0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogaHNsKDAsIDAlLCA3NSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5idXR0b24ge1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1idXR0b24td2lkdGgpO1xcclxcbiAgd2lkdGg6IHZhcigtLWJ1dHRvbi13aWR0aCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEuMzVyZW07ICBcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmJ1dHRvbiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuYnV0dG9uLmNsaWNrZWQgcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWFjdGl2ZSk7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLmhvdmVyIC5idXR0b24ge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC5ob3ZlciAuYnV0dG9uLmhvdmVyLFxcclxcbi5jYXJkLmhvdmVyIC5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1ob3Zlcik7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLmhvdmVyIC5idXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEtYWN0aXZlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmJ1dHRvbi5kdWVkYXRlLFxcclxcbi5jYXJkIC5idXR0b24ubGlzdCB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1pbi13aWR0aDogdmFyKC0tYnV0dG9uLXdpZHRoKTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC4xcmVtO1xcclxcbiAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIC5jYXJkIC5idXR0b24uZHVlZGF0ZSBwLFxcclxcbi5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5saXN0IHAge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogaHNsKDAsIDAlLCA3NSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuYnV0dG9uLmR1ZWRhdGUgcCxcXHJcXG4uY2FyZCAuYnV0dG9uLmxpc3QgcCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuYnV0dG9uLnByaW9yaXR5IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuYnV0dG9uLmRvbmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtMC42NXJlbTtcXHJcXG4gIGxlZnQ6IC0wLjY1cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjM1cmVtO1xcclxcbiAgd2lkdGg6IDEuMzVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5idXR0b24uZG9uZTpob3ZlciB7XFxyXFxuICB3aWR0aDogMS4zNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDA7ICBcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBzdmcge1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJ1dHRvbi13aWR0aCkgKiAwLjYyNSk7XFxyXFxuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmJ1dHRvbi5kb25lIHN2ZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgLmJ1dHRvbi5kb25lIHN2ZyxcXHJcXG4uY2FyZC5ob3ZlciAuYnV0dG9uLmRvbmU6aG92ZXIgc3ZnIHtcXHJcXG4gIGZpbGw6IHZhcigtLWNvbG9yLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PWhpZ2hdIC5idXR0b24uZG9uZSBzdmcsXFxyXFxuLmNhcmQuaG92ZXJbZGF0YS1wcmlvcml0eT1oaWdoXSAuYnV0dG9uLmRvbmUgc3ZnLFxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9aGlnaF0gLmJ1dHRvbi5wcmlvcml0eSBzdmcsXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1oaWdoXSAuYnV0dG9uLnByaW9yaXR5OmhvdmVyIHN2ZyB7XFxyXFxuICBmaWxsOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSAuYnV0dG9uLmRvbmUgc3ZnLFxcclxcbi5jYXJkLmhvdmVyW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSAuYnV0dG9uLmRvbmUgc3ZnLFxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bWVkaXVtXSAuYnV0dG9uLnByaW9yaXR5IHN2ZyxcXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PW1lZGl1bV0gLmJ1dHRvbi5wcmlvcml0eTpob3ZlciBzdmcgICB7XFxyXFxuICBmaWxsOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bG93XSAuYnV0dG9uLmRvbmUgc3ZnLFxcclxcbi5jYXJkLmhvdmVyW2RhdGEtcHJpb3JpdHk9bG93XSAuYnV0dG9uLmRvbmUgc3ZnLFxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9bG93XSAuYnV0dG9uLnByaW9yaXR5IHN2ZyxcXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PWxvd10gLmJ1dHRvbi5wcmlvcml0eTpob3ZlciBzdmcgICB7XFxyXFxuICBmaWxsOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQuaG92ZXIgLmJ1dHRvbjpob3ZlciBzdmcge1xcclxcbiAgZmlsbDogaHNsKDAsIDAlLCA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIENhcmQgQW5pbWF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ubW92aW5nLWRvd24ge1xcclxcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIHJldmVyc2UgZm9yd2FyZHMgY2FyZC1tb3ZlLWRvd247XFxyXFxufVxcclxcblxcclxcbi5tb3ZpbmctdXAge1xcclxcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIHJldmVyc2UgZm9yd2FyZHMgY2FyZC1tb3ZlLXVwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9jdXMtaW4ge1xcclxcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIGNhcmQtZm9jdXM7XFxyXFxufVxcclxcblxcclxcbi5mb2N1cy1vdXQge1xcclxcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIHJldmVyc2UgZm9yd2FyZHMgY2FyZC1mb2N1cztcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtaW4ge1xcclxcbiAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIGNhcmQtZmFkZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtb3V0IHtcXHJcXG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBjYXJkLWZhZGUtb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXNocmlua2luZyB7XFxyXFxuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgc2hyaW5rLWNvbnRhaW5lcjsgIFxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNhcmQtbW92ZS1kb3duIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjVyZW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS1tb3ZlLWRvd24tZGlzdGFuY2UpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjYXJkLW1vdmUtdXAge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLW1vdmUtdXAtZGlzdGFuY2UpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjYXJkLWZvY3VzIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tbW92ZS1YLWRpc3RhbmNlKSkgdHJhbnNsYXRlWSh2YXIoLS1tb3ZlLXVwLWRpc3RhbmNlKSkgc2NhbGUodmFyKC0tc2NhbGUtWCksIDAuNik7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApIHNjYWxlKDEsIDEpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNhcmQtZmFkZS1pbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjYXJkLWZhZGUtb3V0IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNocmluay1jb250YWluZXIge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1vdmUtdXAtZGlzdGFuY2UpICsgNXB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiBDYXJkIERyb3Bkb3ducyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLmRyb3Bkb3duIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogY2FsYyh2YXIoLS1kcm9wZG93bi10b3ApICsgdmFyKC0tYnV0dG9uLXdpZHRoKSAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXHJcXG4gIGxlZnQ6IGNhbGModmFyKC0tZHJvcGRvd24tbGVmdCkgLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XFxyXFxuICBwYWRkaW5nOiAwLjEyNXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTEpO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IGxpZ2h0Z3JleSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzOyAgXFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWhpZGRlbiAuZHJvcGRvd24ge1xcclxcbiAgbGVmdDogY2FsYyh2YXIoLS1kcm9wZG93bi1sZWZ0KSk7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi52aXNpYmlsaXR5LWhpZGRlbiB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7ICBcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biBsYWJlbCB7XFxyXFxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjI1cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIGxhYmVsOmhvdmVyLFxcclxcbi5kcm9wZG93biBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIgIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24gbGFiZWw6YWN0aXZlLFxcclxcbi5kcm9wZG93biBpbnB1dDpjaGVja2VkICsgbGFiZWwsXFxyXFxuLmRyb3Bkb3duIGlucHV0OmNoZWNrZWQgKyBsYWJlbDphY3RpdmUgIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLmxpc3QgaW5wdXQsXFxyXFxuLmRyb3Bkb3duLnByaW9yaXR5IGlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biBsYWJlbFtmb3I9cHJpb3JpdHlIaWdoXSBzdmd7XFxyXFxuICBmaWxsOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biBsYWJlbFtmb3I9cHJpb3JpdHlNZWRpdW1dIHN2Z3tcXHJcXG4gIGZpbGw6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIGxhYmVsW2Zvcj1wcmlvcml0eUxvd10gc3Zne1xcclxcbiAgZmlsbDogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biBzdmd7XFxyXFxuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biBzdmcge1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24gcCB7XFxyXFxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi5kdWVkYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24uZHVlZGF0ZSBwIHtcXHJcXG4gIG1hcmdpbjogMCAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi5kdWVkYXRlIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA2LjI1cmVtO1xcclxcbiAgcGFkZGluZzogMC4xMjVyZW0gMC4yNXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDI1JSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24uZHVlZGF0ZSBpbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZHJvcGRvd25PdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxyXFxufVxcclxcblxcclxcbiNkcm9wZG93bk92ZXJsYXkudmlzaWJpbGl0eS1oaWRkZW4ge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIENhcmQgT3ZlcmxheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4jZm9jdXNlZENhcmRPdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9jdXNlZENhcmRPdmVybGF5LnZpc2liaWxpdHktaGlkZGVuIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcXHJcXG59XFxyXFxuXFxyXFxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAud3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogOTAwcHg7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQuZm9jdXNlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9jdXNlZENhcmRPdmVybGF5IC5jYXJkIC5idXR0b24ge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAuc3VibWl0LWNvbnRhaW5lciB7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLnN1Ym1pdC1jb250YWluZXIgLmJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxyXFxuICBjb2xvcjogZGltZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWw6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvbkZvY3VzZWRDYXJkU3VibWl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvbkZvY3VzZWRDYXJkU3VibWl0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQ6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0VGFza1RpdGxlLFxcclxcbiNpbnB1dFRhc2tEZXNjcmlwdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXRUYXNrVGl0bGU6Zm9jdXMsXFxyXFxuI2lucHV0VGFza0Rlc2NyaXB0aW9uOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEtaG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXRUYXNrVGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXRUYXNrRGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICByZXNpemU6IG5vbmU7ICBcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiBjYWxjKCgxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKSAqIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogTG9hZCBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNsb2FkT3ZlcmxheSB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4yNXMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjM1cztcXHJcXG59XFxyXFxuXFxyXFxuLnByZWxvYWQgKiB7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgLW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiBMb2dpbiBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5sb2dpbi1vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLW92ZXJsYXkgaDEge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHRyYW5zaXRpb246IFxcclxcbiAgICB3aWR0aCAwLjVzIGVhc2UgMHMsIFxcclxcbiAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXFxyXFxuICAgIG9wYWNpdHkgMC41cyBlYXNlIDBzLCBcXHJcXG4gICAgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1vdmVybGF5IC5mb3JtIHtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tb3ZlcmxheSAuZm9ybSBpbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLW92ZXJsYXkgYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGhzbGEoMCwgMCUsIDAlLCAwLjI1MCk7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1vdmVybGF5IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLW92ZXJsYXkgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWFjdGl2ZSk7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1vdmVybGF5IC5mb3JtLWVycm9yIHtcXHJcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLW92ZXJsYXktYm90dG9tIHtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1vdmVybGF5IC5uZXctYWNjb3VudC1idG4ge1xcclxcbiAgd2lkdGg6IDE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tb3ZlcmxheSBidXR0b24ubG9hZGluZyB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgOTBkZWcsXFxyXFxuICAgIHJnYig4NCwgMTg2LCAxODUpIDAlLCBcXHJcXG4gICAgcmdiKDg0LCAxODYsIDE4NSkgMjUlLCBcXHJcXG4gICAgaHNsKDE3OSwgNDMlLCA2NSUpIDUwJSwgXFxyXFxuICAgIHJnYig4NCwgMTg2LCAxODUpIDc1JSwgXFxyXFxuICAgIHJnYig4NCwgMTg2LCAxODUpIDEwMCUpOyBcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcXHJcXG4gIGFuaW1hdGlvbjogbG9hZGluZyAwLjVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2FkaW5nIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb21vcnJvd1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9tb3Jyb3dcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNyBPY3RvYmVyIDE0OjAwOjAwIHRvbW9ycm93P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb21vcnJvdyhuZXcgRGF0ZSgyMDE0LCA5LCA3LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb21vcnJvdyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBhZGREYXlzKERhdGUubm93KCksIDEpKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5saXN0ID0gJ0hvbWUnO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gJyc7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUYXNrQ29tcGxldGlvbigpIHtcclxuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0aGlzLmlzQ29tcGxldGVkID8gZmFsc2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0VGFza1ByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzZXRUYXNrTGlzdChsaXN0KSB7XHJcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gIH1cclxuXHJcbiAgc2V0VGFza0R1ZURhdGUoZGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRlbXBvcmFyaWx5IGZpbGwgdGFza3NcclxuY29uc3QgdGFza3MgPSBbXHJcbiAgbmV3IFRhc2soXCJCdXkgZ3JvY2VyaWVzXCIsIFwiR2V0IG1pbGssIGVnZ3MsIGJyZWFkLCBhbmQgdmVnZXRhYmxlcyBmcm9tIHRoZSBzdXBlcm1hcmtldC5cIiwgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKSxcclxuICBuZXcgVGFzayhcIkZpbmlzaCByZXBvcnQgZm9yIHdvcmtcIiwgXCJDb21waWxlIHRoZSBzYWxlcyBkYXRhIGFuZCB3cml0ZSBhIHN1bW1hcnkgZm9yIHRoZSBxdWFydGVybHkgcmVwb3J0LlwiLCBEYXRlLm5vdygpICsgMTIzKSxcclxuICBuZXcgVGFzayhcIkNhbGwgTW9tXCIsIFwiQ2F0Y2ggdXAgd2l0aCBNb20gYW5kIGNoZWNrIGhvdyBzaGUncyBkb2luZy5cIiwgRGF0ZS5ub3coKSArIDExMDIpLFxyXG4gIG5ldyBUYXNrKFwiR28gZm9yIGEgam9nXCIsIFwiUnVuIGZvciAzMCBtaW51dGVzIGFyb3VuZCB0aGUgcGFyayB0byBzdGF5IGFjdGl2ZS5cIiwgRGF0ZS5ub3coKSArIDIzMjMpLFxyXG4gIG5ldyBUYXNrKFwiUmVhZCBhIGJvb2tcIiwgXCJTdGFydCByZWFkaW5nICdUaGUgR3JlYXQgR2F0c2J5JyBieSBGLiBTY290dCBGaXR6Z2VyYWxkLlwiLCBEYXRlLm5vdygpICsgNDI0MiksXHJcbiAgbmV3IFRhc2soXCJDbGVhbiB0aGUgZ2FyYWdlXCIsIFwiT3JnYW5pemUgYW5kIGRlY2x1dHRlciB0aGUgZ2FyYWdlIHNwYWNlLlwiLCBEYXRlLm5vdygpICsgMTI1MTIpLFxyXG4gIG5ldyBUYXNrKFwiUGF5IHV0aWxpdHkgYmlsbHNcIiwgXCJTZXR0bGUgZWxlY3RyaWNpdHksIHdhdGVyLCBhbmQgaW50ZXJuZXQgYmlsbHMgZm9yIHRoZSBtb250aC5cIiwgRGF0ZS5ub3coKSArIDQwMDAwKSxcclxuICBuZXcgVGFzayhcIlBsYW4gd2Vla2VuZCB0cmlwXCIsIFwiUmVzZWFyY2ggZGVzdGluYXRpb25zIGFuZCBjcmVhdGUgYW4gaXRpbmVyYXJ5IGZvciB0aGUgd2Vla2VuZCBnZXRhd2F5LlwiLCBEYXRlLm5vdygpICsgNTEyNDMpLFxyXG4gIG5ldyBUYXNrKFwiVXBkYXRlIHJlc3VtZVwiLCBcIkFkZCByZWNlbnQgd29yayBleHBlcmllbmNlcyBhbmQgc2tpbGxzIHRvIHRoZSByZXN1bWUuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCksXHJcbiAgbmV3IFRhc2soXCJQcmFjdGljZSBndWl0YXJcIiwgXCJTcGVuZCAxIGhvdXIgcHJhY3RpY2luZyBjaG9yZHMgYW5kIHNjYWxlcyBvbiB0aGUgZ3VpdGFyLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiAyKyA1MTI1KSxcclxuICBuZXcgVGFzayhcIk9yZ2FuaXplIGRpZ2l0YWwgZmlsZXNcIiwgXCJTb3J0IGFuZCBhcnJhbmdlIGRvY3VtZW50cyBhbmQgcGhvdG9zIG9uIHRoZSBjb21wdXRlci5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogMyArIDEyMDUxMiksXHJcbiAgbmV3IFRhc2soXCJXYXRlciB0aGUgcGxhbnRzXCIsIFwiR2l2ZSB0aGUgaW5kb29yIGFuZCBvdXRkb29yIHBsYW50cyBhIGdvb2Qgd2F0ZXJpbmcuXCIsIERhdGUubm93KCkgKyA4NjQwMDAwMCAqIDQgKyAxMjA1MjQpLFxyXG4gIG5ldyBUYXNrKFwiQXR0ZW5kIHlvZ2EgY2xhc3NcIiwgXCJKb2luIHRoZSBldmVuaW5nIHlvZ2Egc2Vzc2lvbiBhdCB0aGUgbG9jYWwgc3R1ZGlvLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiA0ICsgMTIwNTM2KSxcclxuICBuZXcgVGFzayhcIkZpeCBsZWFraW5nIGZhdWNldFwiLCBcIkNhbGwgdGhlIHBsdW1iZXIgb3IgYXR0ZW1wdCB0byByZXBhaXIgdGhlIGZhdWNldCB5b3Vyc2VsZi5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNSArIDEyMDczOCksXHJcbiAgbmV3IFRhc2soXCJXYXRjaCBhIGRvY3VtZW50YXJ5XCIsIFwiUGljayBhbiBpbnRlcmVzdGluZyBkb2N1bWVudGFyeSBhbmQgbGVhcm4gc29tZXRoaW5nIG5ldy5cIiwgRGF0ZS5ub3coKSArIDg2NDAwMDAwICogNSAgKyAxMjI2MjYpLFxyXG4gIG5ldyBUYXNrKFwiU3RhcnQgbGVhcm5pbmcgYSBsYW5ndWFnZVwiLCBcIkRvd25sb2FkIGxhbmd1YWdlIGxlYXJuaW5nIGFwcCBhbmQgYmVnaW4gd2l0aCBiYXNpYyBwaHJhc2VzLlwiLCBEYXRlLm5vdygpICsgODY0MDAwMDAgKiA2KSxcclxuXTtcclxuXHJcbi8vIHRlbXBvcmFyeSB2YWx1ZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbnRhc2tzWzBdLnNldFRhc2tQcmlvcml0eSgnaGlnaCcpO1xyXG50YXNrc1sxXS5zZXRUYXNrUHJpb3JpdHkoJ2hpZ2gnKTtcclxudGFza3NbMl0uc2V0VGFza1ByaW9yaXR5KCdtZWRpdW0nKTtcclxudGFza3NbM10udG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcclxudGFza3NbNF0udG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcclxudGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2suZHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suaW5kZXgpKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKHRhc2tzKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcblxyXG5jb25zdCBnZXRUYXNrcyA9ICgpID0+IHRhc2tzO1xyXG5cclxuY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4ge1xyXG4gIHJldHVybiB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmluZGV4ID09IGluZGV4KVswXTtcclxufVxyXG5cclxuY29uc3QgYWRkVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSA9PiB7XHJcbiAgdGFza3MucHVzaChuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSk7XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZVRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrKGluZGV4KTtcclxuICB0YXNrLnRpdGxlID0gdGl0bGU7XHJcbiAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG5jb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgdGFza3Muc3BsaWNlKHRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpLCAxKTtcclxufVxyXG5cclxuY29uc3QgZG9lc1Rhc2tFeGlzdCA9IChpbmRleCkgPT4ge1xyXG4gIHJldHVybiB0YXNrcy5zb21lKHRhc2sgPT4gdGFzay5pbmRleCA9PSBpbmRleCk7XHJcbn1cclxuXHJcbmNvbnN0IGxpc3RzID0gW1xyXG4gICdIb21lJyxcclxuICAnV29yaycsXHJcbl07XHJcblxyXG5jb25zdCBnZXRMaXN0cyA9ICgpID0+IGxpc3RzO1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRUYXNrLFxyXG4gIGdldFRhc2tzLFxyXG4gIGFkZFRhc2ssXHJcbiAgdXBkYXRlVGFzayxcclxuICBkZWxldGVUYXNrLFxyXG4gIGRvZXNUYXNrRXhpc3QsXHJcbiAgZ2V0TGlzdHMsXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgKiBhcyB0b2RvbGlzdCBmcm9tICcuL3RvZG9saXN0LmpzJztcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5pbXBvcnQgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc1RvZGF5J1xyXG5pbXBvcnQgaXNUb21vcnJvdyBmcm9tICdkYXRlLWZucy9pc1RvbW9ycm93J1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbi8vIEhlYWRlciBFbGVtZW50cyBcclxuY29uc3QgYnV0dG9uU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25TaWRlYmFyJyk7XHJcbmNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCb3gnKTtcclxuY29uc3QgYnV0dG9uTm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbk5vdGlmaWNhdGlvbicpO1xyXG5jb25zdCBidXR0b25TZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25TZXR0aW5ncycpO1xyXG5jb25zdCBidXR0b25Vc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvblVzZXInKTtcclxuXHJcbi8vIENhcmQgRWxlbWVudHNcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbmNvbnN0IGZvY3VzZWRDYXJkT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb2N1c2VkQ2FyZE92ZXJsYXknKTtcclxuY29uc3QgZm9jdXNlZENhcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvY3VzZWRDYXJkT3ZlcmxheSA+IC53cmFwcGVyJyk7XHJcbmNvbnN0IGRyb3Bkb3duT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bk92ZXJsYXknKTtcclxuY29uc3QgZHJvcGRvd25EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLmR1ZWRhdGUnKTtcclxuY29uc3QgZHJvcGRvd25EdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZUlucHV0Jyk7XHJcbmNvbnN0IGRyb3Bkb3duTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi5saXN0Jyk7XHJcbmNvbnN0IGRyb3Bkb3duUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24ucHJpb3JpdHknKTtcclxuY29uc3QgZHJvcGRvd25Qcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlIaWdoJyk7XHJcbmNvbnN0IGRyb3Bkb3duUHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlNZWRpdW0nKTtcclxuY29uc3QgZHJvcGRvd25Qcmlvcml0eUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUxvdycpO1xyXG5jb25zdCBkcm9wZG93blByaW9yaXR5Tm9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eU5vbmUnKTtcclxuXHJcbi8vIEZvY3VzZWQgQ2FyZCBFbGVtZW50c1xyXG5jb25zdCBpbnB1dFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tUaXRsZScpO1xyXG5jb25zdCBpbnB1dFRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tEZXNjcmlwdGlvbicpO1xyXG5jb25zdCBidXR0b25Gb2N1c2VkQ2FyZER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uRm9jdXNlZENhcmREdWVEYXRlJyk7XHJcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Gb2N1c2VkQ2FyZExpc3QnKTtcclxuY29uc3QgYnV0dG9uRm9jdXNlZENhcmRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Gb2N1c2VkQ2FyZFByaW9yaXR5Jyk7XHJcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkRGVsZXRlJyk7XHJcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkU3VibWl0Jyk7XHJcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsJyk7XHJcbmNvbnN0IGZvY3VzZWRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvY3VzZWRDYXJkJyk7XHJcblxyXG4vLyBTaWRlIEJhciBFbGVtZW50c1xyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuY29uc3Qgc2lkZWJhck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhck92ZXJsYXknKTtcclxuY29uc3QgdG9kb3NUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2Rvc1RvZGF5Jyk7XHJcbmNvbnN0IHRvZG9zTmV4dDdEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9zTmV4dDdEYXlzJyk7XHJcbmNvbnN0IHRvZG9zQ2FsZW5kYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb3NDYWxlbmRhcicpO1xyXG5cclxuLy8gT3RoZXIgVmFyaWFibGVzXHJcbmxldCB0b2Rvc1Nob3dNb2RlID0gXCJ0b2RheVwiO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLy8gQ2FyZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmNvbnN0IGdlbmVyYXRlVG9kb0xpc3QgPSAoKSA9PiB7XHJcbiAgcmVtb3ZlQ2FyZHNDb250YWluZXIoKTtcclxuXHJcbiAgaWYgKHRvZG9zU2hvd01vZGUgPT09IFwidG9kYXlcIikge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKGRhdGUpO1xyXG4gIH0gXHJcblxyXG4gIGVsc2UgaWYgKHRvZG9zU2hvd01vZGUgPT09IFwiNyBkYXlzXCIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBpKTtcclxuICAgICAgZ2VuZXJhdGVDYXJkc0NvbnRhaW5lcihkYXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICBcclxuICAvLyBlbHNlIGlmICh0b2Rvc1Nob3dNb2RlID09PSBcImNhbGVuZGFyXCIpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdDYWxlbmRhciBNb2RlIScpXHJcbiAgLy8gfVxyXG5cclxuICBmaWxsQ2FyZHNDb250YWluZXIoKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLmFjdHVhbCcpLmZvckVhY2goY29udGFpbmVyID0+IHtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVDYXJkc0NvbnRhaW5lck92ZXJmbG93R3JhZGllbnQpO1xyXG4gICAgdG9nZ2xlQ2FyZHNDb250YWluZXJPdmVyZmxvd0dyYWRpZW50KGNvbnRhaW5lcik7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVDYXJkc0NvbnRhaW5lciA9IChkYXRlKSA9PiB7XHJcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xyXG4gIFxyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBpZiAoaXNUb2RheShkYXRlKSkge1xyXG4gICAgaDIudGV4dENvbnRlbnQgPSAnVG9kYXknO1xyXG4gIH0gXHJcbiAgZWxzZSBpZiAoaXNUb21vcnJvdyhkYXRlKSkge1xyXG4gICAgaDIudGV4dENvbnRlbnQgPSAnVG9tb3Jyb3cnO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGgyLnRleHRDb250ZW50ID0gZm9ybWF0KGRhdGUsICdFRUVFJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaDMudGV4dENvbnRlbnQgPSBmb3JtYXQoZGF0ZSwgJ01NTU0gZCwgeScpO1xyXG5cclxuICBjb25zdCBvdmVyZmxvd1RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IG92ZXJmbG93VG9wSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvdmVyZmxvd1RvcC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy10b3AnKTtcclxuICBvdmVyZmxvd1RvcC5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuICBvdmVyZmxvd1RvcC5hcHBlbmRDaGlsZChvdmVyZmxvd1RvcElubmVyKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyQWN0dWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29udGFpbmVyT25nb2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvbnRhaW5lckNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lck9uZ29pbmcuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgY29udGFpbmVyT25nb2luZy5jbGFzc0xpc3QuYWRkKCdvbmdvaW5nJyk7XHJcbiAgY29udGFpbmVyT25nb2luZy5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuICBjb250YWluZXJDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgY29udGFpbmVyQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gIGNvbnRhaW5lckNvbXBsZXRlZC5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuICBjb250YWluZXJBY3R1YWwuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgY29udGFpbmVyQWN0dWFsLmNsYXNzTGlzdC5hZGQoJ2FjdHVhbCcpO1xyXG4gIGNvbnRhaW5lckFjdHVhbC5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuICBjb250YWluZXJBY3R1YWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyT25nb2luZyk7XHJcbiAgY29udGFpbmVyQWN0dWFsLmFwcGVuZENoaWxkKGNvbnRhaW5lckNvbXBsZXRlZCk7XHJcblxyXG4gIGNvbnN0IG92ZXJmbG93Qm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgb3ZlcmZsb3dCb3R0b21Jbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG92ZXJmbG93Qm90dG9tLmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWJvdHRvbScpO1xyXG4gIG92ZXJmbG93Qm90dG9tLmRhdGFzZXQuZGF0ZSA9IGZvcm1hdChkYXRlLCAneXl5eS9NTS9kZCcpO1xyXG4gIG92ZXJmbG93Qm90dG9tLmFwcGVuZENoaWxkKG92ZXJmbG93Qm90dG9tSW5uZXIpO1xyXG5cclxuICBjb25zdCBjb250YWluZXJBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXJBZGQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgY29udGFpbmVyQWRkLmNsYXNzTGlzdC5hZGQoJ2FkZCcpO1xyXG4gIGNvbnRhaW5lckFkZC5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuXHJcbiAgY29uc3QgY2FyZEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRBZGQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gIGNhcmRBZGQuY2xhc3NMaXN0LmFkZCgnYWRkJyk7XHJcbiAgY2FyZEFkZC5kYXRhc2V0LmRhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbkRvbmUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uRG9uZS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcblxyXG4gIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uRG9uZS5hcHBlbmRDaGlsZChkdW1teSk7XHJcblxyXG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICBoNC50ZXh0Q29udGVudCA9ICdBZGQgdGFzay4uLic7XHJcblxyXG4gIGNhcmRBZGQuYXBwZW5kQ2hpbGQoYnV0dG9uRG9uZSk7XHJcbiAgY2FyZEFkZC5hcHBlbmRDaGlsZChoNCk7XHJcbiAgY2FyZEFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dGb2N1c2VkQ2FyZCk7XHJcbiAgY2FyZEFkZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJDYXJkKTtcclxuICBcclxuICBjb250YWluZXJBZGQuYXBwZW5kQ2hpbGQoY2FyZEFkZCk7XHJcbiAgXHJcbiAgY2FyZHMuYXBwZW5kQ2hpbGQoaDIpO1xyXG4gIGNhcmRzLmFwcGVuZENoaWxkKGgzKTtcclxuICBjYXJkcy5hcHBlbmRDaGlsZChvdmVyZmxvd1RvcCk7XHJcbiAgY2FyZHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyQWN0dWFsKTtcclxuICBjYXJkcy5hcHBlbmRDaGlsZChvdmVyZmxvd0JvdHRvbSk7XHJcbiAgY2FyZHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyQWRkKTtcclxuXHJcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkcyk7XHJcbiAgXHJcbiAgZHVtbXkub3V0ZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+cGx1cy1jaXJjbGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEzLDdIMTFWMTFIN1YxM0gxMVYxN0gxM1YxM0gxN1YxMUgxM1Y3WlwiIC8+PC9zdmc+YFxyXG59XHJcblxyXG5jb25zdCByZW1vdmVDYXJkc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBjYXJkc0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHMnKVxyXG4gIGNhcmRzQ29udGFpbmVycy5mb3JFYWNoKGNhcmRzQ29udGFpbmVyID0+IGNhcmRzQ29udGFpbmVyLnJlbW92ZSgpKTtcclxufVxyXG5cclxuY29uc3QgZmlsbENhcmRzQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIHRvZG9saXN0LmdldFRhc2tzKCkuZm9yRWFjaChnZW5lcmF0ZUNhcmQpO1xyXG59XHJcblxyXG5jb25zdCBjbGVhckNhcmRzQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhcmRzQWN0dWFsQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jYXJkcyAuY29udGFpbmVyLmFjdHVhbGApO1xyXG5cclxuICBjYXJkc0FjdHVhbENvbnRhaW5lcnMuZm9yRWFjaChjYXJkc0FjdHVhbENvbnRhaW5lciA9PiB7XHJcbiAgICBjYXJkc0FjdHVhbENvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICB3aGlsZSAoY2hpbGQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLnJlbW92ZUNoaWxkKGNoaWxkLmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCByZWdlbmVyYXRlQ2FyZHNDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY2xlYXJDYXJkc0NvbnRhaW5lcigpO1xyXG4gIGZpbGxDYXJkc0NvbnRhaW5lcigpO1xyXG4gIGluaXRpYWxpemVDYXJkc0NvbnRhaW5lck92ZXJmbG93R3JhZGllbnQoKTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbGl6ZUNhcmRzQ29udGFpbmVyT3ZlcmZsb3dHcmFkaWVudCA9ICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLmFjdHVhbCcpLmZvckVhY2goY29udGFpbmVyID0+IHtcclxuICAgIHRvZ2dsZUNhcmRzQ29udGFpbmVyT3ZlcmZsb3dHcmFkaWVudChjb250YWluZXIpXHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUNhcmRzQ29udGFpbmVyT3ZlcmZsb3dHcmFkaWVudCA9IChlKSA9PiB7XHJcbiAgLy8gVXNlIGUgaWYgY29udGFpbmVyIGlzIHBhc3NlZCBpbnN0ZWFkIG9mIHNjcm9sbCBldmVudFxyXG4gIGNvbnN0IGNvbnRhaW5lckFjdHVhbCA9IGUuY3VycmVudFRhcmdldCA/IGUuY3VycmVudFRhcmdldCA6IGU7XHJcblxyXG4gIGNvbnN0IG92ZXJmbG93VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm92ZXJmbG93LXRvcFtkYXRhLWRhdGU9XCIke2NvbnRhaW5lckFjdHVhbC5kYXRhc2V0LmRhdGV9XCJdYCk7XHJcbiAgY29uc3Qgb3ZlcmZsb3dCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAub3ZlcmZsb3ctYm90dG9tW2RhdGEtZGF0ZT1cIiR7Y29udGFpbmVyQWN0dWFsLmRhdGFzZXQuZGF0ZX1cIl1gKTtcclxuICBsZXQgc2Nyb2xsVG9wID0gY29udGFpbmVyQWN0dWFsLnNjcm9sbFRvcDtcclxuICBsZXQgc2Nyb2xsQm90dG9tID0gY29udGFpbmVyQWN0dWFsLnNjcm9sbEhlaWdodCAtIFxyXG4gICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBY3R1YWwuc2Nyb2xsVG9wIC0gXHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFjdHVhbC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gIGlmIChzY3JvbGxUb3AgPiAwKSB7XHJcbiAgICBzY3JvbGxUb3AgPSAgc2Nyb2xsVG9wID4gMTYgPyAxNiA6IHNjcm9sbFRvcDtcclxuICAgIGNvbnRhaW5lckFjdHVhbC5zdHlsZS5tYXJnaW5Ub3AgPSBgJHtzY3JvbGxUb3B9cHhgO1xyXG4gICAgb3ZlcmZsb3dUb3AuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3dpbmcnKTtcclxuICB9XHJcbiAgZWxzZSBpZiAoc2Nyb2xsVG9wID09PSAwKSB7XHJcbiAgICBvdmVyZmxvd1RvcC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvd2luZycpO1xyXG4gICAgY29udGFpbmVyQWN0dWFsLnN0eWxlLm1hcmdpblRvcCA9IGAwcHhgO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNjcm9sbEJvdHRvbSA+PSAxKSB7XHJcbiAgICBvdmVyZmxvd0JvdHRvbS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvd2luZycpO1xyXG4gIH1cclxuICBlbHNlIGlmIChzY3JvbGxCb3R0b20gPCAxKSB7XHJcbiAgICBvdmVyZmxvd0JvdHRvbS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvd2luZycpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2FyZEluZGV4KGUpIHtcclxuICBsZXQgY2FyZEluZGV4O1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKVxyXG4gICAgLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgIGlmIChjYXJkLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgIGNhcmRJbmRleCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICByZXR1cm4gY2FyZEluZGV4O1xyXG59XHJcblxyXG5jb25zdCBjYXJkQ29vcmRpbmF0ZXMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGNhcmRzID0gW107XHJcblxyXG4gIGNvbnN0IHNldEJlZm9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRDYXJkcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyOm5vdCguYWRkKSAuY2FyZCcpXTtcclxuICAgIGNhcmRzLnB1c2goLi4uY3VycmVudENhcmRzLm1hcChjYXJkID0+ICh7XHJcbiAgICAgIGluZGV4OiBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpLFxyXG4gICAgICBiZWZvcmU6IGNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICB9KSkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0QWZ0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50Q2FyZHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lcjpub3QoLmFkZCkgLmNhcmQnKV07XHJcbiAgICBjdXJyZW50Q2FyZHMuZm9yRWFjaChjdXJyZW50Q2FyZCA9PiB7XHJcbiAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpID09PSBjYXJkLmluZGV4KSB7XHJcbiAgICAgICAgICBjYXJkLmFmdGVyID0gY3VycmVudENhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDYXJkID0gKGNhcmRJbmRleCkgPT4ge1xyXG4gICAgbGV0IG1hdGNoaW5nQ2FyZDtcclxuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgIGlmIChjYXJkLmluZGV4ID09PSBjYXJkSW5kZXgpIHtcclxuICAgICAgICBtYXRjaGluZ0NhcmQgPSBjYXJkO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG1hdGNoaW5nQ2FyZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjYXJkcy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNldEJlZm9yZSxcclxuICAgIHNldEFmdGVyLFxyXG4gICAgZ2V0Q2FyZCxcclxuICAgIGNsZWFyQ2FyZHMsXHJcbiAgfVxyXG59KSgpXHJcblxyXG5jb25zdCBjb21wbGV0ZUNhcmQgPSAoZSkgPT4ge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY29uc3QgaW5kZXggPSBnZXRDYXJkSW5kZXgoZSk7XHJcbiAgY29uc3QgdGFzayA9IHRvZG9saXN0LmdldFRhc2soaW5kZXgpO1xyXG5cclxuICBjYXJkQ29vcmRpbmF0ZXMuc2V0QmVmb3JlKCk7XHJcblxyXG4gIHRhc2sudG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcclxuICByZWdlbmVyYXRlQ2FyZHNDb250YWluZXIoKTtcclxuXHJcbiAgY2FyZENvb3JkaW5hdGVzLnNldEFmdGVyKCk7XHJcbiAgYW5pbWF0ZUNvbXBsZXRlQ2FyZChpbmRleCk7XHJcbiAgY2FyZENvb3JkaW5hdGVzLmNsZWFyQ2FyZHMoKTtcclxufVxyXG5cclxuY29uc3QgYW5pbWF0ZUNvbXBsZXRlQ2FyZCA9IChjYXJkSW5kZXgpID0+IHtcclxuICBjb25zdCBtb3ZpbmdDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7Y2FyZEluZGV4fVwiXWApOyBcclxuICBjb25zdCBkb3duRGlzdGFuY2UgPSBcclxuICAgIGNhcmRDb29yZGluYXRlcy5nZXRDYXJkKGNhcmRJbmRleCkuYmVmb3JlLnRvcCAtIFxyXG4gICAgY2FyZENvb3JkaW5hdGVzLmdldENhcmQoY2FyZEluZGV4KS5hZnRlci50b3A7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLWRvd24tZGlzdGFuY2UnLCBgJHtkb3duRGlzdGFuY2V9cHhgKTsgIFxyXG4gIG1vdmluZ0NhcmQuY2xhc3NMaXN0LmFkZCgnbW92aW5nLWRvd24nKTtcclxuICBtb3ZpbmdDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PiB7XHJcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnbW92aW5nLWRvd24nKSAgICAgIFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvdGhlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNvbnRhaW5lcjpub3QoLmFkZCkgLmNhcmQ6bm90KFtkYXRhLWluZGV4PVwiJHtjYXJkSW5kZXh9XCJdKWApO1xyXG4gIG90aGVyQ2FyZHMuZm9yRWFjaChvdGhlckNhcmQgPT4ge1xyXG4gICAgY29uc3QgdXBEaXN0YW5jZSA9IFxyXG4gICAgICBjYXJkQ29vcmRpbmF0ZXMuZ2V0Q2FyZChvdGhlckNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpLmJlZm9yZS50b3AgLSBcclxuICAgICAgY2FyZENvb3JkaW5hdGVzLmdldENhcmQob3RoZXJDYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKS5hZnRlci50b3A7XHJcbiAgICBpZiAodXBEaXN0YW5jZSA9PT0gMCkgcmV0dXJuO1xyXG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLXVwLWRpc3RhbmNlJywgYCR7dXBEaXN0YW5jZX1weGApO1xyXG4gICAgb3RoZXJDYXJkLmNsYXNzTGlzdC5hZGQoJ21vdmluZy11cCcpO1xyXG4gICAgb3RoZXJDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PiB7XHJcbiAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZpbmctdXAnKSAgICAgIFxyXG4gICAgfSk7XHJcbiAgfSk7ICBcclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVDYXJkID0gKHRhc2spID0+IHtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xyXG4gIGxldCBkdWVEYXRlID0gdGFzay5kdWVEYXRlO1xyXG5cclxuICAvLyBGb3Igb3ZlcmR1ZSB0YXNrc1xyXG4gIGlmIChkdWVEYXRlIDwgdG9kYXkpIHtcclxuICAgIGR1ZURhdGUgPSB0b2RheTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhcmRzT25nb2luZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkcyAuY29udGFpbmVyLm9uZ29pbmdbZGF0YS1kYXRlPVwiJHtmb3JtYXQoZHVlRGF0ZSwgJ3l5eXkvTU0vZGQnKX1cIl1gKTtcclxuICBjb25zdCBjYXJkc0NvbXBsZXRlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkcyAuY29udGFpbmVyLmNvbXBsZXRlZFtkYXRhLWRhdGU9XCIke2Zvcm1hdChkdWVEYXRlLCAneXl5eS9NTS9kZCcpfVwiXWApO1xyXG5cclxuICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIGNvbnRhaW5lciBmb3IgdGhlIGN1cnJlbnQgdGFzayB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIGR1ZSBkYXRlXHJcbiAgaWYgKCFjYXJkc09uZ29pbmdDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gIGNhcmQuZGF0YXNldC5pbmRleCA9IHRhc2suaW5kZXg7XHJcbiAgY2FyZC5kYXRhc2V0LnByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcclxuICBjYXJkLmRhdGFzZXQubGlzdCA9IHRhc2subGlzdDtcclxuICBjYXJkLmRhdGFzZXQuZHVlRGF0ZSA9IHRhc2suZHVlRGF0ZTtcclxuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0ZvY3VzZWRDYXJkKTtcclxuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBob3ZlckNhcmQpO1xyXG5cclxuICBjb25zdCBidXR0b25Eb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uRG9uZS5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICBidXR0b25Eb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuICBidXR0b25Eb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tcGxldGVDYXJkKTsgXHJcblxyXG4gIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZHVtbXkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uRG9uZS5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgYnV0dG9uRG9uZS5hcHBlbmRDaGlsZChkdW1teTIpO1xyXG4gIFxyXG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICBoNC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuXHJcbiAgaWYgKHRhc2suaXNDb21wbGV0ZWQpIHtcclxuICAgIGg0LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpOyAgXHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpOyAgICBcclxuICAgIGR1bW15Lm91dGVySFRNTCA9IGA8c3ZnIHN0eWxlPVwiXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2lyY2xlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMjBBOCw4IDAgMCwxIDQsMTJBOCw4IDAgMCwxIDEyLDRBOCw4IDAgMCwxIDIwLDEyQTgsOCAwIDAsMSAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPmA7XHJcbiAgICBkdW1teTIub3V0ZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJjaGVja1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNoZWNrLWNpcmNsZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMiAyMEM3LjU5IDIwIDQgMTYuNDEgNCAxMlM3LjU5IDQgMTIgNCAyMCA3LjU5IDIwIDEyIDE2LjQxIDIwIDEyIDIwTTE2LjU5IDcuNThMMTAgMTQuMTdMNy40MSAxMS41OUw2IDEzTDEwIDE3TDE4IDlMMTYuNTkgNy41OFpcIiAvPjwvc3ZnPmA7XHJcbiAgfVxyXG4gIGVsc2UgeyAgIFxyXG4gICAgaDQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7ICBcclxuICAgIHAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7ICAgIFxyXG4gICAgZHVtbXkub3V0ZXJIVE1MID0gYDxzdmcgc3R5bGU9XCJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jaXJjbGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMiwyMEE4LDggMCAwLDEgNCwxMkE4LDggMCAwLDEgMTIsNEE4LDggMCAwLDEgMjAsMTJBOCw4IDAgMCwxIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+YDtcclxuICAgIGR1bW15Mi5vdXRlckhUTUwgPSBgPHN2ZyBjbGFzcz1cImNoZWNrXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2hlY2stY2lyY2xlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEyIDIwQzcuNTkgMjAgNCAxNi40MSA0IDEyUzcuNTkgNCAxMiA0IDIwIDcuNTkgMjAgMTIgMTYuNDEgMjAgMTIgMjBNMTYuNTkgNy41OEwxMCAxNC4xN0w3LjQxIDExLjU5TDYgMTNMMTAgMTdMMTggOUwxNi41OSA3LjU4WlwiIC8+PC9zdmc+YDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbnNFdGMgPSBbXHJcbiAgICB7Y2xhc3M6ICdkdWVkYXRlJywgc3ZnOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci1jbG9jazwvdGl0bGU+PHBhdGggZD1cIk0xNSwxM0gxNi41VjE1LjgyTDE4Ljk0LDE3LjIzTDE4LjE5LDE4LjUzTDE1LDE2LjY5VjEzTTE5LDhINVYxOUg5LjY3QzkuMjQsMTguMDkgOSwxNy4wNyA5LDE2QTcsNyAwIDAsMSAxNiw5QzE3LjA3LDkgMTguMDksOS4yNCAxOSw5LjY3VjhNNSwyMUMzLjg5LDIxIDMsMjAuMSAzLDE5VjVDMywzLjg5IDMuODksMyA1LDNINlYxSDhWM0gxNlYxSDE4VjNIMTlBMiwyIDAgMCwxIDIxLDVWMTEuMUMyMi4yNCwxMi4zNiAyMywxNC4wOSAyMywxNkE3LDcgMCAwLDEgMTYsMjNDMTQuMDksMjMgMTIuMzYsMjIuMjQgMTEuMSwyMUg1TTE2LDExLjE1QTQuODUsNC44NSAwIDAsMCAxMS4xNSwxNkMxMS4xNSwxOC42OCAxMy4zMiwyMC44NSAxNiwyMC44NUE0Ljg1LDQuODUgMCAwLDAgMjAuODUsMTZDMjAuODUsMTMuMzIgMTguNjgsMTEuMTUgMTYsMTEuMTVaXCIgLz48L3N2Zz5gfSxcclxuICAgIHtjbGFzczogJ2xpc3QnLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmZvbGRlci1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTIwLDE4SDRWOEgyME0yMCw2SDEyTDEwLDRINEMyLjg5LDQgMiw0Ljg5IDIsNlYxOEEyLDIgMCAwLDAgNCwyMEgyMEEyLDIgMCAwLDAgMjIsMThWOEMyMiw2Ljg5IDIxLjEsNiAyMCw2WlwiIC8+PC9zdmc+YH0sXHJcbiAgICB7Y2xhc3M6ICdwcmlvcml0eScsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZmxhZzwvdGl0bGU+PHBhdGggZD1cIk0xNC40LDZMMTQsNEg1VjIxSDdWMTRIMTIuNkwxMywxNkgyMFY2SDE0LjRaXCIgLz48L3N2Zz5gfSxcclxuICAgIHtjbGFzczogJ2RlbGV0ZScsIHN2ZzogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZGVsZXRlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNVpcIiAvPjwvc3ZnPmB9LFxyXG4gIF1cclxuXHJcbiAgZm9yIChsZXQgYnV0dG9uRXRjIG9mIGJ1dHRvbnNFdGMpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoYnV0dG9uRXRjLmNsYXNzKTtcclxuICAgIGJ1dHRvbi5kYXRhc2V0LmluZGV4ID0gdGFzay5pbmRleDtcclxuXHJcbiAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChkdW1teSlcclxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIFxyXG4gICAgZHVtbXkub3V0ZXJIVE1MID0gYnV0dG9uRXRjLnN2ZztcclxuXHJcbiAgICBpZiAoYnV0dG9uRXRjLmNsYXNzID09PSAnZHVlZGF0ZScpIHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tEdWVEYXRlRHJvcGRvd24pO1xyXG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBwLnRleHRDb250ZW50ID0gZm9ybWF0KHRhc2suZHVlRGF0ZSwgJ2QgTExMJyk7XHJcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGJ1dHRvbkV0Yy5jbGFzcyA9PT0gJ2xpc3QnKSB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrTGlzdERyb3Bkb3duKTtcclxuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgcC50ZXh0Q29udGVudCA9IHRhc2subGlzdDtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYnV0dG9uRXRjLmNsYXNzID09PSAncHJpb3JpdHknKSB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrUHJpb3JpdHlEcm9wZG93bik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChidXR0b25FdGMuY2xhc3MgPT09ICdkZWxldGUnKSB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUNhcmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25Eb25lKTtcclxuICBjYXJkLmFwcGVuZENoaWxkKGg0KTtcclxuICBjYXJkLmFwcGVuZENoaWxkKHApO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gIGlmICh0YXNrLmlzQ29tcGxldGVkKSB7XHJcbiAgICBjYXJkc0NvbXBsZXRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2FyZHNPbmdvaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaG92ZXJDYXJkID0gKGUpID0+IHtcclxuICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxuICBlLmN1cnJlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XHJcbiAgICBpZiAoZHJvcGRvd25PdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygndmlzaWJpbGl0eS1oaWRkZW4nKSkge1xyXG4gICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTsgICAgICBcclxuICAgIH1cclxuICB9LCB7b25jZTogdHJ1ZX0pO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4vLyBDYXJkIERyb3Bkb3ducyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuY29uc3QgcG9zaXRpb25Ecm9wZG93biA9IChjdXJyZW50QnV0dG9uKSA9PiB7XHJcbiAgY29uc3QgZHJvcGRvd25Ub3AgPSBjdXJyZW50QnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICBjb25zdCBkcm9wZG93bkxlZnQgPSBjdXJyZW50QnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kcm9wZG93bi10b3AnLCBgJHtkcm9wZG93blRvcH1weGApO1xyXG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tZHJvcGRvd24tbGVmdCcsIGAke2Ryb3Bkb3duTGVmdH1weGApO1xyXG59XHJcblxyXG5jb25zdCBwb3NpdGlvbkRyb3Bkb3duUmVzZXQgPSAoY3VycmVudEJ1dHRvbikgPT4ge1xyXG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tZHJvcGRvd24tdG9wJywgYDBweGApO1xyXG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tZHJvcGRvd24tbGVmdCcsIGAwcHhgKTtcclxufVxyXG5cclxuLy8gRHVlIERhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmNvbnN0IGNsaWNrRHVlRGF0ZURyb3Bkb3duID0gKGUpID0+IHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNvbnN0IGN1cnJlbnRCdXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgY29uc3QgY3VycmVudENhcmRJbmRleCA9IGdldENhcmRJbmRleChlKTtcclxuICBjb25zdCBjdXJyZW50VGFzayA9IHRvZG9saXN0LmdldFRhc2soY3VycmVudENhcmRJbmRleCk7ICAgIFxyXG4gIHBvc2l0aW9uRHJvcGRvd24oY3VycmVudEJ1dHRvbik7XHJcbiAgc2V0RHJvcGRvd25EdWVEYXRlSW5kZXgoY3VycmVudENhcmRJbmRleCk7XHJcbiAgc2hvd0Ryb3Bkb3duRHVlRGF0ZShjdXJyZW50QnV0dG9uKTtcclxuXHJcbiAgZGlzcGxheUN1cnJlbnRDYXJkRGF0ZShjdXJyZW50VGFzayk7XHJcbn1cclxuXHJcbmNvbnN0IHNob3dEcm9wZG93bkR1ZURhdGUgPSAoY3VycmVudEJ1dHRvbikgPT4ge1xyXG4gIGN1cnJlbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxuICBjdXJyZW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcclxuICBkcm9wZG93bk92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRHJvcGRvd25EdWVEYXRlKTtcclxuICBkcm9wZG93bk92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxuICBkcm9wZG93bkR1ZURhdGUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxufVxyXG5cclxuY29uc3QgaGlkZURyb3Bkb3duRHVlRGF0ZSA9IChlKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXh9XCJgKTtcclxuICBjb25zdCBjdXJyZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJ1dHRvbi5jbGlja2VkYCk7XHJcbiAgc2VsZWN0ZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XHJcbiAgY3VycmVudEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xyXG4gIGN1cnJlbnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVEcm9wZG93bkR1ZURhdGUpO1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcclxuICBkcm9wZG93bk92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxuICBkcm9wZG93bkR1ZURhdGUuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eS1oaWRkZW4nKTtcclxuICBwb3NpdGlvbkRyb3Bkb3duUmVzZXQoKTtcclxufVxyXG5cclxuY29uc3Qgc2V0RHJvcGRvd25EdWVEYXRlSW5kZXggPSAoaW5kZXgpID0+IHtcclxuICBkcm9wZG93bkR1ZURhdGVJbnB1dC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgZHJvcGRvd25PdmVybGF5LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxufVxyXG5cclxuY29uc3Qgc2V0RHVlRGF0ZSA9IChlKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudENhcmRJbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gIGNvbnN0IGN1cnJlbnRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7Y3VycmVudENhcmRJbmRleH1cIl1gKTtcclxuICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkcm9wZG93bkR1ZURhdGVJbnB1dC52YWx1ZSkpO1xyXG5cclxuICBpZiAodG9kb2xpc3QuZG9lc1Rhc2tFeGlzdChjdXJyZW50Q2FyZEluZGV4KSkge1xyXG4gICAgY29uc3QgY3VycmVudFRhc2sgPSB0b2RvbGlzdC5nZXRUYXNrKGN1cnJlbnRDYXJkSW5kZXgpO1xyXG4gICAgY3VycmVudFRhc2suc2V0VGFza0R1ZURhdGUoZHVlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBjdXJyZW50Q2FyZC5kYXRhc2V0LmR1ZURhdGUgPSBkdWVEYXRlOyAgXHJcbiAgaWYgKCFmb2N1c2VkQ2FyZE92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmlsaXR5LWhpZGRlbicpKSB7XHJcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0LmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi5kdWVkYXRlLmNsaWNrZWQgPiBwJykudGV4dENvbnRlbnQgPSBmb3JtYXQoZHVlRGF0ZSwgJ2QgTExMJyk7XHJcbiAgaGlkZURyb3Bkb3duRHVlRGF0ZShlKTtcclxuXHJcbiAgcmVnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKCk7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlDdXJyZW50Q2FyZERhdGUgPSAodGFzaykgPT4ge1xyXG4gIGlmICh0YXNrKSB7XHJcbiAgICBkcm9wZG93bkR1ZURhdGVJbnB1dC52YWx1ZSA9IGZvcm1hdCh0YXNrLmR1ZURhdGUsICd5eXl5LU1NLWRkJyk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24uY2xpY2tlZCcpLmNsb3Nlc3QoJy5jYXJkLmZvY3VzZWQnKS5kYXRhc2V0LmR1ZURhdGUpO1xyXG4gICAgZHJvcGRvd25EdWVEYXRlSW5wdXQudmFsdWUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXktTU0tZGQnKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIExpc3QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG5jb25zdCBjbGlja0xpc3REcm9wZG93biA9IChlKSA9PiB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBjb25zdCBjdXJyZW50QnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gIGNvbnN0IGN1cnJlbnRDYXJkSW5kZXggPSBnZXRDYXJkSW5kZXgoZSk7XHJcbiAgY29uc3QgY3VycmVudFRhc2sgPSB0b2RvbGlzdC5nZXRUYXNrKGN1cnJlbnRDYXJkSW5kZXgpOyAgICAgIFxyXG4gIHBvc2l0aW9uRHJvcGRvd24oY3VycmVudEJ1dHRvbik7XHJcbiAgY2xlYXJEcm9wZG93bkxpc3QoKTtcclxuICBnZW5lcmF0ZURyb3Bkb3duTGlzdChjdXJyZW50Q2FyZEluZGV4KTtcclxuICBzaG93RHJvcGRvd25MaXN0KGN1cnJlbnRCdXR0b24pO1xyXG4gIGlmICh0b2RvbGlzdC5kb2VzVGFza0V4aXN0KGN1cnJlbnRDYXJkSW5kZXgpKSB7XHJcbiAgICBkaXNwbGF5Q3VycmVudENhcmRMaXN0KGN1cnJlbnRUYXNrKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFyRHJvcGRvd25MaXN0ID0gKCkgPT4ge1xyXG4gIHdoaWxlKGRyb3Bkb3duTGlzdC5maXJzdENoaWxkKSB7XHJcbiAgICBkcm9wZG93bkxpc3QucmVtb3ZlQ2hpbGQoZHJvcGRvd25MaXN0LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVEcm9wZG93bkxpc3QgPSAoY3VycmVudENhcmRJbmRleCkgPT4ge1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgdG9kb2xpc3QuZ2V0TGlzdHMoKS5mb3JFYWNoKChsaXN0LCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQudHlwZSA9ICdyYWRpbyc7XHJcbiAgICBpbnB1dC5pZCA9IGBkcm9wZG93bkxpc3Qke2luZGV4ICsgMX1gO1xyXG4gICAgaW5wdXQubmFtZSA9ICdsaXN0JztcclxuICAgIGlucHV0LnZhbHVlID0gbGlzdDtcclxuICAgIGlucHV0LmRhdGFzZXQuaW5kZXggPSBjdXJyZW50Q2FyZEluZGV4O1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RMaXN0KTtcclxuICAgIGlmIChpbmRleCA9PT0gMCkge2lucHV0LmNoZWNrZWQgPSB0cnVlfVxyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXQuaWQpO1xyXG5cclxuICAgIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IGxpc3Q7XHJcblxyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoZHVtbXkpO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG4gICAgZHVtbXkub3V0ZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Zm9sZGVyLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMjAsMThINFY4SDIwTTIwLDZIMTJMMTAsNEg0QzIuODksNCAyLDQuODkgMiw2VjE4QTIsMiAwIDAsMCA0LDIwSDIwQTIsMiAwIDAsMCAyMiwxOFY4QzIyLDYuODkgMjEuMSw2IDIwLDZaXCIgLz48L3N2Zz5gO1xyXG4gIH0pO1xyXG4gIGRyb3Bkb3duTGlzdC5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgZHJvcGRvd25PdmVybGF5LmRhdGFzZXQuaW5kZXggPSBjdXJyZW50Q2FyZEluZGV4O1xyXG59XHJcblxyXG5jb25zdCBzaG93RHJvcGRvd25MaXN0ID0gKGN1cnJlbnRMaXN0QnV0dG9uKSA9PiB7XHJcbiAgY3VycmVudExpc3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxuICBjdXJyZW50TGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XHJcbiAgZHJvcGRvd25PdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZURyb3Bkb3duTGlzdCk7XHJcbiAgZHJvcGRvd25PdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHktaGlkZGVuJyk7XHJcbiAgZHJvcGRvd25MaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHktaGlkZGVuJyk7XHJcbn1cclxuXHJcbmNvbnN0IGhpZGVEcm9wZG93bkxpc3QgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkW2RhdGEtaW5kZXg9XCIke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4fVwiYCk7XHJcbiAgY29uc3QgY3VycmVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5idXR0b24uY2xpY2tlZGApO1xyXG4gIHNlbGVjdGVkQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xyXG4gIGN1cnJlbnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcclxuICBjdXJyZW50QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcclxuICBkcm9wZG93bk92ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRHJvcGRvd25MaXN0KTtcclxuICBkcm9wZG93bk92ZXJsYXkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgZHJvcGRvd25PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdHktaGlkZGVuJyk7XHJcbiAgZHJvcGRvd25MaXN0LmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdHktaGlkZGVuJyk7XHJcbiAgcG9zaXRpb25Ecm9wZG93blJlc2V0KCk7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlDdXJyZW50Q2FyZExpc3QgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGRyb3Bkb3duTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwiZHJvcGRvd25MaXN0XCJdJyk7XHJcblxyXG4gIGRyb3Bkb3duTGlzdHMuZm9yRWFjaChkcm9wZG93bkxpc3QgPT4ge1xyXG4gICAgaWYgKGRyb3Bkb3duTGlzdC52YWx1ZSA9PT0gdGFzay5saXN0KSB7XHJcbiAgICAgIGRyb3Bkb3duTGlzdC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuY29uc3Qgc2VsZWN0TGlzdCA9IChlKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duIGlucHV0W25hbWU9XCJsaXN0XCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuICBjb25zdCBjdXJyZW50Q2FyZEluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgY29uc3QgY3VycmVudENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZFtkYXRhLWluZGV4PVwiJHtjdXJyZW50Q2FyZEluZGV4fVwiXWApO1xyXG5cclxuICBpZiAodG9kb2xpc3QuZG9lc1Rhc2tFeGlzdChjdXJyZW50Q2FyZEluZGV4KSkge1xyXG4gICAgY29uc3QgY3VycmVudFRhc2sgPSB0b2RvbGlzdC5nZXRUYXNrKGN1cnJlbnRDYXJkSW5kZXgpO1xyXG4gICAgY3VycmVudFRhc2suc2V0VGFza0xpc3Qoc2VsZWN0ZWRMaXN0KTtcclxuICB9XHJcblxyXG4gIGN1cnJlbnRDYXJkLmRhdGFzZXQubGlzdCA9IHNlbGVjdGVkTGlzdDtcclxuICBpZiAoIWZvY3VzZWRDYXJkT3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2liaWxpdHktaGlkZGVuJykpIHtcclxuICAgIGZvY3VzZWRDYXJkLmRhdGFzZXQubGlzdCA9IHNlbGVjdGVkTGlzdDtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24ubGlzdC5jbGlja2VkID4gcCcpLnRleHRDb250ZW50ID0gc2VsZWN0ZWRMaXN0O1xyXG4gIGhpZGVEcm9wZG93bkxpc3QoZSk7XHJcbn1cclxuXHJcbi8vIFByaW9yaXR5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG5jb25zdCBjbGlja1ByaW9yaXR5RHJvcGRvd24gPSAoZSkgPT4ge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY29uc3QgY3VycmVudEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcclxuICBjb25zdCBjdXJyZW50Q2FyZEluZGV4ID0gZ2V0Q2FyZEluZGV4KGUpO1xyXG4gIGNvbnN0IGN1cnJlbnRUYXNrID0gdG9kb2xpc3QuZ2V0VGFzayhjdXJyZW50Q2FyZEluZGV4KTsgICAgICBcclxuICBwb3NpdGlvbkRyb3Bkb3duKGN1cnJlbnRCdXR0b24pO1xyXG4gIHNob3dEcm9wZG93blByaW9yaXR5KGN1cnJlbnRCdXR0b24pO1xyXG4gIHNldERyb3Bkb3duUHJpb3JpdHlJbmRleChjdXJyZW50Q2FyZEluZGV4KTtcclxuICBpZiAodG9kb2xpc3QuZG9lc1Rhc2tFeGlzdChjdXJyZW50Q2FyZEluZGV4KSkge1xyXG4gICAgZGlzcGxheUN1cnJlbnRDYXJkUHJpb3JpdHkoY3VycmVudFRhc2spO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2hvd0Ryb3Bkb3duUHJpb3JpdHkgPSAoY3VycmVudEJ1dHRvbikgPT4ge1xyXG4gIGN1cnJlbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxuICBjdXJyZW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcclxuICBkcm9wZG93bk92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRHJvcGRvd25Qcmlvcml0eSk7XHJcbiAgZHJvcGRvd25PdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHktaGlkZGVuJyk7XHJcbiAgZHJvcGRvd25Qcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xyXG59XHJcblxyXG5jb25zdCBoaWRlRHJvcGRvd25Qcmlvcml0eSA9IChlKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXh9XCJgKTtcclxuICBjb25zdCBjdXJyZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJ1dHRvbi5jbGlja2VkYCk7XHJcbiAgc2VsZWN0ZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XHJcbiAgY3VycmVudEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xyXG4gIGN1cnJlbnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVEcm9wZG93blByaW9yaXR5KTtcclxuICBkcm9wZG93bk92ZXJsYXkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgZHJvcGRvd25PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdHktaGlkZGVuJyk7XHJcbiAgZHJvcGRvd25Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xyXG4gIHBvc2l0aW9uRHJvcGRvd25SZXNldCgpO1xyXG59XHJcblxyXG5jb25zdCBzZXREcm9wZG93blByaW9yaXR5SW5kZXggPSAoaW5kZXgpID0+IHtcclxuICBkcm9wZG93blByaW9yaXR5SGlnaC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgZHJvcGRvd25Qcmlvcml0eU1lZGl1bS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgZHJvcGRvd25Qcmlvcml0eUxvdy5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgZHJvcGRvd25Qcmlvcml0eU5vbmUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIGRyb3Bkb3duT3ZlcmxheS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlDdXJyZW50Q2FyZFByaW9yaXR5ID0gKHRhc2spID0+IHtcclxuICBjb25zdCBkcm9wZG93blByaW9yaXR5TGlzdCA9IFtcclxuICAgIGRyb3Bkb3duUHJpb3JpdHlIaWdoLFxyXG4gICAgZHJvcGRvd25Qcmlvcml0eU1lZGl1bSxcclxuICAgIGRyb3Bkb3duUHJpb3JpdHlMb3csXHJcbiAgICBkcm9wZG93blByaW9yaXR5Tm9uZSxcclxuICBdXHJcblxyXG4gIGRyb3Bkb3duUHJpb3JpdHlMaXN0LmZvckVhY2gocHJpb3JpdHkgPT4ge1xyXG4gICAgaWYgKHByaW9yaXR5LnZhbHVlID09PSB0YXNrLnByaW9yaXR5KSB7XHJcbiAgICAgIHByaW9yaXR5LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBzZWxlY3RQcmlvcml0eSA9IChlKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93biBpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gIGNvbnN0IGN1cnJlbnRDYXJkSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICBjb25zdCBjdXJyZW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkW2RhdGEtaW5kZXg9XCIke2N1cnJlbnRDYXJkSW5kZXh9XCJdYCk7XHJcblxyXG4gIGlmICh0b2RvbGlzdC5kb2VzVGFza0V4aXN0KGN1cnJlbnRDYXJkSW5kZXgpKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IHRvZG9saXN0LmdldFRhc2soY3VycmVudENhcmRJbmRleCk7XHJcbiAgICBjdXJyZW50VGFzay5zZXRUYXNrUHJpb3JpdHkoc2VsZWN0ZWRQcmlvcml0eSk7XHJcbiAgfVxyXG5cclxuICBjdXJyZW50Q2FyZC5kYXRhc2V0LnByaW9yaXR5ID0gc2VsZWN0ZWRQcmlvcml0eTtcclxuICBpZiAoIWZvY3VzZWRDYXJkT3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2liaWxpdHktaGlkZGVuJykpIHtcclxuICAgIGZvY3VzZWRDYXJkLmRhdGFzZXQucHJpb3JpdHkgPSBzZWxlY3RlZFByaW9yaXR5O1xyXG4gIH1cclxuICBoaWRlRHJvcGRvd25Qcmlvcml0eShlKTtcclxufVxyXG5cclxuLy8gRGVsZXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmNvbnN0IGRlbGV0ZUNhcmQgPSAoZSkgPT4ge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY29uc3QgY3VycmVudENhcmRJbmRleCA9IGdldENhcmRJbmRleChlKTtcclxuICBjb25zdCBjdXJyZW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkOm5vdCguZm9jdXNlZClbZGF0YS1pbmRleD1cIiR7Y3VycmVudENhcmRJbmRleH1cIl1gKTtcclxuICBjb25zdCBjdXJyZW50Q2FyZEFjdHVhbENvbnRhaW5lciA9IGN1cnJlbnRDYXJkLmNsb3Nlc3QoJy5jb250YWluZXIuYWN0dWFsJyk7XHJcblxyXG4gIGlmICghdG9kb2xpc3QuZ2V0VGFzayhjdXJyZW50Q2FyZEluZGV4KSkgcmV0dXJuO1xyXG5cclxuICBjYXJkQ29vcmRpbmF0ZXMuc2V0QmVmb3JlKCk7XHJcblxyXG4gIHRvZG9saXN0LmRlbGV0ZVRhc2soY3VycmVudENhcmRJbmRleCk7XHJcbiAgcmVnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKCk7XHJcblxyXG4gIGNhcmRDb29yZGluYXRlcy5zZXRBZnRlcigpO1xyXG4gIGFuaW1hdGVEZWxldGVDYXJkKGN1cnJlbnRDYXJkSW5kZXgsIGN1cnJlbnRDYXJkQWN0dWFsQ29udGFpbmVyKTtcclxuICBjYXJkQ29vcmRpbmF0ZXMuY2xlYXJDYXJkcygpO1xyXG59XHJcblxyXG5jb25zdCBhbmltYXRlRGVsZXRlQ2FyZCA9IChjYXJkSW5kZXgsIGNhcmRDb250YWluZXIgKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRDYXJkSGVpZ2h0ID0gY2FyZENvb3JkaW5hdGVzLmdldENhcmQoY2FyZEluZGV4KS5iZWZvcmUuaGVpZ2h0O1xyXG4gIGNvbnN0IHVwRGlzdGFuY2UgPSBgY2FsYyh2YXIoLS1jYXJkLWdhcCkgKyAke3NlbGVjdGVkQ2FyZEhlaWdodH1weClgO1xyXG5cclxuICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLW1vdmUtdXAtZGlzdGFuY2UnLCBgJHt1cERpc3RhbmNlfWApO1xyXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLXNocmlua2luZycpO1xyXG4gIGNhcmRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGUpID0+IHtcclxuICAgIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFpbmVyLXNocmlua2luZycpICAgICAgXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG90aGVyQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuY29udGFpbmVyOm5vdCguYWRkKSAuY2FyZDpub3QoW2RhdGEtaW5kZXg9XCIke2NhcmRJbmRleH1cIl0pYCk7XHJcbiAgb3RoZXJDYXJkcy5mb3JFYWNoKG90aGVyQ2FyZCA9PiB7XHJcbiAgICBjb25zdCB1cERpc3RhbmNlID0gXHJcbiAgICAgIGNhcmRDb29yZGluYXRlcy5nZXRDYXJkKG90aGVyQ2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSkuYmVmb3JlLnRvcCAtIFxyXG4gICAgICBjYXJkQ29vcmRpbmF0ZXMuZ2V0Q2FyZChvdGhlckNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpLmFmdGVyLnRvcDtcclxuICAgIGlmICh1cERpc3RhbmNlID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLXVwLWRpc3RhbmNlJywgYCR7dXBEaXN0YW5jZX1weGApO1xyXG4gICAgb3RoZXJDYXJkLmNsYXNzTGlzdC5hZGQoJ21vdmluZy11cCcpO1xyXG4gICAgb3RoZXJDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PiB7XHJcbiAgICAgIG90aGVyQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZpbmctdXAnKSAgICAgIFxyXG4gICAgfSk7XHJcbiAgfSk7ICBcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLy8gQWRkIFRhc2sgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmNvbnN0IGF1dG9TaXplVGV4dEFyZWEgPSAoKSA9PiB7XHJcbiAgaW5wdXRUYXNrRGVzY3JpcHRpb24uc3R5bGUuaGVpZ2h0ID0gXCI3NXB4XCI7XHJcbiAgaW5wdXRUYXNrRGVzY3JpcHRpb24uc3R5bGUuaGVpZ2h0ID0gKGlucHV0VGFza0Rlc2NyaXB0aW9uLnNjcm9sbEhlaWdodCkgKyBcInB4XCI7XHJcbn1cclxuXHJcbmNvbnN0IGNsaWNrRm9jdXNlZENhcmRPdmVybGF5ID0gKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xyXG4gICAgaWYgKHRvZG9saXN0LmdldFRhc2tzKCkuc29tZSh0YXNrID0+IHRhc2suaW5kZXggPT0gZm9jdXNlZENhcmQuZGF0YXNldC5pbmRleCkpIHsgICAgXHJcbiAgICAgIHN1Ym1pdEZvY3VzZWRDYXJkKGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGhpZGVGb2N1c2VkQ2FyZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGlkZUZvY3VzZWRDYXJkT25SZXNpemUgPSAoKSA9PiB7XHJcbiAgaWYgKCh3aW5kb3cuaW5uZXJXaWR0aCA8PSA2MDApICYmIFxyXG4gICAgICAoIXNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLWhpZGRlbicpKSAmJlxyXG4gICAgICAoZm9jdXNlZENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1c2VkJykpKSB7XHJcbiAgICBoaWRlRm9jdXNlZENhcmQoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhpZGVGb2N1c2VkQ2FyZCA9IChlKSA9PiB7XHJcbiAgLy8gU2VsZWN0IGNhcmQocykgdGhhdCB3ZXJlIHNlbGVjdGVkXHJcbiAgLy8gRm9yIGV4aXN0aW5nIGNhcmQsIGV4cGVjdGVkIG5vZGUgaW4gbm9kZWxpc3QgaXMgMVxyXG4gIC8vIEZvciBhZGRpbmcgYSBuZXcgY2FyZCwgZXhwZWN0ZWQgbm9kZXMgaW4gbm9kZWxpc3QgaXMgMlxyXG4gIC8vIEZvciBkZWxldGluZyBhIGNhcmQsIGV4cGVjdGVkIG5vZGUgaW4gbm9kZWxpc3QgaXMgMCwgdGh1cyBudWxsXHJcbiAgY29uc3Qgc2VsZWN0ZWRDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jYXJkOm5vdCguZm9jdXNlZClbZGF0YS1pbmRleD1cIiR7Zm9jdXNlZENhcmQuZGF0YXNldC5pbmRleH1cIl1gKTtcclxuICBzZWxlY3RlZENhcmRzLmZvckVhY2goc2VsZWN0ZWRDYXJkID0+IHtcclxuICAgIGlmIChzZWxlY3RlZENhcmQgIT09IG51bGwpIHtcclxuICAgICAgc2VsZWN0ZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XHJcbiAgICAgIHNlbGVjdGVkQ2FyZC5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XHJcbiAgICAgIHNlbGVjdGVkQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgc2VsZWN0ZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLmFkZCcpLmZvckVhY2goYWRkVGFza0NhcmQgPT4ge1xyXG4gICAgYWRkVGFza0NhcmQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgICBhZGRUYXNrQ2FyZC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJpb3JpdHknKTtcclxuICAgIGFkZFRhc2tDYXJkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1saXN0Jyk7XHJcbiAgfSlcclxuXHJcbiAgZm9jdXNlZENhcmQuY2xhc3NMaXN0LmFkZCgnZm9jdXMtb3V0Jyk7XHJcbiAgZm9jdXNlZENhcmQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgZm9jdXNlZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xyXG4gICAgZm9jdXNlZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMtb3V0Jyk7XHJcbiAgICByZXNldEZvY3VzZWRDYXJkRGF0YSgpOyAgICBcclxuICB9LCB7b25jZTogdHJ1ZX0pO1xyXG4gIGZvY3VzZWRDYXJkT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xyXG59XHJcblxyXG5jb25zdCBzaG93Rm9jdXNlZENhcmQgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkQ2FyZCA9IGUuY3VycmVudFRhcmdldDsgIFxyXG4gIGluaXRpYWxpemVGb2N1c2VkQ2FyZERhdGEoc2VsZWN0ZWRDYXJkKTtcclxuXHJcbiAgY29uc3QgdXBEaXN0YW5jZSA9IFxyXG4gICAgKHNlbGVjdGVkQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzZWxlY3RlZENhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMikgLSBcclxuICAgIChmb2N1c2VkQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBmb2N1c2VkQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyKSA7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLXVwLWRpc3RhbmNlJywgYCR7dXBEaXN0YW5jZX1weGApOyAgXHJcblxyXG4gIGNvbnN0IHhEaXN0YW5jZSA9IFxyXG4gICAgKHNlbGVjdGVkQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgc2VsZWN0ZWRDYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gMikgLSBcclxuICAgIChmb2N1c2VkQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgZm9jdXNlZENhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyKSA7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tb3ZlLVgtZGlzdGFuY2UnLCBgJHt4RGlzdGFuY2V9cHhgKTsgIFxyXG5cclxuICBjb25zdCB4U2NhbGUgPSBcclxuICAgIChzZWxlY3RlZENhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpIC8gKGZvY3VzZWRDYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSA7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zY2FsZS1YJywgYCR7eFNjYWxlfWApOyAgXHJcbiAgICBcclxuICBzZWxlY3RlZENhcmQuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcclxuICBmb2N1c2VkQ2FyZC5jbGFzc0xpc3QuYWRkKCdmb2N1cy1pbicpO1xyXG4gIGZvY3VzZWRDYXJkLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcclxuICBmb2N1c2VkQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJDYXJkKTtcclxuICBmb2N1c2VkQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICBmb2N1c2VkQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cy1pbicpO1xyXG4gIH0sIHtvbmNlOiB0cnVlfSk7XHJcbiAgZm9jdXNlZENhcmRPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHktaGlkZGVuJyk7ICBcclxufVxyXG5cclxuY29uc3QgcmVzZXRGb2N1c2VkQ2FyZERhdGEgPSAoKSA9PiB7XHJcbiAgYnV0dG9uRm9jdXNlZENhcmREdWVEYXRlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIGJ1dHRvbkZvY3VzZWRDYXJkTGlzdC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcclxuICBidXR0b25Gb2N1c2VkQ2FyZFByaW9yaXR5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIGJ1dHRvbkZvY3VzZWRDYXJkRGVsZXRlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIGZvY3VzZWRDYXJkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIGZvY3VzZWRDYXJkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmlvcml0eScpO1xyXG4gIGZvY3VzZWRDYXJkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1saXN0Jyk7XHJcbiAgZm9jdXNlZENhcmQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWR1ZS1kYXRlJyk7XHJcbiAgaW5wdXRUYXNrVGl0bGUudmFsdWUgPSAnJztcclxuICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsaXplRm9jdXNlZENhcmREYXRhID0gKHNlbGVjdGVkQ2FyZCkgPT4ge1xyXG4gIGlmIChzZWxlY3RlZENhcmQuaGFzQXR0cmlidXRlKCdkYXRhLWluZGV4JykpIHtcclxuICAgIGNvbnN0IHRhc2sgPSB0b2RvbGlzdC5nZXRUYXNrKHNlbGVjdGVkQ2FyZC5kYXRhc2V0LmluZGV4KTtcclxuICAgIGJ1dHRvbkZvY3VzZWRDYXJkU3VibWl0LnRleHRDb250ZW50ID0gJ1NhdmUnO1xyXG4gICAgYnV0dG9uRm9jdXNlZENhcmREdWVEYXRlLmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xyXG4gICAgYnV0dG9uRm9jdXNlZENhcmRMaXN0LmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xyXG4gICAgYnV0dG9uRm9jdXNlZENhcmRQcmlvcml0eS5kYXRhc2V0LmluZGV4ID0gdGFzay5pbmRleDtcclxuICAgIGJ1dHRvbkZvY3VzZWRDYXJkRGVsZXRlLmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkRHVlRGF0ZSA+IHAnKS50ZXh0Q29udGVudCA9IGZvcm1hdCh0YXNrLmR1ZURhdGUsICdkIExMTCcpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkTGlzdCA+IHAnKS50ZXh0Q29udGVudCA9IHRhc2subGlzdDtcclxuICAgIGZvY3VzZWRDYXJkLmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xyXG4gICAgZm9jdXNlZENhcmQuZGF0YXNldC5wcmlvcml0eSA9IHRhc2sucHJpb3JpdHk7XHJcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0Lmxpc3QgPSB0YXNrLmxpc3Q7XHJcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0LmR1ZURhdGUgPSB0YXNrLmR1ZURhdGU7XHJcbiAgICBpbnB1dFRhc2tUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XHJcbiAgICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBhdXRvU2l6ZVRleHRBcmVhKCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgY29uc3QgaW5kZXggPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHNlbGVjdGVkQ2FyZC5kYXRhc2V0LmRhdGUpO1xyXG4gICAgYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkJztcclxuICAgIGJ1dHRvbkZvY3VzZWRDYXJkRHVlRGF0ZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICBidXR0b25Gb2N1c2VkQ2FyZExpc3QuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gICAgYnV0dG9uRm9jdXNlZENhcmRQcmlvcml0eS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICBidXR0b25Gb2N1c2VkQ2FyZERlbGV0ZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uRm9jdXNlZENhcmREdWVEYXRlID4gcCcpLnRleHRDb250ZW50ID0gZm9ybWF0KGR1ZURhdGUsICdkIExMTCcpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkTGlzdCA+IHAnKS50ZXh0Q29udGVudCA9IHRvZG9saXN0LmdldExpc3RzKClbMF07XHJcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0LnByaW9yaXR5ID0gJ25vbmUnO1xyXG4gICAgZm9jdXNlZENhcmQuZGF0YXNldC5saXN0ID0gdG9kb2xpc3QuZ2V0TGlzdHMoKVswXTtcclxuICAgIGZvY3VzZWRDYXJkLmRhdGFzZXQuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICBzZWxlY3RlZENhcmQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0Rm9jdXNlZENhcmQgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gaW5wdXRUYXNrVGl0bGUudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcclxuICBjb25zdCBpbmRleCA9IGZvY3VzZWRDYXJkLmRhdGFzZXQuaW5kZXg7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBmb2N1c2VkQ2FyZC5kYXRhc2V0LnByaW9yaXR5O1xyXG4gIGNvbnN0IGxpc3QgPSBmb2N1c2VkQ2FyZC5kYXRhc2V0Lmxpc3Q7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKGZvY3VzZWRDYXJkLmRhdGFzZXQuZHVlRGF0ZSk7XHJcblxyXG4gIGlmICh0b2RvbGlzdC5nZXRUYXNrcygpLnNvbWUodGFzayA9PiB0YXNrLmluZGV4ID09IGluZGV4KSkgeyAgICBcclxuICAgIHRvZG9saXN0LnVwZGF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdG9kb2xpc3QuYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KTtcclxuICB9XHJcbiAgdG9kb2xpc3QuZ2V0VGFzayhpbmRleCkuc2V0VGFza1ByaW9yaXR5KHByaW9yaXR5KTtcclxuICB0b2RvbGlzdC5nZXRUYXNrKGluZGV4KS5zZXRUYXNrTGlzdChsaXN0KTtcclxuICB0b2RvbGlzdC5nZXRUYXNrKGluZGV4KS5zZXRUYXNrRHVlRGF0ZShkdWVEYXRlKTtcclxuXHJcbiAgcmVnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKCk7XHJcbiAgaGlkZUZvY3VzZWRDYXJkKCk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbi8vIFNpZGViYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG5jb25zdCB0b2dnbGVTaWRlYmFyVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICBpZiAoIXNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLWhpZGRlbicpKSB7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGlkZGVuJyk7XHJcbiAgICBzaWRlYmFyT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhpZGRlbicpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhpZGRlbicpOyBcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItaGlkZGVuJyk7XHJcbiAgICBzaWRlYmFyT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWhpZGRlbicpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWhpZGRlbicpO1xyXG4gICAgc2lkZWJhck92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaWRlYmFyVmlzaWJpbGl0eSwge29uY2U6IHRydWV9KTsgICBcclxuICB9XHJcbiAgaWYgKCh3aW5kb3cuaW5uZXJXaWR0aCA8PSA2MDApICYmIChmb2N1c2VkQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzZWQnKSkpIHtcclxuICAgIGhpZGVGb2N1c2VkQ2FyZCgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4vLyBTZWFyY2hib3ggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuY29uc3QgZXhwYW5kU2VhcmNoQm94T25Nb2JpbGUgPSAoKSA9PiB7XHJcbiAgaWYgKCFidXR0b25Ob3RpZmljYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2hCb3gtZm9jdXNlZCcpKSB7XHJcbiAgICBidXR0b25Ob3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoQm94LWZvY3VzZWQnKTtcclxuICAgIGJ1dHRvblNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XHJcbiAgICBidXR0b25Vc2VyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XHJcbiAgICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlLCB7b25jZTogdHJ1ZX0pO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGJ1dHRvbk5vdGlmaWNhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xyXG4gICAgYnV0dG9uU2V0dGluZ3MuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoQm94LWZvY3VzZWQnKTtcclxuICAgIGJ1dHRvblVzZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoQm94LWZvY3VzZWQnKTtcclxuICAgIHNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlLCB7b25jZTogdHJ1ZX0pOyAgICBcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN3aXRjaFRvZG9zU2hvd01vZGUgPSAoZSkgPT4ge1xyXG4gIHRvZG9zVG9kYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICB0b2Rvc05leHQ3RGF5cy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gIHRvZG9zQ2FsZW5kYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICB0b2Rvc1Nob3dNb2RlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2hvd01vZGU7XHJcbiAgZ2VuZXJhdGVUb2RvTGlzdCgpO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4vLyBPdGhlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhpZGVGb2N1c2VkQ2FyZE9uUmVzaXplKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGF1dG9TaXplVGV4dEFyZWEpO1xyXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcG9zaXRpb25Ecm9wZG93bik7XHJcblxyXG4vLyBIZWFkZXIgXHJcbnNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGV4cGFuZFNlYXJjaEJveE9uTW9iaWxlLCB7b25jZTogdHJ1ZX0pO1xyXG5cclxuLy9DYXJkc1xyXG5kcm9wZG93bkR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREdWVEYXRlKTtcclxuZHJvcGRvd25Qcmlvcml0eUhpZ2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcmlvcml0eSk7XHJcbmRyb3Bkb3duUHJpb3JpdHlNZWRpdW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcmlvcml0eSk7XHJcbmRyb3Bkb3duUHJpb3JpdHlMb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcmlvcml0eSk7XHJcbmRyb3Bkb3duUHJpb3JpdHlOb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UHJpb3JpdHkpO1xyXG5cclxuLy8gRm9jdXNlZCBDYXJkXHJcbmlucHV0VGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXV0b1NpemVUZXh0QXJlYSk7XHJcbmZvY3VzZWRDYXJkT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRm9jdXNlZENhcmRPdmVybGF5KTtcclxuZm9jdXNlZENhcmRXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tGb2N1c2VkQ2FyZE92ZXJsYXkpO1xyXG5idXR0b25Gb2N1c2VkQ2FyZER1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0R1ZURhdGVEcm9wZG93bik7XHJcbmJ1dHRvbkZvY3VzZWRDYXJkTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrTGlzdERyb3Bkb3duKTtcclxuYnV0dG9uRm9jdXNlZENhcmRQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrUHJpb3JpdHlEcm9wZG93bik7XHJcbmJ1dHRvbkZvY3VzZWRDYXJkRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQ2FyZCk7XHJcbmJ1dHRvbkZvY3VzZWRDYXJkRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUZvY3VzZWRDYXJkKTtcclxuYnV0dG9uRm9jdXNlZENhcmRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRm9jdXNlZENhcmQpO1xyXG5idXR0b25Gb2N1c2VkQ2FyZFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEZvY3VzZWRDYXJkKTtcclxuXHJcbi8vIFNpZGViYXJcclxuYnV0dG9uU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXJWaXNpYmlsaXR5KTtcclxuc2lkZWJhck92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaWRlYmFyVmlzaWJpbGl0eSwge29uY2U6IHRydWV9KTtcclxudG9kb3NUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvZG9zU2hvd01vZGUpO1xyXG50b2Rvc05leHQ3RGF5cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvZG9zU2hvd01vZGUpO1xyXG50b2Rvc0NhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVG9kb3NTaG93TW9kZSk7XHJcblxyXG4vLyBJbml0aWFsIGdlbmVyYXRpb24gb2YgY2FyZHMgY29udGFpbmVyXHJcbi8vIGdlbmVyYXRlVG9kb0xpc3QoKTtcclxuc2V0VGltZW91dCgoKSA9PiB7ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJyl9LCAwKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIEFQSSBUZXN0c1xyXG5jb25zdCBmZXRjaFRhc2sgPSAoYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGNvbnN0IGJvZHkgPSB7XHJcbiAgLy8gICB0aXRsZTogJ3Rlc3QgdGl0bGUnLFxyXG4gIC8vICAgZGVzY3JpcHRpb246ICd0ZXN0IGRlc2NyaXB0aW9uJyxcclxuICAvLyAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAvLyAgIGluZGV4OiA5OSxcclxuICAvLyAgIHByaW9yaXR5OiAnSGlnaCcsXHJcbiAgLy8gICBsaXN0OiAnSG9tZScsXHJcbiAgLy8gfVxyXG5cclxuICAvLyBmZXRjaCgnaHR0cHM6Ly9sb2NhbGhvc3Q6NzExNS9hcGkvVG9kb1Rhc2tzJywge1xyXG4gIC8vICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgLy8gICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAvLyAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAvLyAgIH1cclxuICAvLyB9KVxyXG5cclxuICAvLyBmZXRjaCgnaHR0cHM6Ly90b2RvLWxpc3QtYmFja2VuZC5henVyZXdlYnNpdGVzLm5ldC9hcGknKVxyXG4gIC8vICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9