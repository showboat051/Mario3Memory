//**********************UNIT RESOURCES************************************** */
const cards = document.querySelectorAll('.card');
const cardArray = [
   {
    name: 'flower',
    img: 'images/fireFlower.png.jpg'
   },
   {
    name: 'mushroom',
    img: 'images/mushroom.jpg'
   },
   {
    name: 'star',
    img: 'images/Star.webp'
   }
]

let firstCard , secondCard
let hasFlippedCard = false;




// Flip Card
function flipCard() {
    this.classList.add('flip')

    if(!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = true;
      return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
} // flip card()

cards.forEach(card => card.addEventListener('click', flipCard));

// Hide the card on click
function hideCard (value) {
   document.getElementById(value).style.display = "none";
  
}