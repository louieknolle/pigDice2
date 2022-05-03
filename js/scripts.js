// Business Logic
function Player(playerNumber) {
  this.playerNumber = playerNumber;
  this.totalScore = 0;
  this.currentSum = 0;
  this.currentRoll = 0;
}

function Rolldice(){
  let diceRoll = Math.floor((Math.random() * 6) + 1);
  return diceRoll;
}

Player.prototype = new dispatchEvent();
Player.prototype.takeTurn = function() {
  this.currentRoll = this.rollDice();
  this.currentSum = (this.currentRoll === 1) ? 0 : this.currentSum + this.currentRoll;
}
Player.prototype.hold = function() {
  this.totalScore = this.total + this.turn;
  this.currentRoll = 0;
  this.currentSum = 0;
}
Player.prototype.reset = function() {
  this.totalScore = 0;
  this.currentSum = 0;
  this.currentRoll = 0;
}



//function Player(tonyPlayer, mikePlayer) {
  //this.tonyPlayer = tonyPlayer; 
  //this.mikePlayer = mikePlayer;
 // this.currentPlayer;
  //this.gameBegin = false; 
//
//Player.prototype.switchCurrentPlayer = function() {


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

