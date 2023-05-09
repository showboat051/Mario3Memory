//**********************UNIT RESOURCES************************************** */
const start = document.getElementById('startButton');
const gameSpace = document.getElementById('gameSpace'); 
const gameBoard = document.getElementById('gameBoard'); 

var data = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"]
  ];




// Start Game
function startGame() {

    makeGameBoard();
} // startGame()




// Make gameboard
function makeGameBoard() {
    for (let i = 0; i < 9; i++) {
        let newDiv = document.createElement("div")
        gameSpace.appendChild(newDiv);
    }

} // makeGameBoard()