Describe pigDice()

Test: Player 1 clicks "roll" button
Input: Click "roll" button
Output: Random dice roll # generated

Test: Generates random dice roll number
Input: Math.floor(Math.random() * 6) + 1;
Output: Random dice roll # generated

Test: If player rolls # > 1, that # is added to current score
Input: Dice roll # = 3;
Output: currentScore += 3;

Test: If player rolls # === 1, their turn is over and nothing is added to score. 
Input: Dice roll # = 1;
Output: currentScore = 3, totalScore = 3, other player's turn

Test: Repeat same steps for player 2
Input: Dice roll # > 1 || Dice roll # === 1;
Output: currentScore += dice roll # || currentScore = 0, lose turn

Test: Game ends when player reaches 100
Input: Player total score >= 100;
Output: "Winner" 

