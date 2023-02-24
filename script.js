//**********************UNIT RESOURCES************************************** */
const cards = document.querySelectorAll('.card');




// // BUTTON CLICKS
// for (var i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("click", function() {
//         console.log("clickeddd");
//     })
// }

// Flip Card
function flipCard() {
    this.classList.toggle('flip')
}

cards.forEach(card => card.addEventListener('click', flipCard));