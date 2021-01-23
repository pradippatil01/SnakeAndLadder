/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Snake and Ladder using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : SnakeAndLadder.js
*   @version   : v15.6.0
***************************************************************************/
console.log('code for Snake and Ladder');
const START_POSITION = 0;
const END_POSITION = 100;
const PLAYER_ONE = 1;
const PLAYER_TWO = 2;
var player1_Position = 0, player2_position = 0;
var diceRollCount = 0;
var diceValue;
playerChange = true;
var position = START_POSITION;
/**
 * dice roll and get diceValue
 */
var rollDice = () => {
    diceValue = Math.floor(Math.random() * 6) + 1;
    console.log('dice value', diceValue);
    diceRollCount++;
    return diceValue;
}
/** 
 *  checkplayer option and call ladder snake
 *  @param '0' for no play
 *  @param '1' for ladder
 *  @param '2' for snake
 */
checkPlayerOption = () => {
    let rollDiceValue = rollDice();
    let optionsCheckValue = Math.floor(Math.random() * 3);
    if (optionsCheckValue == 0) {
        console.log('no play');
        position = position + 0;
    }
    if (optionsCheckValue == 1) {
        position = position - rollDiceValue;
        console.log('after snake come ',position);
    }
    if (optionsCheckValue == 2) {
        position = position + rollDiceValue;
        console.log('after ladder come', position);
    }
    return position;
}

var twoPlayerPlay = () => {
    if (playerChange == true) {
        player1_Position = playRule();
        position = player2_position;
        playerChange = false;
        console.log("Player 1 Position:-  " + player1_Position);

    }
    if (!playerChange) {
        player2_position = playRule();
        position = player1_Position;
        playerChange = true;
        console.log("Player 2 Position:-  " + player2_position);
    }
}


var playRule = () => {
       checkPlayerOption()
    if (position < START_POSITION) {
        position = START_POSITION;
    }
    if (position > END_POSITION) {
        position = position - diceValue;
    }
    console.log('after snake and ladder real position ', position);
    return position;
}


var startGame = () => {
    while (position < END_POSITION) {
        twoPlayerPlay();
    }
    if (player1_Position == END_POSITION) {
        console.log("Player One Wins  " + player1_Position);
    }
    else if (player2_position == END_POSITION) {
        console.log("Player Two Wins  " + player2_position);
    }
    console.log('for winnig dice rolled ' + diceRollCount + ' times');
}

startGame();

