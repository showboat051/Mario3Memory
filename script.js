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




// Flip Card
function flipCard() {
    this.classList.toggle('flip')
}

cards.forEach(card => card.addEventListener('click', flipCard));

// // Hide the card on click
// function hideCard () {
//    this.classList.style.display = "none";
  
// }