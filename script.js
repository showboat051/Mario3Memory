//**********************UNIT RESOURCES************************************** */
const cards = document.querySelectorAll('.card');




// BUTTON CLICKS
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        console.log("clickeddd");
    })
}