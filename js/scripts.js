// Business Logic

const randomRoll = Math.floor(Math.random() * 6) + 1;

function Player(tonyPlayer, mikePlayer) {
  this.tonyPlayer = tonyPlayer; 
  this.mikePlayer = mikePlayer;
  this.currentPlayer;
  this.gameBegin = false; 
}
Player.prototype.switchCurrentPlayer = function() {
  if () {

  }
}


// alt object
// let player1 = '';
// let player2 = '';
// const throwDice = function() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// function Player(turn) {
//   this.roll = 0;
//   this.currentScore = 0;
//   this.totalScore = 0;
//   this.turn = turn;
//   this.playerName;
// }

// //player1or2.roll = throwdice();

// Player.prototype.rollOne = function() {
//   if (this.roll === 1) {
//     this.currentScore = 0;
//     // Change turn?
//   } else {
//     this.currentScore += this.roll;
//   }
// }

// Player.prototype.changeTurn = function() {

// }


// UI Logic 
$(document).ready(function() {
  
});

