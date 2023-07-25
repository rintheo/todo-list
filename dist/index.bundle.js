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
  --move-up-distance: 0;
  --move-down-distance: 0;
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
}

.main {
  min-width: 0;
  margin-left: var(--sidebar-width);
  position: relative;
  padding: 1.25rem 2rem;
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
  height: 100%;
  width: 100%;
  max-width: 720px ;  
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
  margin-top: 1rem;
  padding: 0.5rem 0.75rem 0.15rem 0.75rem;
  background: var(--color-1);
  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  user-select: none;  
}

.card:hover {
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
  height: 2rem;
  width: 2rem;
  background-color: transparent;
  border-radius: 1.35rem;  
  opacity: 0;
  transition: 0.25s;
}

.card:hover .button {
  opacity: 1;
  width: 2rem;
  color: hsl(0, 0%, 50%);
  white-space: nowrap;
}

.card:hover .button:hover {
  background-color: var(--color-1-hover);
}

.card:hover .button:active {
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
  fill: var(--color-4);
}

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

.card:hover .button.done:hover svg {
  fill: var(--color-4-hover);
}

.card svg {
  height: 1.25rem;
  fill: hsl(0, 0%, 75%);
}

.card:hover .button:hover svg {
  fill: hsl(0, 0%, 50%);
}

.card:hover .button.delete:hover svg {
  fill: lightcoral;
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
    transform: translateY(calc(var(--move-down-distance)));
  }
}

@keyframes card-move-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(var(--move-up-distance)));
  }
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
  max-width: 1280px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
}

#focusedCardOverlay .card {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Pacifico&display=swap');\n\n:root {\n  --color-1: white;\n  --color-1-hover: hsl(0, 0%, 97%);\n  --color-1-active: hsl(0, 0%, 94%);;\n  --color-2: hsl(0, 0%, 98%);\n  --color-2-hover: hsl(0, 0%, 95%);\n  --color-2-active: hsl(0, 0%, 92%);\n  --color-3: rgb(158, 210, 198);\n  --color-3-hover: hsl(166, 37%, 69%);\n  --color-3-active: hsl(166, 37%, 66%);\n  --color-3-selected: hsl(166, 37%, 67%);\n  --color-4: rgb(84, 186, 185);\n  --color-4-hover: hsl(179, 43%, 50%);\n  --color-4-active: hsl(179, 43%, 47%);\n  --header-height: 4rem;\n  --sidebar-width: 250px;\n  --move-up-distance: 0;\n  --move-down-distance: 0;\n}\n\n*, *::after, *::before {\n  font-family: 'Open Sans', sans-serif;\n  box-sizing: border-box;\n}\n\nhtml, body,\nh1, h2, h3, h4, h5, h6, \np, ul, ol, li, button {\n  margin: 0;\n  padding: 0;\n}\n\nul, ol, li {\n  list-style: none;\n} \n\na {\n  text-decoration: none;\n}\n\nsvg {\n  vertical-align: top;\n}\n\n/* -------------------------------------------------- */\n/* Header ------------------------------------------- */\n/* -------------------------------------------------- */\n\n.header {\n  position: relative;\n  height: var(--header-height);\n  padding: 0.25rem;\n  background-color: var(--color-4);\n  color: white;\n  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  z-index: 100;\n}\n\n.header * {\n  transition: margin 0.25s;\n}\n\n.header h1{\n  position: relative;\n  bottom: 0.3rem;\n  padding: 0 4.5rem 0 0.25rem;\n  font-family: 'Pacifico', cursive;\n  font-weight: 200;\n  transition: \n    width 0.5s ease 0s, \n    padding 0.5s ease 0s, \n    opacity 0.5s ease 0s, \n    visibility 0s ease 0s;\n  visibility: visible;\n  opacity: 1;\n}\n\n@media (max-width: 600px) {\n  .header h1{\n    width: 0;\n    padding: 0;\n    visibility: hidden;\n    opacity: 0;\n    transition: \n      width 0.5s ease 0s, \n      padding 0.5s ease 0s, \n      opacity 0.5s ease 0s, \n      visibility 0s ease 0.5s;\n  }\n}\n\n.search-box {\n  position: relative;\n  flex: 1;\n  max-width: 500px;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n}\n\n.search-box input {\n  height: 3rem;\n  width: 100%;\n  padding: 0 1rem 0 3rem;\n  background-color: var(--color-3);\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 1.15rem;\n  font-weight: 400;\n\n  transition: 0.1s;\n}\n\n@media (max-width: 600px) {\n  .search-box input {\n    margin: 0.25rem\n  }\n}\n\n.search-box input::placeholder {\n  color: white;\n}\n\n.search-box input:focus::placeholder{\n  color: lightgrey;\n}\n\n.search-box input:focus {\n  background-color: white;\n  color: grey;\n  outline: none;\n}\n\n.search-box input:focus + svg {\n  fill: grey;\n}\n\n.search-box svg {\n  position: absolute;\n  left: 0.75rem;\n  height: 1.75rem;\n  fill: white;\n}\n\n.button {\n  border: none;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.header .button {\n  height: 3rem;\n  width: 3rem;\n  background-color: var(--color-4);\n}\n\n.header .button:hover {\n  background-color: var(--color-4-hover);\n}\n\n.header .button:active {\n  background-color: var(--color-4-active);\n}\n\n.button svg {\n  height: 1.75rem;\n  fill: white;\n}\n\n#buttonSidebar {\n  margin-left: 0.5rem;\n}\n\n#buttonUser {\n  margin: 0 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (max-width: 600px) {\n  .header .button,\n  #buttonSidebar,\n  #buttonUser {\n    margin: 0;\n  }\n\n  #buttonNotification.searchBox-focused,\n  #buttonSettings.searchBox-focused,\n  #buttonUser.searchBox-focused {\n    display: none;\n  }\n}\n\n#buttonUser img {\n  height: 80%;\n  width: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n/* -------------------------------------------------- */\n/* Sidebar ------------------------------------------ */\n/* -------------------------------------------------- */\n\n\n.sidebar {\n  position: absolute;\n  left: 0;\n  height: calc(100vh - var(--header-height));\n  width: var(--sidebar-width);\n  padding: 0.5rem;\n  background-color: var(--color-2);\n  z-index: 10;\n  transition: left 0.5s;\n}\n\n.sidebar.sidebar-hidden {\n  left: calc(-1 * var(--sidebar-width));\n}\n\n.sidebar h4 {\n  font-size: 1.25rem;\n}\n\n.sidebar p {\n  font-weight: 400;\n}\n\n.section-title {\n  display: flex;\n  align-items: center;\n  margin: 0.75rem 0;\n  padding: 0.25rem 0.5rem 0.25rem 1rem;\n  border-radius: 0.5rem;\n}\n\n.section-title:hover {\n  background-color: var(--color-2-hover);\n}\n\n.section-title:active {\n  background-color: var(--color-2-active);\n}\n\n.section-title h4 {\n  margin-right: auto;\n}\n\n.section-title .button {\n  height: 2rem;\n  width: 2rem;\n  background-color: transparent;\n}\n\n.section-title svg {\n  position: relative;\n  top: -0.05rem;\n  height: 1.5rem;\n  fill: hsl(0, 0%, 75%);\n}\n\n.section-title .button:hover svg{\n  fill: var(--color-4-hover);\n}\n\n.section-title .button:active svg{\n  fill: var(--color-4-active);\n}\n\n.sidebar li {\n  padding: 0.25rem 1rem;\n  color: hsl(0, 0%, 25%);\n  fill: hsl(0, 0%, 25%);\n  display: flex;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.sidebar li:last-child {\n  margin-bottom: 2rem;\n}\n\n.sidebar li:hover {\n  background-color: var(--color-2-hover);\n}\n\n.sidebar li.selected,\n.sidebar li:active {\n  background-color: var(--color-2-active);\n}\n\n.sidebar li > svg {\n  position: relative;\n  top: 0.1rem;\n  height: 1.25rem;\n}\n\n/* -------------------------------------------------- */\n/* Main --------------------------------------------- */\n/* -------------------------------------------------- */\n\n.main-container {\n  height: calc(100vh - var(--header-height));\n  display: flex;  \n}\n\n.main {\n  min-width: 0;\n  margin-left: var(--sidebar-width);\n  position: relative;\n  padding: 1.25rem 2rem;\n  flex: 1;\n  background-color: var(--color-1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: margin 0.5s;\n}\n\n.main.sidebar-hidden {\n  margin-left: 0;\n}\n\n#sidebarOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n  z-index: 9;\n}\n\n@media (max-width: 600px) {\n  .main {\n    margin-left: 0;\n  }\n\n  #sidebarOverlay {\n    visibility: visible;\n    opacity: 0.25;\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n  }\n\n  #sidebarOverlay.sidebar-hidden {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n  }\n}\n\n.main h3 {\n  color: hsl(0, 0%, 50%);\n  font-weight: 600;\n}\n\n#mainToday .cards {\n  height: 100%;\n  width: 100%;\n  max-width: 720px ;  \n}\n\n/* -------------------------------------------------- */\n/* Card --------------------------------------------- */\n/* -------------------------------------------------- */\n\n.card.add h4 {\n  color: hsl(0, 0%, 50%);\n  font-weight: 500;\n}\n\n.card {\n  position: relative;\n  margin-top: 1rem;\n  padding: 0.5rem 0.75rem 0.15rem 0.75rem;\n  background: var(--color-1);\n  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  user-select: none;  \n}\n\n.card:hover {\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\n}\n\n.card h4 {\n  margin-bottom: 0.4rem;\n  font-size: 1.1rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;  \n}\n\n.card p {\n  flex: 1;\n  color: hsl(0, 0%, 50%);\n  font-size: 0.9rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.card h4.completed,\n.card p.completed {\n  text-decoration: line-through;\n  color: hsl(0, 0%, 75%);\n}\n\n.card .buttons-container {\n  margin-top: auto;\n  padding-top: 0.25rem;\n  display: flex;\n  justify-content: end;\n}\n\n.card .button {\n  height: 2rem;\n  width: 2rem;\n  background-color: transparent;\n  border-radius: 1.35rem;  \n  opacity: 0;\n  transition: 0.25s;\n}\n\n.card:hover .button {\n  opacity: 1;\n  width: 2rem;\n  color: hsl(0, 0%, 50%);\n  white-space: nowrap;\n}\n\n.card:hover .button:hover {\n  background-color: var(--color-1-hover);\n}\n\n.card:hover .button:active {\n  background-color: var(--color-1-active);\n}\n\n.card .button.done {\n  position: absolute;\n  top: -0.65rem;\n  left: -0.65rem;\n  height: 1.35rem;\n  width: 1.35rem;\n  background-color: white;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card .button.done:hover {\n  width: 1.35rem;\n  padding: 0;  \n  background: white;\n}\n\n.card .button.done svg {\n  position: absolute;\n  height: 1.5rem;\n  fill: var(--color-4);\n}\n\n.container.ongoing .card .button.done svg.check {\n  opacity: 0;\n}\n\n.container.ongoing .card .button.done:hover svg.check {\n  opacity: 0.4;\n}\n\n.container.ongoing .card .button.done:active svg.check {\n  opacity: 0.55;\n}\n\n.container.completed .card .button.done svg.check {\n  opacity: 1;\n}\n\n.container.completed .card .button.done:hover svg.check {\n  opacity: 0.4;\n}\n\n.container.completed .card .button.done:active svg.check {\n  opacity: 0.25;\n}\n\n.card:hover .button.done:hover svg {\n  fill: var(--color-4-hover);\n}\n\n.card svg {\n  height: 1.25rem;\n  fill: hsl(0, 0%, 75%);\n}\n\n.card:hover .button:hover svg {\n  fill: hsl(0, 0%, 50%);\n}\n\n.card:hover .button.delete:hover svg {\n  fill: lightcoral;\n}\n\n/* -------------------------------------------------- */\n/* Card Animation ----------------------------------- */\n/* -------------------------------------------------- */\n\n.moving-down {\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-move-down;\n}\n\n.moving-up {\n  animation: 0.25s ease-in-out 0s 1 reverse forwards card-move-up;\n}\n\n@keyframes card-move-down {\n  from {\n    transform: translateX(0);\n    transform: translateY(0);\n    z-index: 1;\n  }\n\n  50% {\n    transform: translateX(0.5rem);\n  }\n\n  to {\n    transform: translateX(0);\n    transform: translateY(calc(var(--move-down-distance)));\n  }\n}\n\n@keyframes card-move-up {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(calc(var(--move-up-distance)));\n  }\n}\n\n/* -------------------------------------------------- */\n/* Card Overlay ------------------------------------- */\n/* -------------------------------------------------- */\n\n#focusedCardOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n}\n\n#focusedCardOverlay.visibility-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n}\n\n#focusedCardOverlay .wrapper {\n  width: 100%;\n  max-width: 1280px;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n#focusedCardOverlay .card {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\n  user-select: auto;\n}\n\n#focusedCardOverlay .card .button {\n  opacity: 1;\n}\n\n#focusedCardOverlay .submit-container {\n  align-self: end;\n  margin-top: 0.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n\n#focusedCardOverlay .submit-container .button {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.9rem;\n}\n\n#buttonFocusedCardCancel {\n  background-color: var(--color-2);\n  color: dimgrey;\n}\n\n#buttonFocusedCardCancel:hover {\n  background-color: var(--color-2-hover);\n}\n\n#buttonFocusedCardCancel:active {\n  background-color: var(--color-2-active);\n}\n\n#buttonFocusedCardSubmit {\n  background-color: var(--color-4);\n  color: white;\n  font-weight: 600;\n}\n\n#buttonFocusedCardSubmit:hover {\n  background-color: var(--color-4-hover);\n}\n\n#buttonFocusedCardSubmit:active {\n  background-color: var(--color-4-active);\n}\n\n#inputTaskTitle,\n#inputTaskDescription {\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n  border-radius: 0.5rem;\n}\n\n#inputTaskTitle:focus,\n#inputTaskDescription:focus {\n  background-color: var(--color-1-hover);\n}\n\n#inputTaskTitle {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n#inputTaskDescription {\n  font-size: 0.9rem;\n  resize: none;  \n  overflow: hidden;\n  height: 75px;\n}\n\n/* -------------------------------------------------- */\n/* Load Overlay ------------------------------------- */\n/* -------------------------------------------------- */\n\n#loadOverlay {\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.1s ease 0.25s, visibility 0s ease 0.35s;\n}\n\n.preload * {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -ms-transition: none !important;\n  -o-transition: none !important;\n}"],"sourceRoot":""}]);
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
  }

  toggleTaskCompletion() {
    this.isCompleted = this.isCompleted ? false : true;
  }
}

// temporarily fill tasks
const tasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a", 1690255509265),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690255517012),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 1690255521737),
  new Task("Task 4", "asdgaspsum bl aasgas dgsadgsag gsadgasagbal asfpasjpsaj sdgsd", 1690255521739),
];

// temporary true
tasks[3].toggleTaskCompletion();

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
const cardOngoingContainer = document.querySelector('.cards > .container.ongoing');
const cardCompletedContainer = document.querySelector('.cards > .container.completed');
const focusedCardOverlay = document.querySelector('#focusedCardOverlay');
const focusedCardWrapper = document.querySelector('#focusedCardOverlay > .wrapper');
const addTaskCard = document.querySelector('.card.add');

// Focused Card Elements
const inputTaskTitle = document.querySelector('#inputTaskTitle');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
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
  while (cardOngoingContainer.firstElementChild) {
    cardOngoingContainer.removeChild(cardOngoingContainer.firstElementChild);
  }
  while (cardCompletedContainer.firstElementChild) {
    cardCompletedContainer.removeChild(cardCompletedContainer.firstElementChild);
  }
}

const regenerateCardsContainer = () => {
  clearCardsContainer();
  fillCardsContainer();
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

  return {
    setBefore,
    setAfter,
    getCard,
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
  card.addEventListener('click', showFocusedCard);

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
    {class: 'priority', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>flag-outline</title><path d="M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4" /></svg>`},
    {class: 'delete', svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>`},
  ]

  for (let buttonEtc of buttonsEtc) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add(buttonEtc.class);

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
    cardCompletedContainer.appendChild(card);
  } else {
    cardOngoingContainer.appendChild(card);
  }
}

// -------------------------------------------------------------------------- //
// Add Task ----------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

const autoSizeTextArea = (e) => {
  e.currentTarget.style.height = "75px";
  e.currentTarget.style.height = (e.currentTarget.scrollHeight) + "px";
}

const clickFocusedCardOverlay = (e) => {
  if (e.target === e.currentTarget) {
    if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks().some(task => task.index == focusedCard.dataset.focusedIndex)) {    
      submitFocusedCard();
    }
    hideFocusedCard();
  }
}

const hideFocusedCard = (e) => {
  focusedCardOverlay.classList.add('visibility-hidden');
  focusedCardOverlay.addEventListener('transitionend', () => {
    resetFocusedCard();
  }, {once: true});
}

const showFocusedCard = (e) => {  
  console.log(e.target);
  console.log(e.currentTarget);
  focusedCardOverlay.classList.remove('visibility-hidden');  
  if (e.currentTarget.hasAttribute('data-index')) {
    buttonFocusedCardSubmit.textContent = 'Save';
    focusedCard.dataset.focusedIndex = e.currentTarget.getAttribute('data-index');
    const task = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(focusedCard.dataset.focusedIndex);
    inputTaskTitle.value = task.title;
    inputTaskDescription.value = task.description;
  }
  else {
    buttonFocusedCardSubmit.textContent = 'Add';
    focusedCard.dataset.focusedIndex = Date.now();
  }
}

const resetFocusedCard = () => {
  inputTaskTitle.value = '';
  inputTaskDescription.value = '';
  focusedCard.dataset.focusedIndex = '';
}

const submitFocusedCard = () => {
  const title = inputTaskTitle.value;
  const description = inputTaskDescription.value;
  const index = focusedCard.dataset.focusedIndex;

  if (_todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks().some(task => task.index == index)) {    
    _todolist_js__WEBPACK_IMPORTED_MODULE_1__.updateTask(title, description, index);
  }
  else {
    _todolist_js__WEBPACK_IMPORTED_MODULE_1__.addTask(title, description, index);
  }
  hideFocusedCard();
  regenerateCardsContainer();
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

inputTaskDescription.addEventListener('input', autoSizeTextArea);
focusedCardOverlay.addEventListener('click', clickFocusedCardOverlay);
focusedCardWrapper.addEventListener('click', clickFocusedCardOverlay);
addTaskCard.addEventListener('click', showFocusedCard);
buttonFocusedCardCancel.addEventListener('click', hideFocusedCard);
buttonFocusedCardSubmit.addEventListener('click', submitFocusedCard);
buttonSidebar.addEventListener('click', toggleSidebarVisibility);
sidebarOverlay.addEventListener('click', toggleSidebarVisibility, {once: true});
searchBox.addEventListener('focus', expandSearchBoxOnMobile, {once: true});


// Initial generation of cards container
regenerateCardsContainer();
setTimeout(() => {document.body.classList.remove('preload')}, 0);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DO0FBQ3pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxTQUFTLE9BQU8sYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsTUFBTSxPQUFPLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxlQUFlLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxjQUFj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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxrREFBaUI7QUFDdkIsSUFBSSxvREFBbUI7QUFDdkI7QUFDQTtBQUNBLElBQUksaURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxXQUFXO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsV0FBVztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLFdBQVc7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsV0FBVztBQUM5RSw4REFBOEQsV0FBVzs7O0FBR3pFO0FBQ0E7QUFDQSxrQkFBa0IsMENBQTBDLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWNvbG9yLTE6IHdoaXRlO1xuICAtLWNvbG9yLTEtaG92ZXI6IGhzbCgwLCAwJSwgOTclKTtcbiAgLS1jb2xvci0xLWFjdGl2ZTogaHNsKDAsIDAlLCA5NCUpOztcbiAgLS1jb2xvci0yOiBoc2woMCwgMCUsIDk4JSk7XG4gIC0tY29sb3ItMi1ob3ZlcjogaHNsKDAsIDAlLCA5NSUpO1xuICAtLWNvbG9yLTItYWN0aXZlOiBoc2woMCwgMCUsIDkyJSk7XG4gIC0tY29sb3ItMzogcmdiKDE1OCwgMjEwLCAxOTgpO1xuICAtLWNvbG9yLTMtaG92ZXI6IGhzbCgxNjYsIDM3JSwgNjklKTtcbiAgLS1jb2xvci0zLWFjdGl2ZTogaHNsKDE2NiwgMzclLCA2NiUpO1xuICAtLWNvbG9yLTMtc2VsZWN0ZWQ6IGhzbCgxNjYsIDM3JSwgNjclKTtcbiAgLS1jb2xvci00OiByZ2IoODQsIDE4NiwgMTg1KTtcbiAgLS1jb2xvci00LWhvdmVyOiBoc2woMTc5LCA0MyUsIDUwJSk7XG4gIC0tY29sb3ItNC1hY3RpdmU6IGhzbCgxNzksIDQzJSwgNDclKTtcbiAgLS1oZWFkZXItaGVpZ2h0OiA0cmVtO1xuICAtLXNpZGViYXItd2lkdGg6IDI1MHB4O1xuICAtLW1vdmUtdXAtZGlzdGFuY2U6IDA7XG4gIC0tbW92ZS1kb3duLWRpc3RhbmNlOiAwO1xufVxuXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5LFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgXG5wLCB1bCwgb2wsIGxpLCBidXR0b24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsLCBvbCwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufSBcblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc3ZnIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIEhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiKDAsIDAsIDAsIDAuMTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5oZWFkZXIgKiB7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cztcbn1cblxuLmhlYWRlciBoMXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDAuM3JlbTtcbiAgcGFkZGluZzogMCA0LjVyZW0gMCAwLjI1cmVtO1xuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgdHJhbnNpdGlvbjogXG4gICAgd2lkdGggMC41cyBlYXNlIDBzLCBcbiAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXG4gICAgb3BhY2l0eSAwLjVzIGVhc2UgMHMsIFxuICAgIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZWFkZXIgaDF7XG4gICAgd2lkdGg6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBcbiAgICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXG4gICAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXG4gICAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXG4gICAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMC41cztcbiAgfVxufVxuXG4uc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMXJlbSAwIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zZWFyY2gtYm94IGlucHV0IHtcbiAgICBtYXJnaW46IDAuMjVyZW1cbiAgfVxufVxuXG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcntcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGdyZXk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzICsgc3ZnIHtcbiAgZmlsbDogZ3JleTtcbn1cblxuLnNlYXJjaC1ib3ggc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwLjc1cmVtO1xuICBoZWlnaHQ6IDEuNzVyZW07XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWFkZXIgLmJ1dHRvbiB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xufVxuXG4uaGVhZGVyIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcbn1cblxuLmhlYWRlciAuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcbn1cblxuLmJ1dHRvbiBzdmcge1xuICBoZWlnaHQ6IDEuNzVyZW07XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4jYnV0dG9uU2lkZWJhciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbiNidXR0b25Vc2VyIHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRlciAuYnV0dG9uLFxuICAjYnV0dG9uU2lkZWJhcixcbiAgI2J1dHRvblVzZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNidXR0b25Ob3RpZmljYXRpb24uc2VhcmNoQm94LWZvY3VzZWQsXG4gICNidXR0b25TZXR0aW5ncy5zZWFyY2hCb3gtZm9jdXNlZCxcbiAgI2J1dHRvblVzZXIuc2VhcmNoQm94LWZvY3VzZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuI2J1dHRvblVzZXIgaW1nIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA4MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBTaWRlYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XG59XG5cbi5zaWRlYmFyLnNpZGViYXItaGlkZGVuIHtcbiAgbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcbn1cblxuLnNpZGViYXIgaDQge1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5zaWRlYmFyIHAge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC43NXJlbSAwO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbSAwLjI1cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLnNlY3Rpb24tdGl0bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcbn1cblxuLnNlY3Rpb24tdGl0bGU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VjdGlvbi10aXRsZSBzdmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTAuMDVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XG59XG5cbi5zZWN0aW9uLXRpdGxlIC5idXR0b246aG92ZXIgc3Zne1xuICBmaWxsOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcbn1cblxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjphY3RpdmUgc3Zne1xuICBmaWxsOiB2YXIoLS1jb2xvci00LWFjdGl2ZSk7XG59XG5cbi5zaWRlYmFyIGxpIHtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xuICBmaWxsOiBoc2woMCwgMCUsIDI1JSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5zaWRlYmFyIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uc2lkZWJhciBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xufVxuXG4uc2lkZWJhciBsaS5zZWxlY3RlZCxcbi5zaWRlYmFyIGxpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcbn1cblxuLnNpZGViYXIgbGkgPiBzdmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC4xcmVtO1xuICBoZWlnaHQ6IDEuMjVyZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBNYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLm1haW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xuICBkaXNwbGF5OiBmbGV4OyAgXG59XG5cbi5tYWluIHtcbiAgbWluLXdpZHRoOiAwO1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXM7XG59XG5cbi5tYWluLnNpZGViYXItaGlkZGVuIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbiNzaWRlYmFyT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcbiAgei1pbmRleDogOTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICNzaWRlYmFyT3ZlcmxheSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xuICB9XG5cbiAgI3NpZGViYXJPdmVybGF5LnNpZGViYXItaGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcbiAgfVxufVxuXG4ubWFpbiBoMyB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNtYWluVG9kYXkgLmNhcmRzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3MjBweCA7ICBcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIENhcmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uY2FyZC5hZGQgaDQge1xuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW0gMC4xNXJlbSAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IGxpZ2h0Z3JleSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7ICBcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tY29sb3ItNCksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4uY2FyZCBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAgXG59XG5cbi5jYXJkIHAge1xuICBmbGV4OiAxO1xuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkIGg0LmNvbXBsZXRlZCxcbi5jYXJkIHAuY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDc1JSk7XG59XG5cbi5jYXJkIC5idXR0b25zLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmNhcmQgLmJ1dHRvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxLjM1cmVtOyAgXG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDJyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jYXJkOmhvdmVyIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWhvdmVyKTtcbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWFjdGl2ZSk7XG59XG5cbi5jYXJkIC5idXR0b24uZG9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC42NXJlbTtcbiAgbGVmdDogLTAuNjVyZW07XG4gIGhlaWdodDogMS4zNXJlbTtcbiAgd2lkdGg6IDEuMzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZCAuYnV0dG9uLmRvbmU6aG92ZXIge1xuICB3aWR0aDogMS4zNXJlbTtcbiAgcGFkZGluZzogMDsgIFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhcmQgLmJ1dHRvbi5kb25lIHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGZpbGw6IHZhcigtLWNvbG9yLTQpO1xufVxuXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lIHN2Zy5jaGVjayB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jb250YWluZXIub25nb2luZyAuY2FyZCAuYnV0dG9uLmRvbmU6aG92ZXIgc3ZnLmNoZWNrIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lOmFjdGl2ZSBzdmcuY2hlY2sge1xuICBvcGFjaXR5OiAwLjU1O1xufVxuXG4uY29udGFpbmVyLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmRvbmUgc3ZnLmNoZWNrIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRhaW5lci5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHN2Zy5jaGVjayB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmNvbnRhaW5lci5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kb25lOmFjdGl2ZSBzdmcuY2hlY2sge1xuICBvcGFjaXR5OiAwLjI1O1xufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uLmRvbmU6aG92ZXIgc3ZnIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1ob3Zlcik7XG59XG5cbi5jYXJkIHN2ZyB7XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgZmlsbDogaHNsKDAsIDAlLCA3NSUpO1xufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyIHN2ZyB7XG4gIGZpbGw6IGhzbCgwLCAwJSwgNTAlKTtcbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbi5kZWxldGU6aG92ZXIgc3ZnIHtcbiAgZmlsbDogbGlnaHRjb3JhbDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIENhcmQgQW5pbWF0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubW92aW5nLWRvd24ge1xuICBhbmltYXRpb246IDAuMjVzIGVhc2UtaW4tb3V0IDBzIDEgcmV2ZXJzZSBmb3J3YXJkcyBjYXJkLW1vdmUtZG93bjtcbn1cblxuLm1vdmluZy11cCB7XG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSByZXZlcnNlIGZvcndhcmRzIGNhcmQtbW92ZS11cDtcbn1cblxuQGtleWZyYW1lcyBjYXJkLW1vdmUtZG93biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuNXJlbSk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKHZhcigtLW1vdmUtZG93bi1kaXN0YW5jZSkpKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNhcmQtbW92ZS11cCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGModmFyKC0tbW92ZS11cC1kaXN0YW5jZSkpKTtcbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogQ2FyZCBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNmb2N1c2VkQ2FyZE92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XG59XG5cbiNmb2N1c2VkQ2FyZE92ZXJsYXkudmlzaWJpbGl0eS1oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xufVxuXG4jZm9jdXNlZENhcmRPdmVybGF5IC53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW46IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcbiAgdXNlci1zZWxlY3Q6IGF1dG87XG59XG5cbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLmNhcmQgLmJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLnN1Ym1pdC1jb250YWluZXIge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLnN1Ym1pdC1jb250YWluZXIgLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgY29sb3I6IGRpbWdyZXk7XG59XG5cbiNidXR0b25Gb2N1c2VkQ2FyZENhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xufVxuXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWw6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xufVxuXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcbn1cblxuI2J1dHRvbkZvY3VzZWRDYXJkU3VibWl0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcbn1cblxuI2lucHV0VGFza1RpdGxlLFxuI2lucHV0VGFza0Rlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuI2lucHV0VGFza1RpdGxlOmZvY3VzLFxuI2lucHV0VGFza0Rlc2NyaXB0aW9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1ob3Zlcik7XG59XG5cbiNpbnB1dFRhc2tUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jaW5wdXRUYXNrRGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcmVzaXplOiBub25lOyAgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNzVweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIExvYWQgT3ZlcmxheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jbG9hZE92ZXJsYXkge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlIDAuMjVzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4zNXM7XG59XG5cbi5wcmVsb2FkICoge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgLW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIC1tcy10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFB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RUFDWCxZQUFZO0VBQ1osbUVBQW1FO0VBQ25FLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQSx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELHVEQUF1RDs7QUFFdkQ7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmZhbWlseT1QYWNpZmljbyZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLTE6IHdoaXRlO1xcbiAgLS1jb2xvci0xLWhvdmVyOiBoc2woMCwgMCUsIDk3JSk7XFxuICAtLWNvbG9yLTEtYWN0aXZlOiBoc2woMCwgMCUsIDk0JSk7O1xcbiAgLS1jb2xvci0yOiBoc2woMCwgMCUsIDk4JSk7XFxuICAtLWNvbG9yLTItaG92ZXI6IGhzbCgwLCAwJSwgOTUlKTtcXG4gIC0tY29sb3ItMi1hY3RpdmU6IGhzbCgwLCAwJSwgOTIlKTtcXG4gIC0tY29sb3ItMzogcmdiKDE1OCwgMjEwLCAxOTgpO1xcbiAgLS1jb2xvci0zLWhvdmVyOiBoc2woMTY2LCAzNyUsIDY5JSk7XFxuICAtLWNvbG9yLTMtYWN0aXZlOiBoc2woMTY2LCAzNyUsIDY2JSk7XFxuICAtLWNvbG9yLTMtc2VsZWN0ZWQ6IGhzbCgxNjYsIDM3JSwgNjclKTtcXG4gIC0tY29sb3ItNDogcmdiKDg0LCAxODYsIDE4NSk7XFxuICAtLWNvbG9yLTQtaG92ZXI6IGhzbCgxNzksIDQzJSwgNTAlKTtcXG4gIC0tY29sb3ItNC1hY3RpdmU6IGhzbCgxNzksIDQzJSwgNDclKTtcXG4gIC0taGVhZGVyLWhlaWdodDogNHJlbTtcXG4gIC0tc2lkZWJhci13aWR0aDogMjUwcHg7XFxuICAtLW1vdmUtdXAtZGlzdGFuY2U6IDA7XFxuICAtLW1vdmUtZG93bi1kaXN0YW5jZTogMDtcXG59XFxuXFxuKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIFxcbnAsIHVsLCBvbCwgbGksIGJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG51bCwgb2wsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufSBcXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuc3ZnIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogSGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmhlYWRlciAqIHtcXG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cztcXG59XFxuXFxuLmhlYWRlciBoMXtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMC4zcmVtO1xcbiAgcGFkZGluZzogMCA0LjVyZW0gMCAwLjI1cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgdHJhbnNpdGlvbjogXFxuICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXFxuICAgIHBhZGRpbmcgMC41cyBlYXNlIDBzLCBcXG4gICAgb3BhY2l0eSAwLjVzIGVhc2UgMHMsIFxcbiAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGVhZGVyIGgxe1xcbiAgICB3aWR0aDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBcXG4gICAgICB3aWR0aCAwLjVzIGVhc2UgMHMsIFxcbiAgICAgIHBhZGRpbmcgMC41cyBlYXNlIDBzLCBcXG4gICAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXFxuICAgICAgdmlzaWJpbGl0eSAwcyBlYXNlIDAuNXM7XFxuICB9XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDE7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYm94IGlucHV0IHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxcmVtIDAgM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnNlYXJjaC1ib3ggaW5wdXQge1xcbiAgICBtYXJnaW46IDAuMjVyZW1cXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVye1xcbiAgY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogZ3JleTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzICsgc3ZnIHtcXG4gIGZpbGw6IGdyZXk7XFxufVxcblxcbi5zZWFyY2gtYm94IHN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwLjc1cmVtO1xcbiAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbi5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhlYWRlciAuYnV0dG9uIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5oZWFkZXIgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcXG59XFxuXFxuLmhlYWRlciAuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWFjdGl2ZSk7XFxufVxcblxcbi5idXR0b24gc3ZnIHtcXG4gIGhlaWdodDogMS43NXJlbTtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4jYnV0dG9uU2lkZWJhciB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4jYnV0dG9uVXNlciB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmhlYWRlciAuYnV0dG9uLFxcbiAgI2J1dHRvblNpZGViYXIsXFxuICAjYnV0dG9uVXNlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gICNidXR0b25Ob3RpZmljYXRpb24uc2VhcmNoQm94LWZvY3VzZWQsXFxuICAjYnV0dG9uU2V0dGluZ3Muc2VhcmNoQm94LWZvY3VzZWQsXFxuICAjYnV0dG9uVXNlci5zZWFyY2hCb3gtZm9jdXNlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbiNidXR0b25Vc2VyIGltZyB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBTaWRlYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuXFxuLnNpZGViYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgei1pbmRleDogMTA7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XFxufVxcblxcbi5zaWRlYmFyLnNpZGViYXItaGlkZGVuIHtcXG4gIGxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XFxufVxcblxcbi5zaWRlYmFyIGg0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnNpZGViYXIgcCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMC43NXJlbSAwO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW0gMC4yNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGU6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUgaDQge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSAuYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHN2ZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0wLjA1cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIC5idXR0b246aG92ZXIgc3Zne1xcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1ob3Zlcik7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIC5idXR0b246YWN0aXZlIHN2Z3tcXG4gIGZpbGw6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMjUlKTtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgMjUlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnNpZGViYXIgbGk6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhciBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcXG59XFxuXFxuLnNpZGViYXIgbGkuc2VsZWN0ZWQsXFxuLnNpZGViYXIgbGk6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcXG59XFxuXFxuLnNpZGViYXIgbGkgPiBzdmcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjFyZW07XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogTWFpbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XFxuICBkaXNwbGF5OiBmbGV4OyAgXFxufVxcblxcbi5tYWluIHtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEuMjVyZW0gMnJlbTtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzO1xcbn1cXG5cXG4ubWFpbi5zaWRlYmFyLWhpZGRlbiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuI3NpZGViYXJPdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xcbiAgei1pbmRleDogOTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubWFpbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcblxcbiAgI3NpZGViYXJPdmVybGF5IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxuICB9XFxuXFxuICAjc2lkZWJhck92ZXJsYXkuc2lkZWJhci1oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xcbiAgfVxcbn1cXG5cXG4ubWFpbiBoMyB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI21haW5Ub2RheSAuY2FyZHMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDcyMHB4IDsgIFxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIENhcmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uY2FyZC5hZGQgaDQge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbSAwLjE1cmVtIDAuNzVyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyZXksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgIFxcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tY29sb3ItNCksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uY2FyZCBoNCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7ICBcXG59XFxuXFxuLmNhcmQgcCB7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLmNhcmQgaDQuY29tcGxldGVkLFxcbi5jYXJkIHAuY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNzUlKTtcXG59XFxuXFxuLmNhcmQgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmNhcmQgLmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMS4zNXJlbTsgIFxcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB3aWR0aDogMnJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEtaG92ZXIpO1xcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWFjdGl2ZSk7XFxufVxcblxcbi5jYXJkIC5idXR0b24uZG9uZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0wLjY1cmVtO1xcbiAgbGVmdDogLTAuNjVyZW07XFxuICBoZWlnaHQ6IDEuMzVyZW07XFxuICB3aWR0aDogMS4zNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHtcXG4gIHdpZHRoOiAxLjM1cmVtO1xcbiAgcGFkZGluZzogMDsgIFxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5jYXJkIC5idXR0b24uZG9uZSBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBmaWxsOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmNvbnRhaW5lci5vbmdvaW5nIC5jYXJkIC5idXR0b24uZG9uZSBzdmcuY2hlY2sge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNvbnRhaW5lci5vbmdvaW5nIC5jYXJkIC5idXR0b24uZG9uZTpob3ZlciBzdmcuY2hlY2sge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uY29udGFpbmVyLm9uZ29pbmcgLmNhcmQgLmJ1dHRvbi5kb25lOmFjdGl2ZSBzdmcuY2hlY2sge1xcbiAgb3BhY2l0eTogMC41NTtcXG59XFxuXFxuLmNvbnRhaW5lci5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kb25lIHN2Zy5jaGVjayB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY29udGFpbmVyLmNvbXBsZXRlZCAuY2FyZCAuYnV0dG9uLmRvbmU6aG92ZXIgc3ZnLmNoZWNrIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmNvbnRhaW5lci5jb21wbGV0ZWQgLmNhcmQgLmJ1dHRvbi5kb25lOmFjdGl2ZSBzdmcuY2hlY2sge1xcbiAgb3BhY2l0eTogMC4yNTtcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbi5kb25lOmhvdmVyIHN2ZyB7XFxuICBmaWxsOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcXG59XFxuXFxuLmNhcmQgc3ZnIHtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3ZlciBzdmcge1xcbiAgZmlsbDogaHNsKDAsIDAlLCA1MCUpO1xcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uLmRlbGV0ZTpob3ZlciBzdmcge1xcbiAgZmlsbDogbGlnaHRjb3JhbDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBDYXJkIEFuaW1hdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1vdmluZy1kb3duIHtcXG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSByZXZlcnNlIGZvcndhcmRzIGNhcmQtbW92ZS1kb3duO1xcbn1cXG5cXG4ubW92aW5nLXVwIHtcXG4gIGFuaW1hdGlvbjogMC4yNXMgZWFzZS1pbi1vdXQgMHMgMSByZXZlcnNlIGZvcndhcmRzIGNhcmQtbW92ZS11cDtcXG59XFxuXFxuQGtleWZyYW1lcyBjYXJkLW1vdmUtZG93biB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC41cmVtKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS1tb3ZlLWRvd24tZGlzdGFuY2UpKSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgY2FyZC1tb3ZlLXVwIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKHZhcigtLW1vdmUtdXAtZGlzdGFuY2UpKSk7XFxuICB9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogQ2FyZCBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNmb2N1c2VkQ2FyZE92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxufVxcblxcbiNmb2N1c2VkQ2FyZE92ZXJsYXkudmlzaWJpbGl0eS1oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xcbn1cXG5cXG4jZm9jdXNlZENhcmRPdmVybGF5IC53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbn1cXG5cXG4jZm9jdXNlZENhcmRPdmVybGF5IC5jYXJkIC5idXR0b24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2ZvY3VzZWRDYXJkT3ZlcmxheSAuc3VibWl0LWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNmb2N1c2VkQ2FyZE92ZXJsYXkgLnN1Ym1pdC1jb250YWluZXIgLmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBjb2xvcjogZGltZ3JleTtcXG59XFxuXFxuI2J1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcbn1cXG5cXG4jYnV0dG9uRm9jdXNlZENhcmRDYW5jZWw6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcXG59XFxuXFxuI2J1dHRvbkZvY3VzZWRDYXJkU3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2J1dHRvbkZvY3VzZWRDYXJkU3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xcbn1cXG5cXG4jYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcXG59XFxuXFxuI2lucHV0VGFza1RpdGxlLFxcbiNpbnB1dFRhc2tEZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4jaW5wdXRUYXNrVGl0bGU6Zm9jdXMsXFxuI2lucHV0VGFza0Rlc2NyaXB0aW9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEtaG92ZXIpO1xcbn1cXG5cXG4jaW5wdXRUYXNrVGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jaW5wdXRUYXNrRGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICByZXNpemU6IG5vbmU7ICBcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogTG9hZCBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNsb2FkT3ZlcmxheSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4yNXMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjM1cztcXG59XFxuXFxuLnByZWxvYWQgKiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgLW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIC1vLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgdG9nZ2xlVGFza0NvbXBsZXRpb24oKSB7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRoaXMuaXNDb21wbGV0ZWQgPyBmYWxzZSA6IHRydWU7XG4gIH1cbn1cblxuLy8gdGVtcG9yYXJpbHkgZmlsbCB0YXNrc1xuY29uc3QgdGFza3MgPSBbXG4gIG5ldyBUYXNrKFwiVGFzayAxXCIsIFwibG9yZW0gaXBzdW0gYmxhYmxhYmFsYmFsIGFzZnBhcyBsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmcGFzIHNhZCBhc2ZhbG9yZW0gaXBzdW0gYmxhYmxhYmFsYmFsIGFzZnBhcyBzYWQgYXNmYXNhZCBhc2Zhc2RhanBzYWogZnNmIGFcIiwgMTY5MDI1NTUwOTI2NSksXG4gIG5ldyBUYXNrKFwiVGFzayAyXCIsIFwibG9hcyBhcyByYXNkZ2FzZW0gaXBzdW0gYmxhYmxhYmFsYXNkIGFzZCBhbCBhc2ZwYXNqcHNhaiBmc2YgYVwiLCAxNjkwMjU1NTE3MDEyKSxcbiAgbmV3IFRhc2soXCJUYXNrIDNcIiwgXCJsb3Jhc2RnYSAgZ2VtIGlwc3VtIGJsIGFzZ2FzIGRnc2FkIGdhYmxhYmFsYmFsIGFzZnBhc2pwc2FqIGZzZiBhXCIsIDE2OTAyNTU1MjE3MzcpLFxuICBuZXcgVGFzayhcIlRhc2sgNFwiLCBcImFzZGdhc3BzdW0gYmwgYWFzZ2FzIGRnc2FkZ3NhZyBnc2FkZ2FzYWdiYWwgYXNmcGFzanBzYWogc2Rnc2RcIiwgMTY5MDI1NTUyMTczOSksXG5dO1xuXG4vLyB0ZW1wb3JhcnkgdHJ1ZVxudGFza3NbM10udG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcblxuY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrcztcblxuY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4ge1xuICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pbmRleCA9PSBpbmRleClbMF07XG59XG5cbmNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCkgPT4ge1xuICB0YXNrcy5wdXNoKG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW5kZXgpKTtcbn1cblxuY29uc3QgdXBkYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrKGluZGV4KTtcbiAgdGFzay50aXRsZSA9IHRpdGxlO1xuICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG59XG5cbmV4cG9ydCB7XG4gIGdldFRhc2ssXG4gIGdldFRhc2tzLFxuICBhZGRUYXNrLFxuICB1cGRhdGVUYXNrLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgdG9kb2xpc3QgZnJvbSAnLi90b2RvbGlzdC5qcyc7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbi8vIEhlYWRlciBFbGVtZW50cyBcbmNvbnN0IGJ1dHRvblNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uU2lkZWJhcicpO1xuY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEJveCcpO1xuY29uc3QgYnV0dG9uTm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbk5vdGlmaWNhdGlvbicpO1xuY29uc3QgYnV0dG9uU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uU2V0dGluZ3MnKTtcbmNvbnN0IGJ1dHRvblVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uVXNlcicpO1xuXG4vLyBDYXJkIEVsZW1lbnRzXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbmNvbnN0IGNhcmRPbmdvaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzID4gLmNvbnRhaW5lci5vbmdvaW5nJyk7XG5jb25zdCBjYXJkQ29tcGxldGVkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzID4gLmNvbnRhaW5lci5jb21wbGV0ZWQnKTtcbmNvbnN0IGZvY3VzZWRDYXJkT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb2N1c2VkQ2FyZE92ZXJsYXknKTtcbmNvbnN0IGZvY3VzZWRDYXJkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb2N1c2VkQ2FyZE92ZXJsYXkgPiAud3JhcHBlcicpO1xuY29uc3QgYWRkVGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC5hZGQnKTtcblxuLy8gRm9jdXNlZCBDYXJkIEVsZW1lbnRzXG5jb25zdCBpbnB1dFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tUaXRsZScpO1xuY29uc3QgaW5wdXRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrRGVzY3JpcHRpb24nKTtcbmNvbnN0IGJ1dHRvbkZvY3VzZWRDYXJkU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkZvY3VzZWRDYXJkU3VibWl0Jyk7XG5jb25zdCBidXR0b25Gb2N1c2VkQ2FyZENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Gb2N1c2VkQ2FyZENhbmNlbCcpO1xuY29uc3QgZm9jdXNlZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9jdXNlZENhcmQnKTtcblxuLy8gU2lkZSBCYXIgRWxlbWVudHNcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3Qgc2lkZWJhck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhck92ZXJsYXknKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIENhcmRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5jb25zdCBmaWxsQ2FyZHNDb250YWluZXIgPSAoKSA9PiB7XG4gIHRvZG9saXN0LmdldFRhc2tzKCkuZm9yRWFjaChnZW5lcmF0ZUNhcmQpO1xufVxuXG5jb25zdCBjbGVhckNhcmRzQ29udGFpbmVyID0gKCkgPT4ge1xuICB3aGlsZSAoY2FyZE9uZ29pbmdDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjYXJkT25nb2luZ0NvbnRhaW5lci5yZW1vdmVDaGlsZChjYXJkT25nb2luZ0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgd2hpbGUgKGNhcmRDb21wbGV0ZWRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjYXJkQ29tcGxldGVkQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNhcmRDb21wbGV0ZWRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59XG5cbmNvbnN0IHJlZ2VuZXJhdGVDYXJkc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY2xlYXJDYXJkc0NvbnRhaW5lcigpO1xuICBmaWxsQ2FyZHNDb250YWluZXIoKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2FyZEluZGV4KGUpIHtcbiAgbGV0IGNhcmRJbmRleDtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKVxuICAgIC5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgaWYgKGNhcmQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIGNhcmRJbmRleCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICB9O1xuICAgIH0pO1xuICByZXR1cm4gY2FyZEluZGV4O1xufVxuXG5jb25zdCBjYXJkQ29vcmRpbmF0ZXMgPSAoKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IFtdO1xuXG4gIGNvbnN0IHNldEJlZm9yZSA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50Q2FyZHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lcjpub3QoLmFkZCkgLmNhcmQnKV07XG4gICAgY2FyZHMucHVzaCguLi5jdXJyZW50Q2FyZHMubWFwKGNhcmQgPT4gKHtcbiAgICAgIGluZGV4OiBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpLFxuICAgICAgYmVmb3JlOiBjYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIH0pKSk7XG4gIH1cblxuICBjb25zdCBzZXRBZnRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50Q2FyZHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lcjpub3QoLmFkZCkgLmNhcmQnKV07XG4gICAgY3VycmVudENhcmRzLmZvckVhY2goY3VycmVudENhcmQgPT4ge1xuICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRDYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpID09PSBjYXJkLmluZGV4KSB7XG4gICAgICAgICAgY2FyZC5hZnRlciA9IGN1cnJlbnRDYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgZ2V0Q2FyZCA9IChjYXJkSW5kZXgpID0+IHtcbiAgICBsZXQgbWF0Y2hpbmdDYXJkO1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICBpZiAoY2FyZC5pbmRleCA9PT0gY2FyZEluZGV4KSB7XG4gICAgICAgIG1hdGNoaW5nQ2FyZCA9IGNhcmQ7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gbWF0Y2hpbmdDYXJkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRCZWZvcmUsXG4gICAgc2V0QWZ0ZXIsXG4gICAgZ2V0Q2FyZCxcbiAgfVxufSkoKVxuXG5jb25zdCBjb21wbGV0ZUNhcmQgPSAoZSkgPT4ge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCBpbmRleCA9IGdldENhcmRJbmRleChlKTtcbiAgY29uc3QgdGFzayA9IHRvZG9saXN0LmdldFRhc2soaW5kZXgpO1xuXG4gIGNhcmRDb29yZGluYXRlcy5zZXRCZWZvcmUoKTtcblxuICB0YXNrLnRvZ2dsZVRhc2tDb21wbGV0aW9uKCk7XG4gIHJlZ2VuZXJhdGVDYXJkc0NvbnRhaW5lcigpO1xuXG4gIGNhcmRDb29yZGluYXRlcy5zZXRBZnRlcigpO1xuICBhbmltYXRlQ29tcGxldGVDYXJkKGluZGV4KTtcbn1cblxuY29uc3QgYW5pbWF0ZUNvbXBsZXRlQ2FyZCA9IChjYXJkSW5kZXgpID0+IHtcbiAgY29uc3QgbW92aW5nQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkW2RhdGEtaW5kZXg9XCIke2NhcmRJbmRleH1cIl1gKTsgXG4gIGNvbnN0IGRvd25EaXN0YW5jZSA9IFxuICAgIGNhcmRDb29yZGluYXRlcy5nZXRDYXJkKGNhcmRJbmRleCkuYmVmb3JlLnRvcCAtIFxuICAgIGNhcmRDb29yZGluYXRlcy5nZXRDYXJkKGNhcmRJbmRleCkuYWZ0ZXIudG9wO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLW1vdmUtZG93bi1kaXN0YW5jZScsIGAke2Rvd25EaXN0YW5jZX1weGApOyAgXG4gIG1vdmluZ0NhcmQuY2xhc3NMaXN0LmFkZCgnbW92aW5nLWRvd24nKTtcbiAgbW92aW5nQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoZSkgPT4ge1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZpbmctZG93bicpICAgICAgXG4gIH0pO1xuXG4gIGNvbnN0IG90aGVyQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuY29udGFpbmVyOm5vdCguYWRkKSAuY2FyZDpub3QoW2RhdGEtaW5kZXg9XCIke2NhcmRJbmRleH1cIl0pYCk7XG4gIG90aGVyQ2FyZHMuZm9yRWFjaChvdGhlckNhcmQgPT4ge1xuICAgIGNvbnN0IHVwRGlzdGFuY2UgPSBcbiAgICAgIGNhcmRDb29yZGluYXRlcy5nZXRDYXJkKG90aGVyQ2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSkuYmVmb3JlLnRvcCAtIFxuICAgICAgY2FyZENvb3JkaW5hdGVzLmdldENhcmQob3RoZXJDYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKS5hZnRlci50b3A7XG4gICAgaWYgKHVwRGlzdGFuY2UgPT09IDApIHJldHVybjtcbiAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLW1vdmUtdXAtZGlzdGFuY2UnLCBgJHt1cERpc3RhbmNlfXB4YCk7XG4gICAgb3RoZXJDYXJkLmNsYXNzTGlzdC5hZGQoJ21vdmluZy11cCcpO1xuICAgIG90aGVyQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoZSkgPT4ge1xuICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ21vdmluZy11cCcpICAgICAgXG4gICAgfSk7XG4gIH0pOyAgXG59XG5cbmNvbnN0IGdlbmVyYXRlQ2FyZCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gIGNhcmQuZGF0YXNldC5pbmRleCA9IHRhc2suaW5kZXg7XG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Rm9jdXNlZENhcmQpO1xuXG4gIGNvbnN0IGJ1dHRvbkRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uRG9uZS5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgYnV0dG9uRG9uZS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gIGJ1dHRvbkRvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb21wbGV0ZUNhcmQpOyBcblxuICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkdW1teTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uRG9uZS5hcHBlbmRDaGlsZChkdW1teSk7XG4gIGJ1dHRvbkRvbmUuYXBwZW5kQ2hpbGQoZHVtbXkyKTtcbiAgXG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgaDQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgaWYgKHRhc2suaXNDb21wbGV0ZWQpIHtcbiAgICBoNC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTsgIFxuICAgIHAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7ICAgIFxuICAgIGR1bW15Lm91dGVySFRNTCA9IGA8c3ZnIHN0eWxlPVwiXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2lyY2xlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsMjBBOCw4IDAgMCwxIDQsMTJBOCw4IDAgMCwxIDEyLDRBOCw4IDAgMCwxIDIwLDEyQTgsOCAwIDAsMSAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPmA7XG4gICAgZHVtbXkyLm91dGVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiY2hlY2tcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jaGVjay1jaXJjbGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMiAyQzYuNSAyIDIgNi41IDIgMTJTNi41IDIyIDEyIDIyIDIyIDE3LjUgMjIgMTIgMTcuNSAyIDEyIDJNMTIgMjBDNy41OSAyMCA0IDE2LjQxIDQgMTJTNy41OSA0IDEyIDQgMjAgNy41OSAyMCAxMiAxNi40MSAyMCAxMiAyME0xNi41OSA3LjU4TDEwIDE0LjE3TDcuNDEgMTEuNTlMNiAxM0wxMCAxN0wxOCA5TDE2LjU5IDcuNThaXCIgLz48L3N2Zz5gO1xuICB9XG4gIGVsc2UgeyAgIFxuICAgIGg0LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpOyAgXG4gICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTsgICAgXG4gICAgZHVtbXkub3V0ZXJIVE1MID0gYDxzdmcgc3R5bGU9XCJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jaXJjbGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMiwyMEE4LDggMCAwLDEgNCwxMkE4LDggMCAwLDEgMTIsNEE4LDggMCAwLDEgMjAsMTJBOCw4IDAgMCwxIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+YDtcbiAgICBkdW1teTIub3V0ZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJjaGVja1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNoZWNrLWNpcmNsZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMiAyMEM3LjU5IDIwIDQgMTYuNDEgNCAxMlM3LjU5IDQgMTIgNCAyMCA3LjU5IDIwIDEyIDE2LjQxIDIwIDEyIDIwTTE2LjU5IDcuNThMMTAgMTQuMTdMNy40MSAxMS41OUw2IDEzTDEwIDE3TDE4IDlMMTYuNTkgNy41OFpcIiAvPjwvc3ZnPmA7XG4gIH1cblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1jb250YWluZXInKTtcblxuICBjb25zdCBidXR0b25zRXRjID0gW1xuICAgIHtjbGFzczogJ2R1ZWRhdGUnLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNhbGVuZGFyLWNsb2NrPC90aXRsZT48cGF0aCBkPVwiTTE1LDEzSDE2LjVWMTUuODJMMTguOTQsMTcuMjNMMTguMTksMTguNTNMMTUsMTYuNjlWMTNNMTksOEg1VjE5SDkuNjdDOS4yNCwxOC4wOSA5LDE3LjA3IDksMTZBNyw3IDAgMCwxIDE2LDlDMTcuMDcsOSAxOC4wOSw5LjI0IDE5LDkuNjdWOE01LDIxQzMuODksMjEgMywyMC4xIDMsMTlWNUMzLDMuODkgMy44OSwzIDUsM0g2VjFIOFYzSDE2VjFIMThWM0gxOUEyLDIgMCAwLDEgMjEsNVYxMS4xQzIyLjI0LDEyLjM2IDIzLDE0LjA5IDIzLDE2QTcsNyAwIDAsMSAxNiwyM0MxNC4wOSwyMyAxMi4zNiwyMi4yNCAxMS4xLDIxSDVNMTYsMTEuMTVBNC44NSw0Ljg1IDAgMCwwIDExLjE1LDE2QzExLjE1LDE4LjY4IDEzLjMyLDIwLjg1IDE2LDIwLjg1QTQuODUsNC44NSAwIDAsMCAyMC44NSwxNkMyMC44NSwxMy4zMiAxOC42OCwxMS4xNSAxNiwxMS4xNVpcIiAvPjwvc3ZnPmB9LFxuICAgIHtjbGFzczogJ2xpc3QnLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmZvbGRlci1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTIwLDE4SDRWOEgyME0yMCw2SDEyTDEwLDRINEMyLjg5LDQgMiw0Ljg5IDIsNlYxOEEyLDIgMCAwLDAgNCwyMEgyMEEyLDIgMCAwLDAgMjIsMThWOEMyMiw2Ljg5IDIxLjEsNiAyMCw2WlwiIC8+PC9zdmc+YH0sXG4gICAge2NsYXNzOiAncHJpb3JpdHknLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmZsYWctb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMi4zNiw2TDEyLjc2LDhIMThWMTRIMTQuNjRMMTQuMjQsMTJIN1Y2SDEyLjM2TTE0LDRINVYyMUg3VjE0SDEyLjZMMTMsMTZIMjBWNkgxNC40XCIgLz48L3N2Zz5gfSxcbiAgICB7Y2xhc3M6ICdkZWxldGUnLCBzdmc6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmRlbGV0ZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOU04LDlIMTZWMTlIOFY5TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVaXCIgLz48L3N2Zz5gfSxcbiAgXVxuXG4gIGZvciAobGV0IGJ1dHRvbkV0YyBvZiBidXR0b25zRXRjKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGJ1dHRvbkV0Yy5jbGFzcyk7XG5cbiAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGR1bW15KVxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBcbiAgICBkdW1teS5vdXRlckhUTUwgPSBidXR0b25FdGMuc3ZnO1xuICB9XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25Eb25lKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChoNCk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQocCk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG5cbiAgaWYgKHRhc2suaXNDb21wbGV0ZWQpIHtcbiAgICBjYXJkQ29tcGxldGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9IGVsc2Uge1xuICAgIGNhcmRPbmdvaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBBZGQgVGFzayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuY29uc3QgYXV0b1NpemVUZXh0QXJlYSA9IChlKSA9PiB7XG4gIGUuY3VycmVudFRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjc1cHhcIjtcbiAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmhlaWdodCA9IChlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0KSArIFwicHhcIjtcbn1cblxuY29uc3QgY2xpY2tGb2N1c2VkQ2FyZE92ZXJsYXkgPSAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xuICAgIGlmICh0b2RvbGlzdC5nZXRUYXNrcygpLnNvbWUodGFzayA9PiB0YXNrLmluZGV4ID09IGZvY3VzZWRDYXJkLmRhdGFzZXQuZm9jdXNlZEluZGV4KSkgeyAgICBcbiAgICAgIHN1Ym1pdEZvY3VzZWRDYXJkKCk7XG4gICAgfVxuICAgIGhpZGVGb2N1c2VkQ2FyZCgpO1xuICB9XG59XG5cbmNvbnN0IGhpZGVGb2N1c2VkQ2FyZCA9IChlKSA9PiB7XG4gIGZvY3VzZWRDYXJkT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xuICBmb2N1c2VkQ2FyZE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICByZXNldEZvY3VzZWRDYXJkKCk7XG4gIH0sIHtvbmNlOiB0cnVlfSk7XG59XG5cbmNvbnN0IHNob3dGb2N1c2VkQ2FyZCA9IChlKSA9PiB7ICBcbiAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQpO1xuICBmb2N1c2VkQ2FyZE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKTsgIFxuICBpZiAoZS5jdXJyZW50VGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKSB7XG4gICAgYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQudGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgZm9jdXNlZENhcmQuZGF0YXNldC5mb2N1c2VkSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgY29uc3QgdGFzayA9IHRvZG9saXN0LmdldFRhc2soZm9jdXNlZENhcmQuZGF0YXNldC5mb2N1c2VkSW5kZXgpO1xuICAgIGlucHV0VGFza1RpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIH1cbiAgZWxzZSB7XG4gICAgYnV0dG9uRm9jdXNlZENhcmRTdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBmb2N1c2VkQ2FyZC5kYXRhc2V0LmZvY3VzZWRJbmRleCA9IERhdGUubm93KCk7XG4gIH1cbn1cblxuY29uc3QgcmVzZXRGb2N1c2VkQ2FyZCA9ICgpID0+IHtcbiAgaW5wdXRUYXNrVGl0bGUudmFsdWUgPSAnJztcbiAgaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgZm9jdXNlZENhcmQuZGF0YXNldC5mb2N1c2VkSW5kZXggPSAnJztcbn1cblxuY29uc3Qgc3VibWl0Rm9jdXNlZENhcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gaW5wdXRUYXNrVGl0bGUudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWU7XG4gIGNvbnN0IGluZGV4ID0gZm9jdXNlZENhcmQuZGF0YXNldC5mb2N1c2VkSW5kZXg7XG5cbiAgaWYgKHRvZG9saXN0LmdldFRhc2tzKCkuc29tZSh0YXNrID0+IHRhc2suaW5kZXggPT0gaW5kZXgpKSB7ICAgIFxuICAgIHRvZG9saXN0LnVwZGF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdG9kb2xpc3QuYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KTtcbiAgfVxuICBoaWRlRm9jdXNlZENhcmQoKTtcbiAgcmVnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKCk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBTaWRlYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuY29uc3QgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHkgPSAoKSA9PiB7XG4gIGlmICghc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItaGlkZGVuJykpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGlkZGVuJyk7XG4gICAgc2lkZWJhck92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGlkZGVuJyk7IFxuICB9XG4gIGVsc2Uge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBzaWRlYmFyT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWhpZGRlbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBzaWRlYmFyT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXJWaXNpYmlsaXR5LCB7b25jZTogdHJ1ZX0pOyAgIFxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBTZWFyY2hib3ggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuY29uc3QgZXhwYW5kU2VhcmNoQm94T25Nb2JpbGUgPSAoKSA9PiB7XG4gIGlmICghYnV0dG9uTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoQm94LWZvY3VzZWQnKSkge1xuICAgIGJ1dHRvbk5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIGJ1dHRvblNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XG4gICAgYnV0dG9uVXNlci5jbGFzc0xpc3QuYWRkKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIHNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZXhwYW5kU2VhcmNoQm94T25Nb2JpbGUsIHtvbmNlOiB0cnVlfSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgYnV0dG9uTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XG4gICAgYnV0dG9uU2V0dGluZ3MuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoQm94LWZvY3VzZWQnKTtcbiAgICBidXR0b25Vc2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XG4gICAgc2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZXhwYW5kU2VhcmNoQm94T25Nb2JpbGUsIHtvbmNlOiB0cnVlfSk7ICAgIFxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyBPdGhlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuaW5wdXRUYXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhdXRvU2l6ZVRleHRBcmVhKTtcbmZvY3VzZWRDYXJkT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRm9jdXNlZENhcmRPdmVybGF5KTtcbmZvY3VzZWRDYXJkV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRm9jdXNlZENhcmRPdmVybGF5KTtcbmFkZFRhc2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0ZvY3VzZWRDYXJkKTtcbmJ1dHRvbkZvY3VzZWRDYXJkQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUZvY3VzZWRDYXJkKTtcbmJ1dHRvbkZvY3VzZWRDYXJkU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Rm9jdXNlZENhcmQpO1xuYnV0dG9uU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXJWaXNpYmlsaXR5KTtcbnNpZGViYXJPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHksIHtvbmNlOiB0cnVlfSk7XG5zZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBleHBhbmRTZWFyY2hCb3hPbk1vYmlsZSwge29uY2U6IHRydWV9KTtcblxuXG4vLyBJbml0aWFsIGdlbmVyYXRpb24gb2YgY2FyZHMgY29udGFpbmVyXG5yZWdlbmVyYXRlQ2FyZHNDb250YWluZXIoKTtcbnNldFRpbWVvdXQoKCkgPT4ge2RvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncHJlbG9hZCcpfSwgMCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9