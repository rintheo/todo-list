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
  max-width: 1024px ;
}

.cards > .container {
  margin-top: 1rem;
  display: grid;
  grid-template-row: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  gap: 1rem;
}

.card.add {
  margin-top: 1rem;
}

.card.add h4 {
  color: hsl(0, 0%, 50%);
  font-weight: 500;
}

.card {
  position: relative;
  padding: 0.5rem 0.75rem 0.15rem 0.75rem;
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
}

.card p {
  color: hsl(0, 0%, 50%);
  font-size: 0.9rem;
}

.card h4.completed,
.card p.completed {
  text-decoration: line-through;
  color: hsl(0, 0%, 75%);
}

.card .buttons-container {
  margin-top: auto;
  padding-top: 1rem;
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
  width: auto;
  padding: 0 0.75rem;  
}

.card:hover .button:hover:after {
  margin: 0.2rem
}

.card:hover .button:hover.duedate:after {
  content: 'Due Date & Time';
}

.card:hover .button:hover.list:after {
  content: 'List';
}

.card:hover .button:hover.priority:after {
  content: 'Set Priority';
}

.card:hover .button:hover.delete {
  color: red;
}

.card:hover .button:hover.delete:after {
  content: 'Delete Task';
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
  fill: red;
}

/* -------------------------------------------------- */
/* Card Overlay ------------------------------------- */
/* -------------------------------------------------- */

#addTaskOverlay {
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

#addTaskOverlay.visibility-hidden {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;
}

#addTaskOverlay .wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
}

#addTaskOverlay .card {
  background-color: white;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);
  user-select: auto;
}

#addTaskOverlay .card .button {
  opacity: 1;
}

#addTaskOverlay .submit-container {
  align-self: end;
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

#addTaskOverlay .submit-container .button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

#buttonCancelAddTask {
  background-color: var(--color-2);
  color: dimgrey;
}

#buttonCancelAddTask:hover {
  background-color: var(--color-2-hover);
}

#buttonCancelAddTask:active {
  background-color: var(--color-2-active);
}

#buttonAddTask {
  background-color: var(--color-4);
  color: white;
  font-weight: 600;
}

#buttonAddTask:hover {
  background-color: var(--color-4-hover);
}

#buttonAddTask:active {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Pacifico&display=swap');\n\n:root {\n  --color-1: white;\n  --color-1-hover: hsl(0, 0%, 97%);\n  --color-1-active: hsl(0, 0%, 94%);;\n  --color-2: hsl(0, 0%, 98%);\n  --color-2-hover: hsl(0, 0%, 95%);\n  --color-2-active: hsl(0, 0%, 92%);\n  --color-3: rgb(158, 210, 198);\n  --color-3-hover: hsl(166, 37%, 69%);\n  --color-3-active: hsl(166, 37%, 66%);\n  --color-3-selected: hsl(166, 37%, 67%);\n  --color-4: rgb(84, 186, 185);\n  --color-4-hover: hsl(179, 43%, 50%);\n  --color-4-active: hsl(179, 43%, 47%);\n  --header-height: 4rem;\n  --sidebar-width: 250px;\n}\n\n*, *::after, *::before {\n  font-family: 'Open Sans', sans-serif;\n  box-sizing: border-box;\n}\n\nhtml, body,\nh1, h2, h3, h4, h5, h6, \np, ul, ol, li, button {\n  margin: 0;\n  padding: 0;\n}\n\nul, ol, li {\n  list-style: none;\n} \n\na {\n  text-decoration: none;\n}\n\nsvg {\n  vertical-align: top;\n}\n\n/* -------------------------------------------------- */\n/* Header ------------------------------------------- */\n/* -------------------------------------------------- */\n\n.header {\n  position: relative;\n  height: var(--header-height);\n  padding: 0.25rem;\n  background-color: var(--color-4);\n  color: white;\n  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  z-index: 100;\n}\n\n.header * {\n  transition: margin 0.25s;\n}\n\n.header h1{\n  position: relative;\n  bottom: 0.3rem;\n  padding: 0 4.5rem 0 0.25rem;\n  font-family: 'Pacifico', cursive;\n  font-weight: 200;\n  transition: \n    width 0.5s ease 0s, \n    padding 0.5s ease 0s, \n    opacity 0.5s ease 0s, \n    visibility 0s ease 0s;\n  visibility: visible;\n  opacity: 1;\n}\n\n@media (max-width: 600px) {\n  .header h1{\n    width: 0;\n    padding: 0;\n    visibility: hidden;\n    opacity: 0;\n    transition: \n      width 0.5s ease 0s, \n      padding 0.5s ease 0s, \n      opacity 0.5s ease 0s, \n      visibility 0s ease 0.5s;\n  }\n}\n\n.search-box {\n  position: relative;\n  flex: 1;\n  max-width: 500px;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n}\n\n.search-box input {\n  height: 3rem;\n  width: 100%;\n  padding: 0 1rem 0 3rem;\n  background-color: var(--color-3);\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 1.15rem;\n  font-weight: 400;\n\n  transition: 0.1s;\n}\n\n@media (max-width: 600px) {\n  .search-box input {\n    margin: 0.25rem\n  }\n}\n\n.search-box input::placeholder {\n  color: white;\n}\n\n.search-box input:focus::placeholder{\n  color: lightgrey;\n}\n\n.search-box input:focus {\n  background-color: white;\n  color: grey;\n  outline: none;\n}\n\n.search-box input:focus + svg {\n  fill: grey;\n}\n\n.search-box svg {\n  position: absolute;\n  left: 0.75rem;\n  height: 1.75rem;\n  fill: white;\n}\n\n.button {\n  border: none;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.header .button {\n  height: 3rem;\n  width: 3rem;\n  background-color: var(--color-4);\n}\n\n.header .button:hover {\n  background-color: var(--color-4-hover);\n}\n\n.header .button:active {\n  background-color: var(--color-4-active);\n}\n\n.button svg {\n  height: 1.75rem;\n  fill: white;\n}\n\n#buttonSidebar {\n  margin-left: 0.5rem;\n}\n\n#buttonUser {\n  margin: 0 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (max-width: 600px) {\n  .header .button,\n  #buttonSidebar,\n  #buttonUser {\n    margin: 0;\n  }\n\n  #buttonNotification.searchBox-focused,\n  #buttonSettings.searchBox-focused,\n  #buttonUser.searchBox-focused {\n    display: none;\n  }\n}\n\n#buttonUser img {\n  height: 80%;\n  width: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n/* -------------------------------------------------- */\n/* Sidebar ------------------------------------------ */\n/* -------------------------------------------------- */\n\n\n.sidebar {\n  position: absolute;\n  left: 0;\n  height: calc(100vh - var(--header-height));\n  width: var(--sidebar-width);\n  padding: 0.5rem;\n  background-color: var(--color-2);\n  z-index: 10;\n  transition: left 0.5s;\n}\n\n.sidebar.sidebar-hidden {\n  left: calc(-1 * var(--sidebar-width));\n}\n\n.sidebar h4 {\n  font-size: 1.25rem;\n}\n\n.sidebar p {\n  font-weight: 400;\n}\n\n.section-title {\n  display: flex;\n  align-items: center;\n  margin: 0.75rem 0;\n  padding: 0.25rem 0.5rem 0.25rem 1rem;\n  border-radius: 0.5rem;\n}\n\n.section-title:hover {\n  background-color: var(--color-2-hover);\n}\n\n.section-title:active {\n  background-color: var(--color-2-active);\n}\n\n.section-title h4 {\n  margin-right: auto;\n}\n\n.section-title .button {\n  height: 2rem;\n  width: 2rem;\n  background-color: transparent;\n}\n\n.section-title svg {\n  position: relative;\n  top: -0.05rem;\n  height: 1.5rem;\n  fill: hsl(0, 0%, 75%);\n}\n\n.section-title .button:hover svg{\n  fill: var(--color-4-hover);\n}\n\n.section-title .button:active svg{\n  fill: var(--color-4-active);\n}\n\n.sidebar li {\n  padding: 0.25rem 1rem;\n  color: hsl(0, 0%, 25%);\n  fill: hsl(0, 0%, 25%);\n  display: flex;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.sidebar li:last-child {\n  margin-bottom: 2rem;\n}\n\n.sidebar li:hover {\n  background-color: var(--color-2-hover);\n}\n\n.sidebar li.selected,\n.sidebar li:active {\n  background-color: var(--color-2-active);\n}\n\n.sidebar li > svg {\n  position: relative;\n  top: 0.1rem;\n  height: 1.25rem;\n}\n\n\n/* -------------------------------------------------- */\n/* Main --------------------------------------------- */\n/* -------------------------------------------------- */\n\n.main-container {\n  height: calc(100vh - var(--header-height));\n  display: flex;  \n}\n\n.main {\n  margin-left: var(--sidebar-width);\n  position: relative;\n  padding: 1.25rem 2rem;\n  flex: 1;\n  background-color: var(--color-1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: margin 0.5s;\n}\n.main.sidebar-hidden {\n  margin-left: 0;\n}\n\n#sidebarOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n  z-index: 9;\n}\n\n@media (max-width: 600px) {\n  .main {\n    margin-left: 0;\n  }\n\n  #sidebarOverlay {\n    visibility: visible;\n    opacity: 0.25;\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n  }\n\n  #sidebarOverlay.sidebar-hidden {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n  }\n}\n\n\n.main h3 {\n  color: hsl(0, 0%, 50%);\n  font-weight: 600;\n}\n\n#mainToday .cards {\n  max-width: 1024px ;\n}\n\n.cards > .container {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-row: repeat(auto-fill, minmax(250px, 1fr));\n  grid-auto-rows: auto;\n  gap: 1rem;\n}\n\n.card.add {\n  margin-top: 1rem;\n}\n\n.card.add h4 {\n  color: hsl(0, 0%, 50%);\n  font-weight: 500;\n}\n\n.card {\n  position: relative;\n  padding: 0.5rem 0.75rem 0.15rem 0.75rem;\n  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  user-select: none;  \n}\n\n.card:hover {\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\n}\n\n.card h4 {\n  margin-bottom: 0.4rem;\n  font-size: 1.1rem;\n}\n\n.card p {\n  color: hsl(0, 0%, 50%);\n  font-size: 0.9rem;\n}\n\n.card h4.completed,\n.card p.completed {\n  text-decoration: line-through;\n  color: hsl(0, 0%, 75%);\n}\n\n.card .buttons-container {\n  margin-top: auto;\n  padding-top: 1rem;\n  display: flex;\n  justify-content: end;\n}\n\n.card .button {\n  height: 2rem;\n  width: 2rem;\n  background-color: transparent;\n  border-radius: 1.35rem;  \n  opacity: 0;\n  transition: 0.25s;\n}\n\n.card:hover .button {\n  opacity: 1;\n  width: 2rem;\n  color: hsl(0, 0%, 50%);\n  white-space: nowrap;\n}\n\n.card:hover .button:hover {\n  background-color: var(--color-1-hover);\n  width: auto;\n  padding: 0 0.75rem;  \n}\n\n.card:hover .button:hover:after {\n  margin: 0.2rem\n}\n\n.card:hover .button:hover.duedate:after {\n  content: 'Due Date & Time';\n}\n\n.card:hover .button:hover.list:after {\n  content: 'List';\n}\n\n.card:hover .button:hover.priority:after {\n  content: 'Set Priority';\n}\n\n.card:hover .button:hover.delete {\n  color: red;\n}\n\n.card:hover .button:hover.delete:after {\n  content: 'Delete Task';\n}\n\n.card:hover .button:active {\n  background-color: var(--color-1-active);\n}\n\n.card .button.done {\n  position: absolute;\n  top: -0.65rem;\n  left: -0.65rem;\n  height: 1.35rem;\n  width: 1.35rem;\n  background-color: white;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card .button.done:hover {\n  width: 1.35rem;\n  padding: 0;  \n  background: white;\n}\n\n.card .button.done svg {\n  position: absolute;\n  height: 1.5rem;\n  fill: var(--color-4);\n}\n\n.card:hover .button.done:hover svg {\n  fill: var(--color-4-hover);\n}\n\n.card svg {\n  height: 1.25rem;\n  fill: hsl(0, 0%, 75%);\n}\n\n.card:hover .button:hover svg {\n  fill: hsl(0, 0%, 50%);\n}\n\n.card:hover .button.delete:hover svg {\n  fill: red;\n}\n\n/* -------------------------------------------------- */\n/* Card Overlay ------------------------------------- */\n/* -------------------------------------------------- */\n\n#addTaskOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n}\n\n#addTaskOverlay.visibility-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n}\n\n#addTaskOverlay .wrapper {\n  width: 100%;\n  max-width: 1280px;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n#addTaskOverlay .card {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\n  user-select: auto;\n}\n\n#addTaskOverlay .card .button {\n  opacity: 1;\n}\n\n#addTaskOverlay .submit-container {\n  align-self: end;\n  margin-top: 0.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n\n#addTaskOverlay .submit-container .button {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.9rem;\n}\n\n#buttonCancelAddTask {\n  background-color: var(--color-2);\n  color: dimgrey;\n}\n\n#buttonCancelAddTask:hover {\n  background-color: var(--color-2-hover);\n}\n\n#buttonCancelAddTask:active {\n  background-color: var(--color-2-active);\n}\n\n#buttonAddTask {\n  background-color: var(--color-4);\n  color: white;\n  font-weight: 600;\n}\n\n#buttonAddTask:hover {\n  background-color: var(--color-4-hover);\n}\n\n#buttonAddTask:active {\n  background-color: var(--color-4-active);\n}\n\n#inputTaskTitle,\n#inputTaskDescription {\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n  border-radius: 0.5rem;\n}\n\n#inputTaskTitle:focus,\n#inputTaskDescription:focus {\n  background-color: var(--color-1-hover);\n}\n\n#inputTaskTitle {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n#inputTaskDescription {\n  font-size: 0.9rem;\n  resize: none;  \n  overflow: hidden;\n  height: 75px;\n}\n\n/* -------------------------------------------------- */\n/* Load Overlay ------------------------------------- */\n/* -------------------------------------------------- */\n\n#loadOverlay {\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.1s ease 0.25s, visibility 0s ease 0.35s;\n}"],"sourceRoot":""}]);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DO0FBQ3pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFNBQVMsT0FBTyxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxRQUFRLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxNQUFNLE9BQU8sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLGVBQWUsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxRQUFRLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVks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QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWNvbG9yLTE6IHdoaXRlO1xuICAtLWNvbG9yLTEtaG92ZXI6IGhzbCgwLCAwJSwgOTclKTtcbiAgLS1jb2xvci0xLWFjdGl2ZTogaHNsKDAsIDAlLCA5NCUpOztcbiAgLS1jb2xvci0yOiBoc2woMCwgMCUsIDk4JSk7XG4gIC0tY29sb3ItMi1ob3ZlcjogaHNsKDAsIDAlLCA5NSUpO1xuICAtLWNvbG9yLTItYWN0aXZlOiBoc2woMCwgMCUsIDkyJSk7XG4gIC0tY29sb3ItMzogcmdiKDE1OCwgMjEwLCAxOTgpO1xuICAtLWNvbG9yLTMtaG92ZXI6IGhzbCgxNjYsIDM3JSwgNjklKTtcbiAgLS1jb2xvci0zLWFjdGl2ZTogaHNsKDE2NiwgMzclLCA2NiUpO1xuICAtLWNvbG9yLTMtc2VsZWN0ZWQ6IGhzbCgxNjYsIDM3JSwgNjclKTtcbiAgLS1jb2xvci00OiByZ2IoODQsIDE4NiwgMTg1KTtcbiAgLS1jb2xvci00LWhvdmVyOiBoc2woMTc5LCA0MyUsIDUwJSk7XG4gIC0tY29sb3ItNC1hY3RpdmU6IGhzbCgxNzksIDQzJSwgNDclKTtcbiAgLS1oZWFkZXItaGVpZ2h0OiA0cmVtO1xuICAtLXNpZGViYXItd2lkdGg6IDI1MHB4O1xufVxuXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5LFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgXG5wLCB1bCwgb2wsIGxpLCBidXR0b24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsLCBvbCwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufSBcblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc3ZnIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIEhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiKDAsIDAsIDAsIDAuMTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5oZWFkZXIgKiB7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cztcbn1cblxuLmhlYWRlciBoMXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDAuM3JlbTtcbiAgcGFkZGluZzogMCA0LjVyZW0gMCAwLjI1cmVtO1xuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgdHJhbnNpdGlvbjogXG4gICAgd2lkdGggMC41cyBlYXNlIDBzLCBcbiAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXG4gICAgb3BhY2l0eSAwLjVzIGVhc2UgMHMsIFxuICAgIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZWFkZXIgaDF7XG4gICAgd2lkdGg6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBcbiAgICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXG4gICAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXG4gICAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXG4gICAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMC41cztcbiAgfVxufVxuXG4uc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMXJlbSAwIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zZWFyY2gtYm94IGlucHV0IHtcbiAgICBtYXJnaW46IDAuMjVyZW1cbiAgfVxufVxuXG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcntcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGdyZXk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzICsgc3ZnIHtcbiAgZmlsbDogZ3JleTtcbn1cblxuLnNlYXJjaC1ib3ggc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwLjc1cmVtO1xuICBoZWlnaHQ6IDEuNzVyZW07XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWFkZXIgLmJ1dHRvbiB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xufVxuXG4uaGVhZGVyIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcbn1cblxuLmhlYWRlciAuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcbn1cblxuLmJ1dHRvbiBzdmcge1xuICBoZWlnaHQ6IDEuNzVyZW07XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4jYnV0dG9uU2lkZWJhciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbiNidXR0b25Vc2VyIHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRlciAuYnV0dG9uLFxuICAjYnV0dG9uU2lkZWJhcixcbiAgI2J1dHRvblVzZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNidXR0b25Ob3RpZmljYXRpb24uc2VhcmNoQm94LWZvY3VzZWQsXG4gICNidXR0b25TZXR0aW5ncy5zZWFyY2hCb3gtZm9jdXNlZCxcbiAgI2J1dHRvblVzZXIuc2VhcmNoQm94LWZvY3VzZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuI2J1dHRvblVzZXIgaW1nIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA4MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBTaWRlYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XG59XG5cbi5zaWRlYmFyLnNpZGViYXItaGlkZGVuIHtcbiAgbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcbn1cblxuLnNpZGViYXIgaDQge1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5zaWRlYmFyIHAge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC43NXJlbSAwO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbSAwLjI1cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLnNlY3Rpb24tdGl0bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcbn1cblxuLnNlY3Rpb24tdGl0bGU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VjdGlvbi10aXRsZSBzdmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTAuMDVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XG59XG5cbi5zZWN0aW9uLXRpdGxlIC5idXR0b246aG92ZXIgc3Zne1xuICBmaWxsOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcbn1cblxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjphY3RpdmUgc3Zne1xuICBmaWxsOiB2YXIoLS1jb2xvci00LWFjdGl2ZSk7XG59XG5cbi5zaWRlYmFyIGxpIHtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xuICBmaWxsOiBoc2woMCwgMCUsIDI1JSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5zaWRlYmFyIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uc2lkZWJhciBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xufVxuXG4uc2lkZWJhciBsaS5zZWxlY3RlZCxcbi5zaWRlYmFyIGxpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcbn1cblxuLnNpZGViYXIgbGkgPiBzdmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC4xcmVtO1xuICBoZWlnaHQ6IDEuMjVyZW07XG59XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIE1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gIGRpc3BsYXk6IGZsZXg7ICBcbn1cblxuLm1haW4ge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXM7XG59XG4ubWFpbi5zaWRlYmFyLWhpZGRlbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4jc2lkZWJhck92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XG4gIHotaW5kZXg6IDk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAjc2lkZWJhck92ZXJsYXkge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcbiAgfVxuXG4gICNzaWRlYmFyT3ZlcmxheS5zaWRlYmFyLWhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XG4gIH1cbn1cblxuXG4ubWFpbiBoMyB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNtYWluVG9kYXkgLmNhcmRzIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHggO1xufVxuXG4uY2FyZHMgPiAuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3c6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICBnYXA6IDFyZW07XG59XG5cbi5jYXJkLmFkZCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jYXJkLmFkZCBoNCB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbSAwLjE1cmVtIDAuNzVyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyZXksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHVzZXItc2VsZWN0OiBub25lOyAgXG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmQgaDQge1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uY2FyZCBwIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5jYXJkIGg0LmNvbXBsZXRlZCxcbi5jYXJkIHAuY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDc1JSk7XG59XG5cbi5jYXJkIC5idXR0b25zLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmNhcmQgLmJ1dHRvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxLjM1cmVtOyAgXG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuMjVzO1xufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDJyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jYXJkOmhvdmVyIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWhvdmVyKTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAgMC43NXJlbTsgIFxufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyOmFmdGVyIHtcbiAgbWFyZ2luOiAwLjJyZW1cbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3Zlci5kdWVkYXRlOmFmdGVyIHtcbiAgY29udGVudDogJ0R1ZSBEYXRlICYgVGltZSc7XG59XG5cbi5jYXJkOmhvdmVyIC5idXR0b246aG92ZXIubGlzdDphZnRlciB7XG4gIGNvbnRlbnQ6ICdMaXN0Jztcbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3Zlci5wcmlvcml0eTphZnRlciB7XG4gIGNvbnRlbnQ6ICdTZXQgUHJpb3JpdHknO1xufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyLmRlbGV0ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5jYXJkOmhvdmVyIC5idXR0b246aG92ZXIuZGVsZXRlOmFmdGVyIHtcbiAgY29udGVudDogJ0RlbGV0ZSBUYXNrJztcbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWFjdGl2ZSk7XG59XG5cbi5jYXJkIC5idXR0b24uZG9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC42NXJlbTtcbiAgbGVmdDogLTAuNjVyZW07XG4gIGhlaWdodDogMS4zNXJlbTtcbiAgd2lkdGg6IDEuMzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZCAuYnV0dG9uLmRvbmU6aG92ZXIge1xuICB3aWR0aDogMS4zNXJlbTtcbiAgcGFkZGluZzogMDsgIFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhcmQgLmJ1dHRvbi5kb25lIHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGZpbGw6IHZhcigtLWNvbG9yLTQpO1xufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uLmRvbmU6aG92ZXIgc3ZnIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1ob3Zlcik7XG59XG5cbi5jYXJkIHN2ZyB7XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgZmlsbDogaHNsKDAsIDAlLCA3NSUpO1xufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyIHN2ZyB7XG4gIGZpbGw6IGhzbCgwLCAwJSwgNTAlKTtcbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbi5kZWxldGU6aG92ZXIgc3ZnIHtcbiAgZmlsbDogcmVkO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogQ2FyZCBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNhZGRUYXNrT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4yNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcbn1cblxuI2FkZFRhc2tPdmVybGF5LnZpc2liaWxpdHktaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcbn1cblxuI2FkZFRhc2tPdmVybGF5IC53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW46IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNhZGRUYXNrT3ZlcmxheSAuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tY29sb3ItNCksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xuICB1c2VyLXNlbGVjdDogYXV0bztcbn1cblxuI2FkZFRhc2tPdmVybGF5IC5jYXJkIC5idXR0b24ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4jYWRkVGFza092ZXJsYXkgLnN1Ym1pdC1jb250YWluZXIge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbiNhZGRUYXNrT3ZlcmxheSAuc3VibWl0LWNvbnRhaW5lciAuYnV0dG9uIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbiNidXR0b25DYW5jZWxBZGRUYXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIGNvbG9yOiBkaW1ncmV5O1xufVxuXG4jYnV0dG9uQ2FuY2VsQWRkVGFzazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xufVxuXG4jYnV0dG9uQ2FuY2VsQWRkVGFzazphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWFjdGl2ZSk7XG59XG5cbiNidXR0b25BZGRUYXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI2J1dHRvbkFkZFRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcbn1cblxuI2J1dHRvbkFkZFRhc2s6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xufVxuXG4jaW5wdXRUYXNrVGl0bGUsXG4jaW5wdXRUYXNrRGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4jaW5wdXRUYXNrVGl0bGU6Zm9jdXMsXG4jaW5wdXRUYXNrRGVzY3JpcHRpb246Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWhvdmVyKTtcbn1cblxuI2lucHV0VGFza1RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNpbnB1dFRhc2tEZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICByZXNpemU6IG5vbmU7ICBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogTG9hZCBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNsb2FkT3ZlcmxheSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4yNXMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjM1cztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCx1REFBdUQ7O0FBRXZEO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCOzs7O3lCQUl1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Y7Ozs7NkJBSXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCOztFQUVoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTs7O0lBR0UsU0FBUztFQUNYOztFQUVBOzs7SUFHRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQSx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELHVEQUF1RDs7O0FBR3ZEO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCwwQ0FBMEM7RUFDMUMsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7O0FBR0EsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCx1REFBdUQ7O0FBRXZEO0VBQ0UsMENBQTBDO0VBQzFDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLE9BQU87RUFDUCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwyREFBMkQ7RUFDM0QsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix3REFBd0Q7RUFDMUQ7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDJEQUEyRDtFQUM3RDtBQUNGOzs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHdEQUF3RDtFQUN4RCxvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsOERBQThEO0VBQzlELHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELHVEQUF1RDs7QUFFdkQ7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1FQUFtRTtFQUNuRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUEsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCx1REFBdUQ7O0FBRXZEO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw2REFBNkQ7QUFDL0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZmYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci0xOiB3aGl0ZTtcXG4gIC0tY29sb3ItMS1ob3ZlcjogaHNsKDAsIDAlLCA5NyUpO1xcbiAgLS1jb2xvci0xLWFjdGl2ZTogaHNsKDAsIDAlLCA5NCUpOztcXG4gIC0tY29sb3ItMjogaHNsKDAsIDAlLCA5OCUpO1xcbiAgLS1jb2xvci0yLWhvdmVyOiBoc2woMCwgMCUsIDk1JSk7XFxuICAtLWNvbG9yLTItYWN0aXZlOiBoc2woMCwgMCUsIDkyJSk7XFxuICAtLWNvbG9yLTM6IHJnYigxNTgsIDIxMCwgMTk4KTtcXG4gIC0tY29sb3ItMy1ob3ZlcjogaHNsKDE2NiwgMzclLCA2OSUpO1xcbiAgLS1jb2xvci0zLWFjdGl2ZTogaHNsKDE2NiwgMzclLCA2NiUpO1xcbiAgLS1jb2xvci0zLXNlbGVjdGVkOiBoc2woMTY2LCAzNyUsIDY3JSk7XFxuICAtLWNvbG9yLTQ6IHJnYig4NCwgMTg2LCAxODUpO1xcbiAgLS1jb2xvci00LWhvdmVyOiBoc2woMTc5LCA0MyUsIDUwJSk7XFxuICAtLWNvbG9yLTQtYWN0aXZlOiBoc2woMTc5LCA0MyUsIDQ3JSk7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDRyZW07XFxuICAtLXNpZGViYXItd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHksXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgXFxucCwgdWwsIG9sLCBsaSwgYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsLCBvbCwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59IFxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5zdmcge1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBIZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjE1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uaGVhZGVyICoge1xcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzO1xcbn1cXG5cXG4uaGVhZGVyIGgxe1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwIDQuNXJlbSAwIDAuMjVyZW07XFxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICB0cmFuc2l0aW9uOiBcXG4gICAgd2lkdGggMC41cyBlYXNlIDBzLCBcXG4gICAgcGFkZGluZyAwLjVzIGVhc2UgMHMsIFxcbiAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXFxuICAgIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5oZWFkZXIgaDF7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IFxcbiAgICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXFxuICAgICAgcGFkZGluZyAwLjVzIGVhc2UgMHMsIFxcbiAgICAgIG9wYWNpdHkgMC41cyBlYXNlIDBzLCBcXG4gICAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMC41cztcXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDFyZW0gMCAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcblxcbiAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuc2VhcmNoLWJveCBpbnB1dCB7XFxuICAgIG1hcmdpbjogMC4yNXJlbVxcbiAgfVxcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXJ7XFxuICBjb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMgKyBzdmcge1xcbiAgZmlsbDogZ3JleTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDAuNzVyZW07XFxuICBoZWlnaHQ6IDEuNzVyZW07XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGVyIC5idXR0b24ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmhlYWRlciAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xcbn1cXG5cXG4uaGVhZGVyIC5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcXG59XFxuXFxuLmJ1dHRvbiBzdmcge1xcbiAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNidXR0b25TaWRlYmFyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbiNidXR0b25Vc2VyIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGVhZGVyIC5idXR0b24sXFxuICAjYnV0dG9uU2lkZWJhcixcXG4gICNidXR0b25Vc2VyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2J1dHRvbk5vdGlmaWNhdGlvbi5zZWFyY2hCb3gtZm9jdXNlZCxcXG4gICNidXR0b25TZXR0aW5ncy5zZWFyY2hCb3gtZm9jdXNlZCxcXG4gICNidXR0b25Vc2VyLnNlYXJjaEJveC1mb2N1c2VkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuI2J1dHRvblVzZXIgaW1nIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIFNpZGViYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4uc2lkZWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC41cztcXG59XFxuXFxuLnNpZGViYXIuc2lkZWJhci1oaWRkZW4ge1xcbiAgbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXG59XFxuXFxuLnNpZGViYXIgaDQge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uc2lkZWJhciBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbSAwLjI1cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSBoNCB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIC5idXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUgc3ZnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTAuMDVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjpob3ZlciBzdmd7XFxuICBmaWxsOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjphY3RpdmUgc3Zne1xcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xcbn1cXG5cXG4uc2lkZWJhciBsaSB7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xcbiAgZmlsbDogaHNsKDAsIDAlLCAyNSUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uc2lkZWJhciBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5zaWRlYmFyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcbn1cXG5cXG4uc2lkZWJhciBsaS5zZWxlY3RlZCxcXG4uc2lkZWJhciBsaTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcbn1cXG5cXG4uc2lkZWJhciBsaSA+IHN2ZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuMXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBNYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXG59XFxuXFxuLm1haW4ge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXM7XFxufVxcbi5tYWluLnNpZGViYXItaGlkZGVuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4jc2lkZWJhck92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XFxuICB6LWluZGV4OiA5O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5tYWluIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAjc2lkZWJhck92ZXJsYXkge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcXG4gIH1cXG5cXG4gICNzaWRlYmFyT3ZlcmxheS5zaWRlYmFyLWhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XFxuICB9XFxufVxcblxcblxcbi5tYWluIGgzIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jbWFpblRvZGF5IC5jYXJkcyB7XFxuICBtYXgtd2lkdGg6IDEwMjRweCA7XFxufVxcblxcbi5jYXJkcyA+IC5jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvdzogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2FyZC5hZGQge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmNhcmQuYWRkIGg0IHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbSAwLjE1cmVtIDAuNzVyZW07XFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggbGlnaHRncmV5LCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7ICBcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNhcmQgaDQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5jYXJkIHAge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uY2FyZCBoNC5jb21wbGV0ZWQsXFxuLmNhcmQgcC5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA3NSUpO1xcbn1cXG5cXG4uY2FyZCAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uY2FyZCAuYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxLjM1cmVtOyAgXFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbi5jYXJkOmhvdmVyIC5idXR0b24ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jYXJkOmhvdmVyIC5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1ob3Zlcik7XFxuICB3aWR0aDogYXV0bztcXG4gIHBhZGRpbmc6IDAgMC43NXJlbTsgIFxcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyOmFmdGVyIHtcXG4gIG1hcmdpbjogMC4ycmVtXFxufVxcblxcbi5jYXJkOmhvdmVyIC5idXR0b246aG92ZXIuZHVlZGF0ZTphZnRlciB7XFxuICBjb250ZW50OiAnRHVlIERhdGUgJiBUaW1lJztcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3Zlci5saXN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdMaXN0JztcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3Zlci5wcmlvcml0eTphZnRlciB7XFxuICBjb250ZW50OiAnU2V0IFByaW9yaXR5JztcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3Zlci5kZWxldGUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3Zlci5kZWxldGU6YWZ0ZXIge1xcbiAgY29udGVudDogJ0RlbGV0ZSBUYXNrJztcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1hY3RpdmUpO1xcbn1cXG5cXG4uY2FyZCAuYnV0dG9uLmRvbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMC42NXJlbTtcXG4gIGxlZnQ6IC0wLjY1cmVtO1xcbiAgaGVpZ2h0OiAxLjM1cmVtO1xcbiAgd2lkdGg6IDEuMzVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIC5idXR0b24uZG9uZTpob3ZlciB7XFxuICB3aWR0aDogMS4zNXJlbTtcXG4gIHBhZGRpbmc6IDA7ICBcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uY2FyZCAuYnV0dG9uLmRvbmUgc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgZmlsbDogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5jYXJkOmhvdmVyIC5idXR0b24uZG9uZTpob3ZlciBzdmcge1xcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1ob3Zlcik7XFxufVxcblxcbi5jYXJkIHN2ZyB7XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XFxufVxcblxcbi5jYXJkOmhvdmVyIC5idXR0b246aG92ZXIgc3ZnIHtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNTAlKTtcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbi5kZWxldGU6aG92ZXIgc3ZnIHtcXG4gIGZpbGw6IHJlZDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBDYXJkIE92ZXJsYXkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2FkZFRhc2tPdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjI1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xcbn1cXG5cXG4jYWRkVGFza092ZXJsYXkudmlzaWJpbGl0eS1oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDAuMjVzO1xcbn1cXG5cXG4jYWRkVGFza092ZXJsYXkgLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyODBweDtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jYWRkVGFza092ZXJsYXkgLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1jb2xvci00KSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XFxuICB1c2VyLXNlbGVjdDogYXV0bztcXG59XFxuXFxuI2FkZFRhc2tPdmVybGF5IC5jYXJkIC5idXR0b24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2FkZFRhc2tPdmVybGF5IC5zdWJtaXQtY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZFRhc2tPdmVybGF5IC5zdWJtaXQtY29udGFpbmVyIC5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2J1dHRvbkNhbmNlbEFkZFRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBjb2xvcjogZGltZ3JleTtcXG59XFxuXFxuI2J1dHRvbkNhbmNlbEFkZFRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1ob3Zlcik7XFxufVxcblxcbiNidXR0b25DYW5jZWxBZGRUYXNrOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWFjdGl2ZSk7XFxufVxcblxcbiNidXR0b25BZGRUYXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2J1dHRvbkFkZFRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1ob3Zlcik7XFxufVxcblxcbiNidXR0b25BZGRUYXNrOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWFjdGl2ZSk7XFxufVxcblxcbiNpbnB1dFRhc2tUaXRsZSxcXG4jaW5wdXRUYXNrRGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuI2lucHV0VGFza1RpdGxlOmZvY3VzLFxcbiNpbnB1dFRhc2tEZXNjcmlwdGlvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWhvdmVyKTtcXG59XFxuXFxuI2lucHV0VGFza1RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2lucHV0VGFza0Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgcmVzaXplOiBub25lOyAgXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIExvYWQgT3ZlcmxheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jbG9hZE92ZXJsYXkge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlIDAuMjVzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4zNXM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=