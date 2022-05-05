// Business Logic

// let newPlayer = new Player (3, "Erik");
// { playerNumber: 3, playerName: "Erik", ... : 0 }

// Right now we only have one constructor, the Player constructor. 
// We need a way to trakc the current active player. 
// We could potentially do this with a property (active = true/false)
// It may be better to abstract this property to a different object
   // Maybe we could have a Game object and constructor. 
   // The game could then track the current active player. 

function Player(playerName) {
  this.playerNumber = 0;
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

Player.prototype.addCurrentSum = function() {
  if (this.currentRoll === 1) {
    return this.currentSum = 0;
  } else return this.currentSum += this.currentRoll;
}

Player.prototype.hold = function() {
  this.totalScore = this.totalScore + this.currentSum;
  this.currentRoll = 0;
  if (this.totalScore >= 100) {
    console.log(this.playerName + " Has Won!")
  };
}

//Player.prototype.reset = function() {
//   this.totalScore = 0;
//   this.currentSum = 0;
//   this.currentRoll = 0;
// }



// UI Logic 
$(document).ready(function() {
  const player1 = new Player();
  const player2 = new Player();

  $('form#newPlayers').submit(function(event) {
    event.preventDefault();
    const player1Name = $('input#player1Name').val();
    const player2Name = $('input#player2Name').val();

    player1.playerName = player1Name;
    player2.playerName = player2Name; 
    $('.start-menu').hide();
    $('.player1Box').show();

    $('span#player1Info').html(player1Name); 
    $('span#player2Info').html(player2Name);

  });

  $('#player1Roll').click(function(event) {
    player1.currentRoll = rollDice();
    $('#dieRoll1').html(player1.currentRoll);
    if (player1.currentRoll === 1) {
    $('.player1Box').toggle();
    $('.player2Box').toggle();
    $('#dieRoll1').html('');
    $('#currentScore1').html('');
    player1.currentRoll = 0;
    player1.currentSum = 0;
    } else {
    player1.addCurrentSum();
    $('#currentScore1').html(player1.currentSum);
    }
  })

  $('#player1Hold').click(function(event) {
    player1.hold();
    $('#totalScore1').html(player1.totalScore);
    $('.player1Box').toggle();
    $('.player2Box').toggle();
    $('#dieRoll1').html('');
    $('#currentScore1').html('');
    player1.currentRoll = 0;
    player1.currentSum = 0;
  })

  $('#player2Roll').click(function(event) {
    player2.currentRoll = rollDice();
    $('#dieRoll2').html(player2.currentRoll);
    if (player2.currentRoll === 1) {
    $('.player1Box').toggle();
    $('.player2Box').toggle();
    $('#dieRoll2').html('');
    $('#currentScore2').html('');
    player2.currentRoll = 0;
    player2.currentSum = 0;
    } else {
    player2.addCurrentSum();
    $('#currentScore2').html(player2.currentSum);
    }
  })

  $('#player2Hold').click(function(event) {
    player2.hold();
    $('#totalScore2').html(player2.totalScore);
    $('.player2Box').toggle();
    $('.player1Box').toggle();
    $('#dieRoll2').html('');
    $('#currentScore2').html('');
    player2.currentRoll = 0;
    player2.currentSum = 0;
    
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



