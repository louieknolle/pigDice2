// Business Logic

// let newPlayer = new Player (3, "Erik");
// { playerNumber: 3, playerName: "Erik", ... : 0 }

// Right now we only have one constructor, the Player constructor. 
// We need a way to trakc the current active player. 
// We could potentially do this with a property (active = true/false)
// It may be better to abstract this property to a different object
   // Maybe we could have a Game object and constructor. 
   // The game could then track the current active player. 

function Player(playerNumber, playerName) {
  this.playerNumber = playerNumber;
  this.playerName = playerName;
  this.totalScore = 0;
  this.currentSum = 0;
  this.currentRoll = 0;
  // property?
}

function rollDice(){
  let diceRoll = Math.floor((Math.random() * 6) + 1);
  return diceRoll;
}

// Player.prototype = new dispatchEvent();
Player.prototype.takeTurn = function() {
  this.currentRoll = this.rollDice();
  this.currentSum = (this.currentRoll === 1) ? 0 : this.currentSum + this.currentRoll;
}
Player.prototype.hold = function() {
  this.totalScore = this.totalScore + this.currentSum;
  this.currentRoll = 0;
  this.currentSum = 0;
}
//Player.prototype.reset = function() {
//   this.totalScore = 0;
//   this.currentSum = 0;
//   this.currentRoll = 0;
// }



// UI Logic 
$(document).ready(function() {
  $('form#newPlayers').submit(function(event) {
    event.preventDefault();
    const player1Name = $('input#player1Name').val();
    const player2Name = $('input#player2Name').val();
    let player1 = new Player(1, player1Name);
    let player2 = new Player(2, player2Name);

    // player1.playerName = player1Name;
    // player2.playerName = player2Name;
    // console.log(player1);
    
    $('.start-menu').hide();
    $('.player-console').show();

    $('span#player1').html(player1Name); 
    $('span#player2').html(player2Name);

  });

  $('.player1Roll').click(function(event) {
    // player1.currentRoll = rollDice();
    // console.log(player1.currentRoll);
    player1.takeTurn();
    $('#dieRoll1').html(player1.currentRoll);
    
    $('#currentScore1').html(player1.currentSum);
    
  })
});


















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



