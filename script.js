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

// for(i = 0, i < cards.length, i++) {
    
// }


// Flip Card
function flipCard() {
    this.classList.toggle('flip')
}

cards.forEach(card => card.addEventListener('click', flipCard));