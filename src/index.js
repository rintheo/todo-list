import './style.css';
import * as todolist from './todolist.js';

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
  todolist.getTasks().forEach(generateCard);
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
  let scrollBottom = cardsActualContainer.scrollHeight - cardsActualContainer.scrollTop - cardsActualContainer.clientHeight;

  if (scrollTop > 0) {
    scrollTop =  scrollTop > 16 ? 16 : scrollTop;
    root.style.setProperty('--card-top-overflow-margin', `${scrollTop}px`);  
    cardsActualContainerTopOverflow.classList.add('overflowing');
  }
  else if (scrollTop === 0) {
    cardsActualContainerTopOverflow.classList.remove('overflowing');
  }

  if (scrollBottom > 0) {
    cardsActualContainerBottomOverflow.classList.add('overflowing');
  }
  else if (scrollBottom === 0) {
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
  const task = todolist.getTask(index);

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

    if (buttonEtc.class === 'duedate') {
      // button.addEventListener('click', setDueDate);
    }
    else if (buttonEtc.class === 'list') {
      // button.addEventListener('click', assignList);
    }
    else if (buttonEtc.class === 'priority') {
      // button.addEventListener('click', setPriority);
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

const deleteCard = (e) => {
  e.stopPropagation();
  const index = getCardIndex(e);

  cardCoordinates.setBefore();

  todolist.deleteTask(index);
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
    if (todolist.getTasks().some(task => task.index == focusedCard.dataset.index)) {    
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
  const selectedCards = document.querySelectorAll(`.card:not(.focused)[data-index="${focusedCard.dataset.index}"]`);
  selectedCards.forEach(selectedCard => {
    selectedCard.classList.remove('fade-out');
    selectedCard.classList.add('fade-in');
  });
  focusedCardOverlay.classList.add('visibility-hidden');
  focusedCard.classList.add('focus-out');
  focusedCard.addEventListener('animationend', () => {
    focusedCard.classList.remove('focus-out');
    focusedCard.classList.remove('focused');
    selectedCards.forEach(selectedCard => selectedCard.classList.remove('fade-in'));    
    addTaskCard.removeAttribute('data-index');
    resetFocusedCard();    
  }, {once: true});
}

const showFocusedCard = (e) => {
  const selectedCard = e.currentTarget;
  
  focusedCardOverlay.classList.remove('visibility-hidden');  
  if (selectedCard.hasAttribute('data-index')) {
    const index = selectedCard.getAttribute('data-index');
    const task = todolist.getTask(index);
    buttonFocusedCardSubmit.textContent = 'Save';
    focusedCard.dataset.index = index;
    inputTaskTitle.value = task.title;
    inputTaskDescription.value = task.description;
  }
  else {
    buttonFocusedCardSubmit.textContent = 'Add';
    focusedCard.dataset.index = Date.now();
    addTaskCard.dataset.index = focusedCard.dataset.index;
  }

  const upDistance = 
    (selectedCard.getBoundingClientRect().top + selectedCard.getBoundingClientRect().height / 2) - 
    (focusedCard.getBoundingClientRect().top + focusedCard.getBoundingClientRect().height / 2) ;
  root.style.setProperty('--move-up-distance', `${upDistance}px`);  
  
  selectedCard.classList.add('fade-out');
  focusedCard.classList.add('focus-in');
  focusedCard.classList.add('focused');
  focusedCard.addEventListener('animationend', () => {
    focusedCard.classList.remove('focus-in');
  }, {once: true});

  autoSizeTextArea();
}

const resetFocusedCard = () => {
  inputTaskTitle.value = '';
  inputTaskDescription.value = '';
  focusedCard.dataset.index = '';
}

const submitFocusedCard = () => {
  const title = inputTaskTitle.value;
  const description = inputTaskDescription.value;
  const index = focusedCard.dataset.index;

  if (todolist.getTasks().some(task => task.index == index)) {    
    todolist.updateTask(title, description, index);
  }
  else {
    todolist.addTask(title, description, index);
  }
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
inputTaskDescription.addEventListener('input', autoSizeTextArea);
cardsActualContainer.addEventListener('scroll', toggleCardsContainerOverflowGradient);
focusedCardOverlay.addEventListener('click', clickFocusedCardOverlay);
focusedCardWrapper.addEventListener('click', clickFocusedCardOverlay);
addTaskCard.addEventListener('click', showFocusedCard);
buttonFocusedCardDelete.addEventListener('click', deleteCard);
buttonFocusedCardDelete.addEventListener('click', hideFocusedCard);
buttonFocusedCardCancel.addEventListener('click', hideFocusedCard);
buttonFocusedCardSubmit.addEventListener('click', submitFocusedCard);
buttonSidebar.addEventListener('click', toggleSidebarVisibility);
sidebarOverlay.addEventListener('click', toggleSidebarVisibility, {once: true});
searchBox.addEventListener('focus', expandSearchBoxOnMobile, {once: true});



// Initial generation of cards container
regenerateCardsContainer();
setTimeout(() => {document.body.classList.remove('preload')}, 0);