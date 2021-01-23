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
var position = START_POSITION;
/**
 * dice roll and get diceValue
 */
var rollDice = () => {
    diceValue = Math.floor(Math.random() * 6) + 1;
    diceRollCount++;
    return diceValue;
}
/** 
 * if ladder come logic 
 */
var ladder = (diceResult) => {
    position = position + diceResult;
    return position;
}
/** 
 * if snake come logic
 */
var snake = (diceResult) => {
    position = position - diceResult;
    return position;
}
/** 
 *  checkplayer option and call ladder snake
 *  @param '0' for no play
 *  @param '1' for ladder
 *  @param '2' for snake
 */
checkPlayerOption = () => {
    let option = Math.floor(Math.random() * 3);
    switch (option) {
        case 0:
            position = position + 0;
            console.log("no play");
            break;
        case 1:
            ladder(rollDice());
            console.log("woww ladder");
            break;
        case 2:
            snake(rollDice());
            console.log("oops snake ");
            break;

    }
}
/**
 * main method from execution start
 */
var startPlay = () => {
    while (position < END_POSITION) {
        checkPlayerOption();
        // check if position less than Start position(0)
        if (position < START_POSITION) {
            position = START_POSITION;
        }
        // check if position go above Win position(100)
        if (position > END_POSITION) {
            position = position - diceValue;
        }
        console.log('player position ', position);
    }
    // print how many time dice rolled
    console.log('for winnig dice rolled ' + diceRollCount + ' times');
}

startPlay();