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
  height: 100%;
  max-width: 1024px ;
}

.cards > .container {
  /* margin-top: 1rem; */
  display: grid;
  grid-template-row: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
}

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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Pacifico&display=swap');\n\n:root {\n  --color-1: white;\n  --color-1-hover: hsl(0, 0%, 97%);\n  --color-1-active: hsl(0, 0%, 94%);;\n  --color-2: hsl(0, 0%, 98%);\n  --color-2-hover: hsl(0, 0%, 95%);\n  --color-2-active: hsl(0, 0%, 92%);\n  --color-3: rgb(158, 210, 198);\n  --color-3-hover: hsl(166, 37%, 69%);\n  --color-3-active: hsl(166, 37%, 66%);\n  --color-3-selected: hsl(166, 37%, 67%);\n  --color-4: rgb(84, 186, 185);\n  --color-4-hover: hsl(179, 43%, 50%);\n  --color-4-active: hsl(179, 43%, 47%);\n  --header-height: 4rem;\n  --sidebar-width: 250px;\n}\n\n*, *::after, *::before {\n  font-family: 'Open Sans', sans-serif;\n  box-sizing: border-box;\n}\n\nhtml, body,\nh1, h2, h3, h4, h5, h6, \np, ul, ol, li, button {\n  margin: 0;\n  padding: 0;\n}\n\nul, ol, li {\n  list-style: none;\n} \n\na {\n  text-decoration: none;\n}\n\nsvg {\n  vertical-align: top;\n}\n\n/* -------------------------------------------------- */\n/* Header ------------------------------------------- */\n/* -------------------------------------------------- */\n\n.header {\n  position: relative;\n  height: var(--header-height);\n  padding: 0.25rem;\n  background-color: var(--color-4);\n  color: white;\n  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  z-index: 100;\n}\n\n.header * {\n  transition: margin 0.25s;\n}\n\n.header h1{\n  position: relative;\n  bottom: 0.3rem;\n  padding: 0 4.5rem 0 0.25rem;\n  font-family: 'Pacifico', cursive;\n  font-weight: 200;\n  transition: \n    width 0.5s ease 0s, \n    padding 0.5s ease 0s, \n    opacity 0.5s ease 0s, \n    visibility 0s ease 0s;\n  visibility: visible;\n  opacity: 1;\n}\n\n@media (max-width: 600px) {\n  .header h1{\n    width: 0;\n    padding: 0;\n    visibility: hidden;\n    opacity: 0;\n    transition: \n      width 0.5s ease 0s, \n      padding 0.5s ease 0s, \n      opacity 0.5s ease 0s, \n      visibility 0s ease 0.5s;\n  }\n}\n\n.search-box {\n  position: relative;\n  flex: 1;\n  max-width: 500px;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n}\n\n.search-box input {\n  height: 3rem;\n  width: 100%;\n  padding: 0 1rem 0 3rem;\n  background-color: var(--color-3);\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 1.15rem;\n  font-weight: 400;\n\n  transition: 0.1s;\n}\n\n@media (max-width: 600px) {\n  .search-box input {\n    margin: 0.25rem\n  }\n}\n\n.search-box input::placeholder {\n  color: white;\n}\n\n.search-box input:focus::placeholder{\n  color: lightgrey;\n}\n\n.search-box input:focus {\n  background-color: white;\n  color: grey;\n  outline: none;\n}\n\n.search-box input:focus + svg {\n  fill: grey;\n}\n\n.search-box svg {\n  position: absolute;\n  left: 0.75rem;\n  height: 1.75rem;\n  fill: white;\n}\n\n.button {\n  border: none;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.header .button {\n  height: 3rem;\n  width: 3rem;\n  background-color: var(--color-4);\n}\n\n.header .button:hover {\n  background-color: var(--color-4-hover);\n}\n\n.header .button:active {\n  background-color: var(--color-4-active);\n}\n\n.button svg {\n  height: 1.75rem;\n  fill: white;\n}\n\n#buttonSidebar {\n  margin-left: 0.5rem;\n}\n\n#buttonUser {\n  margin: 0 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (max-width: 600px) {\n  .header .button,\n  #buttonSidebar,\n  #buttonUser {\n    margin: 0;\n  }\n\n  #buttonNotification.searchBox-focused,\n  #buttonSettings.searchBox-focused,\n  #buttonUser.searchBox-focused {\n    display: none;\n  }\n}\n\n#buttonUser img {\n  height: 80%;\n  width: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n/* -------------------------------------------------- */\n/* Sidebar ------------------------------------------ */\n/* -------------------------------------------------- */\n\n\n.sidebar {\n  position: absolute;\n  left: 0;\n  height: calc(100vh - var(--header-height));\n  width: var(--sidebar-width);\n  padding: 0.5rem;\n  background-color: var(--color-2);\n  z-index: 10;\n  transition: left 0.5s;\n}\n\n.sidebar.sidebar-hidden {\n  left: calc(-1 * var(--sidebar-width));\n}\n\n.sidebar h4 {\n  font-size: 1.25rem;\n}\n\n.sidebar p {\n  font-weight: 400;\n}\n\n.section-title {\n  display: flex;\n  align-items: center;\n  margin: 0.75rem 0;\n  padding: 0.25rem 0.5rem 0.25rem 1rem;\n  border-radius: 0.5rem;\n}\n\n.section-title:hover {\n  background-color: var(--color-2-hover);\n}\n\n.section-title:active {\n  background-color: var(--color-2-active);\n}\n\n.section-title h4 {\n  margin-right: auto;\n}\n\n.section-title .button {\n  height: 2rem;\n  width: 2rem;\n  background-color: transparent;\n}\n\n.section-title svg {\n  position: relative;\n  top: -0.05rem;\n  height: 1.5rem;\n  fill: hsl(0, 0%, 75%);\n}\n\n.section-title .button:hover svg{\n  fill: var(--color-4-hover);\n}\n\n.section-title .button:active svg{\n  fill: var(--color-4-active);\n}\n\n.sidebar li {\n  padding: 0.25rem 1rem;\n  color: hsl(0, 0%, 25%);\n  fill: hsl(0, 0%, 25%);\n  display: flex;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.sidebar li:last-child {\n  margin-bottom: 2rem;\n}\n\n.sidebar li:hover {\n  background-color: var(--color-2-hover);\n}\n\n.sidebar li.selected,\n.sidebar li:active {\n  background-color: var(--color-2-active);\n}\n\n.sidebar li > svg {\n  position: relative;\n  top: 0.1rem;\n  height: 1.25rem;\n}\n\n\n/* -------------------------------------------------- */\n/* Main --------------------------------------------- */\n/* -------------------------------------------------- */\n\n.main-container {\n  height: calc(100vh - var(--header-height));\n  display: flex;  \n}\n\n.main {\n  margin-left: var(--sidebar-width);\n  position: relative;\n  padding: 1.25rem 2rem;\n  flex: 1;\n  background-color: var(--color-1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: margin 0.5s;\n}\n\n.main.sidebar-hidden {\n  margin-left: 0;\n}\n\n#sidebarOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n  z-index: 9;\n}\n\n@media (max-width: 600px) {\n  .main {\n    margin-left: 0;\n  }\n\n  #sidebarOverlay {\n    visibility: visible;\n    opacity: 0.25;\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n  }\n\n  #sidebarOverlay.sidebar-hidden {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n  }\n}\n\n.main h3 {\n  color: hsl(0, 0%, 50%);\n  font-weight: 600;\n}\n\n#mainToday .cards {\n  height: 100%;\n  max-width: 1024px ;\n}\n\n.cards > .container {\n  /* margin-top: 1rem; */\n  display: grid;\n  grid-template-row: repeat(auto-fill, minmax(250px, 1fr));\n  grid-auto-rows: auto;\n}\n\n.card.add h4 {\n  color: hsl(0, 0%, 50%);\n  font-weight: 500;\n}\n\n.card {\n  position: relative;\n  margin-top: 1rem;\n  padding: 0.5rem 0.75rem 0.15rem 0.75rem;\n  background: var(--color-1);\n  box-shadow: 0 0 0 1px lightgrey, 2px 2px 2px rgb(0, 0, 0, 0.1);\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  user-select: none;  \n}\n\n.card:hover {\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\n}\n\n.card h4 {\n  margin-bottom: 0.4rem;\n  font-size: 1.1rem;\n}\n\n.card p {\n  color: hsl(0, 0%, 50%);\n  font-size: 0.9rem;\n}\n\n.card h4.completed,\n.card p.completed {\n  text-decoration: line-through;\n  color: hsl(0, 0%, 75%);\n}\n\n.card .buttons-container {\n  margin-top: auto;\n  padding-top: 1rem;\n  display: flex;\n  justify-content: end;\n}\n\n.card .button {\n  height: 2rem;\n  width: 2rem;\n  background-color: transparent;\n  border-radius: 1.35rem;  \n  opacity: 0;\n  transition: 0.25s;\n}\n\n.card:hover .button {\n  opacity: 1;\n  width: 2rem;\n  color: hsl(0, 0%, 50%);\n  white-space: nowrap;\n}\n\n.card:hover .button:hover {\n  background-color: var(--color-1-hover);\n  width: auto;\n  padding: 0 0.75rem;  \n}\n\n.card:hover .button:hover:after {\n  margin: 0.2rem\n}\n\n.card:hover .button:hover.duedate:after {\n  content: 'Due Date & Time';\n}\n\n.card:hover .button:hover.list:after {\n  content: 'List';\n}\n\n.card:hover .button:hover.priority:after {\n  content: 'Set Priority';\n}\n\n.card:hover .button:hover.delete {\n  color: red;\n}\n\n.card:hover .button:hover.delete:after {\n  content: 'Delete Task';\n}\n\n.card:hover .button:active {\n  background-color: var(--color-1-active);\n}\n\n.card .button.done {\n  position: absolute;\n  top: -0.65rem;\n  left: -0.65rem;\n  height: 1.35rem;\n  width: 1.35rem;\n  background-color: white;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card .button.done:hover {\n  width: 1.35rem;\n  padding: 0;  \n  background: white;\n}\n\n.card .button.done svg {\n  position: absolute;\n  height: 1.5rem;\n  fill: var(--color-4);\n}\n\n.card:hover .button.done:hover svg {\n  fill: var(--color-4-hover);\n}\n\n.card svg {\n  height: 1.25rem;\n  fill: hsl(0, 0%, 75%);\n}\n\n.card:hover .button:hover svg {\n  fill: hsl(0, 0%, 50%);\n}\n\n.card:hover .button.delete:hover svg {\n  fill: red;\n}\n\n/* -------------------------------------------------- */\n/* Card Overlay ------------------------------------- */\n/* -------------------------------------------------- */\n\n#addTaskOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0s;\n}\n\n#addTaskOverlay.visibility-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s ease 0s, visibility 0s ease 0.25s;\n}\n\n#addTaskOverlay .wrapper {\n  width: 100%;\n  max-width: 1280px;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n#addTaskOverlay .card {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0 0 1px var(--color-4), 2px 2px 2px rgb(0, 0, 0, 0.1);\n  user-select: auto;\n}\n\n#addTaskOverlay .card .button {\n  opacity: 1;\n}\n\n#addTaskOverlay .submit-container {\n  align-self: end;\n  margin-top: 0.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n\n#addTaskOverlay .submit-container .button {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.9rem;\n}\n\n#buttonCancelAddTask {\n  background-color: var(--color-2);\n  color: dimgrey;\n}\n\n#buttonCancelAddTask:hover {\n  background-color: var(--color-2-hover);\n}\n\n#buttonCancelAddTask:active {\n  background-color: var(--color-2-active);\n}\n\n#buttonAddTask {\n  background-color: var(--color-4);\n  color: white;\n  font-weight: 600;\n}\n\n#buttonAddTask:hover {\n  background-color: var(--color-4-hover);\n}\n\n#buttonAddTask:active {\n  background-color: var(--color-4-active);\n}\n\n#inputTaskTitle,\n#inputTaskDescription {\n  padding: 0.5rem;\n  border: none;\n  outline: none;\n  border-radius: 0.5rem;\n}\n\n#inputTaskTitle:focus,\n#inputTaskDescription:focus {\n  background-color: var(--color-1-hover);\n}\n\n#inputTaskTitle {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n#inputTaskDescription {\n  font-size: 0.9rem;\n  resize: none;  \n  overflow: hidden;\n  height: 75px;\n}\n\n/* -------------------------------------------------- */\n/* Load Overlay ------------------------------------- */\n/* -------------------------------------------------- */\n\n#loadOverlay {\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.1s ease 0.25s, visibility 0s ease 0.35s;\n}"],"sourceRoot":""}]);
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
/* harmony export */   getTasks: () => (/* binding */ getTasks)
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

const tasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a", 1690077703),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690081303),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 1690160503),
];

const getTasks = () => tasks;

const getTask = (index) => {
  return tasks.filter(task => task.index == index)[0];
}

const addTask = (title, description) => {
  tasks.push(new Task(title, description));
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
const addTaskOverlay = document.querySelector('#addTaskOverlay');
const addTaskCardWrapper = document.querySelector('#addTaskOverlay > .wrapper');
const addTaskCard = document.querySelector('.card.add');

// Add Task Elements
const inputTaskTitle = document.querySelector('#inputTaskTitle');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const buttonAddTask = document.querySelector('#buttonAddTask');
const buttonCancelAddTask = document.querySelector('#buttonCancelAddTask');

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

const completeCard = (e) => {
  const task = _todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTask(getCardIndex(e));
  task.toggleTaskCompletion();
  console.log(_todolist_js__WEBPACK_IMPORTED_MODULE_1__.getTasks()); // temp
  regenerateCardsContainer();
}

const generateCard = (task) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = task.index;

  const buttonDone = document.createElement('button');
  buttonDone.classList.add('button');
  buttonDone.classList.add('done');
  buttonDone.addEventListener('click', completeCard); 

  const dummy = document.createElement('div');
  buttonDone.appendChild(dummy);
  
  const h4 = document.createElement('h4');
  h4.textContent = task.title;
  
  const p = document.createElement('p');
  p.textContent = task.description;

  if (task.isCompleted) {
    h4.classList.add('completed');  
    p.classList.add('completed');    
    dummy.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>`;
  }
  else {   
    h4.classList.remove('completed');  
    p.classList.remove('completed');    
    dummy.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;
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

const clickAddTaskOverlay = (e) => {
  if (e.target === e.currentTarget) {
    hideAddTaskDialog();
  }
}

const hideAddTaskDialog = (e) => {
  addTaskOverlay.classList.add('visibility-hidden');
  addTaskOverlay.addEventListener('transitionend', () => {
    resetAddTaskDialog();
  }, {once: true});
}

const showAddTaskDialog = (e) => {  
  addTaskOverlay.classList.remove('visibility-hidden');  
}

const resetAddTaskDialog = () => {
  inputTaskTitle.value = '';
  inputTaskDescription.value = '';
}

const addTask = () => {
  const title = inputTaskTitle.value;
  const description = inputTaskDescription.value;

  _todolist_js__WEBPACK_IMPORTED_MODULE_1__.addTask(title, description);
  hideAddTaskDialog();
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
addTaskOverlay.addEventListener('click', clickAddTaskOverlay);
addTaskCardWrapper.addEventListener('click', clickAddTaskOverlay);
addTaskCard.addEventListener('click', showAddTaskDialog);
buttonCancelAddTask.addEventListener('click', hideAddTaskDialog);
buttonAddTask.addEventListener('click', addTask);
buttonSidebar.addEventListener('click', toggleSidebarVisibility);
sidebarOverlay.addEventListener('click', toggleSidebarVisibility, {once: true});
searchBox.addEventListener('focus', expandSearchBoxOnMobile, {once: true});


// Initial generation of cards container
regenerateCardsContainer();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DO0FBQ3pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsU0FBUyxPQUFPLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFFBQVEsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLGFBQWEsZUFBZSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFFBQVEsWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFB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V0FBVztBQUM5RSw4REFBOEQsV0FBVzs7O0FBR3pFO0FBQ0EsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWNvbG9yLTE6IHdoaXRlO1xuICAtLWNvbG9yLTEtaG92ZXI6IGhzbCgwLCAwJSwgOTclKTtcbiAgLS1jb2xvci0xLWFjdGl2ZTogaHNsKDAsIDAlLCA5NCUpOztcbiAgLS1jb2xvci0yOiBoc2woMCwgMCUsIDk4JSk7XG4gIC0tY29sb3ItMi1ob3ZlcjogaHNsKDAsIDAlLCA5NSUpO1xuICAtLWNvbG9yLTItYWN0aXZlOiBoc2woMCwgMCUsIDkyJSk7XG4gIC0tY29sb3ItMzogcmdiKDE1OCwgMjEwLCAxOTgpO1xuICAtLWNvbG9yLTMtaG92ZXI6IGhzbCgxNjYsIDM3JSwgNjklKTtcbiAgLS1jb2xvci0zLWFjdGl2ZTogaHNsKDE2NiwgMzclLCA2NiUpO1xuICAtLWNvbG9yLTMtc2VsZWN0ZWQ6IGhzbCgxNjYsIDM3JSwgNjclKTtcbiAgLS1jb2xvci00OiByZ2IoODQsIDE4NiwgMTg1KTtcbiAgLS1jb2xvci00LWhvdmVyOiBoc2woMTc5LCA0MyUsIDUwJSk7XG4gIC0tY29sb3ItNC1hY3RpdmU6IGhzbCgxNzksIDQzJSwgNDclKTtcbiAgLS1oZWFkZXItaGVpZ2h0OiA0cmVtO1xuICAtLXNpZGViYXItd2lkdGg6IDI1MHB4O1xufVxuXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5LFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgXG5wLCB1bCwgb2wsIGxpLCBidXR0b24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsLCBvbCwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufSBcblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc3ZnIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIEhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiKDAsIDAsIDAsIDAuMTUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5oZWFkZXIgKiB7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cztcbn1cblxuLmhlYWRlciBoMXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDAuM3JlbTtcbiAgcGFkZGluZzogMCA0LjVyZW0gMCAwLjI1cmVtO1xuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgdHJhbnNpdGlvbjogXG4gICAgd2lkdGggMC41cyBlYXNlIDBzLCBcbiAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXG4gICAgb3BhY2l0eSAwLjVzIGVhc2UgMHMsIFxuICAgIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZWFkZXIgaDF7XG4gICAgd2lkdGg6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBcbiAgICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXG4gICAgICBwYWRkaW5nIDAuNXMgZWFzZSAwcywgXG4gICAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXG4gICAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMC41cztcbiAgfVxufVxuXG4uc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMXJlbSAwIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zZWFyY2gtYm94IGlucHV0IHtcbiAgICBtYXJnaW46IDAuMjVyZW1cbiAgfVxufVxuXG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlcntcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGdyZXk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzICsgc3ZnIHtcbiAgZmlsbDogZ3JleTtcbn1cblxuLnNlYXJjaC1ib3ggc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwLjc1cmVtO1xuICBoZWlnaHQ6IDEuNzVyZW07XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWFkZXIgLmJ1dHRvbiB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xufVxuXG4uaGVhZGVyIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcbn1cblxuLmhlYWRlciAuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcbn1cblxuLmJ1dHRvbiBzdmcge1xuICBoZWlnaHQ6IDEuNzVyZW07XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4jYnV0dG9uU2lkZWJhciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbiNidXR0b25Vc2VyIHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRlciAuYnV0dG9uLFxuICAjYnV0dG9uU2lkZWJhcixcbiAgI2J1dHRvblVzZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNidXR0b25Ob3RpZmljYXRpb24uc2VhcmNoQm94LWZvY3VzZWQsXG4gICNidXR0b25TZXR0aW5ncy5zZWFyY2hCb3gtZm9jdXNlZCxcbiAgI2J1dHRvblVzZXIuc2VhcmNoQm94LWZvY3VzZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuI2J1dHRvblVzZXIgaW1nIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA4MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBTaWRlYmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XG59XG5cbi5zaWRlYmFyLnNpZGViYXItaGlkZGVuIHtcbiAgbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcbn1cblxuLnNpZGViYXIgaDQge1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5zaWRlYmFyIHAge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC43NXJlbSAwO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbSAwLjI1cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLnNlY3Rpb24tdGl0bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcbn1cblxuLnNlY3Rpb24tdGl0bGU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VjdGlvbi10aXRsZSBzdmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTAuMDVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XG59XG5cbi5zZWN0aW9uLXRpdGxlIC5idXR0b246aG92ZXIgc3Zne1xuICBmaWxsOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcbn1cblxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjphY3RpdmUgc3Zne1xuICBmaWxsOiB2YXIoLS1jb2xvci00LWFjdGl2ZSk7XG59XG5cbi5zaWRlYmFyIGxpIHtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xuICBmaWxsOiBoc2woMCwgMCUsIDI1JSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5zaWRlYmFyIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uc2lkZWJhciBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xufVxuXG4uc2lkZWJhciBsaS5zZWxlY3RlZCxcbi5zaWRlYmFyIGxpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcbn1cblxuLnNpZGViYXIgbGkgPiBzdmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC4xcmVtO1xuICBoZWlnaHQ6IDEuMjVyZW07XG59XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIE1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gIGRpc3BsYXk6IGZsZXg7ICBcbn1cblxuLm1haW4ge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXM7XG59XG5cbi5tYWluLnNpZGViYXItaGlkZGVuIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbiNzaWRlYmFyT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcbiAgei1pbmRleDogOTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICNzaWRlYmFyT3ZlcmxheSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZSAwcywgdmlzaWJpbGl0eSAwcyBlYXNlIDBzO1xuICB9XG5cbiAgI3NpZGViYXJPdmVybGF5LnNpZGViYXItaGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjI1cztcbiAgfVxufVxuXG4ubWFpbiBoMyB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNtYWluVG9kYXkgLmNhcmRzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMjRweCA7XG59XG5cbi5jYXJkcyA+IC5jb250YWluZXIge1xuICAvKiBtYXJnaW4tdG9wOiAxcmVtOyAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvdzogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG59XG5cbi5jYXJkLmFkZCBoNCB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbSAwLjE1cmVtIDAuNzVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTEpO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggbGlnaHRncmV5LCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB1c2VyLXNlbGVjdDogbm9uZTsgIFxufVxuXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1jb2xvci00KSwgMnB4IDJweCAycHggcmdiKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jYXJkIGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmNhcmQgcCB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uY2FyZCBoNC5jb21wbGV0ZWQsXG4uY2FyZCBwLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogaHNsKDAsIDAlLCA3NSUpO1xufVxuXG4uY2FyZCAuYnV0dG9ucy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5jYXJkIC5idXR0b24ge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMS4zNXJlbTsgIFxuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAycmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1ob3Zlcik7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAwIDAuNzVyZW07ICBcbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3ZlcjphZnRlciB7XG4gIG1hcmdpbjogMC4ycmVtXG59XG5cbi5jYXJkOmhvdmVyIC5idXR0b246aG92ZXIuZHVlZGF0ZTphZnRlciB7XG4gIGNvbnRlbnQ6ICdEdWUgRGF0ZSAmIFRpbWUnO1xufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyLmxpc3Q6YWZ0ZXIge1xuICBjb250ZW50OiAnTGlzdCc7XG59XG5cbi5jYXJkOmhvdmVyIC5idXR0b246aG92ZXIucHJpb3JpdHk6YWZ0ZXIge1xuICBjb250ZW50OiAnU2V0IFByaW9yaXR5Jztcbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3Zlci5kZWxldGUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyLmRlbGV0ZTphZnRlciB7XG4gIGNvbnRlbnQ6ICdEZWxldGUgVGFzayc7XG59XG5cbi5jYXJkOmhvdmVyIC5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1hY3RpdmUpO1xufVxuXG4uY2FyZCAuYnV0dG9uLmRvbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuNjVyZW07XG4gIGxlZnQ6IC0wLjY1cmVtO1xuICBoZWlnaHQ6IDEuMzVyZW07XG4gIHdpZHRoOiAxLjM1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHtcbiAgd2lkdGg6IDEuMzVyZW07XG4gIHBhZGRpbmc6IDA7ICBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jYXJkIC5idXR0b24uZG9uZSBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMS41cmVtO1xuICBmaWxsOiB2YXIoLS1jb2xvci00KTtcbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbi5kb25lOmhvdmVyIHN2ZyB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xufVxuXG4uY2FyZCBzdmcge1xuICBoZWlnaHQ6IDEuMjVyZW07XG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcbn1cblxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3ZlciBzdmcge1xuICBmaWxsOiBoc2woMCwgMCUsIDUwJSk7XG59XG5cbi5jYXJkOmhvdmVyIC5idXR0b24uZGVsZXRlOmhvdmVyIHN2ZyB7XG4gIGZpbGw6IHJlZDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIENhcmQgT3ZlcmxheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jYWRkVGFza092ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XG59XG5cbiNhZGRUYXNrT3ZlcmxheS52aXNpYmlsaXR5LWhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XG59XG5cbiNhZGRUYXNrT3ZlcmxheSAud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jYWRkVGFza092ZXJsYXkgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcbiAgdXNlci1zZWxlY3Q6IGF1dG87XG59XG5cbiNhZGRUYXNrT3ZlcmxheSAuY2FyZCAuYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2FkZFRhc2tPdmVybGF5IC5zdWJtaXQtY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG4jYWRkVGFza092ZXJsYXkgLnN1Ym1pdC1jb250YWluZXIgLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4jYnV0dG9uQ2FuY2VsQWRkVGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xuICBjb2xvcjogZGltZ3JleTtcbn1cblxuI2J1dHRvbkNhbmNlbEFkZFRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcbn1cblxuI2J1dHRvbkNhbmNlbEFkZFRhc2s6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xufVxuXG4jYnV0dG9uQWRkVGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNidXR0b25BZGRUYXNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNC1ob3Zlcik7XG59XG5cbiNidXR0b25BZGRUYXNrOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcbn1cblxuI2lucHV0VGFza1RpdGxlLFxuI2lucHV0VGFza0Rlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuI2lucHV0VGFza1RpdGxlOmZvY3VzLFxuI2lucHV0VGFza0Rlc2NyaXB0aW9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMS1ob3Zlcik7XG59XG5cbiNpbnB1dFRhc2tUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jaW5wdXRUYXNrRGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcmVzaXplOiBub25lOyAgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNzVweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIExvYWQgT3ZlcmxheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jbG9hZE92ZXJsYXkge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlIDAuMjVzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4zNXM7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3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bEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUEsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCx1REFBdUQ7O0FBRXZEO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw2REFBNkQ7QUFDL0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZmYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci0xOiB3aGl0ZTtcXG4gIC0tY29sb3ItMS1ob3ZlcjogaHNsKDAsIDAlLCA5NyUpO1xcbiAgLS1jb2xvci0xLWFjdGl2ZTogaHNsKDAsIDAlLCA5NCUpOztcXG4gIC0tY29sb3ItMjogaHNsKDAsIDAlLCA5OCUpO1xcbiAgLS1jb2xvci0yLWhvdmVyOiBoc2woMCwgMCUsIDk1JSk7XFxuICAtLWNvbG9yLTItYWN0aXZlOiBoc2woMCwgMCUsIDkyJSk7XFxuICAtLWNvbG9yLTM6IHJnYigxNTgsIDIxMCwgMTk4KTtcXG4gIC0tY29sb3ItMy1ob3ZlcjogaHNsKDE2NiwgMzclLCA2OSUpO1xcbiAgLS1jb2xvci0zLWFjdGl2ZTogaHNsKDE2NiwgMzclLCA2NiUpO1xcbiAgLS1jb2xvci0zLXNlbGVjdGVkOiBoc2woMTY2LCAzNyUsIDY3JSk7XFxuICAtLWNvbG9yLTQ6IHJnYig4NCwgMTg2LCAxODUpO1xcbiAgLS1jb2xvci00LWhvdmVyOiBoc2woMTc5LCA0MyUsIDUwJSk7XFxuICAtLWNvbG9yLTQtYWN0aXZlOiBoc2woMTc5LCA0MyUsIDQ3JSk7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDRyZW07XFxuICAtLXNpZGViYXItd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHksXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgXFxucCwgdWwsIG9sLCBsaSwgYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsLCBvbCwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59IFxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5zdmcge1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBIZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjE1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uaGVhZGVyICoge1xcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzO1xcbn1cXG5cXG4uaGVhZGVyIGgxe1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwIDQuNXJlbSAwIDAuMjVyZW07XFxuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICB0cmFuc2l0aW9uOiBcXG4gICAgd2lkdGggMC41cyBlYXNlIDBzLCBcXG4gICAgcGFkZGluZyAwLjVzIGVhc2UgMHMsIFxcbiAgICBvcGFjaXR5IDAuNXMgZWFzZSAwcywgXFxuICAgIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5oZWFkZXIgaDF7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IFxcbiAgICAgIHdpZHRoIDAuNXMgZWFzZSAwcywgXFxuICAgICAgcGFkZGluZyAwLjVzIGVhc2UgMHMsIFxcbiAgICAgIG9wYWNpdHkgMC41cyBlYXNlIDBzLCBcXG4gICAgICB2aXNpYmlsaXR5IDBzIGVhc2UgMC41cztcXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDFyZW0gMCAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcblxcbiAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuc2VhcmNoLWJveCBpbnB1dCB7XFxuICAgIG1hcmdpbjogMC4yNXJlbVxcbiAgfVxcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXJ7XFxuICBjb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMgKyBzdmcge1xcbiAgZmlsbDogZ3JleTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDAuNzVyZW07XFxuICBoZWlnaHQ6IDEuNzVyZW07XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGVyIC5idXR0b24ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmhlYWRlciAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtaG92ZXIpO1xcbn1cXG5cXG4uaGVhZGVyIC5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcXG59XFxuXFxuLmJ1dHRvbiBzdmcge1xcbiAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNidXR0b25TaWRlYmFyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbiNidXR0b25Vc2VyIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGVhZGVyIC5idXR0b24sXFxuICAjYnV0dG9uU2lkZWJhcixcXG4gICNidXR0b25Vc2VyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2J1dHRvbk5vdGlmaWNhdGlvbi5zZWFyY2hCb3gtZm9jdXNlZCxcXG4gICNidXR0b25TZXR0aW5ncy5zZWFyY2hCb3gtZm9jdXNlZCxcXG4gICNidXR0b25Vc2VyLnNlYXJjaEJveC1mb2N1c2VkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuI2J1dHRvblVzZXIgaW1nIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIFNpZGViYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4uc2lkZWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC41cztcXG59XFxuXFxuLnNpZGViYXIuc2lkZWJhci1oaWRkZW4ge1xcbiAgbGVmdDogY2FsYygtMSAqIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXG59XFxuXFxuLnNpZGViYXIgaDQge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uc2lkZWJhciBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjc1cmVtIDA7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbSAwLjI1cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSBoNCB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIC5idXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUgc3ZnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTAuMDVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjpob3ZlciBzdmd7XFxuICBmaWxsOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUgLmJ1dHRvbjphY3RpdmUgc3Zne1xcbiAgZmlsbDogdmFyKC0tY29sb3ItNC1hY3RpdmUpO1xcbn1cXG5cXG4uc2lkZWJhciBsaSB7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xcbiAgZmlsbDogaHNsKDAsIDAlLCAyNSUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uc2lkZWJhciBsaTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5zaWRlYmFyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItaG92ZXIpO1xcbn1cXG5cXG4uc2lkZWJhciBsaS5zZWxlY3RlZCxcXG4uc2lkZWJhciBsaTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMi1hY3RpdmUpO1xcbn1cXG5cXG4uc2lkZWJhciBsaSA+IHN2ZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuMXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBNYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXG59XFxuXFxuLm1haW4ge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNXM7XFxufVxcblxcbi5tYWluLnNpZGViYXItaGlkZGVuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4jc2lkZWJhck92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XFxuICB6LWluZGV4OiA5O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5tYWluIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAjc2lkZWJhck92ZXJsYXkge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UgMHMsIHZpc2liaWxpdHkgMHMgZWFzZSAwcztcXG4gIH1cXG5cXG4gICNzaWRlYmFyT3ZlcmxheS5zaWRlYmFyLWhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XFxuICB9XFxufVxcblxcbi5tYWluIGgzIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jbWFpblRvZGF5IC5jYXJkcyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMjRweCA7XFxufVxcblxcbi5jYXJkcyA+IC5jb250YWluZXIge1xcbiAgLyogbWFyZ2luLXRvcDogMXJlbTsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvdzogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uY2FyZC5hZGQgaDQge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbSAwLjE1cmVtIDAuNzVyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCBsaWdodGdyZXksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgIFxcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tY29sb3ItNCksIDJweCAycHggMnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uY2FyZCBoNCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmNhcmQgcCB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5jYXJkIGg0LmNvbXBsZXRlZCxcXG4uY2FyZCBwLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDc1JSk7XFxufVxcblxcbi5jYXJkIC5idXR0b25zLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5jYXJkIC5idXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEuMzVyZW07ICBcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgd2lkdGg6IDJyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWhvdmVyKTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgcGFkZGluZzogMCAwLjc1cmVtOyAgXFxufVxcblxcbi5jYXJkOmhvdmVyIC5idXR0b246aG92ZXI6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwLjJyZW1cXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3Zlci5kdWVkYXRlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdEdWUgRGF0ZSAmIFRpbWUnO1xcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyLmxpc3Q6YWZ0ZXIge1xcbiAgY29udGVudDogJ0xpc3QnO1xcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyLnByaW9yaXR5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdTZXQgUHJpb3JpdHknO1xcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyLmRlbGV0ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uOmhvdmVyLmRlbGV0ZTphZnRlciB7XFxuICBjb250ZW50OiAnRGVsZXRlIFRhc2snO1xcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xLWFjdGl2ZSk7XFxufVxcblxcbi5jYXJkIC5idXR0b24uZG9uZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0wLjY1cmVtO1xcbiAgbGVmdDogLTAuNjVyZW07XFxuICBoZWlnaHQ6IDEuMzVyZW07XFxuICB3aWR0aDogMS4zNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgLmJ1dHRvbi5kb25lOmhvdmVyIHtcXG4gIHdpZHRoOiAxLjM1cmVtO1xcbiAgcGFkZGluZzogMDsgIFxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5jYXJkIC5idXR0b24uZG9uZSBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBmaWxsOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbi5kb25lOmhvdmVyIHN2ZyB7XFxuICBmaWxsOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcXG59XFxuXFxuLmNhcmQgc3ZnIHtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgNzUlKTtcXG59XFxuXFxuLmNhcmQ6aG92ZXIgLmJ1dHRvbjpob3ZlciBzdmcge1xcbiAgZmlsbDogaHNsKDAsIDAlLCA1MCUpO1xcbn1cXG5cXG4uY2FyZDpob3ZlciAuYnV0dG9uLmRlbGV0ZTpob3ZlciBzdmcge1xcbiAgZmlsbDogcmVkO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIENhcmQgT3ZlcmxheSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jYWRkVGFza092ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMHM7XFxufVxcblxcbiNhZGRUYXNrT3ZlcmxheS52aXNpYmlsaXR5LWhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlIDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UgMC4yNXM7XFxufVxcblxcbiNhZGRUYXNrT3ZlcmxheSAud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNhZGRUYXNrT3ZlcmxheSAuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWNvbG9yLTQpLCAycHggMnB4IDJweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbn1cXG5cXG4jYWRkVGFza092ZXJsYXkgLmNhcmQgLmJ1dHRvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jYWRkVGFza092ZXJsYXkgLnN1Ym1pdC1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkVGFza092ZXJsYXkgLnN1Ym1pdC1jb250YWluZXIgLmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4jYnV0dG9uQ2FuY2VsQWRkVGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGNvbG9yOiBkaW1ncmV5O1xcbn1cXG5cXG4jYnV0dG9uQ2FuY2VsQWRkVGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yLWhvdmVyKTtcXG59XFxuXFxuI2J1dHRvbkNhbmNlbEFkZFRhc2s6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTItYWN0aXZlKTtcXG59XFxuXFxuI2J1dHRvbkFkZFRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jYnV0dG9uQWRkVGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00LWhvdmVyKTtcXG59XFxuXFxuI2J1dHRvbkFkZFRhc2s6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQtYWN0aXZlKTtcXG59XFxuXFxuI2lucHV0VGFza1RpdGxlLFxcbiNpbnB1dFRhc2tEZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4jaW5wdXRUYXNrVGl0bGU6Zm9jdXMsXFxuI2lucHV0VGFza0Rlc2NyaXB0aW9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTEtaG92ZXIpO1xcbn1cXG5cXG4jaW5wdXRUYXNrVGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jaW5wdXRUYXNrRGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICByZXNpemU6IG5vbmU7ICBcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogTG9hZCBPdmVybGF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNsb2FkT3ZlcmxheSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4yNXMsIHZpc2liaWxpdHkgMHMgZWFzZSAwLjM1cztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgdG9nZ2xlVGFza0NvbXBsZXRpb24oKSB7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRoaXMuaXNDb21wbGV0ZWQgPyBmYWxzZSA6IHRydWU7XG4gIH1cbn1cblxuY29uc3QgdGFza3MgPSBbXG4gIG5ldyBUYXNrKFwiVGFzayAxXCIsIFwibG9yZW0gaXBzdW0gYmxhYmxhYmFsYmFsIGFzZnBhcyBsb3JlbSBpcHN1bSBibGFibGFiYWxiYWwgYXNmcGFzIHNhZCBhc2ZhbG9yZW0gaXBzdW0gYmxhYmxhYmFsYmFsIGFzZnBhcyBzYWQgYXNmYXNhZCBhc2Zhc2RhanBzYWogZnNmIGFcIiwgMTY5MDA3NzcwMyksXG4gIG5ldyBUYXNrKFwiVGFzayAyXCIsIFwibG9hcyBhcyByYXNkZ2FzZW0gaXBzdW0gYmxhYmxhYmFsYXNkIGFzZCBhbCBhc2ZwYXNqcHNhaiBmc2YgYVwiLCAxNjkwMDgxMzAzKSxcbiAgbmV3IFRhc2soXCJUYXNrIDNcIiwgXCJsb3Jhc2RnYSAgZ2VtIGlwc3VtIGJsIGFzZ2FzIGRnc2FkIGdhYmxhYmFsYmFsIGFzZnBhc2pwc2FqIGZzZiBhXCIsIDE2OTAxNjA1MDMpLFxuXTtcblxuY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrcztcblxuY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4ge1xuICByZXR1cm4gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pbmRleCA9PSBpbmRleClbMF07XG59XG5cbmNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIHRhc2tzLnB1c2gobmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uKSk7XG59XG5cbmV4cG9ydCB7XG4gIGdldFRhc2ssXG4gIGdldFRhc2tzLFxuICBhZGRUYXNrLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgdG9kb2xpc3QgZnJvbSAnLi90b2RvbGlzdC5qcyc7XG5cbi8vIEhlYWRlciBFbGVtZW50cyBcbmNvbnN0IGJ1dHRvblNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uU2lkZWJhcicpO1xuY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEJveCcpO1xuY29uc3QgYnV0dG9uTm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbk5vdGlmaWNhdGlvbicpO1xuY29uc3QgYnV0dG9uU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uU2V0dGluZ3MnKTtcbmNvbnN0IGJ1dHRvblVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uVXNlcicpO1xuXG4vLyBDYXJkIEVsZW1lbnRzXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbmNvbnN0IGNhcmRPbmdvaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzID4gLmNvbnRhaW5lci5vbmdvaW5nJyk7XG5jb25zdCBjYXJkQ29tcGxldGVkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzID4gLmNvbnRhaW5lci5jb21wbGV0ZWQnKTtcbmNvbnN0IGFkZFRhc2tPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2tPdmVybGF5Jyk7XG5jb25zdCBhZGRUYXNrQ2FyZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza092ZXJsYXkgPiAud3JhcHBlcicpO1xuY29uc3QgYWRkVGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC5hZGQnKTtcblxuLy8gQWRkIFRhc2sgRWxlbWVudHNcbmNvbnN0IGlucHV0VGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VGFza1RpdGxlJyk7XG5jb25zdCBpbnB1dFRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tEZXNjcmlwdGlvbicpO1xuY29uc3QgYnV0dG9uQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25BZGRUYXNrJyk7XG5jb25zdCBidXR0b25DYW5jZWxBZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbkNhbmNlbEFkZFRhc2snKTtcblxuLy8gU2lkZSBCYXIgRWxlbWVudHNcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3Qgc2lkZWJhck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhck92ZXJsYXknKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIENhcmRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5jb25zdCBmaWxsQ2FyZHNDb250YWluZXIgPSAoKSA9PiB7XG4gIHRvZG9saXN0LmdldFRhc2tzKCkuZm9yRWFjaChnZW5lcmF0ZUNhcmQpO1xufVxuXG5jb25zdCBjbGVhckNhcmRzQ29udGFpbmVyID0gKCkgPT4ge1xuICB3aGlsZSAoY2FyZE9uZ29pbmdDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjYXJkT25nb2luZ0NvbnRhaW5lci5yZW1vdmVDaGlsZChjYXJkT25nb2luZ0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgd2hpbGUgKGNhcmRDb21wbGV0ZWRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjYXJkQ29tcGxldGVkQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNhcmRDb21wbGV0ZWRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59XG5cbmNvbnN0IHJlZ2VuZXJhdGVDYXJkc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY2xlYXJDYXJkc0NvbnRhaW5lcigpO1xuICBmaWxsQ2FyZHNDb250YWluZXIoKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2FyZEluZGV4KGUpIHtcbiAgbGV0IGNhcmRJbmRleDtcbiAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpXG4gICAgICAuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICBpZiAoY2FyZC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgY2FyZEluZGV4ID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICAgICAgICB9O1xuICAgICAgfSk7XG4gIHJldHVybiBjYXJkSW5kZXg7XG59XG5cbmNvbnN0IGNvbXBsZXRlQ2FyZCA9IChlKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSB0b2RvbGlzdC5nZXRUYXNrKGdldENhcmRJbmRleChlKSk7XG4gIHRhc2sudG9nZ2xlVGFza0NvbXBsZXRpb24oKTtcbiAgY29uc29sZS5sb2codG9kb2xpc3QuZ2V0VGFza3MoKSk7IC8vIHRlbXBcbiAgcmVnZW5lcmF0ZUNhcmRzQ29udGFpbmVyKCk7XG59XG5cbmNvbnN0IGdlbmVyYXRlQ2FyZCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gIGNhcmQuZGF0YXNldC5pbmRleCA9IHRhc2suaW5kZXg7XG5cbiAgY29uc3QgYnV0dG9uRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25Eb25lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICBidXR0b25Eb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgYnV0dG9uRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBsZXRlQ2FyZCk7IFxuXG4gIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbkRvbmUuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICBcbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBoNC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIFxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICBpZiAodGFzay5pc0NvbXBsZXRlZCkge1xuICAgIGg0LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpOyAgXG4gICAgcC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTsgICAgXG4gICAgZHVtbXkub3V0ZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2hlY2stY2lyY2xlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEyIDIwQzcuNTkgMjAgNCAxNi40MSA0IDEyUzcuNTkgNCAxMiA0IDIwIDcuNTkgMjAgMTIgMTYuNDEgMjAgMTIgMjBNMTYuNTkgNy41OEwxMCAxNC4xN0w3LjQxIDExLjU5TDYgMTNMMTAgMTdMMTggOUwxNi41OSA3LjU4WlwiIC8+PC9zdmc+YDtcbiAgfVxuICBlbHNlIHsgICBcbiAgICBoNC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTsgIFxuICAgIHAuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7ICAgIFxuICAgIGR1bW15Lm91dGVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNpcmNsZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTEyLDIwQTgsOCAwIDAsMSA0LDEyQTgsOCAwIDAsMSAxMiw0QTgsOCAwIDAsMSAyMCwxMkE4LDggMCAwLDEgMTIsMjBNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgLz48L3N2Zz5gO1xuICB9XG5cbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgYnV0dG9uc0V0YyA9IFtcbiAgICB7Y2xhc3M6ICdkdWVkYXRlJywgc3ZnOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci1jbG9jazwvdGl0bGU+PHBhdGggZD1cIk0xNSwxM0gxNi41VjE1LjgyTDE4Ljk0LDE3LjIzTDE4LjE5LDE4LjUzTDE1LDE2LjY5VjEzTTE5LDhINVYxOUg5LjY3QzkuMjQsMTguMDkgOSwxNy4wNyA5LDE2QTcsNyAwIDAsMSAxNiw5QzE3LjA3LDkgMTguMDksOS4yNCAxOSw5LjY3VjhNNSwyMUMzLjg5LDIxIDMsMjAuMSAzLDE5VjVDMywzLjg5IDMuODksMyA1LDNINlYxSDhWM0gxNlYxSDE4VjNIMTlBMiwyIDAgMCwxIDIxLDVWMTEuMUMyMi4yNCwxMi4zNiAyMywxNC4wOSAyMywxNkE3LDcgMCAwLDEgMTYsMjNDMTQuMDksMjMgMTIuMzYsMjIuMjQgMTEuMSwyMUg1TTE2LDExLjE1QTQuODUsNC44NSAwIDAsMCAxMS4xNSwxNkMxMS4xNSwxOC42OCAxMy4zMiwyMC44NSAxNiwyMC44NUE0Ljg1LDQuODUgMCAwLDAgMjAuODUsMTZDMjAuODUsMTMuMzIgMTguNjgsMTEuMTUgMTYsMTEuMTVaXCIgLz48L3N2Zz5gfSxcbiAgICB7Y2xhc3M6ICdsaXN0Jywgc3ZnOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5mb2xkZXItb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0yMCwxOEg0VjhIMjBNMjAsNkgxMkwxMCw0SDRDMi44OSw0IDIsNC44OSAyLDZWMThBMiwyIDAgMCwwIDQsMjBIMjBBMiwyIDAgMCwwIDIyLDE4VjhDMjIsNi44OSAyMS4xLDYgMjAsNlpcIiAvPjwvc3ZnPmB9LFxuICAgIHtjbGFzczogJ3ByaW9yaXR5Jywgc3ZnOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5mbGFnLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTIuMzYsNkwxMi43Niw4SDE4VjE0SDE0LjY0TDE0LjI0LDEySDdWNkgxMi4zNk0xNCw0SDVWMjFIN1YxNEgxMi42TDEzLDE2SDIwVjZIMTQuNFwiIC8+PC9zdmc+YH0sXG4gICAge2NsYXNzOiAnZGVsZXRlJywgc3ZnOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5kZWxldGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlNOCw5SDE2VjE5SDhWOU0xNS41LDRMMTQuNSwzSDkuNUw4LjUsNEg1VjZIMTlWNEgxNS41WlwiIC8+PC9zdmc+YH0sXG4gIF1cblxuICBmb3IgKGxldCBidXR0b25FdGMgb2YgYnV0dG9uc0V0Yykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChidXR0b25FdGMuY2xhc3MpO1xuXG4gICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChkdW1teSlcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgXG4gICAgZHVtbXkub3V0ZXJIVE1MID0gYnV0dG9uRXRjLnN2ZztcbiAgfVxuXG4gIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uRG9uZSk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaDQpO1xuICBjYXJkLmFwcGVuZENoaWxkKHApO1xuICBjYXJkLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuXG4gIGlmICh0YXNrLmlzQ29tcGxldGVkKSB7XG4gICAgY2FyZENvbXBsZXRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfSBlbHNlIHtcbiAgICBjYXJkT25nb2luZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuLy8gQWRkIFRhc2sgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmNvbnN0IGF1dG9TaXplVGV4dEFyZWEgPSAoZSkgPT4ge1xuICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCI3NXB4XCI7XG4gIGUuY3VycmVudFRhcmdldC5zdHlsZS5oZWlnaHQgPSAoZS5jdXJyZW50VGFyZ2V0LnNjcm9sbEhlaWdodCkgKyBcInB4XCI7XG59XG5cbmNvbnN0IGNsaWNrQWRkVGFza092ZXJsYXkgPSAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xuICAgIGhpZGVBZGRUYXNrRGlhbG9nKCk7XG4gIH1cbn1cblxuY29uc3QgaGlkZUFkZFRhc2tEaWFsb2cgPSAoZSkgPT4ge1xuICBhZGRUYXNrT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5LWhpZGRlbicpO1xuICBhZGRUYXNrT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgIHJlc2V0QWRkVGFza0RpYWxvZygpO1xuICB9LCB7b25jZTogdHJ1ZX0pO1xufVxuXG5jb25zdCBzaG93QWRkVGFza0RpYWxvZyA9IChlKSA9PiB7ICBcbiAgYWRkVGFza092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eS1oaWRkZW4nKTsgIFxufVxuXG5jb25zdCByZXNldEFkZFRhc2tEaWFsb2cgPSAoKSA9PiB7XG4gIGlucHV0VGFza1RpdGxlLnZhbHVlID0gJyc7XG4gIGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG59XG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gaW5wdXRUYXNrVGl0bGUudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWU7XG5cbiAgdG9kb2xpc3QuYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICBoaWRlQWRkVGFza0RpYWxvZygpO1xuICByZWdlbmVyYXRlQ2FyZHNDb250YWluZXIoKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIFNpZGViYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5jb25zdCB0b2dnbGVTaWRlYmFyVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgaWYgKCFzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1oaWRkZW4nKSkge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oaWRkZW4nKTtcbiAgICBzaWRlYmFyT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWhpZGRlbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oaWRkZW4nKTsgXG4gIH1cbiAgZWxzZSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWhpZGRlbicpO1xuICAgIHNpZGViYXJPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItaGlkZGVuJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWhpZGRlbicpO1xuICAgIHNpZGViYXJPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHksIHtvbmNlOiB0cnVlfSk7ICAgXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIFNlYXJjaGJveCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5jb25zdCBleHBhbmRTZWFyY2hCb3hPbk1vYmlsZSA9ICgpID0+IHtcbiAgaWYgKCFidXR0b25Ob3RpZmljYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2hCb3gtZm9jdXNlZCcpKSB7XG4gICAgYnV0dG9uTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XG4gICAgYnV0dG9uU2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnc2VhcmNoQm94LWZvY3VzZWQnKTtcbiAgICBidXR0b25Vc2VyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJveC1mb2N1c2VkJyk7XG4gICAgc2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBleHBhbmRTZWFyY2hCb3hPbk1vYmlsZSwge29uY2U6IHRydWV9KTtcbiAgfVxuICBlbHNlIHtcbiAgICBidXR0b25Ob3RpZmljYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoQm94LWZvY3VzZWQnKTtcbiAgICBidXR0b25TZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hCb3gtZm9jdXNlZCcpO1xuICAgIGJ1dHRvblVzZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoQm94LWZvY3VzZWQnKTtcbiAgICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBleHBhbmRTZWFyY2hCb3hPbk1vYmlsZSwge29uY2U6IHRydWV9KTsgICAgXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbi8vIE90aGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5pbnB1dFRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGF1dG9TaXplVGV4dEFyZWEpO1xuYWRkVGFza092ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0FkZFRhc2tPdmVybGF5KTtcbmFkZFRhc2tDYXJkV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQWRkVGFza092ZXJsYXkpO1xuYWRkVGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWRkVGFza0RpYWxvZyk7XG5idXR0b25DYW5jZWxBZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUFkZFRhc2tEaWFsb2cpO1xuYnV0dG9uQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xuYnV0dG9uU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXJWaXNpYmlsaXR5KTtcbnNpZGViYXJPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhclZpc2liaWxpdHksIHtvbmNlOiB0cnVlfSk7XG5zZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBleHBhbmRTZWFyY2hCb3hPbk1vYmlsZSwge29uY2U6IHRydWV9KTtcblxuXG4vLyBJbml0aWFsIGdlbmVyYXRpb24gb2YgY2FyZHMgY29udGFpbmVyXG5yZWdlbmVyYXRlQ2FyZHNDb250YWluZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=