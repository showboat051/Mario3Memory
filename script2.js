//**********************UNIT RESOURCES************************************** */
const start = document.getElementById('startButton');
const gameSpace = document.getElementById('gameSpace'); 
// const gameBoard = document.getElementById('gameBoard'); 

var cardArray = [
    {
        name: 'fireFlower',
        img: 'images/fireFlower.png.jpg'
    },
    {
        name: 'mushroom',
        img: 'images/mushroom.jpg'
    },
    {
        name: 'star',
        img: 'images/Star.webp'
    },
    {
        name: 'blueFlower',
        img: 'images/blueFlower.jpg'
    },
    {
        name: 'SMB',
        img: 'images/SMBboxArt.jpg'
    },
    {
        name: 'SMB3',
        img: 'images/SMB3boxArt.jpg'
    }


];




// Start Game
function startGame() {

} // startGame()

makeGameBoard();



// Make gameboard
// function makeGameBoard() {
//    for (let i = 0; i < cardArray.length; i++) {
//         var card = document.createElement('img')
//         card.setAttribute('src', 'Assets/images/1up.jpg')
//         card.setAttribute('card-id', i)
//         // card.addEventListener('click', flipCard)
//         gameBoard.appendChild(card)
//         card.addEventListener('click', function(e) {
//             console.log("you clicked");
//         })
//    }

// } // makeGameBoard()