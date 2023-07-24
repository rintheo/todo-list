import * as todo from './todo.js';

// Header Elements 
const buttonSidebar = document.querySelector('#buttonSidebar');
const searchBox = document.querySelector('#searchBox');
const buttonNotification = document.querySelector('#buttonNotification');
const buttonSettings = document.querySelector('#buttonSettings');
const buttonUser = document.querySelector('#buttonUser');

// Card Elements
const main = document.querySelector('.main');
const cardsContainer = document.querySelector('.cards > .container');
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

const clearCardsContainer = () => {
  while (cardsContainer.firstElementChild) {
    cardsContainer.removeChild(cardsContainer.firstElementChild);
  }
}

const fillCardsContainer = () => {
  for (let task of todo.getTasks()) {
    generateCard(task);
  }
}

const regenerateCardsContainer = () => {
  clearCardsContainer();
  fillCardsContainer();
}

const generateCard = (task) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const buttonDone = document.createElement('button');
  buttonDone.classList.add('button');
  buttonDone.classList.add('done');

  const dummy = document.createElement('div');
  buttonDone.appendChild(dummy);
  
  dummy.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;

  const h4 = document.createElement('h4');
  h4.textContent = task.title;

  const p = document.createElement('p');
  p.textContent = task.description;

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
  cardsContainer.appendChild(card);
}

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

  todo.addTask(title, description);
  hideAddTaskDialog();
  regenerateCardsContainer();
}

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