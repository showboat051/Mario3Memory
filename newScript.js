const cardsContainer = document.querySelector(".cards");
const cardNames = ["blueFlower", "fireFlower", "mushroom", "Star" ]
const cardNamesPickList = [ ...cardNames, ...cardNames];
const tileCount = cardNamesPickList.length;

// Game State
let revealedCount = 0;
let activeCard = null;
let awaitingEndOfMove = false;